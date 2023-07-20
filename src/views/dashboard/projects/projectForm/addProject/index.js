import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import { Grid } from "@mui/material";
import CardSecondaryAction from "ui-component/cards/CardSecondaryAction";
import { gridSpacing } from "store/constant";
import { ArrowBackIosNewTwoTone } from "@mui/icons-material";
import ProjectForm from "views/dashboard/projects/projectForm";

export const initialValues = {
    projectPhoto: '',
    projectTitle: '',
    projectDescription: '',
    author: '',
    client: '',
    appStore: '',
    playStore: '',
    github: '',
    facebook: '',
    instagram: '',
    website: '',
    frameworks: [],
    programmingLanguages: [],
    tools: []

};

const AddProject = () => {
    const [project, setProject] = useState(initialValues);

    return (
        <>
            <MainCard
                title="Posts/ Add"
                secondary={
                    <CardSecondaryAction
                        icon={<ArrowBackIosNewTwoTone />}
                        title={"Back"}
                        link={"/projects"}
                    />
                }
            >
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing} justifyContent={"center"}>
                        <ProjectForm values={project} setValues={setProject} type={"Add"} />
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
};

export default AddProject;
