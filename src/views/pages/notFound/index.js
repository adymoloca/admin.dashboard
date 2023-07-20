import AuthCardWrapper from '../authentication/AuthCardWrapper';
import AuthWrapper1 from '../authentication/AuthWrapper1';
import { Box, Typography } from '@mui/material';
import Logo from 'ui-component/Logo';
import StyledButton from 'ui-component/button/button';
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <AuthWrapper1>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <AuthCardWrapper
                        sx={{
                            minHeight: 300,
                            maxWidth: { xs: 400, lg: 475 },
                            margin: { xs: 2.5, md: 3 },
                            '& > *': {
                                flexGrow: 1,
                                flexBasis: '50%',
                            },
                        }}>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            textAlign={'center'}
                            minHeight={300}>
                            <Typography variant='h1'>SORRY WE'VE NOT FOUND THE PAGE SEARCHED BY YOU</Typography>
                            <Logo width={'300'} />
                            <StyledButton name={'go-to-home'} label={'GO TO HOME'} handleClick={() => navigate('/')} />
                        </Box>
                    </AuthCardWrapper>
                </Box>
            </AuthWrapper1>
        </>
    );
};

export default NotFound;
