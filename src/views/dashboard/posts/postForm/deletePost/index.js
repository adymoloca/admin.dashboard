import { useState } from 'react';
import ConfirmDialog from 'ui-component/modal/confirmDialog';
import { IconButton, Tooltip } from '@mui/material';
import { Delete } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from 'store/actions/postsActions';

const DeletePost = (props) => {
    const { postId, postAuthor, loading } = props;
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
                name={`delete-post-${postId}`}
                open={isOpen}
                loading={loading}
                title={`Attention`}
                content={`Are you sure to delete this post from ${postAuthor}?`}
                handleClose={() => setIsOpen(false)}
                handleSubmit={() => dispatch(deletePost(postId, () => setIsOpen(false)))}
            />
        </>
    );
};

DeletePost.defaultProps = {
    postId: '',
    postAuthor: '',
    loading: false,
};

DeletePost.propTypes = {
    postId: PropTypes.string.isRequired,
    postAuthor: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

export default DeletePost;
