import React from 'react';
import Paper from '@material-ui/core/Paper';
import Buttons from '../components/Buttons';
import Table from '../components/Table'
import ViewTabledata from '../components/ViewTabledata'
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox } from '@material-ui/core';

const useStyles = makeStyles({
  tablecell: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    color: '#whitesmoke',
    borderBottom: "none",
    padding: "10px"
  },
  
});

export default function GriViewcorespondenceTabledComp() {
  const classes = useStyles();
  let [responseData, setResponseData] = React.useState([]);
  let [pageCount, setCount] = React.useState(1);
  return (
    <div id=''>
        <TableHead>
          <TableRow>
            
            <TableCell width="5%" className={classes.tablecell} align='left'>Number</TableCell>
            <TableCell width="5%" className={classes.tablecell} align="left">PO Num</TableCell>
            <TableCell width="1%" className={classes.tablecell} align="left">Inv_Date</TableCell>
            <TableCell width="5%" className={classes.tablecell} align="left">Due Date</TableCell>
            <TableCell width="5%" className={classes.tablecell} align="right">Company</TableCell>
            <TableCell width="5%" className={classes.tablecell} align="left"> Amount</TableCell>
            
          </TableRow>
          
        </TableHead>
        <ViewTabledata dl={12345}/>
        </div>
        
    
    
       
    
  );
}
