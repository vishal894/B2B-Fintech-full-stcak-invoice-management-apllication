import React from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Checkbox } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 1000
  },
  tablecell: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    color: 'whitesmoke',
    height: 5,
    borderBottom: "none",
    padding: "10px"
  }
});

function App() {
  const classes = useStyles();
  let [responseData, setResponseData] = React.useState([]);
  //const [hasMore, setHasMore] = React.useState(true);
  //let [isNext, isNextFunc] = React.useState(false);
  let [pageCount, setCount] = React.useState(1);
  //let [count,setLimit] = React.useState(50);

  const fetchData = async () => {
    const response = await axios
      .get(
        `http://localhost:8081/1806087/Fetchdata_servlet?page=${pageCount}`
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
    <div className="App">
      <InfiniteScroll
        dataLength={responseData.length}
        next={fetchMoreData}
        hasMore={pageCount<=2500}
        loader={
          <div
            style={{ height: "80%", paddingLeft: "48%", overflow: "hidden" }}
          >
            <CircularProgress />
          </div>
        }
        scrollableTarget="gridscroll"
      >
        <div>
        <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {responseData.map((data,index) => (
            <TableRow className={classes.tablerow} id='trow' hover role="checkbox" key={index.toString()}>
              <Checkbox></Checkbox>
              <TableCell width="12%" className={classes.tablecell} align="left">{data.cust_name}</TableCell>
              <TableCell width="10%" className={classes.tablecell} align="left">{data.cust_no}</TableCell>
              <TableCell width="12%" className={classes.tablecell} align="left">{data.inv_no}</TableCell>
              <TableCell width="12%" className={classes.tablecell} align="center">{data.amo}</TableCell>
              <TableCell width="15%" className={classes.tablecell} align="center">{data.due_date}</TableCell>
              <TableCell width="8%" className={classes.tablecell} align="right">
                --  
              </TableCell>
              <TableCell width="8%" className={classes.tablecell} align="left">
                --  
              </TableCell>
              <TableCell width="25%" className={classes.tablecell} align="left">Lorem lapsum</TableCell>
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
