import { useEffect, useState } from 'react';

// material-ui
import { IconButton } from '@mui/material';

// Quizzes imports
import MainCard from 'ui-component/cards/MainCard';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';

import { useSelector, useDispatch } from 'react-redux';
import StyledTable from 'ui-component/table/StyledTable';
import { getQuiz, getQuizzes } from 'store/actions/quizzesActions';
import { clearError, clearQuizzes } from 'store/types/quizzesTypes';
import { Edit, AddOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import moment from 'moment';
import SnackNotify from 'ui-component/notification/snackNotify';
import DeleteQuiz from './quizForm/deleteQuiz';

const tableColumns = [
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
    key: 'duration',
    label: 'Duration',
    width: 100,
    align: 'left',
  },
  {
    key: 'quizName',
    label: 'Quiz Title',
    width: 150,
    align: 'left',
  },
  {
    key: 'number_of_questions',
    label: 'Questions',
    width: 150,
    align: 'left',
  },
  {
    key: 'actions',
    label: 'Actions',
    width: 200,
    align: 'right',
  },
];

const Quizzes = () => {
  const [loading, setLoading] = useState(false);
  const [quizzes, setQuizzes] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quizzesRed = useSelector((state) => state.quizzesState);
  const messageQuizzes = useSelector((state) => state?.quizzesState?.error);

  useEffect(() => {
    dispatch(getQuizzes());
    return () => dispatch(clearQuizzes());
  }, [dispatch]);

  useEffect(() => {
    if (quizzesRed?.quizzes) {
      const quizzesSet = quizzesRed?.quizzes.map((quiz) => {
        return {
          ...quiz,
          number_of_questions: quiz?.questions?.length,
          actions: (
            <>
              <IconButton
                onClick={() =>
                  dispatch(getQuiz(quiz?._id, () => navigate('edit')))
                }
              >
                <Edit />
              </IconButton>
              <DeleteQuiz
                quizId={quiz?._id}
                quizName={quiz?.quizName}
                quizQuestion={quiz?.question}
                loading={loading}
              />
            </>
          ),
          updatedAt: moment(quiz?.updatedAt).format('ll'),
        };
      });
      setQuizzes(quizzesSet || []);
    }
    setLoading(quizzesRed?.loading || false);
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
        title='Quizzes'
        secondary={
          <CardSecondaryAction
            icon={<AddOutlined />}
            title={'Add quiz'}
            link={'add'}
          />
        }
      >
        <StyledTable
          name={'quizzes'}
          data={{ rows: quizzes, columns: tableColumns }}
          loading={loading}
        />
      </MainCard>
    </>
  );
};

export default Quizzes;
