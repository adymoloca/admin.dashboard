import { useState } from 'react';
import ConfirmDialog from 'ui-component/modal/confirmDialog';
import { IconButton, Tooltip } from '@mui/material';
import { Delete } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteProject } from 'store/actions/projectsActions';

const DeleteProject = (props) => {
    const { projectId, projectTitle, loading } = props;
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
                name={`delete-project-${projectId}`}
                open={isOpen}
                loading={loading}
                title={`Attention`}
                content={`Are you sure to delete ${projectTitle} from projects?`}
                handleClose={() => setIsOpen(false)}
                handleSubmit={() => dispatch(deleteProject(projectId, () => setIsOpen(false)))}
            />
        </>
    );
};

DeleteProject.defaultProps = {
    projectId: '',
    projectTitle: '',
    loading: false,
};

DeleteProject.propTypes = {
    projectId: PropTypes.string.isRequired,
    projectTitle: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

export default DeleteProject;
