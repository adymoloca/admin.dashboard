import { ButtonBase, Typography } from "@mui/material";
import { Upload } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useState } from "react";
import SnackNotify from "ui-component/notification/snackNotify";

const PhotoInput = (props) => {
    const { name, photo, setPhoto } = props;
    const [error, setError] = useState("");

    const createCoverPhoto = async (photo) => {
        const image = await photo;
        photo?.size < 2000000
            ? setPhoto(image) && setError("")
            : setError("File size too large. -> max 2MB");
    };

    return (
        <>
            <input
                type={"file"}
                name={`${name}-button-input`}
                accept="image/*"
                id={`${name}-button-input`}
                style={{ display: "none", height: 0, width: 0 }}
                onChange={(e) => createCoverPhoto(e.target.files[0])}
            />
            <ButtonBase>
                <label
                    htmlFor={`${name}-button-input`}
                    style={{ height: "100%", width: "100%", cursor: "pointer" }}
                >
                    <Upload />
                    <Typography paddingLeft={1}>
                        {photo ? "Change photo" : "Add photo"}
                    </Typography>
                </label>
            </ButtonBase>
            <SnackNotify
                open={error.length > 0}
                message={"File size too large. (max 40KB)"}
                onClose={() => setError("")}
                autoHide={"2000"}
                isError={true}
            >
                {error}
            </SnackNotify>
        </>
    );
};

PhotoInput.defaultProps = {
    photo: {},
    setPhoto: () => undefined,
};

PhotoInput.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    setPhoto: PropTypes.func,
};

export default PhotoInput;
