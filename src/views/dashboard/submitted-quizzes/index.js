import { useEffect, useState } from 'react';

// material-ui
// import { IconButton } from '@mui/material';

// Quizzes imports
import MainCard from 'ui-component/cards/MainCard';

import { useSelector, useDispatch } from 'react-redux';
import StyledTable from 'ui-component/table/StyledTable';
import { getSubmittedQuizzes } from 'store/actions/quizzesActions';
import { clearError, clearQuizzes } from 'store/types/quizzesTypes';
import { useNavigate } from 'react-router';
import moment from 'moment';
import SnackNotify from 'ui-component/notification/snackNotify';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { ArrowBackIosNewTwoTone } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { IconEye } from '@tabler/icons';
import { setCurrentQuiz } from 'store/types/utilTypes';

const tableColumns = [
    {
        key: 'quizName',
        label: 'Quiz Name',
        width: 250,
        align: 'left',
    },
    {
        label: 'Date of submission',
        width: 200,
        align: 'left',
        key: 'sentAt',
    },
    {
        key: 'actions',
        label: 'Actions',
        width: 200,
        align: 'right',
    },
];

const SubmittedQuizzes = () => {
    const [loading, setLoading] = useState(false);
    const [quizzes, setQuizzes] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const quizzesRed = useSelector((state) => state.quizzesState);
    const messageQuizzes = useSelector((state) => state?.quizzesState?.error);
    const student_id = useSelector((state) => state?.utilState?.student_id);

    const onQuizClick = (quiz) => {
        dispatch(setCurrentQuiz(quiz));
        navigate(`${quiz._id}`);
    };

    useEffect(() => {
        dispatch(getSubmittedQuizzes(student_id));
        return () => dispatch(clearQuizzes());
    }, [student_id, dispatch]);

    useEffect(() => {
        if (quizzesRed?.submittedQuizzes) {
            const quizzesSet = quizzesRed?.submittedQuizzes.map((quiz) => {
                return {
                    ...quiz,
                    number_of_questions: quiz?.questions?.length,
                    actions: (
                        <Tooltip title={'Check quiz'}>
                            <IconButton onClick={() => onQuizClick(quiz)}>
                                <IconEye />
                            </IconButton>
                        </Tooltip>
                    ),
                    sentAt: moment(quiz?.sentAt?.length ? quiz?.sentAt[0] : '').format('lll'),
                };
            });
            setQuizzes(quizzesSet || []);
        }
        setLoading(quizzesRed?.loading || false);

        // eslint-disable-next-line
    }, [quizzesRed, navigate, dispatch, loading]);

    return (
        <>
            <SnackNotify
                open={messageQuizzes?.message?.length > 0}
                onClose={() => dispatch(clearError())}
                autoHide={1000}
                isError={messageQuizzes?.status}
                message={messageQuizzes?.message}
            />
            <MainCard
                title='Submitted Quizzes'
                secondary={<CardSecondaryAction icon={<ArrowBackIosNewTwoTone />} title={'Back'} link={-1} />}>
                <StyledTable name={'quizzes'} data={{ rows: quizzes, columns: tableColumns }} loading={loading} />
            </MainCard>
        </>
    );
};

export default SubmittedQuizzes;
