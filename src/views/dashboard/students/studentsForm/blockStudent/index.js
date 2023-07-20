import { useState } from 'react';
import ConfirmDialog from 'ui-component/modal/confirmDialog';
import { IconButton, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { blockStudent } from 'store/actions/studentsActions';
import { IconLockOff, IconLock } from '@tabler/icons';

const BlockStudent = (props) => {
    const { studentId, studentName, loading, isBlocked } = props;
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    return (
        <>
            <Tooltip title='Block'>
                <IconButton onClick={() => setIsOpen(!isOpen)}>
                    {isBlocked ? <IconLockOff color='#ff4500' /> : <IconLock />}
                </IconButton>
            </Tooltip>
            <ConfirmDialog
                name={`block-student-${studentId}`}
                open={isOpen}
                loading={loading}
                title={`Attention`}
                content={isBlocked ? `Do you want to unblock ${studentName}?` : `Do you want to block ${studentName}?`}
                handleClose={() => setIsOpen(false)}
                handleSubmit={() => dispatch(blockStudent(studentId, !isBlocked, () => setIsOpen(false)))}
            />
        </>
    );
};

BlockStudent.defaultProps = {
    studentId: '',
    loading: false,
};

BlockStudent.propTypes = {
    studentId: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

export default BlockStudent;
