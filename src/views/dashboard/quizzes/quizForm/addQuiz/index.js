import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Grid } from '@mui/material';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { ArrowBackIosNewTwoTone } from '@mui/icons-material';
import QuizForm from 'views/dashboard/quizzes/quizForm';

export const initialValues = {
    category: [],
    difficulty: 'Beginner',
    duration: '',
    quizName: '',
    questions: [],
    quizDescription: '',
    quizPhoto: '',
};

const AddQuiz = () => {
    const [quiz, setQuiz] = useState(initialValues);

    return (
        <>
            <MainCard
                title='Quizzes/ Add'
                secondary={<CardSecondaryAction icon={<ArrowBackIosNewTwoTone />} title={'Back'} link={'/quizzes'} />}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing} justifyContent={'center'}>
                        <QuizForm values={quiz} setValues={setQuiz} type={'Add'} />
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
};

export default AddQuiz;
