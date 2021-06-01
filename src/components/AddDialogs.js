import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box'
import axios from 'axios';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';



export default function AddDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //
  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-03-20T20:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  //

  async function addData() {
    
    const params = ({
      cust_name: document.getElementById('cust_name').value,
      cust_no: document.getElementById('cust_no').value,
      inv_no: document.getElementById('inv_no').value,
      amo: document.getElementById('amo').value,
      due_date: document.getElementById('due_date').value,
      notes: document.getElementById('notes').value,
      method:'post'
    });

    const url=`http://localhost:8081/1806087/Add_InvoiceServlet?cust_name=${params.cust_name}&cust_no=${params.cust_no}&inv_no=${params.inv_no}&amo=${params.amo}&due_date=${params.due_date}&notes=${params.notes}&method=${params.method}`

    let resp = await axios.post(url,params);
    console.log(resp.data);    
  }

  return (
    <div>
      <Button id='add'variant="outlined" onClick={handleClickOpen}>
        <AddIcon className='onicons'></AddIcon>
        Add
      </Button>
      <Dialog className='addboxarea' id='addbox'open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="addtitle">
          <Box display='flex'>
            <Box flexGrow={1}>Add Invoice</Box>
            <Box><CloseIcon hover role='checkbox' onClick={handleClose}></CloseIcon></Box> 
          </Box>       
        </DialogTitle>
        <DialogContent dividers={true} id='addcontent'>
          <DialogContentText>
            <form id='addform'>
            <div >
              <tr>
                <td> Customer Name</td><td><input id='cust_name'className='addinput' required></input></td>

               <td id='date_color'>
                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker   disableToolbar inputVariant="outlined"
          variant="inline"
          format="yyyyMMdd"
          margin="normal"
          id="due_date"
          label="Due in Date"
          value={selectedDate}
          name="due_in_date"
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}/>
                </MuiPickersUtilsProvider>
            </td>

              </tr>
              <tr>
                <td>Customer No.</td><td><input id='cust_no'className='addinput' required></input></td>
              </tr>
                  <br></br> <br></br>
              <tr>
                <td> Invoice No.</td><td><input id='inv_no'className='addinput' required></input></td> 
               </tr>


                <tr>
           <td> Invoice Amount</td><td><input id='amo'className='addinput' required></input></td>
           <td >Notes<textarea id='notes' className="addinput" rows="4" cols="30"></textarea></td>
            </tr>
            </div>
            
            
            </form>
            
          </DialogContentText>
        </DialogContent>
        <DialogActions id='addactions'>
          <Box display='flex'>
            <Box style={{color:'#14AFF1'}} marginRight='20vw' p={2} onClick={handleClose}> 
              Cancel
            </Box>
            <Box p={2}>
              <Button id='addclear' onClick={handleClose}>
                Clear
              </Button> 
            </Box>          
            <Box p={2}>
              <Button id='addsubmit' onClick={handleClose} >
              <Button id='addsubmit' onClick={addData} >
                Add
              </Button>
              </Button>
            </Box>
          </Box>          
        </DialogActions>
      </Dialog>
    </div>
  );
}
