import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid'
import axios from 'axios';
const useStyles = makeStyles({
    edit: {
        top: "-6px",
        //left: "260px",
        width: "80px",
        height: "36px",
        border: "1px solid #97A1A9",
        borderRadius: "10px",
        color: "#FFFFFF",
        opacity: "1"

    },
    saveButton:{
        background: "#273D49CC 0% 0% no-repeat padding-box",

    },
    col:{
        color: "#FFFFFF"
      }

})

function AddButton() {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
     };

    const handleClose = () => {
        setOpen(false);
    };
    async function addData() {
    
        const params = ({
          inv_no: document.getElementById('invoice').value,
          notes: document.getElementById('note').value,
          
          method:'post'
        });
    
        const url=`http://localhost:8081/1806087/Edit_servlet?inv_no=${params.inv_no}&notes=${params.notes}&method=${params.method}`
    
        let resp = await axios.post(url,params);
        console.log(resp.data);    
      }
    return (
         
         <div>
        <Button variant = "outlined"
            color = "primary"
            className = { classes.edit }
            size = "small"
            startIcon = { < EditIcon /> }
            onClick={handleClickOpen} > edit 
        </Button> 

       
        <Dialog open={open} keepMounted onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" >
                <Grid container xs={12}> 
                  <Grid item xs={5}>
                  {"Edit Invoice"}
                  </Grid>
                  <Grid item xs={6}></Grid>
                   <Grid item xs={1}><IconButton edgeEnd="end" onClick={handleClose}><CloseIcon/> </IconButton>
                   </Grid>
                </Grid>
            </DialogTitle>
                <DialogContent >
                    
                <Grid container spacing={1} >

                    <Grid item xs={6}>Invoice Amount</Grid>

                    <Grid item xs={6}><TextField
                        id="name"
                        label="Invoice Amount"
                        type="number"
                        variant="outlined"
                        name="voice"
                        size="small"
                    />
                    </Grid>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={6}>Notes</Grid>

                        <Grid item xs={6}>
                            <TextField
                                id="notes"
                                label="notes"
                                type="text"
                                name="note"
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                </Grid>
               
                </DialogContent>
            <DialogActions >
                <Grid  container xs={12}>
                    <Grid item xs={2}>
                        <Button onClick={handleClose}  variant="contained" color="primary" className={classes.saveButton}>
                             CANCEL
                        </Button>
                    </Grid>
                    <Grid item xs={5} />
                    <Grid item xs={3}>
                        <Button onClick={handleClose}  variant="contained" color="primary" className={classes.saveButton}>
                         RESET
                        </Button>
                    </Grid>

                    <Grid item xs={2}>
                        <Button onClick={handleClose} 
                         variant="contained" color="primary" 
                         className={classes.saveButton} onClick={addData}>
                            SAVE
                         </Button>
                    </Grid>
                </Grid>
            </DialogActions>
      </Dialog>

    </div>
    )
}

export default AddButton