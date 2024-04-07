import { useEffect, useState } from "react";
import baseHTTP from "../utils/axiosBase";
import TableComponent from "../components/Table.comp";

const Classes = () => {
  const [buildingNames, setBuildingNames] = useState([]);
  const [campusNames, setCampusNames] = useState([]);

  const fetchBuildingName = async () => {
    const response = await baseHTTP.get("building");
    setBuildingNames(
      response.data.data.map((building) => building.building_name)
    );
  };

  const fetchCampusName = async () => {
    const response = await baseHTTP.get("campus");
    setCampusNames(response.data.data.map((building) => building.campus_name));
  };

  useEffect(() => {
    fetchBuildingName();
    fetchCampusName();
  }, []);

  return campusNames.length > 0 && buildingNames.length > 0 ? (
    <TableComponent
      tableFor="classes"
      changing_key="room_number"
      actions={
        <>
          <button className="btn btn-md btn-link">Book Now</button>
        </>
      }
      create={{
        feildsNeeded: {
          building_name: buildingNames,
          campus_name: campusNames,
          capacity: "",
          room_number: "",
        },
      }}
    />
  ) : (
    "Loading..."
  );
};

export default Classes;
