import { useState } from 'react';
import ConfirmDialog from 'ui-component/modal/confirmDialog';
import { IconButton, Tooltip } from '@mui/material';
import { Delete } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteStudent } from 'store/actions/studentsActions';

const DeleteStudent = (props) => {
    const { studentId, loading } = props;
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
                name={`delete-student-${studentId}`}
                open={isOpen}
                loading={loading}
                title={`Attention`}
                content={`Are you sure to delete this student?`}
                handleClose={() => setIsOpen(false)}
                handleSubmit={() => dispatch(deleteStudent(studentId, () => setIsOpen(false)))}
            />
        </>
    );
};

DeleteStudent.defaultProps = {
    studentId: '',
    loading: false,
};

DeleteStudent.propTypes = {
    studentId: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

export default DeleteStudent;
