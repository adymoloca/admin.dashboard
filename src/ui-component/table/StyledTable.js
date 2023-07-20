import React, { useState, useEffect } from 'react';
import {
  TablePagination,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Avatar,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/styles';
import Loader from 'ui-component/Loader';
import PropTypes from 'prop-types';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTable = (props) => {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { name, data, loading } = props;

  useEffect(() => {
    setColumns(data?.columns);
    setRows(data?.rows);
  }, [data]);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      {columns?.map((item, index) => {
                        return (
                          <StyledTableCell
                            sx={{ width: item.width }}
                            align={item.align}
                            key={`${name}-table-header-cell-${index}`}
                          >
                            {item.label}
                          </StyledTableCell>
                        );
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      ?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        return (
                          <StyledTableRow
                            key={`${name}-table-body-row-${index}`}
                          >
                            {columns?.map((column, index2) => {
                              if (column.key === 'avatar')
                                return (
                                  <StyledTableCell
                                    sx={{ width: column.width, paddingLeft: 5 }}
                                    align={column.align}
                                    key={`${name}-table-body-avatar-cell-${index2}-${index}`}
                                  >
                                    <Avatar src={row[column.key]} />
                                  </StyledTableCell>
                                );
                              else
                                return (
                                  <StyledTableCell
                                    sx={{ width: column.width }}
                                    align={column.align}
                                    key={`${name}-table-body-cell-${index2}-${index}`}
                                  >
                                    {row[column.key]}
                                  </StyledTableCell>
                                );
                            })}
                          </StyledTableRow>
                        );
                      })}
                    <TableRow>
                      <TablePagination
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[5, 10, 15]}
                        count={rows.length}
                        page={page}
                        onPageChange={(e, newPage) => setPage(newPage)}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </>
      )}
    </>
  );
};

StyledTable.defaultProps = {
  name: '',
  data: { rows: [], columns: [] },
  loading: false,
};

StyledTable.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.exact({
    rows: PropTypes.array,
    columns: PropTypes.array,
  }).isRequired,
  loading: PropTypes.bool,
};

export default StyledTable;
