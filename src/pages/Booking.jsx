import { useEffect, useState } from "react";
import TableComponent from "../components/Table.comp";
import baseHTTP from "../utils/axiosBase";
import { getItem } from "../utils/localStorage";

const Booking = () => {
  const [roomNumber, setRoomNumber] = useState([]);
  const [events, setEvents] = useState([]);
  const token = getItem("token");

  const fetchRoom = async () => {
    const response = await baseHTTP(token).get("classes");
    setRoomNumber(response.data.data.map((room) => room.room_number));
  };

  const fetchEvent = async () => {
    const response = await baseHTTP(token).get("event");
    setEvents(response.data.data.map((event) => event.description));
  };

  useEffect(() => {
    fetchRoom();
    fetchEvent();
  }, []);

  return roomNumber.length > 0 && events.length > 0 ? (
    <TableComponent
      tableFor="booking"
      changing_key="booking_id"
      actions={<></>}
      create={{
        feildsNeeded: {
          room_number: roomNumber,
          events: events,
          date: "",
          start_time: "",
          end_time: "",
        },
      }}
    />
  ) : (
    "Loading...."
  );
};

export default Booking;
