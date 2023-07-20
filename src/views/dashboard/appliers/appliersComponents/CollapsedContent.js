import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import moment from 'moment';

const titles = [
    {
        label: 'Name',
        key: 'name',
    },
    {
        label: 'Email',
        key: 'email',
    },
    {
        label: 'Register date',
        key: 'createdAt',
    },
    {
        label: 'Phone number',
        key: 'phoneNumber',
    },
    {
        label: 'After eighteen',
        key: 'afterEighteen',
    },
    {
        label: 'Education',
        key: 'graduatedSchool',
    },
    {
        label: 'English level',
        key: 'englishLevel',
    },
    {
        label: 'Budget',
        key: 'budget',
    },
];

const CollapsedContent = (props) => {
    const { data } = props;

    return (
        <>
            <TableContainer component={Paper} sx={{ display: 'flex', gap: '30px' }}>
                <Table sx={{ width: '50%' }} size='small' aria-label='more-applier-info'>
                    <TableBody>
                        {titles.slice(0, 4).map((el) => {
                            return (
                                <TableRow key={el.key}>
                                    <TableCell align='left'>{el?.label}:</TableCell>
                                    <TableCell align='left'>
                                        {el?.key === 'createdAt' ? moment(data[el?.key]).format('ll') : data[el?.key]}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                <Divider orientation='vertical' flexItem>
                    &#8226;
                </Divider>
                <Table sx={{ width: '50%' }} size='small' aria-label='more-applier-info'>
                    <TableBody>
                        {titles.slice(4).map((el) => {
                            return (
                                <TableRow key={el?.key}>
                                    <TableCell align='left'>{el?.label}:</TableCell>
                                    <TableCell align='left'>
                                        {el?.key === 'afterEighteen' ? data[el.key]?.toString() : data[el.key]}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default CollapsedContent;
