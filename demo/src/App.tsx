import { useState } from "react";

import MyBookingDialog from "./components/Dialog";
import Button from "./components/Button";

import dayjs, { Dayjs } from "dayjs";

interface ICheckInAndOutDates {
  checkInDate: string;
  checkOutDate: string;
}

function App() {
  const [showDialog, setshowDialog] = useState(false);
  const [checkInDate, setCheckInDate] = useState<Dayjs | null>(
    dayjs("2022-04-07")
  );
  const [checkOutDate, setCheckOutDate] = useState<Dayjs | null>(
    dayjs("2022-04-07")
  );

  const handleGetbookingInfo = (checkInAndOutDates: ICheckInAndOutDates) => {
    console.log("ohandleGetbookingInfok", checkInAndOutDates);
  };

  return (
    <main>
      <h1 className="h1">
        This page shows how my custom material-ui dialog works
      </h1>

      <Button onClick={() => setshowDialog(!showDialog)}>
        {showDialog ? "Hide" : "Show"} modal
      </Button>

      <MyBookingDialog
        open={showDialog}
        cancel={() => setshowDialog(false)}
        getbookingInfo={handleGetbookingInfo}
        checkInDate={checkInDate}
        setCheckInDate={setCheckInDate}
        checkOutDate={checkOutDate}
        setCheckOutDate={setCheckOutDate}
      />
    </main>
  );
}

export default App;
