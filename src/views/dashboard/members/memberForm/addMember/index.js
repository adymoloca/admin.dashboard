import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import { Grid } from "@mui/material";
import CardSecondaryAction from "ui-component/cards/CardSecondaryAction";
import { gridSpacing } from "store/constant";
import { ArrowBackIosNewTwoTone } from "@mui/icons-material";
import MemberForm from "views/dashboard/members/memberForm";

export const initialValues = {
    avatar: {},
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    linkedIn: "",
    github: "",
    index: 100,
};

const AddMember = () => {
    const [member, setMember] = useState(initialValues);

    return (
        <>
            <MainCard
                title="Members/ Add"
                secondary={
                    <CardSecondaryAction
                        icon={<ArrowBackIosNewTwoTone />}
                        title={"Back"}
                        link={"/members"}
                    />
                }
            >
                <Grid item xs={12}>
                    <Grid
                        container
                        spacing={gridSpacing}
                        justifyContent={"center"}
                    >
                        <MemberForm
                            values={member}
                            setValues={setMember}
                            type={"Add"}
                        />
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
};

export default AddMember;
