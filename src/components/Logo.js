import PropTypes from "prop-types";
// material
import { Box } from "@material-ui/core";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

/* app logo */

export default function Logo({ sx }) {
  return (
    <Box
      component="img"
      src="/assets/images/logo.svg"
      sx={{ width: 80, height: 80, ...sx }}
    />
  );
}