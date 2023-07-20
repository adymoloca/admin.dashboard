import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Grid } from '@mui/material';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { ArrowBackIosNewTwoTone } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import ServiceForm from '..';

const EditService = () => {

    const serviceRed = useSelector((state) => state?.servicesState?.service);

    const [service, setProject] = useState(serviceRed);

    return (
        <>
            <MainCard title="Services/ Edit" secondary={<CardSecondaryAction icon={<ArrowBackIosNewTwoTone />} title={'Back'} link={'/services'} />}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <ServiceForm values={service} setValues={setProject} type={'Edit'} />
                    </Grid>
                </Grid>
            </MainCard>
        </>
    )
}

export default EditService;