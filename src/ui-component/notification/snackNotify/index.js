import { Snackbar, Alert, Zoom } from '@mui/material';
import PropTypes from 'prop-types';

const SnackNotify = (props) => {
    const { open, message, onClose, autoHide, isError } = props;

    return (
        <Snackbar
            open={open}
            onClose={onClose}
            autoHideDuration={typeof autoHide === 'string' ? parseInt(autoHide) : autoHide}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            TransitionComponent={(props) => <Zoom {...props} />}>
            <Alert variant='filled' severity={isError ? 'error' : 'success'}>
                {message}
            </Alert>
        </Snackbar>
    );
};

SnackNotify.defaultProps = {
    open: false,
    message: '',
    onClose: () => undefined,
    autoHide: 1000,
    isError: false,
};

SnackNotify.propTypes = {
    open: PropTypes.bool,
    message: PropTypes.string,
    onClose: PropTypes.func,
    autoHide: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    isError: PropTypes.bool,
};

export default SnackNotify;
