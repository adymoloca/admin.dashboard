import React, { useEffect, useState } from "react";
import { Avatar, Grid } from "@mui/material";
import StyledFilledInput from "ui-component/input/filledInput";
import { gridSpacing } from "store/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMember, updateMember } from "store/actions/membersActions";
import { clearError } from "store/types/membersTypes";
import { initialValues } from "./addMember";
import StyledButton from "ui-component/button/button";
import SnackNotify from "ui-component/notification/snackNotify";
import { useNavigate } from "react-router";
import PhotoInput from "ui-component/button/photoInput";
import PropTypes from "prop-types";
import { handleDisabledStatusFormSubmit } from "utils/handleDisabled";
import { getBase64Image } from "utils/base64";

const MemberForm = (props) => {
  const { values, setValues, type } = props;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state?.membersState?.loading);
  const messageMembers = useSelector((state) => state?.membersState?.error);
  const memberRed = useSelector((state) => state?.membersState?.member);
  const [avatarImg, setAvatarImg] = useState("");
  const [inputOpen, setInputOpen] = useState(false);

  const navigate = useNavigate();

  const redirectFromAdd = () => {
    setValues(initialValues);
    navigate(-1);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setValues(memberRed);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "Add") {
      dispatch(addMember(values, redirectFromAdd));
    } else if (type === "Edit") {
      dispatch(updateMember(values, () => navigate(-1)));
    }
  };

  const loadAvatar = async (photo) => {
    const base64 = await getBase64Image(photo);
    setAvatarImg(base64);
  };

  useEffect(() => {
    if (values.avatar && values.avatar.name?.length > 0 && inputOpen) {
      loadAvatar(values.avatar);
    } else {
      if (type === "Edit") setAvatarImg(values.avatar);
      else {
        setAvatarImg("");
      }
    }
  }, [values.avatar, inputOpen, type]);

  const ignoreArr = type === "Edit" ? ["avatar", "likes", "__v"] : ["avatar"];

  return (
    <>
      <SnackNotify
        open={messageMembers?.message?.length > 0}
        onClose={() => dispatch(clearError())}
        autoHide={1000}
        isError={messageMembers?.status}
        message={messageMembers?.message}
      />
      <form noValidate>
        <Grid container spacing={gridSpacing} justifyContent={"center"}>
          <Grid container item xs={12} marginTop={3} justifyContent={"center"}>
            <Avatar sx={{ width: 100, height: 100 }} src={avatarImg} />
          </Grid>
          <Grid
            container
            item
            xl={12}
            marginBottom={3}
            justifyContent={"center"}
          >
            <PhotoInput
              name={`avatar-photo`}
              photo={values["avatar"]}
              setPhoto={(photo) => {
                setInputOpen(true);
                setValues({ ...values, avatar: photo });
              }}
            />
          </Grid>
          <Grid container item xl={5} justifyContent={"center"}>
            <StyledFilledInput
              name={"firstName"}
              values={values}
              setValues={setValues}
              label={"First name"}
            />
          </Grid>
          <Grid container item xl={5} justifyContent={"center"}>
            <StyledFilledInput
              name={"lastName"}
              values={values}
              setValues={setValues}
              label={"Last name"}
            />
          </Grid>
          <Grid container item xl={5} justifyContent={"center"}>
            <StyledFilledInput
              name={"email"}
              values={values}
              setValues={setValues}
              label={"Email"}
            />
          </Grid>
          <Grid container item xl={5} justifyContent={"center"}>
            <StyledFilledInput
              name={"position"}
              values={values}
              setValues={setValues}
              label={"Position"}
            />
          </Grid>
          <Grid container item xl={5} justifyContent={"center"}>
            <StyledFilledInput
              name={"linkedIn"}
              values={values}
              setValues={setValues}
              label={"LinkedIn profile"}
            />
          </Grid>
          <Grid container item xl={5} justifyContent={"center"}>
            <StyledFilledInput
              name={"github"}
              values={values}
              setValues={setValues}
              label={"Github profile"}
            />
          </Grid>
          <Grid container item xl={5} justifyContent={"center"}>
            <StyledFilledInput
              name={"index"}
              values={values}
              setValues={setValues}
              label={"Show index"}
              type={"number"}
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
                  name={"reset-member"}
                  label={"Cancel"}
                  disabled={handleDisabledStatusFormSubmit(
                    values,
                    memberRed,
                    type,
                    ignoreArr
                  )}
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
              name={type === "Add" ? "add-member" : "edit-member"}
              label={type === "Add" ? "Add member" : "Edit member"}
              disabled={handleDisabledStatusFormSubmit(
                values,
                memberRed,
                type,
                ignoreArr
              )}
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

MemberForm.defaultProps = {
  values: {},
  setValues: () => undefined,
  type: "Add",
};

MemberForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  type: PropTypes.oneOf(["Add", "Edit"]),
};

export default MemberForm;
