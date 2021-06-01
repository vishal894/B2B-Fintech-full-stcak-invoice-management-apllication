import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from '@material-ui/icons/Remove';
//import AddDialog from '../components/AddDialog';
import AddDialogs from '../components/AddDialogs';
import DeleteButton from '../components/DeleteButton';
import EditButton from '../components/EditButton';
import AddButton from '../components/AddButton';
import SearchComponent from '../components/SearchComponent';

import DelDialog from '../components/DelDialog';
//import Add from '../components/Add.js';
import PredictButton from '../components/PredictButton';

import ViewCorrespondance from '../components/ViewCorrespondance';
import ModalADD from './ModalAdd';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      padding: "2px"
    },
    labelRoot: {
      fontSize: 30,
      color: "white",
      "&.labelFocused": {
        color: "black",
       // textAlign: "center"
      }
    },
    labelFocused: {}
  },
  col:{
    margin: theme.spacing(1)
  }
}));

export default function Buttons() {
  const classes = useStyles();
  let [doc_id, setdocId] = React.useState({});
  let [delete_id, setdeleteId] = React.useState([]);
  return (
    <div style={{width:'100%'}}className={classes.root}>
      <Box display='flex' p={0}>
      <Box p={1}>
        <PredictButton/>
      </Box>
      <Box p={1} flexGrow={1}>
      < ViewCorrespondance  />
      </Box>
      <Box p={1}>
        
        <AddDialogs/>
        {/* <AddDialog /> */}
      </Box>
      <Box p={1} className={classes.col}>
         <EditButton />
      </Box>
      <Box p={1} >
           <DelDialog
            dl={12345} />
      </Box>
      <Box p={1}>
         <SearchComponent/>
      </Box>
      </Box>
    </div>
  );
}
