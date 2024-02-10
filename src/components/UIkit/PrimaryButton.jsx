import React from "react";
import { Button } from "@mui/material";
import makeStyles from "@mui/material";
import createStyles from "@mui/material";

const useStyles = makeStyles((theme) =>
    createStyles({
        "button": {
            backgroundColor: theme.palette.primary.main,
            color: '#000',
            fontSize: 16,
            height: 48,
            marginBottom: 16,
            width: 256,
            "&:hover": {
                backgroundColor: theme.palette.primary.light,
            }
        }
    })
)

const PrimaryButton = (props) => {
    const classes = useStyles()

    return (
        <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
            {props.label}
        </Button>
    );
};

export default PrimaryButton;