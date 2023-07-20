import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import { Grid } from "@mui/material";
import CardSecondaryAction from "ui-component/cards/CardSecondaryAction";
import { gridSpacing } from "store/constant";
import { ArrowBackIosNewTwoTone } from "@mui/icons-material";
import ServiceForm from "..";

export const initialValues = {
    serviceName: '',
    serviceDescription: '',
    programmingLanguages: [],
    frameworks: [],
    tools: []
};

const AddService = () => {
    const [project, setProject] = useState(initialValues);

    return (
        <>
            <MainCard
                title="Services/ Add"
                secondary={
                    <CardSecondaryAction
                        icon={<ArrowBackIosNewTwoTone />}
                        title={"Back"}
                        link={"/services"}
                    />
                }
            >
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing} justifyContent={"center"}>
                        <ServiceForm values={project} setValues={setProject} type={"Add"} />
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
};

export default AddService;
