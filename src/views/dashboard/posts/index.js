import { useEffect, useState } from 'react';

// material-ui
import { IconButton, Tooltip, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';

import { useSelector, useDispatch } from 'react-redux';
import StyledTable from 'ui-component/table/StyledTable';
import { getPost, getPosts } from 'store/actions/postsActions';
import { clearError, clearPosts } from 'store/types/postsTypes';
import { Edit, AddOutlined, ThumbUpAltRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import moment from 'moment';
import SnackNotify from 'ui-component/notification/snackNotify';
import DeletePost from './postForm/deletePost';
// import DeleteMember from './memberForm/deleteMember';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const tableColumns = [
    {
        key: 'likes',
        label: 'Likes',
        width: 100,
        align: 'left',
    },
    {
        key: 'postAuthor',
        label: 'Author',
        width: 200,
        align: 'left',
    },
    {
        key: 'postTitle',
        label: 'Title',
        width: 400,
        align: 'left',
    },
    {
        key: 'postSubtitle',
        label: 'Subtitle',
        width: 600,
        align: 'left',
    },
    {
        key: 'updatedAt',
        label: 'Last update',
        width: 200,
        align: 'left',
    },
    {
        key: 'actions',
        label: 'Actions',
        width: 200,
        align: 'right',
    },
];

const Posts = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const postsRed = useSelector((state) => state.postsState);
    const messagePosts = useSelector((state) => state?.postsState?.error);

    useEffect(() => {
        dispatch(getPosts());
        return () => dispatch(clearPosts());
    }, [dispatch]);

    useEffect(() => {
        if (postsRed?.posts) {
            const postsSet = postsRed?.posts.map((post) => {
                return {
                    ...post,
                    actions: (
                        <>
                            {' '}
                            <Tooltip title='Edit'>
                                <IconButton onClick={() => dispatch(getPost(post?._id, () => navigate('edit')))}>
                                    <Edit />
                                </IconButton>
                            </Tooltip>
                            <DeletePost postId={post?._id} postAuthor={post?.postAuthor} loading={loading} />
                        </>
                    ),
                    updatedAt: moment(post?.updatedAt).format('ll'),
                    likes: (
                        <Typography
                            variant='h4'
                            display={'flex'}
                            justifyContent={'space-between'}
                            width={60}
                            alignItems={'top'}
                        >
                            {post?.likes} <ThumbUpAltRounded color='primary' sx={{ fontSize: 20 }} />
                        </Typography>
                    ),
                };
            });
            setPosts(postsSet || []);
        }
        setLoading(postsRed?.loading || false);
    }, [postsRed, navigate, dispatch, loading]);

    return (
        <>
            <SnackNotify
                open={messagePosts?.message?.length > 0}
                onClose={() => dispatch(clearError())}
                autoHide={1000}
                isError={messagePosts?.status}
                message={messagePosts?.message}
            />
            <MainCard
                title='Posts'
                secondary={<CardSecondaryAction icon={<AddOutlined />} title={'Add post'} link={'add'} />}
            >
                <StyledTable name={'posts'} data={{ rows: posts, columns: tableColumns }} loading={loading} />
            </MainCard>
        </>
    );
};

export default Posts;
