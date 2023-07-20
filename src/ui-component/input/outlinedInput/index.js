import { FormControl, InputLabel, OutlinedInput, FormHelperText } from "@mui/material";
import { useTheme } from "@mui/material/styles";


const StyledOutlinedInput = (props) => {

    const { name, values, setValues, isError, handleBlur, errorMessage } = props;
    const theme = useTheme();

    return (
        <FormControl fullWidth error={isError} sx={{ ...theme.typography.customInput }}>
            <InputLabel htmlFor={`outlined-adornment-${name}-${window.location.pathname}`}>Phone number</InputLabel>
            <OutlinedInput
                id={`outlined-adornment-${name}-${window.location.pathname}`}
                type="text"
                value={values[name]}
                name="phone"
                onBlur={handleBlur}
                onChange={setValues}
                inputProps={{}}
            />
            {isError && (
                <FormHelperText error id={`standard-weight-helper-text-${name}-${window.location.pathname}`}>
                    {errorMessage}
                </FormHelperText>
            )}
        </FormControl>
    )
}

export default StyledOutlinedInput;