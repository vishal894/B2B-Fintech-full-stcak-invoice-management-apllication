import React from 'react';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import axios from 'axios';

export default function DelDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function delData() {
    
    const params = ({
      inv_no: props.dl,
      method: 'delete'
    });

    const url=`http://localhost:8081/1806087/Delete_invoiceservlet?inv_no=${params.inv_no}&method=${params.method}`
    axios.post(url,params)  
    .then(res => {  
      console.log(res);  
      console.log(res.data);    
  })
  handleClose();
}
function DeleteData(){
  delData();
  handleClose();
  //setLimit(50);
}
  return (
    <div>
      <Button id='del'variant="outlined" onClick={handleClickOpen}>
        <RemoveIcon className='officons'></RemoveIcon>
        Delete
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="del-dialog-title">
        <DialogTitle id="addtitle">
          <Box display='flex'>
            <Box flexGrow={1}>Delete record(s)?</Box>
            <Box><CloseIcon hover role='checkbox' onClick={handleClose}></CloseIcon></Box> 
          </Box>       
        </DialogTitle>
        <DialogContent dividers={true} style={{backgroundColor:"#2A3E4C"}}>
          <DialogContentText id='addform'>
            You'll lose your records(s) after this action. We can't recover them once you delete.
            <br></br>
            <br></br>
            Are you sure you want to permanently delete them?
          </DialogContentText>
        </DialogContent>
        <DialogActions id='addactions'>
              <Button id='addclear' onClick={handleClose}>
                Cancel
              </Button>         
              <Button id='addsubmit' onClick={delData}>
                Delete
              </Button>         
        </DialogActions>
      </Dialog>
    </div>
  );
}
