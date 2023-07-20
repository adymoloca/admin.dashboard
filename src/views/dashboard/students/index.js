import { useEffect, useState } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { useSelector, useDispatch } from 'react-redux';
import StyledTable from 'ui-component/table/StyledTable';
import { getStudents } from 'store/actions/studentsActions';
import { clearError, clearStudents } from 'store/types/studentsTypes';
import { useNavigate } from 'react-router';
import SnackNotify from 'ui-component/notification/snackNotify';
import DeleteStudent from './studentsForm/deleteStudent';
import BlockStudent from './studentsForm/blockStudent';
import { IconFileReport } from '@tabler/icons';
import { IconButton, Tooltip } from '@mui/material';
import { setStudentId } from 'store/types/utilTypes';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const tableColumns = [
    {
        key: '_id',
        label: 'ID',
        width: 100,
        align: 'left',
    },
    {
        key: 'name',
        label: 'Name',
        width: 100,
        align: 'left',
    },
    {
        key: 'status',
        label: 'Status',
        width: 100,
        align: 'center',
    },
    {
        key: 'actions',
        label: 'Actions',
        width: 100,
        align: 'left',
    },
];

const Students = () => {
    const [loading, setLoading] = useState(false);
    const [students, setStudents] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const studentsRed = useSelector((state) => state.studentsState);
    const messageStudents = useSelector((state) => state?.studentsState?.error);

    const handleViewStudentQuizzes = (studentId) => {
        dispatch(setStudentId(studentId));
        navigate(`${studentId}/submitted-quizzes`);
    };

    useEffect(() => {
        dispatch(getStudents());
        return () => dispatch(clearStudents());
    }, [dispatch]);

    useEffect(() => {
        async function workObject() {
            const myData = await studentsRed?.students?.map((student) => {
                return {
                    ...student,
                    name: `${student?.firstName} ${student?.lastName}`,
                    status: student?.isBlocked ? 'BLOCKED' : 'ACTIVE',
                    actions: (
                        <>
                            <Tooltip title='Submitted Quizzes'>
                                <IconButton onClick={() => handleViewStudentQuizzes(student?._id)}>
                                    <IconFileReport />
                                </IconButton>
                            </Tooltip>
                            <BlockStudent
                                studentId={student._id}
                                loading={studentsRed?.loading}
                                isBlocked={student?.isBlocked}
                                studentName={`${student.firstName} ${student.lastName}`}
                            />
                            <DeleteStudent
                                studentId={student._id}
                                loading={studentsRed?.loading}
                                studentName={`${student.firstName} ${student.lastName}`}
                            />
                        </>
                    ),
                };
            });
            setStudents(myData);
        }
        workObject().then((res) => setLoading(res));

        // eslint-disable-next-line
    }, [studentsRed, navigate, dispatch, loading]);

    return (
        <>
            <SnackNotify
                open={messageStudents?.message?.length > 0}
                onClose={() => dispatch(clearError())}
                autoHide={1000}
                isError={messageStudents?.status}
                message={messageStudents?.message}
            />
            <MainCard title='Students'>
                <StyledTable name={'students'} data={{ rows: students, columns: tableColumns }} loading={loading} />
            </MainCard>
        </>
    );
};

export default Students;
