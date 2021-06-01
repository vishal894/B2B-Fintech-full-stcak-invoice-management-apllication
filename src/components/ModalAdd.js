import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  Grid,
  TextField,
} from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import AddIcon from '@material-ui/icons/Add';
import DatePicker from "./DatePick";
import { pxToVw } from "./theme";

const defaultValues = {
  customerName: "",
  customerNo: "",
  invoiceNo: "",
  invoiceAmount: "",
  dueDate: new Date(),
  notes: "",
};
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "94.5",
      margin: theme.spacing(2),
    },
  },
  inputs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    //paddingBottom:"10px",
  },
  label: {
    textAlign: "left",
    font: "normal normal normal 1.25rem/1.5rem Ubuntu",
    letterSpacing: pxToVw(0.09),
    opacity: 1,
    color: "#97A1A9",
  },
  dialogBox: {
    minWidth: "69.125rem",
    minHeight: "31.813rem",
    backgroundColor: "#2A3E4C",
    borderRadius: "0.375rem",

    //         background: #2A3E4C 0% 0% no-repeat padding-box;
    // box-shadow: 0px 8px 24px #00000029;
    // border-radius: 6px;
    // opacity: 1;
  },
  dialogTitle: {
    margin: "1.875rem",
    padding: "0px",
  },
}));

// const useStyles = makeStyles({

// });

function ModalADD(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState(defaultValues);
  const [open, setOpen] = React.useState(false);
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
  const handleClear = (event) => {
    event.preventDefault();
    setValues(defaultValues);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      cust_number: values.customerNo,
      name_customer: values.customerName,
      doc_id: values.invoiceNo,
      due_in_date: values.dueDate,
      total_open_amount: values.invoiceAmount,
      invoice_id: values.invoiceNo,
      notes: values.notes,
    };

    axios.post(`http://localhost:8080/1805301/add`, user).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    setAddPopup(false);
  };

  const { title, children, addPopup, setAddPopup } = props;
  return (
    <div>
      
      <Dialog open={addPopup} classes={{ paper: classes.dialogBox }}>
        <DialogTitle className={classes.dialogTitle}>
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 1 }} class="add">
              {title}
            </div>
            <Button
              onClick={() => {
                setAddPopup(false);
              }}
            >
              <CloseIcon class="cls" />
            </Button>
          </div>
        </DialogTitle>
        <hr style={{ border: "0.03px solid #1d2830", width: "99.9%" }} />
        <DialogContent>
          <div>
            <form className={classes.root} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <div className={classes.inputs}>
                    <label className={classes.label}>
                      Customer Name <span class="star">*</span>
                    </label>
                    <TextField
                      variant="outlined"
                      name="customerName"
                      autoComplete="off"
                      value={values.customerName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className={classes.inputs}>
                    <label className={classes.label}>
                      Customer No. <span class="star">*</span>
                    </label>
                    <TextField
                      variant="outlined"
                      name="customerNo"
                      autoComplete="off"
                      value={values.customerNo}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className={classes.inputs}>
                    <label className={classes.label}>
                      Order No. <span class="star">*</span>
                    </label>
                    <TextField
                      variant="outlined"
                      name="invoiceNo"
                      autoComplete="off"
                      value={values.invoiceNo}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className={classes.inputs}>
                    <label className={classes.label}>
                      Order Amount <span class="star">*</span>
                    </label>
                    <TextField
                      variant="outlined"
                      name="invoiceAmount"
                      autoComplete="off"
                      value={values.invoiceAmount}
                      onChange={handleInputChange}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={classes.inputs}>
                    <label className={classes.label}>
                      Due Date <span class="star">*</span>
                    </label>
                    <DatePicker
                      name="dueDate"
                      value={values.dueDate}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className={classes.inputs}>
                    <label className={classes.label}>Notes</label>
                    <TextField
                      variant="outlined"
                      name="notes"
                      multiline
                      autoComplete="off"
                      value={values.notes}
                      onChange={handleInputChange}
                      placeholder="Lorem Ipsum dolor..."
                    />
                  </div>
                </Grid>
              </Grid>
              {/* <button type="submit" class="addbtn">
        Add
      </button> */}
            </form>
          </div>
        </DialogContent>
        <hr style={{ border: "0.03px solid #1d2830", width: "99.9%" }} />
        <DialogActions style={{ padding: "1.875rem" }}>
          <Grid justify="space-between" container spacing={0}>
            <Grid item>
              <Button
                onClick={() => {
                  setAddPopup(false);
                }}
                style={{ color: "#14AFF1", font: "Ubuntu" }}
              >
                <span class="can">Cancel</span>
              </Button>
            </Grid>

            <Grid item justify="space-between">
              <div>
                <Button variant="outlined" class="clrbtn" onClick={handleClear}>
                  Clear
                </Button>
                <Button
                  variant="contained"
                  style={{ marginLeft: "1.25rem" }}
                  class="addbtn"
                  onClick={handleSubmit}
                >
                  Add
                </Button>
              </div>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalADD;
