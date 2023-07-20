import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconCheck, IconMessagePlus, IconX } from '@tabler/icons';
import MainCard from 'ui-component/cards/MainCard';
import { Box, IconButton, TextareaAutosize, Tooltip, Typography } from '@mui/material';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { ArrowBackIosOutlined } from '@mui/icons-material';
import Button from 'ui-component/button/button';
import { correctQuiz } from 'store/actions/quizzesActions';
import { useNavigate } from 'react-router';

const Quiz = () => {
    const [answers, setAnswers] = useState([]);
    const [commentsActive, setCommentsActive] = useState([]);

    const current_quiz = useSelector((state) => state?.utilState?.current_quiz);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAdd = (is_correct, answerId) => {
        const temp = [...answers];
        const existAlr = temp?.findIndex((el) => el.answerId === answerId);
        existAlr >= 0
            ? temp?.splice(existAlr, 1, {
                  answerId: answerId,
                  correct: is_correct,
                  comment: answers[existAlr]?.comment,
              })
            : temp?.push({ answerId: answerId, correct: is_correct });
        setAnswers(temp);
    };

    const handleAnswerComment = (comment, answerId) => {
        const temp = [...answers];
        const existAlr = temp?.findIndex((el) => el.answerId === answerId);
        existAlr >= 0
            ? temp?.splice(existAlr, 1, { answerId: answerId, correct: answers[existAlr]?.correct, comment: comment })
            : temp?.push({ answerId: answerId, comment: comment });
        setAnswers(temp);
    };

    const handleCommentsActive = (index) => {
        const temp = [...commentsActive];
        const existAlr = temp?.indexOf(index);
        existAlr >= 0 ? temp?.splice(existAlr, 1) : temp?.push(index);
        setCommentsActive(temp);
    };

    useEffect(() => {
        const temp = [];
        for (let i = 0; i < current_quiz?.content?.length; i++)
            (current_quiz?.content[i]?.correct ||
                current_quiz?.content[i]?.correct === false ||
                current_quiz?.content[i]?.comment) &&
                temp.push({
                    correct: current_quiz?.content[i]?.correct,
                    answerId: current_quiz?.content[i]?.answerId,
                    comment: current_quiz?.content[i]?.comment,
                });
        setAnswers(temp);
        // eslint-disable-next-line
    }, [current_quiz]);

    return (
        <MainCard
            title={current_quiz.quizName}
            secondary={<CardSecondaryAction icon={<ArrowBackIosOutlined />} title={'Back'} link={-1} />}>
            <Box style={{ height: '100%', width: '100%', padding: 20 }}>
                {current_quiz?.content?.map((element, index) => {
                    const id = element?.answerId;
                    const answersElement = answers?.find((el) => el?.answerId === id);
                    return (
                        <Box key={`question-answer-box-${index}`}>
                            <Typography
                                style={{
                                    width: '100%',
                                    fontSize: 18,
                                }}>
                                {index + 1}. <strong>{element?.question}</strong>
                            </Typography>
                            <Box
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginTop: 10,
                                }}>
                                <Box style={{ width: '80%' }}>
                                    <Typography
                                        style={{
                                            fontSize: 18,
                                        }}>
                                        {element?.answer}
                                    </Typography>
                                    {commentsActive?.includes(index) && (
                                        <TextareaAutosize
                                            style={{
                                                width: '100%',
                                                height: '70px',
                                                marginTop: 10,
                                                marginBottom: 20,
                                                fontSize: 16,
                                            }}
                                            placeholder={'Comment...'}
                                            value={answersElement?.comment}
                                            onChange={(e) => handleAnswerComment(e?.target?.value, id)}
                                        />
                                    )}
                                </Box>
                                <Box>
                                    <Tooltip title={'Mark as correct'}>
                                        <IconButton
                                            color={answersElement?.correct ? 'success' : 'default'}
                                            size='large'
                                            onClick={() => handleAdd(true, id)}>
                                            <IconCheck />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title={'Mark as wrong'}>
                                        <IconButton
                                            color={answersElement?.correct === false ? 'error' : 'default'}
                                            size='large'
                                            onClick={() => handleAdd(false, id)}>
                                            <IconX />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title={'Add comment'}>
                                        <IconButton
                                            color={answersElement?.comment ? 'primary' : 'default'}
                                            size='large'
                                            onClick={() => handleCommentsActive(index)}>
                                            <IconMessagePlus />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
            <Box style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: 15, padding: 20 }}>
                <Button variant='secondary' label={'CANCEL'} handleClick={() => navigate(-1)} />
                <Button label={'SUBMIT'} handleClick={() => dispatch(correctQuiz(answers, () => navigate(-1)))} />
            </Box>
        </MainCard>
    );
};

export default Quiz;
