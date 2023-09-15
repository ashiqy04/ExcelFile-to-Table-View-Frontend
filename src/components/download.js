import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularWithValueLabel from './progress';


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

export default function Download() {

    const [data, setData]=useState([])

    const [loading, setLoading] = useState(true);
   
  
    const loadUser = async () => {
      try {
        const result = await axios.get('http://localhost:8080/api/download');
        setData(result.data);
        setLoading(false);
        
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
  
    useEffect(() => {
      loadUser();
    }, []);
  
    if (loading) {
      return <CircularWithValueLabel/>;
    }
  
console.log("data is showing", data)
  return (
    <div>
    <h1>Employee Table</h1>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  align="left">Employee ID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Department</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.Id}
              </StyledTableCell>
              
              <StyledTableCell align="left">{row.employeeName}</StyledTableCell>
              <StyledTableCell align="left">{row.department}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
  )
}
