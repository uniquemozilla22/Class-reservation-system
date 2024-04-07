import { useEffect, useState } from "react";
import baseHTTP from "../utils/axiosBase";
import { toast } from "react-toastify";

const TableComponent = (props) => {
  let { actions, changing_key, tableFor, create } = props;
  const [data, setData] = useState([]);
  const [createData, setCreateData] = useState({ ...create.feildsNeeded });

  const fetchData = async () => {
    const response = await baseHTTP.get(tableFor);
    console.log(response);
    setData(response.data.data);
  };

  const handleEditSubmit = async (data) => {
    const response = await baseHTTP.put(tableFor, { ...data });
    toast[response.statusText === "OK" ? "success" : "error"](
      response.data.message
    );
  };

  const handleDelete = async (changing_key_data) => {
    const response = await baseHTTP.delete(tableFor, {
      [changing_key]: changing_key_data,
    });
    toast[response.statusText === "OK" ? "success" : "error"](
      response.data.message
    );
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    let data = createData;
    Object.keys(data).forEach((value, index) => {
      if (typeof data[value] === "object" && data[value].length > 0) {
        console.log("updaing", data[value][0]);
        data = {
          ...data,
          [value]: data[value][0],
        };
      }
    });
    const response = await baseHTTP.post(tableFor, { ...data });
    toast[response.statusText === "OK" ? "success" : "error"](
      response.data.message
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="drawer drawer-end">
        <input
          id={tableFor + " drawer"}
          type="checkbox"
          className="drawer-toggle"
        />
        <div className=" p-5 drawer-content w-full flex justify-start  gap-5 flex-row-reverse">
          {/* Page content here */}
          <label
            htmlFor={tableFor + " drawer"}
            className="drawer-button btn btn-outline"
          >
            Create {tableFor}
          </label>
          <button className="btn btn-outline" onClick={fetchData}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-refresh-ccw"
            >
              <polyline points="1 4 1 10 7 10"></polyline>
              <polyline points="23 20 23 14 17 14"></polyline>
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
            </svg>
          </button>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor={tableFor + " drawer"}
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <form
            onSubmit={handleCreate}
            className="menu m-4 w-80 min-h-full bg-base-200 text-base-content relative"
          >
            <h1 className="text-2xl flex justify-center m-10">
              Create a {tableFor}
            </h1>
            {create &&
              // eslint-disable-next-line react/prop-types
              Object.keys(create.feildsNeeded).map((keys, index) => (
                <div key={index} className={"capitalize m-2"}>
                  {create.feildsNeeded[keys].length !== 0 ? (
                    <select
                      className="select select-bordered w-full max-w-xs"
                      onChange={(e) =>
                        setCreateData({
                          ...createData,
                          [keys]: e.target.value,
                        })
                      }
                    >
                      {create.feildsNeeded[keys].map((options, index) => (
                        <option key={index} value={options}>
                          {" "}
                          {options}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <label className="input input-bordered flex items-center gap-2">
                      <input
                        type="text"
                        className="grow capitalize"
                        placeholder={keys.split("_").join(" ")}
                        onChange={(e) =>
                          setCreateData({
                            ...createData,
                            [keys]: e.target.value,
                          })
                        }
                      />
                    </label>
                  )}
                </div>
              ))}

            <input
              type="submit"
              className="btn btn-outline btn-primary absolute bottom-5 left-0 right-0"
            />
          </form>
        </div>
      </div>
      <div className="flex w-full flex-wrap gap-10">
        <div className="overflow-x-auto w-full">
          {data.length > 0 && (
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Actions</th>
                  {Object.keys(data[0]).map((keys, index) => (
                    <th key={index} className={"capitalize"}>
                      {keys.split("_").join(" ")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((room, index) => {
                  return (
                    <tr key={index}>
                      <th>
                        {actions}
                        <button
                          className="btn btn-link"
                          onClick={() => handleDelete(room[changing_key])}
                        >
                          Delete
                        </button>
                      </th>
                      {Object.keys(room).map((keys, index) => {
                        return (
                          <TableData
                            key={index}
                            onEditSubmit={(data) =>
                              handleEditSubmit({
                                [changing_key]: room[changing_key],
                                data: { [keys]: data },
                              })
                            }
                          >
                            {room[keys]}
                          </TableData>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

const TableData = ({ children, onEditSubmit }) => {
  const [edit, setEdit] = useState(false);
  const [tableData, setTableData] = useState(children);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <td>
      {edit ? (
        <div className="flex gap-2">
          <label className="input input-bordered input-sm flex items-center gap-2">
            <input
              className="input-sm"
              type="text"
              onChange={(e) => setTableData(e.target.value)}
              placeholder={children}
            />
          </label>
          <div className="flex gap-2">
            <button
              className="btn btn-sm btn-link btn-ghost"
              onClick={() => {
                onEditSubmit(tableData);
                handleEdit();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </button>
            <button
              className="btn btn-sm btn-link btn-ghost"
              onClick={handleEdit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <p onClick={handleEdit}>{tableData}</p>
      )}
    </td>
  );
};

export default TableComponent;
