import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { initialValues } from "./addCourse";
import { addCourse, updateCourse } from "store/actions/coursesActions";
import SnackNotify from "ui-component/notification/snackNotify";
import { Grid } from "@mui/material";
import { clearError } from "store/types/membersTypes";
import StyledFilledInput from "ui-component/input/filledInput";
import { gridSpacingSmall } from "store/constant";
import StyledButton from "ui-component/button/button";
import PropTypes from "prop-types";
import ChangePhotoButton from "ui-component/button/change-photo-button";
// import { handleDisabledStatusFormSubmit } from 'utils/handleDisabled';

const CourseForm = (props) => {
  const { values, setValues, type } = props;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state?.coursesState?.loading);
  const messageCourses = useSelector((state) => state?.coursesState?.error);
  const courseRed = useSelector((state) => state?.coursesState?.course);

  const navigate = useNavigate();

  const redirectFromAdd = () => {
    setValues(initialValues);
    navigate(-1);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setValues(courseRed);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "Add") {
      dispatch(addCourse(values, redirectFromAdd));
    } else if (type === "Edit") {
      dispatch(updateCourse(values, () => navigate(-1)));
    }
  };

  // const ignoreArr = type === 'Edit' ? ['courseAuthor', '_id'] : ['courseAuthor'];

  return (
    <>
      <SnackNotify
        open={messageCourses?.message?.length > 0}
        onClose={() => dispatch(clearError())}
        autoHide={1000}
        isError={messageCourses?.status}
        message={messageCourses?.message}
      />
      <form noValidate>
        <Grid
          container
          spacing={gridSpacingSmall}
          marginTop={2}
          justifyContent={"center"}
        >
          <Grid container item md={12} justifyContent={"center"}>
            <ChangePhotoButton
              showImageOn
              photo={values?.coursePhoto}
              height={150}
              width={800}
              name={"coursePhoto"}
              setPhoto={(photo) =>
                setValues((prev) => ({ ...prev, coursePhoto: photo }))
              }
            />
          </Grid>
          <Grid container item xl={5} justifyContent={"center"}>
            <StyledFilledInput
              name={"courseTitle"}
              values={values}
              setValues={setValues}
              label={"Title"}
              width={{ input: "500px" }}
            />
          </Grid>
          <Grid container item xl={5} justifyContent={"center"}>
            <StyledFilledInput
              name={"category"}
              label={"Category"}
              value={values}
              setValues={setValues}
              width={{ input: "500px" }}
              select
              options={["Javascript", "CSS", "HTML"]}
            />
          </Grid>
          <Grid container item xl={5} justifyContent={"center"}>
            <StyledFilledInput
              name={"difficulty"}
              label={"Difficulty"}
              value={values}
              setValues={setValues}
              width={{ input: "500px" }}
              select
              options={["Beginner", "Intermediate", "Advanced"]}
            />
          </Grid>
          <Grid container item xl={5} justifyContent={"center"}>
            <StyledFilledInput
              name={"courseAuthor"}
              values={values}
              setValues={setValues}
              label={"Author"}
              width={{ input: "500px" }}
            />
          </Grid>
          <Grid container item xl={5} justifyContent={"center"}>
            <StyledFilledInput
              name={"courseDescription"}
              values={values}
              setValues={setValues}
              label={"Description"}
              width={{ input: "500px" }}
            />
          </Grid>
          <Grid container item xl={5} justifyContent={"center"}>
            <StyledFilledInput
              name={"courseLink"}
              values={values}
              setValues={setValues}
              label={"Link"}
              width={{ input: "500px" }}
            />
          </Grid>
          {type === "Edit" && (
            <>
              <Grid
                container
                item
                xs={10}
                marginTop={2}
                justifyContent={"center"}
              >
                <StyledButton
                  name={"reset-course"}
                  label={"Cancel"}
                  // disabled={handleDisabledStatusFormSubmit(
                  //   values,
                  //   courseRed,
                  //   type,
                  //   ignoreArr
                  // )}
                  loading={loading}
                  variant={"secondary"}
                  handleClick={handleCancel}
                  type={"submit"}
                  width={"400px"}
                />
              </Grid>
            </>
          )}
          <Grid
            container
            item
            xs={10}
            marginBottom={2}
            marginTop={type === "Add" ? 2 : 0}
            justifyContent={"center"}
          >
            <StyledButton
              name={type === "Add" ? "add-course" : "edit-course"}
              label={type === "Add" ? "Add course" : "Edit course"}
              // disabled={handleDisabledStatusFormSubmit(
              //   values,
              //   courseRed,
              //   type,
              //   ignoreArr
              // )}
              loading={loading}
              variant={"primary"}
              handleClick={handleSubmit}
              type={"submit"}
              width={"400px"}
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

CourseForm.defaultProps = {
  values: {},
  setValues: () => undefined,
  type: "Add",
};

CourseForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  type: PropTypes.oneOf(["Add", "Edit"]),
};

export default CourseForm;
