import { Box, Button, CircularProgress } from "@mui/material";
import AnimateButton from "ui-component/extended/AnimateButton";
import PropTypes from "prop-types";

const StyledButton = (props) => {
  const { name, label, loading, handleClick, variant, type, width, disabled, sx } =
    props;

  const getWidth = (width) => {
    if (width === "fullWidth") return "100%";
    else return width;
  };

  return (
    <Box width={getWidth(width)} sx={sx} id={`${name}-button-container`}>
      <AnimateButton>
        <Button
          id={`${name}-${type}-button`}
          disableRipple
          disableElevation
          fullWidth
          disabled={disabled || loading}
          size="large"
          type={type}
          variant={variant === "primary" ? "contained" : "outlined"}
          color="secondary"
          onClick={handleClick}
        >
          {loading ? <CircularProgress size={17} /> : label}
        </Button>
      </AnimateButton>
    </Box>
  );
};

StyledButton.defaultProps = {
  label: "",
  loading: false,
  handleClick: () => undefined,
  variant: "primary",
  type: "submit",
  width: "fullWidth",
  sx: {}
};

StyledButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sx: PropTypes.object
};

export default StyledButton;
