import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addProject, updateProject } from 'store/actions/projectsActions';
import { gridSpacingSmall } from 'store/constant';
import { clearError } from 'store/types/postsTypes';
import StyledButton from 'ui-component/button/button';
import PhotoInput from 'ui-component/button/photoInput';
import StyledFilledInput from 'ui-component/input/filledInput';
import SnackNotify from 'ui-component/notification/snackNotify';
import { handleDisabledStatusFormSubmit } from 'utils/handleDisabled';
import { initialValues } from './addProject';

const ProjectForm = (props) => {
    const { values, setValues, type } = props;

    const loading = useSelector((state) => state?.projectsState?.loading);
    const messageProjects = useSelector((state) => state?.projectsState?.error);
    const projectRed = useSelector((state) => state?.projectsState?.project);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const redirectFromAdd = () => {
        setValues(initialValues);
        navigate(-1);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setValues(projectRed);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === 'Add') {
            dispatch(addProject(values, redirectFromAdd));
        } else if (type === 'Edit') {
            dispatch(updateProject(values, () => navigate(-1)));
        }
    };

    const ignoreArr = type === 'Edit' ? ['projectPhoto', 'createdAt', 'updatedAt', '__v'] : ['projectPhoto'];

    return (
        <>
            <SnackNotify
                open={messageProjects?.message?.length > 0}
                onClose={() => dispatch(clearError())}
                autoHide={1000}
                isError={messageProjects?.status}
                message={messageProjects?.message}
            />
            <form noValidate>
                <Grid container spacing={gridSpacingSmall} marginTop={2} justifyContent={'center'}>

                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'author'}
                            values={values}
                            setValues={setValues}
                            label={'Author'}
                            width={{ input: '500px' }}
                        />
                    </Grid>
                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'client'}
                            values={values}
                            setValues={setValues}
                            label={'Client'}
                            width={{ input: '500px' }}
                        />
                    </Grid>
                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'projectTitle'}
                            values={values}
                            setValues={setValues}
                            label={'Title'}
                            width={{ input: '500px' }}
                        />
                    </Grid>
                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'projectDescription'}
                            values={values}
                            setValues={setValues}
                            label={'Desciption'}
                            width={{ input: '500px' }}
                        />
                    </Grid>
                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'appStore'}
                            values={values}
                            setValues={setValues}
                            label={'App Store link'}
                            width={{ input: '500px' }}
                        />
                    </Grid>
                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'playStore'}
                            values={values}
                            setValues={setValues}
                            label={'Play Store link'}
                            width={{ input: '500px' }}
                        />
                    </Grid>
                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'github'}
                            values={values}
                            setValues={setValues}
                            label={'Github'}
                            width={{ input: '500px' }}
                        />
                    </Grid>
                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'facebook'}
                            values={values}
                            setValues={setValues}
                            label={'Facebook'}
                            width={{ input: '500px' }}
                        />
                    </Grid>
                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'instagram'}
                            values={values}
                            setValues={setValues}
                            label={'Instagram'}
                            width={{ input: '500px' }}
                        />
                    </Grid>
                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'website'}
                            values={values}
                            setValues={setValues}
                            label={'Website'}
                            width={{ input: '500px' }}
                        />
                    </Grid>
                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'frameworks'}
                            values={values}
                            setValues={setValues}
                            label={'Frameworks'}
                            width={{ input: '500px' }}
                            array
                        />
                    </Grid>
                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'programmingLanguages'}
                            values={values}
                            setValues={setValues}
                            label={'Programming Languages'}
                            width={{ input: '500px', label: 'min-content' }}
                            array
                        />
                    </Grid>
                    <Grid container item sm={10} md={5} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'tools'}
                            values={values}
                            setValues={setValues}
                            label={'Tools'}
                            width={{ input: '500px', label: 'min-content' }}
                            array
                        />
                    </Grid>
                    <Grid
                        container
                        item
                        sm={10}
                        marginTop={2}
                        justifyContent={'center'}
                    >
                        <PhotoInput
                            name={`project-photo`}
                            photo={values['projectPhoto']}
                            setPhoto={(photo) =>
                                setValues({ ...values, projectPhoto: photo })
                            }
                        />
                    </Grid>
                    {type === 'Edit' && (
                        <>
                            <Grid
                                container
                                item
                                sm={10}
                                marginTop={2}
                                justifyContent={'center'}
                            >
                                <StyledButton
                                    name={'reset-project'}
                                    label={'Cancel'}
                                    disabled={handleDisabledStatusFormSubmit(values, projectRed, type, ignoreArr)}
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
                        sm={10}
                        marginBottom={2}
                        marginTop={type === 'Add' ? 2 : 0}
                        justifyContent={'center'}
                    >
                        <StyledButton
                            name={type === 'Add' ? 'add-project' : 'edit-project'}
                            label={
                                type === 'Add' ? 'Add project' : 'Edit project'
                            }
                            disabled={handleDisabledStatusFormSubmit(values, projectRed, type, ignoreArr)}
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

ProjectForm.defaultProps = {
    values: {},
    setValues: () => undefined,
    type: 'Add',
};

ProjectForm.propTypes = {
    values: PropTypes.object,
    setValues: PropTypes.func,
    type: PropTypes.oneOf(['Add', 'Edit']),
};

export default ProjectForm;
