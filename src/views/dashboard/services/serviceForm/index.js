import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addService, updateService } from 'store/actions/servicesActions';
import { gridSpacingSmall } from 'store/constant';
import { clearError } from 'store/types/postsTypes';
import StyledButton from 'ui-component/button/button';
import PhotoInput from 'ui-component/button/photoInput';
import StyledFilledInput from 'ui-component/input/filledInput';
import SnackNotify from 'ui-component/notification/snackNotify';
import { handleDisabledStatusFormSubmit } from 'utils/handleDisabled';
import { initialValues } from './addService';

const ServiceForm = (props) => {
    const { values, setValues, type } = props;

    const loading = useSelector((state) => state?.servicesState?.loading);
    const messageServices = useSelector((state) => state?.servicesState?.error);
    const serviceRed = useSelector((state) => state?.servicesState?.service);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const redirectFromAdd = () => {
        setValues(initialValues);
        navigate(-1);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setValues(serviceRed);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === 'Add') {
            dispatch(addService(values, redirectFromAdd));
        } else if (type === 'Edit') {
            dispatch(updateService(values, () => navigate(-1)));
        }
    };

    const ignoreArr = type === 'Edit' ? ['servicePhoto', 'createdAt', 'updatedAt', '__v'] : ['servicePhoto'];

    return (
        <>
            <SnackNotify
                open={messageServices?.message?.length > 0}
                onClose={() => dispatch(clearError())}
                autoHide={1000}
                isError={messageServices?.status}
                message={messageServices?.message}
            />
            <form noValidate>
                <Grid container spacing={gridSpacingSmall} marginTop={2} justifyContent={'center'}>
                    <Grid container item sm={10} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'serviceName'}
                            values={values}
                            setValues={setValues}
                            label={'Name'}
                            width={{ input: '500px' }}
                        />
                    </Grid>
                    <Grid container item sm={10} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'serviceDescription'}
                            values={values}
                            setValues={setValues}
                            label={'Desciption'}
                            width={{ input: '500px' }}
                        />
                    </Grid>
                    <Grid container item sm={10} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'programmingLanguages'}
                            values={values}
                            setValues={setValues}
                            label={'Programming Languages'}
                            width={{ input: '500px', label: 'min-content' }}
                            array
                        />
                    </Grid>
                    <Grid container item sm={10} justifyContent={'center'}>
                        <StyledFilledInput
                            name={'frameworks'}
                            values={values}
                            setValues={setValues}
                            label={'Frameworks'}
                            width={{ input: '500px' }}
                            array
                        />
                    </Grid>
                    <Grid container item sm={10} justifyContent={'center'}>
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
                            name={`service-photo`}
                            photo={values['servicePhoto']}
                            setPhoto={(photo) =>
                                setValues({ ...values, servicePhoto: photo })
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
                                    name={'reset-service'}
                                    label={'Cancel'}
                                    disabled={handleDisabledStatusFormSubmit(values, serviceRed, type, ignoreArr)}
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
                            name={type === 'Add' ? 'add-service' : 'edit-service'}
                            label={
                                type === 'Add' ? 'Add service' : 'Edit service'
                            }
                            disabled={handleDisabledStatusFormSubmit(values, serviceRed, type, ignoreArr)}
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

ServiceForm.defaultProps = {
    values: {},
    setValues: () => undefined,
    type: 'Add',
};

ServiceForm.propTypes = {
    values: PropTypes.object,
    setValues: PropTypes.func,
    type: PropTypes.oneOf(['Add', 'Edit']),
};

export default ServiceForm;
