import React from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 10
  },
  tablecell: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    color: 'blue',
    height: 1,
    borderBottom: "none",
    padding: "1px"
  }
});

function App(props) {
  const classes = useStyles();
  let [responseData, setResponseData] = React.useState([]);
  //const [hasMore, setHasMore] = React.useState(true);
  //let [isNext, isNextFunc] = React.useState(false);
  let [pageCount, setCount] = React.useState(1);
  //let [count,setLimit] = React.useState(50);
  const params = ({
    inv_no: props.dl
  });
  const fetchData = async () => {
    const response = await axios
      .get(
        `http://localhost:8081/1806087/view_corespondance?page=${1}&id=${params.inv_no}`
      )
      .catch((error) => {
        console.log(error);
      });    
      setResponseData([...responseData, ...response.data]);
  };
  
  function fetchMoreData(){
    fetchData();
    setCount(pageCount + 1);
    //setLimit(50);
  }
  
  return (
    <div className="">
      <InfiniteScroll
        dataLength={responseData.length}
        next={fetchMoreData}
        hasMore={pageCount<=1}
        loader={
          <div
            style={{ height: "1%", paddingLeft: "48%", overflow: "hidden" }}
          >
            <CircularProgress />
          </div>
        }
        scrollableTarget="gridscroll"
      >
        <div id=''>
        <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {responseData.map((data,index) => (
            <TableRow className={classes.tablerow} id='' hover role="checkbox" key={index.toString()}>
              
              <TableCell width="12%" className={classes.tablecell} align="left">{data.invoice_id}</TableCell>
              <TableCell width="10%" className={classes.tablecell} align="left">{data.invoice_id}</TableCell>
              <TableCell width="12%" className={classes.tablecell} align="left">{data.due_in_date}</TableCell>
              <TableCell width="12%" className={classes.tablecell} align="center">{data.due_in_date}</TableCell>
              <TableCell width="15%" className={classes.tablecell} align="center">{data.invoice_currency}</TableCell>
              <TableCell width="15%" className={classes.tablecell} align="center">{data.total_open_amount}</TableCell>
              <br></br><br></br>
            </TableRow>
           
          ))}
          
        </TableBody>
        </Table>
        </div>
      </InfiniteScroll>
      
    </div>
  );
}
export default App;
