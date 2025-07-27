import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { IAlertDialog } from "../types/IAlertDialog";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  puzzleStatus,
  checkPuzzle,
  nextPage,
}: IAlertDialog) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    checkPuzzle();
    setOpen(true);
  };

  const handleClose = () => {
    if (puzzleStatus) {
      nextPage();
    }
    setOpen(false);
  };

  // React.useEffect(() => {
  //   handleClickOpen;
  // }, [puzzleStatus]);

  return (
    <React.Fragment>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClickOpen}
      >
        Check
      </button>
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {puzzleStatus ? "Congratulations!" : "It's not correct 😢😭"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {puzzleStatus
              ? "You have completed it 😎😋😁 So proud of you!"
              : "Please try again okieee you got this queen!! 👑"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            {puzzleStatus ? "Continue" : "Retry"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
