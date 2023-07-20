import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import { Grid } from "@mui/material";
import CardSecondaryAction from "ui-component/cards/CardSecondaryAction";
import { gridSpacing } from "store/constant";
import { ArrowBackIosNewTwoTone } from "@mui/icons-material";
import PostForm from "views/dashboard/posts/postForm";

export const initialValues = {
    postPhoto: '',
    postTitle: '',
    postSubtitle: '',
    postDescription: ''
};

const AddPost = () => {
    const [post, setPost] = useState(initialValues);

    return (
        <>
            <MainCard
                title="Posts/ Add"
                secondary={
                    <CardSecondaryAction
                        icon={<ArrowBackIosNewTwoTone />}
                        title={"Back"}
                        link={"/posts"}
                    />
                }
            >
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing} justifyContent={"center"}>
                        <PostForm values={post} setValues={setPost} type={"Add"} />
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
};

export default AddPost;
