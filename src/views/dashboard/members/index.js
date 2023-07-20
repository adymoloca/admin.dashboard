import { useEffect, useState } from 'react';

// material-ui
import { IconButton, Tooltip } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';

import { useSelector, useDispatch } from 'react-redux';
import StyledTable from 'ui-component/table/StyledTable';
import { getMember, getMembers } from 'store/actions/membersActions';
import { clearError, clearMembers } from 'store/types/membersTypes';
import { Edit, AddOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import moment from 'moment';
import SnackNotify from 'ui-component/notification/snackNotify';
import DeleteMember from './memberForm/deleteMember';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const tableColumns = [
    {
        key: 'avatar',
        label: '',
        width: 100,
        align: 'center',
    },
    {
        key: 'name',
        label: 'Member',
        width: 200,
        align: 'left',
    },
    {
        key: 'email',
        label: 'Email',
        width: 100,
        align: 'left',
    },
    {
        key: 'position',
        label: 'Position',
        width: 300,
        align: 'left',
    },
    {
        key: 'updatedAt',
        label: 'Last update',
        width: 200,
        align: 'left',
    },
    {
        key: 'index',
        label: 'Showed as',
        width: 100,
        align: 'center',
    },
    {
        key: 'actions',
        label: 'Actions',
        width: 200,
        align: 'right',
    },
];

const Members = () => {
    const [loading, setLoading] = useState(false);
    const [members, setMembers] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const membersRed = useSelector((state) => state.membersState);
    const messageMembers = useSelector((state) => state?.membersState?.error);

    useEffect(() => {
        dispatch(getMembers());
        return () => dispatch(clearMembers());
    }, [dispatch]);

    useEffect(() => {
        if (membersRed?.members) {
            const membersSet = membersRed?.members.map((member) => {
                return {
                    ...member,
                    name: `${member.firstName} ${member.lastName}`,
                    actions: (
                        <>
                            {' '}
                            <Tooltip title='Edit'>
                                <IconButton onClick={() => dispatch(getMember(member._id, () => navigate('edit')))}>
                                    <Edit />
                                </IconButton>
                            </Tooltip>
                            <DeleteMember
                                memberId={member._id}
                                loading={membersRed?.loading}
                                memberName={`${member.firstName} ${member.lastName}`}
                            />
                        </>
                    ),
                    updatedAt: moment(member.updatedAt).format('ll'),
                };
            });
            setMembers(membersSet || []);
        }
        setLoading(membersRed?.loading || false);
    }, [membersRed, navigate, dispatch]);

    return (
        <>
            <SnackNotify
                open={messageMembers?.message?.length > 0}
                onClose={() => dispatch(clearError())}
                autoHide={3000}
                isError={messageMembers?.status}
                message={messageMembers?.message}
            />
            <MainCard
                title='Members'
                secondary={<CardSecondaryAction icon={<AddOutlined />} title={'Add member'} link={'add'} />}
            >
                <StyledTable
                    name={'members'}
                    data={{ rows: members, columns: tableColumns }}
                    loading={loading}
                    pagination
                />
            </MainCard>
        </>
    );
};

export default Members;
