import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addPost, updatePost } from 'store/actions/postsActions';
import { gridSpacing } from 'store/constant';
import { clearError } from 'store/types/postsTypes';
import StyledButton from 'ui-component/button/button';
import PhotoInput from 'ui-component/button/photoInput';
import StyledFilledInput from 'ui-component/input/filledInput';
import SnackNotify from 'ui-component/notification/snackNotify';
import { handleDisabledStatusFormSubmit } from 'utils/handleDisabled';
import { initialValues } from './addPost';

const PostForm = (props) => {
    const { values, setValues, type } = props;

    const loading = useSelector((state) => state?.postsState?.loading);
    const messagePosts = useSelector((state) => state?.postsState?.error);
    const postRed = useSelector((state) => state?.postsState?.post);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const redirectFromAdd = () => {
        setValues(initialValues);
        navigate(-1);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setValues(postRed);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === 'Add') {
            dispatch(addPost(values, redirectFromAdd));
        } else if (type === 'Edit') {
            dispatch(updatePost(values, () => navigate(-1)));
        }
    };

    const ignoreArr = type === 'Edit' ? ['postPhoto', 'likes', 'dislikes', 'reviewersLike', 'reviewersDislike', '__v'] : ['postPhoto'];

    return (
        <>
            <SnackNotify
                open={messagePosts?.message?.length > 0}
                onClose={() => dispatch(clearError())}
                autoHide={1000}
                isError={messagePosts?.status}
                message={messagePosts?.message}
            />
            <form noValidate>
                <Grid container spacing={gridSpacing} marginTop={2} justifyContent={'center'}>
                    <Grid container item xs={10} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'postTitle'}
                            values={values}
                            setValues={setValues}
                            label={'Title'}
                            width={{ input: '500px' }}
                        />
                    </Grid>
                    <Grid container item xs={10} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'postSubtitle'}
                            values={values}
                            setValues={setValues}
                            label={'Subtitle'}
                            width={{ input: '500px' }}
                            multiline
                            rows={3}
                            height='100px'
                        />
                    </Grid>
                    <Grid container item xs={10} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'postDescription'}
                            values={values}
                            setValues={setValues}
                            label={'Description'}
                            width={{ input: '500px' }}
                            multiline
                            rows={5}
                            height='165px'
                        />
                    </Grid>
                    <Grid
                        container
                        item
                        xs={10}
                        marginTop={2}
                        justifyContent={'center'}
                    >
                        <PhotoInput
                            name={`post-photo`}
                            photo={values['postPhoto']}
                            setPhoto={(photo) =>
                                setValues({ ...values, postPhoto: photo })
                            }
                        />
                    </Grid>
                    {type === 'Edit' && (
                        <>
                            <Grid
                                container
                                item
                                xs={10}
                                marginTop={2}
                                justifyContent={'center'}
                            >
                                <StyledButton
                                    name={'reset-post'}
                                    label={'Cancel'}
                                    disabled={handleDisabledStatusFormSubmit(values, postRed, type, ignoreArr)}
                                    loading={loading}
                                    variant={'secondary'}
                                    handleClick={handleCancel}
                                    type={'submit'}
                                    width={'400px'}
                                />
                            </Grid>
                        </>
                    )}
                    <Grid
                        container
                        item
                        xs={10}
                        marginBottom={2}
                        marginTop={type === 'Add' ? 2 : 0}
                        justifyContent={'center'}
                    >
                        <StyledButton
                            name={type === 'Add' ? 'add-post' : 'edit-post'}
                            label={
                                type === 'Add' ? 'Add post' : 'Edit post'
                            }
                            disabled={handleDisabledStatusFormSubmit(values, postRed, type, ignoreArr)}
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

PostForm.defaultProps = {
    values: {},
    setValues: () => undefined,
    type: 'Add',
};

PostForm.propTypes = {
    values: PropTypes.object,
    setValues: PropTypes.func,
    type: PropTypes.oneOf(['Add', 'Edit']),
};

export default PostForm;
