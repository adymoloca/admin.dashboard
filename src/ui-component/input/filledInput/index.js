import React from 'react';
import { Box, InputLabel, FilledInput, Select, MenuItem, useTheme, Chip } from '@mui/material';
import PropTypes from 'prop-types';

const StyledFilledInput = (props) => {
    const {
        name,
        values,
        setValues,
        type,
        fontSize,
        fontWeight,
        padding,
        height,
        flex,
        label,
        width,
        multiline,
        rows,
        disabled,
        array,
        select,
        options,
    } = props;

    const theme = useTheme();

    const handleTextChange = (newValue) => {
        if (select && array) {
            const temp = values[name] ? [...values[name]] : [];
            const index = temp?.indexOf(newValue);
            index >= 0 ? temp?.splice(index, 1) : temp?.push(newValue);
            setValues((prev) => ({ ...prev, [name]: temp }));
        } else
            setValues((prev) => ({
                ...prev,
                [name]: array && !select ? newValue?.split(',') : newValue,
            }));
    };

    const getDefaultValue = () => (array ? [] : '');

    return (
        <Box display={flex ? 'flex' : 'block'}>
            {/* <form> */}
            {/* <FormControl fullWidth sx={{display: 'flex'}}> */}
            {label?.length > 0 && (
                <InputLabel
                    id={`${name}-input-label-${window.location.pathname}`}
                    sx={{
                        display: flex ? 'flex' : 'block',
                        paddingBottom: padding?.label?.bottom,
                        paddingLeft: padding?.label?.left,
                        fontWeight: fontWeight || 500,
                        fontSize: fontSize?.label || 17,
                        color: theme.palette.getContrastText('#fff'),
                        alignItems: 'flex-end',
                        width: width?.label || '160px',
                    }}>
                    {label}
                </InputLabel>
            )}
            {select ? (
                <Select
                    id={`${name}-filled-select-${window.location.pathname}`}
                    defaultValue={getDefaultValue(values[name])}
                    variant='filled'
                    name={name}
                    sx={{
                        height: height || '35px',
                        fontSize: fontSize?.input || 20,
                        paddingBottom: padding?.input?.bottom || '10px',
                        paddingLeft: padding?.input?.left || '5px',
                        width: width?.input || '350px',
                    }}
                    inputProps={{ name: name }}
                    disabled={disabled}
                    multiple={array}
                    renderValue={(selected) =>
                        array ? (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {Array.isArray(selected) &&
                                    selected?.map((value) => (
                                        <Chip key={value} label={value} style={{ height: '25px' }} />
                                    ))}
                            </Box>
                        ) : (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>{selected}</Box>
                        )
                    }>
                    {options?.map((el, index) => {
                        return (
                            <MenuItem
                                key={`${el}-${index}`}
                                onClick={(e) => handleTextChange(e?.target?.textContent)}
                                value={el}>
                                {el}
                            </MenuItem>
                        );
                    })}
                </Select>
            ) : (
                <FilledInput
                    id={`${name}-filled-input-${window.location.pathname}`}
                    type={type || 'text'}
                    autoComplete='off'
                    value={array ? values[name]?.join(',') : values[name]}
                    multiline={multiline}
                    rows={rows}
                    name={name}
                    sx={{
                        height: height || '35px',
                        fontSize: fontSize?.input || 20,
                        paddingBottom: padding?.input?.bottom || '10px',
                        paddingLeft: padding?.input?.left || '5px',
                        width: width?.input || '350px',
                    }}
                    onChange={(e) => handleTextChange(e.target.value)}
                    inputProps={{}}
                    disabled={disabled}
                />
            )}
            {/* </FormControl> */}
            {/* </form> */}
        </Box>
    );
};

StyledFilledInput.defaultProps = {
    name: '',
    values: {},
    setValues: () => undefined,
    type: 'text',
    flex: false,
    fontSize: {
        label: 17,
        input: 20,
    },
    fontWeight: 400,
    padding: {
        label: {
            bottom: '10px',
            left: '0px',
        },
        input: {
            bottom: '15px',
            left: '5px',
        },
    },
    height: '35px',
    label: '',
    width: {
        label: '160px',
        input: '350px',
    },
    multiline: false,
    rows: 1,
    disabled: false,
    array: false,
    select: false,
    options: [],
};

StyledFilledInput.propTypes = {
    name: PropTypes.string.isRequired,
    values: PropTypes.object.isRequired,
    setValues: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'email', 'password']),
    fontSize: PropTypes.exact({
        label: PropTypes.number,
        input: PropTypes.number,
    }),
    fontWeight: PropTypes.number,
    padding: PropTypes.exact({
        label: PropTypes.exact({
            left: PropTypes.string,
            bottom: PropTypes.string,
        }),
        input: PropTypes.exact({
            left: PropTypes.string,
            bottom: PropTypes.string,
        }),
    }),
    height: PropTypes.string,
    flex: PropTypes.bool,
    label: PropTypes.string,
    width: PropTypes.exact({
        label: PropTypes.string,
        input: PropTypes.string,
    }),
    multiline: PropTypes.bool,
    rows: PropTypes.number,
    disabled: PropTypes.bool,
    array: PropTypes.bool,
    select: PropTypes.bool,
    options: PropTypes.array,
};

export default StyledFilledInput;
