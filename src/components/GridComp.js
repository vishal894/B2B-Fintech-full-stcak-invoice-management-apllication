import React from 'react';
import Paper from '@material-ui/core/Paper';
import Buttons from '../components/Buttons';
import Table from '../components/Table'
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox } from '@material-ui/core';

const useStyles = makeStyles({
  tablecell: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    color: '#97A1A9',
    borderBottom: "none",
    padding: "10px"
  }
});

export default function GridComp() {
  const classes = useStyles();
  return (
    <div>
      <Paper id='gridcomp' elevation={10} >
        <Buttons />
        <div>
        <TableHead>
          <TableRow>
            <Checkbox></Checkbox>
            <TableCell width="12%" className={classes.tablecell} align='left'>Customer Name</TableCell>
            <TableCell width="10%" className={classes.tablecell} align="left">Customer #</TableCell>
            <TableCell width="10%" className={classes.tablecell} align="left">Invoice #</TableCell>
            <TableCell width="10%" className={classes.tablecell} align="left">Invoice Amount</TableCell>
            <TableCell width="10%" className={classes.tablecell} align="right">Due Date</TableCell>
            <TableCell width="15%" className={classes.tablecell} align="left">Predicted Payment Date</TableCell>
            <TableCell width="20%" className={classes.tablecell} align="left">Predicted Payment Bucket</TableCell>
            <TableCell width="10%" className={classes.tablecell} align='left'>Notes</TableCell>
          </TableRow>
        </TableHead>
        </div>
      <div id='gridscroll'>
        <Table />
      </div>
      </Paper>   
    </div>
  );
}
