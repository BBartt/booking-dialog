import React from "react";
import { TransitionProps } from "@mui/material/transitions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import Button from "../Button";

interface IMyBookingDialog {
  open: boolean;
  cancel: () => void;
  getbookingInfo: (params?: any) => void;
  checkInDate: Dayjs | null;
  setCheckInDate: (date: Dayjs | null) => void;
  checkOutDate: Dayjs | null;
  setCheckOutDate: (date: Dayjs | null) => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyBookingDialog = ({
  open,
  cancel,
  getbookingInfo,
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
}: IMyBookingDialog) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={cancel}
      aria-describedby="dialog-description-time-of-visit"
    >
      <DialogTitle>Book hotel time of visit</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Hello, you can pick tim of visit in this hotel via this dialog
        </DialogContentText>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Check in date"
            value={checkInDate}
            onChange={(checkInDate) => {
              setCheckInDate(checkInDate);
            }}
          />
          <DateTimePicker
            label="Check out date"
            value={checkOutDate}
            onChange={(checkOutDate) => {
              setCheckOutDate(checkOutDate);
            }}
          />
        </LocalizationProvider>
      </DialogContent>

      <DialogActions>
        <Button onClick={cancel}>Cancel</Button>
        <Button
          onClick={() => {
            getbookingInfo({
              checkInDate: dayjs(checkInDate).format(),
              checkOutDate: dayjs(checkOutDate).format(),
            });
            cancel();
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MyBookingDialog;
