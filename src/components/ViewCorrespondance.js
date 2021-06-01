import React from 'react'
import Button from '@material-ui/core/Button';
import jsPDF from 'jspdf'

//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
//import React from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
//import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ViewcorespondenceTable from './ViewcorespondenceTable'

const useStyles = makeStyles({
    viewCorrespondance: {
        
        border: "1px solid #14AFF1",
        borderRadius: "10px",
        color: "#FFFFFF",
        opacity: "1"

    },
    formControl:{
        minWidth: 100,
        minHeight:2
    },
    saveButton:{
        background: "#273D49CC 0% 0% no-repeat padding-box",

    },
    
    
})
function ViewCorrespondance() {

    const classes = useStyles();
   
    const [open, setOpen,] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleChange = (event) => {
        
        }
    const handleClose = () => {
         setOpen(false);
    };

     // JSpdf Generator For generating the PDF
    const jsPdfGenerator = () => {

      var doc = new jsPDF('p', 'pt');
      
      doc.text(20, 20, 'This is This is remaind you that their are one and more open invoice on your account ..Please provide at your earlier convenient and update on payment detail or clarify the  reason for the detail if you have any specific issue with the invoice.')

      doc.setFont('courier')
      //doc.setFontType('normal')
      doc.text(20, 30, ' Total Amount to be paid $124.5k')
      doc.setFont('helvetica')
      //doc.setFontType('bold')
      doc.text(20, 50, 'This is In case you already paid payment for those item,Plseas send us detail to ensure payment is posted bold.')
      // Save the Data
      doc.save('InvoiceBill.pdf')
     handleClose()
  }

    return (
        <div id="color" id='view' style={{backgroundColor:"#273D49CC"}}>
            <Button variant="outlined" color="primary" className={classes.viewCorrespondance} onClick={handleClickOpen}>View Correspondance</Button>

            <Dialog 
                
                open={open}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                
            >
            <DialogTitle id="alert-dialog-slide-title"  >
                <Grid container xs={12}> 
                  <Grid item xs={1} className={classes.col}>
                  {"View correspondence(2)? "}
                  </Grid>
                 
                  <Grid item xs={7}></Grid>
                  
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Template</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value='tempalte'
          onChange={handleChange}
          label="Template"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Template1</MenuItem>
          <MenuItem value={20}>Template2</MenuItem>
          
        </Select>
      </FormControl>
      <Grid item xs={1}><IconButton edgeEnd="end" onClick={handleClose}><CloseIcon/>
                   </IconButton>
                   </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent className={classes.del} >
                 <DialogContentText id="alert-dialog-slide-description" className={classes.col}>
                  Subject Invoice detail-[Account Number]  <br></br>
                  Dear sir/madam,<br></br> 
                  Greeting,<br></br>

                 This is remaind you that their are one and more open invoice on your account ..Please
                 provide at your earlier convenient and update on payment detail or clarify the  reason
                 for the detail if you have any specific issue with the invoice.please let us know so that 
                 we can adress it on correct department.
                 <br></br>
                 Please find the detail here below
                 <br></br>
               <ViewcorespondenceTable />
               <br></br>
               Total Amount to be paid $124.5k
               <br></br>
               In case you already paid payment for those item,Plseas send us 
               detail to ensure payment is posted
               <br></br>
               Let us know if any querry.
                </DialogContentText>
            
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose} variant="contained" color="primary"  className={classes.del}>
            Cancel
          </Button>
          <Button  onClick={jsPdfGenerator}  color="primary" variant="contained" className={classes.del}>
            Download
          </Button>
        </DialogActions>
      </Dialog>

        </div>
    )
}

export default ViewCorrespondance
