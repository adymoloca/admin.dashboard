import { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import { Grid } from "@mui/material";
import CardSecondaryAction from "ui-component/cards/CardSecondaryAction";
import { gridSpacing } from "store/constant";
import { ArrowBackIosNewTwoTone } from "@mui/icons-material";
import CourseForm from "..";

export const initialValues = {
  courseTitle: "",
  category: "",
  difficulty: "",
  coursePhoto: "",
  courseLink: "",
  courseAuthor: "",
};

const AddCourse = () => {
  const [course, setCourse] = useState(initialValues);

  return (
    <>
      <MainCard
        title="Courses/ Add"
        secondary={
          <CardSecondaryAction
            icon={<ArrowBackIosNewTwoTone />}
            title={"Back"}
            link={"/courses"}
          />
        }
      >
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing} justifyContent={"center"}>
            <CourseForm values={course} setValues={setCourse} type={"Add"} />
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
};

export default AddCourse;
