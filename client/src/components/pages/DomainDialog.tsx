import React, { FunctionComponent } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core";

interface DomainDialogProps {
    dialogOpen: boolean;
    setDialogOpen: (open: boolean) => void;
    okClicked: () => void;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    dialogTitle: string;
    dialogContentText: string;
    textBoxLabel: string;
}

export const DomainDialog: FunctionComponent<DomainDialogProps> = (props) => {
    return (
        <Dialog open={props.dialogOpen} onClose={() => props.setDialogOpen(false)}>
            <DialogTitle>{props.dialogTitle}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.dialogContentText}
                </DialogContentText>
                <TextField
                    autoFocus
                    margin='dense'
                    id={props.textBoxLabel}
                    label={props.textBoxLabel}
                    fullWidth
                    onChange={props.onChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.setDialogOpen(false)} color='primary'>
                    Cancel
                </Button>
                <Button onClick={props.okClicked} color='primary'>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
}