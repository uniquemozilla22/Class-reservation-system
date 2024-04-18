import { useEffect, useState } from "react";
import TableComponent from "../components/Table.comp";
import baseHTTP from "../utils/axiosBase";
import { getItem } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

const Building = () => {
  const [campusNames, setCampusNames] = useState([]);
  const token = getItem("token");

  const navigate = useNavigate();
  const fetchBuildingName = async () => {
    const response = await baseHTTP(token).get("campus");
    setCampusNames(response.data.data.map((campus) => campus.campus_name));
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
          <button
            className="btn btn-md btn-link"
            onClick={() => navigate("/bookings")}
          >
            Book Now
          </button>
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
