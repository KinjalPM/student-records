import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Badge } from 'reactstrap';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
function  CustomizedTables({data}){
    // console.log('data'+data);
    // (data.map((row)=>{
    //     console.log("Row----"+row.company.companyName)
    // }))
    const classes = useStyles();
    return(
<TableContainer  component={Paper}>
<Badge style={{margin:'20px'}} color="success"> {`Found ${data.length} records`}</Badge>
<Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell align="right">Job Title</StyledTableCell>
            <StyledTableCell align="right">Job Start Date</StyledTableCell>
            <StyledTableCell align="right">University Name</StyledTableCell>
            <StyledTableCell align="right">Graduation Year</StyledTableCell>
            <StyledTableCell align="right">Specialization</StyledTableCell>
            <StyledTableCell align="right">Career Link</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row) => (
            <StyledTableRow key={row.company}>
              <StyledTableCell component="th" scope="row">
                {row.company.companyName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Job_Title}</StyledTableCell>
              <StyledTableCell align="right">{row.Job_Start_Date}</StyledTableCell>
              <StyledTableCell align="right">{row.University_Name}</StyledTableCell>
              <StyledTableCell align="right">{row.Graduation_Year}</StyledTableCell>
              <StyledTableCell align="right">{row.Specialization}</StyledTableCell>
              <StyledTableCell align="right" >
                  
                  <a style={{ textDecoration: 'none', backgroundColor: 'pink' }}href={`${row.company.careerUrl}`} target="_blank">Apply</a>
                  
                  </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
    </Table>
</TableContainer>
    );
}

export default CustomizedTables;