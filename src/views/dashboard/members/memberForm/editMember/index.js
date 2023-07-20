import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Grid } from '@mui/material';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { ArrowBackIosNewTwoTone } from '@mui/icons-material';
import MemberForm from '..';
import { useSelector } from 'react-redux';

const EditMember = () => {

    const memberRed = useSelector((state) => state?.membersState?.member);

    const [member, setMember] = useState(memberRed);

    return (
        <>
            <MainCard title="Members/ Edit" secondary={<CardSecondaryAction icon={<ArrowBackIosNewTwoTone/>} title={'Back'} link={'/members'} />}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <MemberForm values={member} setValues={setMember} type={'Edit'} />
                    </Grid>
                </Grid>
            </MainCard>
        </>   
    )
}

export default EditMember;