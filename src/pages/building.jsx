import { useEffect, useState } from "react";
import TableComponent from "../components/Table.comp";
import baseHTTP from "../utils/axiosBase";

const Building = () => {
  const [campusNames, setCampusNames] = useState([]);

  const fetchBuildingName = async () => {
    const response = await baseHTTP.get("building");
    setCampusNames(response.data.data.map((building) => building.campus_name));
  };

  useEffect(() => {
    fetchBuildingName();
  }, []);
  return campusNames.length > 0 ? (
    <TableComponent
      tableFor="building"
      changing_key="building_name"
      actions={
        <>
          <button className="btn btn-md btn-link">Book Now</button>
        </>
      }
      create={{
        feildsNeeded: {
          building_name: "",
          campus_name: campusNames,
        },
      }}
    />
  ) : (
    "Loading,,,"
  );
};

export default Building;
