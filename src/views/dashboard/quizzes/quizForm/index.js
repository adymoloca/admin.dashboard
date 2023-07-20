import React, { useState } from 'react';
import { Grid, IconButton, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addQuiz, updateQuiz } from 'store/actions/quizzesActions';
import { gridSpacingSmall } from 'store/constant';
import { clearError } from 'store/types/quizzesTypes';
import StyledButton from 'ui-component/button/button';
import StyledFilledInput from 'ui-component/input/filledInput';
import SnackNotify from 'ui-component/notification/snackNotify';
import { handleDisabledStatusFormSubmit } from 'utils/handleDisabled';
import { initialValues } from './addQuiz';
import ClearIcon from '@mui/icons-material/Clear';
import { TextareaAutosize } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CheckIcon from '@mui/icons-material/Check';
import ConfirmDialog from 'ui-component/modal/confirmDialog';
import SubCard from 'ui-component/cards/SubCard';
import ChangePhotoButton from 'ui-component/button/change-photo-button';

const QuizForm = (props) => {
    const { values, setValues, type, quizId } = props;

    const loading = useSelector((state) => state?.quizzesState?.loading);
    const messageQuizzes = useSelector((state) => state?.quizzesState?.error);
    const quizRed = useSelector((state) => state?.quizzesState?.quiz);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [addQuestion, setAddQuestion] = useState({ question: '', image: '' });
    const [currentEdit, setCurrentEdit] = useState({ index: -1, val: {} });
    const [isOpen, setIsOpen] = useState(false);

    const handleQuestionAdd = () => {
        const temp = [...values?.questions];
        temp.push(addQuestion);
        setValues((prev) => ({ ...prev, questions: temp }));
        setAddQuestion({ question: '', image: '' });
    };

    const handleQuestionRemove = (index) => {
        const temp = [...values?.questions];
        temp.splice(index, 1);
        setValues((prev) => ({ ...prev, questions: temp }));
        setCurrentEdit({ index: -1, val: {} });
        setIsOpen(false);
    };

    const updateQuestion = (index) => {
        const temp = [...values?.questions];
        temp.splice(index, 1, currentEdit.val);
        setValues((prev) => ({ ...prev, questions: temp }));
        setCurrentEdit({ index: -1, val: {} });
    };

    const redirectFromAdd = () => {
        setValues(initialValues);
        navigate(-1);
    };

    const resetFields = (add = false, edit = false) => {
        add && setAddQuestion({ question: '', image: '' });
        edit && setCurrentEdit({});
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setValues(quizRed);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === 'Add') {
            dispatch(addQuiz({ ...values, duration: +values?.duration }, redirectFromAdd));
        } else if (type === 'Edit') {
            dispatch(updateQuiz({ ...values, duration: +values?.duration }, () => navigate(-1)));
        }
    };

    const ignoreArr = type === 'Edit' ? ['quizPhoto', '_id', '__v'] : ['quizPhoto'];
    return (
        <>
            <SnackNotify
                open={messageQuizzes?.message?.length > 0}
                onClose={() => dispatch(clearError())}
                autoHide={1000}
                isError={messageQuizzes?.status}
                message={messageQuizzes?.message}
            />
            <form noValidate>
                <Grid container spacing={gridSpacingSmall} marginTop={2} justifyContent={'center'}>
                    <Grid container item sm={10} md={10} justifyContent={'center'}>
                        <ChangePhotoButton
                            showImageOn
                            photo={values?.quizPhoto}
                            height={150}
                            width={800}
                            name={'quizPhoto'}
                            setPhoto={(photo) => setValues((prev) => ({ ...prev, quizPhoto: photo }))}
                        />
                    </Grid>
                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'quizName'}
                            values={values}
                            setValues={setValues}
                            label={'Name'}
                            width={{ input: '500px' }}
                        />
                    </Grid>
                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'difficulty'}
                            label={'Difficulty'}
                            value={values}
                            setValues={setValues}
                            width={{ input: '500px' }}
                            select
                            options={['Beginner', 'Intermediate', 'Advanced']}
                        />
                    </Grid>
                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'category'}
                            values={values}
                            setValues={setValues}
                            label={'Category'}
                            width={{ input: '500px' }}
                            array
                            select
                            options={['UI/UX', 'Front-end', 'Back-end', 'Design']}
                        />
                    </Grid>
                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'duration'}
                            values={values}
                            setValues={setValues}
                            label={'Duration'}
                            width={{ input: '500px' }}
                        />
                    </Grid>
                    <Grid container item sm={10} md={10} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'quizDescription'}
                            values={values}
                            setValues={setValues}
                            label={'Description'}
                            width={{ input: '500px' }}
                        />
                    </Grid>
                    <Grid container item sm={10} style={{ margin: '20px 0px' }} justifyContent={'center'}>
                        <SubCard title={'Add Question'} sx={{ width: '92%' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                }}>
                                <TextareaAutosize
                                    id={'text-area-autosize-add-question'}
                                    minRows={3}
                                    name={'questions'}
                                    value={addQuestion.question}
                                    onChange={(e) =>
                                        setAddQuestion((prev) => ({
                                            ...prev,
                                            question: e.target.value,
                                        }))
                                    }
                                    placeholder='Question'
                                    style={{ minWidth: 500, height: 78, maxWidth: 500 }}
                                />
                                <ChangePhotoButton
                                    showImageOn
                                    photo={addQuestion.image}
                                    height={78}
                                    name={'newExtraPhoto'}
                                    setPhoto={(photo) => setAddQuestion((prev) => ({ ...prev, image: photo }))}
                                />
                                <div style={{ height: 78, display: 'flex', alignItems: 'center' }}>
                                    <Tooltip title={'Clear'}>
                                        <span>
                                            <IconButton
                                                onClick={() => resetFields(true)}
                                                disabled={!addQuestion.question.length}>
                                                <ClearIcon />
                                            </IconButton>
                                        </span>
                                    </Tooltip>
                                    <Tooltip title={'Add'}>
                                        <span>
                                            <IconButton
                                                onClick={handleQuestionAdd}
                                                disabled={!addQuestion.question.length}>
                                                <AddIcon />
                                            </IconButton>
                                        </span>
                                    </Tooltip>
                                </div>
                            </div>
                        </SubCard>
                    </Grid>
                    <Grid container item sm={10} style={{ margin: '0px 0px 10px' }} justifyContent={'center'}>
                        <SubCard title={'Questions'} sx={{ width: '92%' }}>
                            {values?.questions?.length > 0 ? (
                                values?.questions?.map((question, index) => {
                                    const isCurrent = index === currentEdit?.index;
                                    return (
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                justifyContent: 'space-between',
                                            }}
                                            key={`question-quiz-${index}`}>
                                            <TextareaAutosize
                                                minRows={3}
                                                name={'questions.question'}
                                                placeholder='Question'
                                                value={isCurrent ? currentEdit?.val?.question : question?.question}
                                                style={{ width: 500, height: 78, maxWidth: 500 }}
                                                onChange={(e) =>
                                                    setCurrentEdit((prev) => ({
                                                        ...prev,
                                                        val: { ...prev.val, question: e.target.value },
                                                    }))
                                                }
                                                disabled={!isCurrent}
                                            />
                                            <ChangePhotoButton
                                                showImageOn
                                                photo={isCurrent ? currentEdit?.val?.image : question?.image}
                                                height={78}
                                                name={'question.image'}
                                                setPhoto={(photo) =>
                                                    setCurrentEdit((prev) => ({
                                                        ...prev,
                                                        val: { ...prev?.val, image: photo },
                                                    }))
                                                }
                                                disabled={!isCurrent}
                                            />

                                            <div style={{ marginTop: 19 }}>
                                                <ConfirmDialog
                                                    name={`delete-quiz-${quizId}`}
                                                    open={isOpen}
                                                    loading={loading}
                                                    title={`Attention`}
                                                    content={`Are you sure to delete the question num ber ${
                                                        index + 1
                                                    } from quizzes?`}
                                                    handleClose={() => setIsOpen(false)}
                                                    handleSubmit={() => handleQuestionRemove(index)}
                                                />
                                                <Tooltip title={isCurrent ? 'Clear' : 'Delete'}>
                                                    <IconButton
                                                        onClick={() => {
                                                            isCurrent ? resetFields(false, true) : setIsOpen(!isOpen);
                                                        }}>
                                                        {isCurrent ? <ClearIcon /> : <DeleteIcon />}
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title={isCurrent ? 'Save' : 'Edit'}>
                                                    <IconButton
                                                        onClick={() => {
                                                            isCurrent
                                                                ? updateQuestion(index)
                                                                : setCurrentEdit({
                                                                      index: index,
                                                                      val: question,
                                                                  });
                                                        }}>
                                                        {!isCurrent ? <BorderColorIcon /> : <CheckIcon />}
                                                    </IconButton>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div>No questions added</div>
                            )}
                        </SubCard>
                    </Grid>
                    <Grid container item sm={10} marginTop={2} justifyContent={'center'}>
                        <StyledButton
                            sx={{ minWidth: 500 }}
                            name={'reset-quiz'}
                            label={'Cancel'}
                            disabled={handleDisabledStatusFormSubmit(values, quizRed, type, ignoreArr)}
                            loading={loading}
                            variant={'secondary'}
                            handleClick={handleCancel}
                            type={'submit'}
                            width={'400px'}
                        />
                    </Grid>
                    <Grid
                        container
                        item
                        sm={10}
                        marginBottom={2}
                        marginTop={type === 'Add' ? 2 : 0}
                        justifyContent={'center'}>
                        <StyledButton
                            sx={{ minWidth: 500 }}
                            justifyContent={'center'}
                            name={type === 'Add' ? 'add-quiz' : 'edit-quiz'}
                            label={type === 'Add' ? 'Add quiz' : 'Edit quiz'}
                            // disabled={handleDisabledStatusFormSubmit(
                            // 	values,
                            // 	quizRed,
                            // 	type,
                            // 	ignoreArr
                            // )}
                            loading={loading}
                            variant={'primary'}
                            handleClick={handleSubmit}
                            type={'submit'}
                            width={'400px'}
                        />
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

QuizForm.defaultProps = {
    values: {},
    setValues: () => undefined,
    type: 'Add',
};

QuizForm.propTypes = {
    values: PropTypes.object,
    setValues: PropTypes.func,
    type: PropTypes.oneOf(['Add', 'Edit']),
};

export default QuizForm;
