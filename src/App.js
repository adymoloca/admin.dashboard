import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'utils/routes';

// defaultTheme
import themes from 'utils/themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { decodeAccessToken } from 'utils/decode';
import { refresh } from 'store/actions/userActions';
import { logout } from 'store/types/userTypes';

// ==============================|| APP ||============================== //

const App = () => {

    const dispatch = useDispatch();

    const customization = useSelector((state) => state.customization);
    const token = useSelector((state) => state?.userState?.token);
    const refreshToken = useSelector((state) => state?.userState?.refreshToken);

    useEffect(() => {
        const verifyToken = () => {
            const { exp } = decodeAccessToken(token);
            if (exp * 1000 - Date.now() <= 120000 && exp * 1000 - Date.now() > 0)
                dispatch(refresh({ refreshToken: refreshToken }));
            else if (exp * 1000 - Date.now() <= 0)
                dispatch(logout());
        }
        window.addEventListener('click', verifyToken)
        return () => window.removeEventListener('click', verifyToken)
    }, [dispatch, token, refreshToken])

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
