import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Grid } from '@mui/material';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { ArrowBackIosNewTwoTone } from '@mui/icons-material';
import PostForm from '..';
import { useSelector } from 'react-redux';

const EditPost = () => {

    const postRed = useSelector((state) => state?.postsState?.post);

    const [post, setPost] = useState(postRed);

    return (
        <>
            <MainCard title="Posts/ Edit" secondary={<CardSecondaryAction icon={<ArrowBackIosNewTwoTone />} title={'Back'} link={'/posts'} />}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <PostForm values={post} setValues={setPost} type={'Edit'} />
                    </Grid>
                </Grid>
            </MainCard>
        </>
    )
}

export default EditPost;