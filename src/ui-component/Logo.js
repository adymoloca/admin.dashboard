import { Fragment } from "react";
import PropTypes from "prop-types";

// ==============================|| LOGO SVG ||============================== //

const logo =
    "https://storage.googleapis.com/sbdcloud/smartboxdigital/dashboard/logo-sbd.svg";

const Logo = (props) => {
    // const theme = useTheme();

    const { width } = props;

    return (
        <Fragment>
            <img
                src={logo}
                alt="SmartBoxDigital"
                width={width}
                height={"auto"}
            />
        </Fragment>
    );
};

Logo.defaultProps = {
    width: "175",
};

Logo.propTypes = {
    width: PropTypes.string,
};

export default Logo;
