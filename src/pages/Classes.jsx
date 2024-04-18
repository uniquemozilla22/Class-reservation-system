import { useEffect, useState } from "react";
import baseHTTP from "../utils/axiosBase";
import TableComponent from "../components/Table.comp";
import { getItem } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

const Classes = () => {
  const [buildingNames, setBuildingNames] = useState([]);
  const navigate = useNavigate();
  const token = getItem("token");

  const fetchBuildingName = async () => {
    const response = await baseHTTP(token).get("building");
    setBuildingNames(
      response.data.data.map((building) => building.building_name)
    );
  };

  useEffect(() => {
    fetchBuildingName();
  }, []);

  return buildingNames.length > 0 ? (
    <TableComponent
      tableFor="classes"
      changing_key="room_number"
      actions={
        <>
          <button
            className="btn btn-md btn-link"
            onClick={() => navigate("/booking")}
          >
            Book Now
          </button>
        </>
      }
      create={{
        feildsNeeded: {
          building_name: buildingNames,
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
