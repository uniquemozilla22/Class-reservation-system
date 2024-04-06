import { useEffect, useState } from "react";
import ClassItem from "../components/Class.comp";
import baseHTTP from "../utils/axiosBase";

const Classes = () => {
  const [roomData, setRoomData] = useState([]);

  const fetchClasses = async () => {
    const response = await baseHTTP.get("classes");
    setRoomData(response.data.data);
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <div className="flex w-full flex-wrap gap-10">
      {roomData.map((room, index) => {
        return (
          <ClassItem
            title={room.building_name}
            description={`${room.building_name} is on the campus ${room.campus_name}. The Room Number is ${room.room_number} Room Capacity : ${room.capacity}`}
            isAvailable={room.availability === "available"}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Classes;
