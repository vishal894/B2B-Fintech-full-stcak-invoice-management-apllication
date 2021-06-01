import React from 'react'
import AddIcon from '@material-ui/icons/Add';
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


const useStyles = makeStyles({
    add:{
        //top: "20px",
        //left: "250px",
        //width: "99px",
        //height: "30px",
        border: "1px solid #14AFF1",
        borderRadius: "10px",
        //font: "normal normal normal 20px/24px Ubuntu",
        //letterSpacing: "0px",
        color: "#FFFFFF",
        opacity: "1"

    },
    saveButton:{
        background: "#14AFF1 0% 0% no-repeat padding-box"

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
    return (
        <div>
           <Button variant="outlined" color="primary" className={classes.add} size="small" startIcon={<AddIcon />}  onClick={handleClickOpen}>Add</Button>    
           <Dialog open={open} keepMounted onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                <Grid container xs={12}> 
                  <Grid item xs={5}>
                  {"Edit Invoice"}
                  </Grid>
                  <Grid item xs={6}></Grid>
                   <Grid item xs={1}><IconButton edgeEnd="end" onClick={handleClose}><CloseIcon/> </IconButton>
                   </Grid>
                </Grid>
            </DialogTitle>
                <DialogContent>
                    
                <Grid container spacing={1}>
                   <Grid item xs={3}>Customer Name</Grid>
                    <Grid item xs={3}>
                        <TextField
                            id="name"
                            type="text"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item spacing={1}> </Grid>
                    <Grid item xs={2}>Due Date</Grid>
                    <Grid item xs={3}>
                        <TextField
                            id="date"
                           
                            type="date"
                            variant="outlined"
                        />
                     </Grid>

                <Grid container spacing={2}>
                   <Grid item xs={3}>Customer No.</Grid>
                    <Grid item xs={3}>
                        <TextField
                            id="Customer Number"
                            type="text"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item spacing={1}> </Grid>
                    <Grid item xs={2}>Notes</Grid>
                    <Grid item xs={3}>
                        <TextField
                            id="filled-multiline"
                            multiline
                            rows={4}
                            type="text"
                            variant="outlined"
                        />
                     </Grid>
                </Grid>

            <Grid item spacing={1}> </Grid>
            <Grid container spacing={12}> 
              <Grid item xs={2}>Invoice No.</Grid>
              <Grid item xs={3}>
                <TextField
                id="name"
                label="invoice No"
                type="number"
                variant="outlined"
                />
               </Grid>
               </Grid>
            
               <Grid item spacing={1}> </Grid>
               <Grid container spacing={12}> 
              <Grid item xs={2}>Invoice Amount.</Grid>
            <Grid item xs={3}>
                <TextField
                id=""
                label="invoice Amount"
                type="number"
                variant="outlined"
                />
            </Grid>
            </Grid>

            

        </Grid>
                </DialogContent>
            <DialogActions>
                <Grid  container xs={12}>
                    <Grid item xs={2}>
                        <Button onClick={handleClose}   color="primary">
                             CANCEL
                        </Button>
                    </Grid>
                    <Grid item xs={6} />
                    <Grid item xs={2}>
                        <Button onClick={handleClose}  variant="outlined" color="primary" className={classes.saveButton}>
                         RESET
                        </Button>
                    </Grid>

                    <Grid item xs={2}>
                        <Button onClick={handleClose} color="primary" className={classes.saveButton}>
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
