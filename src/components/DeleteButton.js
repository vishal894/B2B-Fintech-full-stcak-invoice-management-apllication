import React from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
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

const useStyles = makeStyles({
    deleteButton:{
        //top: "20px",
        //left: "270px",
       // width: "100px",
        //height: "30px",
        border: "1px solid #14AFF1",
        borderRadius: "10px",
        color: "#FFFFFF",
        //background: "#273D49CC 0% 0% no-repeat padding-box",
        opacity: "1"
        
    },
    del:{
      background: "#273D49CC 0% 0% no-repeat padding-box",
    },
    col:{
      color: "#FFFFFF"
    }
})
function DeleteButton() {
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
             <Button variant="outlined" color="primary" className={classes.deleteButton} size="small" startIcon={<RemoveIcon/>} onClick={handleClickOpen} >Delete</Button>
             <Dialog
                open={open}
                
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                
            >
            <DialogTitle id="alert-dialog-slide-title"  className={classes.del}>
                <Grid container xs={12}> 
                  <Grid item xs={5} className={classes.col}>
                  {"Delete Record(s)? "}
                  </Grid>
                  <Grid item xs={6}></Grid>
                   <Grid item xs={1}><IconButton edgeEnd="end" onClick={handleClose}><CloseIcon/> </IconButton>
                   </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent className={classes.del}>
                 <DialogContentText id="alert-dialog-slide-description" className={classes.col}>
                 You'll lose your record(s) after this section . We can't recover them once you decide .
                  Are you sure you want to permanently delete them?
                </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.del}>
          <Button onClick={handleClose} variant="contained" color="primary"  className={classes.del}>
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained" className={classes.del}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default DeleteButton
