import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";

// import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
const defaultValues = {
  invoiceAmount: "",
  notes: "",
};

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: "#2A3F4D",
    color: "white",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: "#2A3F4D",
    color: "white",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    // padding: theme.spacing(1),
    backgroundColor: "#2A3F4D",
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState(defaultValues);

  const handleClear = (event) => {
    event.preventDefault();
    setValues(defaultValues);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      doc_id: props.i.dd,
      total_open_amount: values.invoiceAmount,
      notes: values.notes,
    };

    axios.post(`http://localhost:8080/1805421/edit`, user).then((res) => {
      console.log(res);
      console.log(res.data);
      console.log(user);
    });
    handleClose();
  };

  const useStyles = makeStyles((theme) => ({
    //   resetAndSaveButtonAlignRight:
    //   {
    //     margin: '2px'
    //   },
    buttonResetColor: {
      color: "white",
      backgroundColor: "transparent",
      border: "1px solid #14AFF1",
      marginRight: "0.9rem",
      // justify: 'flex-end'
    },
    buttonSaveColor: {
      color: "white",
      backgroundColor: "#14AFF1",
      // justify: 'flex-end'
    },
    buttonCancelColor: {
      color: "#14AFF1",
      // justify: 'flex-start'
    },
    changeDialog: {
      maxWidth: "600vw",
      maxHeight: "600vh",
      display: "flex",
      justifyContent: "center",
      margin: "auto",
    },
    spanEdit: {
      color: "#FF5E5E",
    },
    toolbarSpace: {
      marginLeft: "1.5rem",
    },
    textField: {
      backgroundColor: "#283A46",
      borderRadius: "0.5rem",
      outline: "none",
      outlineColor: "#14AFF1",
      border: "1px solid #356680",
      "&:hover": {
        //you want this to be the same as the backgroundColor above
        border: "1px solid #14AFF1",
      },
      color: "white",
      padding: "0.5rem",
      width: "25vw",
      maxWidth: "600vw",
    },
    noteBox: {
      backgroundColor: "#283A46",
      borderRadius: "0.5rem",
      outline: "none",
      outlineColor: "#14AFF1",
      border: "1px solid #356680",
      "&:hover": {
        //you want this to be the same as the backgroundColor above
        border: "1px solid #14AFF1",
      },
      color: "white",
      padding: "0.5rem",
      margin: "2rem 0 0 4.2rem",
      width: "25vw",
      maxWidth: "600vw",
    },
    notes: {
      margin: "2rem 0 0 0",
    },
    textColor: {
      color: "#97A1A9",
    },
    edit: {
      variant: "outlined",
      disableRipple: "true",
      marginLeft: "1.05vw",
      height: "4.7vh",
      width: "5.3vw",
      paddingLeft: "5px",
      fontSize: "1.056vw",
      fontFamily: "Ubuntu",
      color: "#97A1A9",
      borderRadius: "0.5rem",
      border: "0.04rem solid #97A1A9;",
      letterSpacing: "0px",
      textTransform: "none",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      {/* outer button */}
      <Button
        class="editbutton"
        variant="outlined"
        disableRipple="true"
        color="primary"
        onClick={handleClickOpen}
      >
        <EditIcon style={{ marginBottom: "0px", fontSize: "16.8px" }} />
        <span style={{ paddingLeft: "6px" }}>Edit</span>
      </Button>

      {/* dialog box body starts here */}

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className={classes.changeDialog}
      >
        {/* Dialog box title starts here   */}
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Invoice
        </DialogTitle>

        {/* Dialog box content starts here */}
        <DialogContent dividers>
          {/* add form body here */}

          <form onSubmit={handleSubmit}>
            <Grid container alignItems="center">
              <Grid item>
                <Typography className={classes.textColor}>
                  Order Amount
                </Typography>
              </Grid>

              <Grid item>
                <div className={classes.toolbarSpace}>
                  <InputBase
                    className={classes.textField}
                    type="number"
                    name="invoiceAmount"
                    value={values.invoiceAmount}
                    onChange={handleInputChange}
                    // inputProps={{ "aria-label": "naked" }}
                  />
                </div>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item className={classes.notes}>
                <Typography className={classes.textColor}>Notes</Typography>
              </Grid>

              <Grid item>
                <div className={classes.toolbarSpace}>
                  <InputBase
                    className={classes.noteBox}
                    type="number"
                    multiline
                    rows={5}
                    name="notes"
                    // inputProps={{ "aria-label": "naked" }}
                    value={values.notes}
                    onChange={handleInputChange}
                  />
                </div>
              </Grid>
            </Grid>
            {/* <button type="submit" class="addbtn">Edit</button> */}
          </form>
        </DialogContent>

        {/* Dialog box action buttons starts here */}

        <DialogActions>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <Button
                autoFocus
                onClick={handleClose}
                className={classes.buttonCancelColor}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item>
              <ButtonGroup>
                <div>
                  <Button
                    autoFocus
                    onClick={handleClear}
                    className={classes.buttonResetColor}
                  >
                    Reset
                  </Button>
                </div>
                <div>
                  <Button
                    variant="outlined"
                    className={classes.buttonSaveColor}
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                </div>
              </ButtonGroup>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}
