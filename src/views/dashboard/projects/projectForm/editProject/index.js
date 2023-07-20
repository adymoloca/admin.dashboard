import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Grid } from '@mui/material';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { ArrowBackIosNewTwoTone } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import ProjectForm from '..';

const EditPost = () => {

    const projectRed = useSelector((state) => state?.projectsState?.project);

    const [project, setProject] = useState(projectRed);

    return (
        <>
            <MainCard title="Projects/ Edit" secondary={<CardSecondaryAction icon={<ArrowBackIosNewTwoTone />} title={'Back'} link={'/projects'} />}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <ProjectForm values={project} setValues={setProject} type={'Edit'} />
                    </Grid>
                </Grid>
            </MainCard>
        </>
    )
}

export default EditPost;