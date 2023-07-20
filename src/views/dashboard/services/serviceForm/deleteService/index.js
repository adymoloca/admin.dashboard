import { useState } from 'react';
import ConfirmDialog from 'ui-component/modal/confirmDialog';
import { IconButton, Tooltip } from '@mui/material';
import { Delete } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteService } from 'store/actions/servicesActions';

const DeleteService = (props) => {
    const { serviceId, loading } = props;
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    return (
        <>
            {' '}
            <Tooltip title='Delete'>
                <IconButton onClick={() => setIsOpen(!isOpen)}>
                    <Delete color='primary' />
                </IconButton>
            </Tooltip>
            <ConfirmDialog
                name={`delete-service-${serviceId}`}
                open={isOpen}
                loading={loading}
                title={`Attention`}
                content={`Are you sure to delete this from services?`}
                handleClose={() => setIsOpen(false)}
                handleSubmit={() => dispatch(deleteService(serviceId, () => setIsOpen(false)))}
            />
        </>
    );
};

DeleteService.defaultProps = {
    serviceId: '',
    loading: false,
};

DeleteService.propTypes = {
    serviceId: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

export default DeleteService;
