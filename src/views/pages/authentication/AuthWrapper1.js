// material-ui
import { styled } from '@mui/material/styles';

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const AuthWrapper1 = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh'
}));

export default AuthWrapper1;
