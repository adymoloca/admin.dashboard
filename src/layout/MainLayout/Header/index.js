import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
// import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
// import NotificationSection from './NotificationSection';

// assets
import { ArrowBackIosNewTwoTone } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import './index.css';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
    const theme = useTheme();
    const open = useSelector((state) => state?.customization?.opened);

    return (
        <>
            {/* logo & toggler button */}
            <Box
                sx={{
                    width: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto',
                    },
                }}>
                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden', marginRight: 1 }}>
                    <Avatar
                        variant='rounded'
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            '&:hover': {
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light,
                            },
                        }}
                        onClick={handleLeftDrawerToggle}
                        color='inherit'>
                        <ArrowBackIosNewTwoTone
                            stroke={1.5}
                            size='1.3rem'
                            className={`${open ? 'turn-to-right' : 'turn-to-left'}`}
                        />
                    </Avatar>
                </ButtonBase>
                <Box component='span' sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>
            </Box>

            {/* header search */}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />

            {/* notification & profile */}
            {/* <NotificationSection /> */}
            <ProfileSection />
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func,
};

export default Header;
