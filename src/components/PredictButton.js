import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles({
    predict:{
        //top: "20px",
        //left: "18px",
        //width: "95px",
        //height: "30px",
        background: "#14AFF1 0% 0% no-repeat padding-box",
        borderRadius: "10px",
        opacity: "1"
    },

})
function PredictButton() {
    const classes = useStyles();
    return (
        <div>
            <Button  variant="contained" className={classes.predict} >Predict</Button>
        </div>
    )
}

export default PredictButton
