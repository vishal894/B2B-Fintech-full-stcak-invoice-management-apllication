import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import axios from "axios";
const useStyles = makeStyles({
    searchButton:{            
        top: "0px",
        //left: "180px", //180px
       // width: "250px",
        //height: "25px",
       //background: "#283A46 0% 0% no-repeat padding-box",
       //width: 'fit-content',
         //flex: 1,
     //height: '0.5px',
       border: "1px solid #356680",
        borderRadius: "10px",
        color: "#FFFFFF",
        opacity: "1",
        textAlign: "center"

    },
    col:{
        color: "#FFFFFF"
      }
    
})

function SearchComponent() {
    const classes = useStyles();
    let [responseData, setResponseData] = React.useState([]);
  //const [hasMore, setHasMore] = React.useState(true);
  //let [isNext, isNextFunc] = React.useState(false);
     let [pageCount, setCount] = React.useState(1);
  //let [count,setLimit] = React.useState(50);
  const params = ({
    inv_no: 1234
  });
  const fetchData = async () => {
    const response = await axios
      .get(
        `http://localhost:8081/1806087/Search_invoiceservlet?page=${pageCount}&id=${params.inv_no}`
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
        <div>
            {/* <Button variant="outlined" color="primary" className={classes.searchButton} size="small" endIcon={<SearchIcon/>}>Search by invoice number</Button> */}
            {/* <TextField  label="Search by invoice number"  className={classes.searchButton} size="small" endIcon={<SearchIcon/>} /> */}
          
           {/* <Input  type="text" variant="outlined" color="primary"  placeholder="Search by invoice number" className={classes.searchButton} size="small" endIcon={<SearchIcon/>} ></Input> */}
           <TextField
                className={classes.col}
                className={classes.searchButton}
                label="Outlined" 
                variant="outlined"
                label="Search by invoice number"
                size="small"
                onClick={fetchMoreData}
                InputProps={{
                    endAdornment: (
                         <InputAdornment>
                                 <IconButton>
                                     <SearchIcon />
                                    </IconButton>
                          </InputAdornment>
                    )
                 }}
                 
            />
        </div>
    )
}

export default SearchComponent
