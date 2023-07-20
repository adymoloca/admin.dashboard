import { Box, Typography } from '@mui/material';
import React from 'react';

import BasicModal from './ModalComponent';

const HeaderContent = (props) => {
    const { name, email, date, id, accepted, pending } = props;

    return (
        <>
            <Box
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <span style={{ width: '25%' }}>{name}</span>
                <span style={{ width: '25%' }}>{email}</span>
                <span style={{ width: '25%' }}>{date}</span>

                <Box style={{ width: '25%', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    {accepted ? (
                        <Typography style={{ color: '#00e676' }}>Accepted</Typography>
                    ) : pending ? (
                        <>
                            <BasicModal applierName={name} accept applierId={id} />
                            <BasicModal applierName={name} applierId={id} />
                        </>
                    ) : (
                        <Typography color={'error'}>Rejected</Typography>
                    )}
                </Box>
            </Box>
        </>
    );
};

export default HeaderContent;
