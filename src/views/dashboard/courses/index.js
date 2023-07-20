import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCourse, getCourses } from 'store/actions/coursesActions';
import { IconButton } from '@mui/material';
import { Edit, AddOutlined } from '@mui/icons-material';
import SnackNotify from 'ui-component/notification/snackNotify';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';
import MainCard from 'ui-component/cards/MainCard';
import StyledTable from 'ui-component/table/StyledTable';
import DeleteCourse from '../courses/courseForm/deleteCourse/index';
import { clearError, clearCourses } from 'store/types/coursesTypes';

const tableColumns = [
    {
        key: '_id',
        label: 'Id',
        width: 20,
        align: 'left',
    },
    {
        key: 'courseTitle',
        label: 'Title',
        width: 200,
        align: 'left',
    },
    {
        key: 'category',
        label: 'Category',
        width: 100,
        align: 'left',
    },
    {
        key: 'difficulty',
        label: 'Difficulty',
        width: 100,
        align: 'left',
    },
    {
        key: 'actions',
        label: 'Actions',
        width: 200,
        align: 'right',
    },
];

const Courses = () => {
    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const coursesRed = useSelector((state) => state.coursesState);
    const messageCourses = useSelector((state) => state?.coursesState?.error);

    useEffect(() => {
        dispatch(getCourses());
        return () => dispatch(clearCourses());
    }, [dispatch]);

    useEffect(() => {
        if (coursesRed?.courses) {
            const coursesSet = coursesRed?.courses.map((course) => {
                return {
                    ...course,
                    name: `${course.courseTitle}`,
                    actions: (
                        <>
                            <IconButton onClick={() => dispatch(getCourse(course._id, () => navigate('edit')))}>
                                <Edit />
                            </IconButton>
                            <DeleteCourse
                                courseId={course._id}
                                loading={coursesRed?.loading}
                                courseTitle={`${course.courseTitle}`}
                            />
                        </>
                    ),
                };
            });
            setCourses(coursesSet || []);
        }
        setLoading(coursesRed?.loading || false);
    }, [coursesRed, navigate, dispatch]);

    return (
        <>
            <SnackNotify
                open={messageCourses?.message?.length > 0}
                onClose={() => dispatch(clearError())}
                autoHide={3000}
                isError={messageCourses?.status}
                message={messageCourses?.message}
            />
            <MainCard
                title='Courses'
                secondary={<CardSecondaryAction icon={<AddOutlined />} title={'Add course'} link={'add'} />}>
                <StyledTable
                    name={'courses'}
                    data={{ rows: courses, columns: tableColumns }}
                    loading={loading}
                    pagination
                />
            </MainCard>
        </>
    );
};

export default Courses;
