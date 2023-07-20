import { useState } from 'react';
import ConfirmDialog from 'ui-component/modal/confirmDialog';
import { IconButton, Tooltip } from '@mui/material';
import { Delete } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteMember } from 'store/actions/membersActions';

const DeleteMember = (props) => {
    const { memberId, memberName, loading } = props;
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    return (
        <>
            <Tooltip title='Delete'>
                <IconButton onClick={() => setIsOpen(!isOpen)}>
                    <Delete color='primary' />
                </IconButton>
            </Tooltip>
            <ConfirmDialog
                name={`delete-member-${memberId}`}
                open={isOpen}
                loading={loading}
                title={`Attention`}
                content={`Are you sure to delete ${memberName} from members?`}
                handleClose={() => setIsOpen(false)}
                handleSubmit={() => dispatch(deleteMember(memberId, () => setIsOpen(false)))}
            />
        </>
    );
};

DeleteMember.defaultProps = {
    memberId: '',
    memberName: '',
    loading: false,
};

DeleteMember.propTypes = {
    memberId: PropTypes.string.isRequired,
    memberName: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

export default DeleteMember;
