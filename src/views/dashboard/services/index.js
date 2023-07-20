import { useEffect, useState } from 'react';

// material-ui
import { IconButton, Tooltip } from '@mui/material';

// service imports
import MainCard from 'ui-component/cards/MainCard';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';

import { useSelector, useDispatch } from 'react-redux';
import StyledTable from 'ui-component/table/StyledTable';
import { getService, getServices } from 'store/actions/servicesActions';
import { clearError } from 'store/types/servicesTypes';
import { Edit, AddOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import moment from 'moment';
import SnackNotify from 'ui-component/notification/snackNotify';
import DeleteService from './serviceForm/deleteService';
import { clearServices } from 'store/types/servicesTypes';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const tableColumns = [
    {
        key: 'serviceName',
        label: 'Name',
        width: 200,
        align: 'left',
    },
    {
        key: 'serviceDescription',
        label: 'Description',
        width: 400,
        align: 'left',
        ellapse: true,
    },
    {
        key: 'updatedAt',
        label: 'Last update',
        width: 100,
        align: 'left',
    },
    {
        key: 'actions',
        label: 'Actions',
        width: 100,
        align: 'right',
    },
];

const Services = () => {
    const [loading, setLoading] = useState(false);
    const [services, setServices] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const servicesRed = useSelector((state) => state.servicesState);
    const messageServices = useSelector((state) => state?.servicesState?.error);

    useEffect(() => {
        dispatch(getServices());
        return () => dispatch(clearServices());
    }, [dispatch]);

    useEffect(() => {
        if (servicesRed?.services) {
            const servicesSet = servicesRed?.services.map((service) => {
                return {
                    ...service,
                    actions: (
                        <>
                            {' '}
                            <Tooltip title='Edit'>
                                <IconButton onClick={() => dispatch(getService(service?._id, () => navigate('edit')))}>
                                    <Edit />
                                </IconButton>
                            </Tooltip>
                            <DeleteService serviceId={service?._id} loading={loading} />
                        </>
                    ),
                    updatedAt: moment(service?.updatedAt).format('ll'),
                    tools: service?.tools?.join(', '),
                    serviceDescription: `${service?.serviceDescription?.substring(0, 200)}${
                        service?.serviceDescription?.length > 200 ? '...' : ''
                    }`,
                };
            });
            setServices(servicesSet || []);
        }
        setLoading(servicesRed?.loading || false);
    }, [servicesRed, navigate, dispatch, loading]);

    return (
        <>
            <SnackNotify
                open={messageServices?.message?.length > 0}
                onClose={() => dispatch(clearError())}
                autoHide={1000}
                isError={messageServices?.status}
                message={messageServices?.message}
            />
            <MainCard
                title='Services'
                secondary={<CardSecondaryAction icon={<AddOutlined />} title={'Add service'} link={'add'} />}
            >
                <StyledTable name={'services'} data={{ rows: services, columns: tableColumns }} loading={loading} />
            </MainCard>
        </>
    );
};

export default Services;
