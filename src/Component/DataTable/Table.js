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
import { useHistory } from "react-router-dom";


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 12,
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

    const history= useHistory()

    // const edittherecord = (p) => {
    //   console.log(p+"----------in table")
    //   history.push(`/editrec/id?${p}`);
    // }

    return(
<TableContainer  component={Paper}>
<Badge style={{margin:'20px'}} color="success"> {`Found ${data.length} records`}</Badge>
<Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell align="left">Job Title</StyledTableCell>
            <StyledTableCell align="left">Job Start Date</StyledTableCell>
            <StyledTableCell align="left">University Name</StyledTableCell>
            <StyledTableCell align="left">Graduation Year</StyledTableCell>
            <StyledTableCell align="left">Specialization</StyledTableCell>
            <StyledTableCell align="left">Career Link</StyledTableCell>
            <StyledTableCell align="left">Edit Details</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row) => (
            <StyledTableRow key={row.company}>
              <StyledTableCell component="th" scope="row">
                {row.company.companyName}
              </StyledTableCell>
              <StyledTableCell align="left">{row.Job_Title}</StyledTableCell>
              <StyledTableCell align="left">{row.Job_Start_Date}</StyledTableCell>
              <StyledTableCell align="left">{row.University_Name}</StyledTableCell>
              <StyledTableCell align="left">{row.Graduation_Year}</StyledTableCell>
              <StyledTableCell align="left">{row.Specialization}</StyledTableCell>
              <StyledTableCell align="left" >
                  
                  <a style={{ textDecoration: 'none', backgroundColor: 'pink' }}href={`${row.company.careerUrl}`} target="_blank">Apply</a>
                  </StyledTableCell>
              <StyledTableCell align="left" target="_blank"><a href={'/editrec/'+row._id}  style={{ textDecoration: 'none', backgroundColor: 'pink' }} >Edit</a></StyledTableCell>
              </StyledTableRow>
          ))}
{/* <StyledTableCell align="left"onClick={()=> edittherecord(row._id)} target="_blank">Edit</StyledTableCell> */}

        </TableBody>
    </Table>
</TableContainer>
    );
}

export default CustomizedTables;