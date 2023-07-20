import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Grid } from '@mui/material';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { ArrowBackIosNewTwoTone } from '@mui/icons-material';
import QuizForm from '..';
import { useSelector } from 'react-redux';

const EditQuiz = () => {
  const quizRed = useSelector((state) => state?.quizzesState?.quiz);

  const [quiz, setQuiz] = useState(quizRed);

  return (
    <>
      <MainCard
        title='Quizzes/ Edit'
        secondary={
          <CardSecondaryAction
            icon={<ArrowBackIosNewTwoTone />}
            title={'Back'}
            link={'/quizzes'}
          />
        }
      >
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <QuizForm values={quiz} setValues={setQuiz} type={'Edit'} />
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
};

export default EditQuiz;
