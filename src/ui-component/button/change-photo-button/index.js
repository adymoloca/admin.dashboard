import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Publish } from "@mui/icons-material";

const ChangePhotoButton = ({
  name,
  setPhoto,
  width,
  height,
  photo,
  disabled,
  showImageOn,
}) => {
  const [source, setSource] = useState(photo || "");

  const createCoverPhoto = async (photo) => {
    const img = await photo;
    setSource(img);
  };

  const changePhoto = useCallback(() => {
    source?.size < 2000000 && setPhoto(source);
    // eslint-disable-next-line
  }, [source]);

  useEffect(() => {
    changePhoto();
  }, [changePhoto]);

  return (
    <>
      <input
        type={"file"}
        name={`select-${name})`}
        accept="image/*"
        id={`select-${name})`}
        style={{ display: "none", height: 0, width: 0 }}
        onChange={(e) => createCoverPhoto(e.target.files[0])}
      />
      <Button
        disabled={disabled}
        style={{
          width: width || 200,
          height: height || 60,
          backgroundImage: `url(${
            showImageOn && !!photo?.size && URL.createObjectURL(photo)
          })`,
          opacity: disabled ? "50%" : "100%",
          color: showImageOn && photo ? "#fff" : "#000",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: 0,
        }}
      >
        <label
          htmlFor={`select-${name})`}
          style={{
            width: "100%",
            cursor: "pointer",
            height: height || 60,
            display: "flex",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: !disabled && photo ? "#00000090" : "#00000000",
          }}
        >
          <Publish style={{ paddingRight: 10 }} /> {photo ? "Change" : "Add"}{" "}
          photo
        </label>
      </Button>
    </>
  );
};

export default ChangePhotoButton;
