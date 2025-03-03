import React, { useEffect, useState } from "react";
import "./css/container.css";
import "./css/table.css";
import "./css/icons.css";
import AdminSidebar from "../Components/Admin_Sidebar";
import teacher_dashboard from "./data/teacher-dashboard";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";
import { getUsers } from "../services/user";

function AdminTeacherDash() {
  const [data, setData] = useState();
  const fetchTeachers = async () => {
    let res = await getUsers({ role: "teacher" });
    setData(res?.data?.data?.list);
  };
  useEffect(() => {
    fetchTeachers();
  }, []);
  return (
    <>
      <AdminSidebar />
      <div className="container">
        <div className="row">
          <div className="column">
            <h1>Teachers Dashboard</h1>
          </div>
          <div className="column">
            <Link to="/admin/teacher-add">
              <input type="button" className="add-btn" value="Add Teacher" />
            </Link>
          </div>
        </div>

        <table>
          <thead className="thead">
            <th>Teacher Name</th>
            <th>Subject #</th>
            <th>Subject Name</th>
            <th>View / Delete</th>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr>
                  <td data-label="Teacher Name">
                    {" "}
                    {item?.firstName} {item?.lastName}
                  </td>
                  <td data-label="Subject #">subject no</td>
                  <td data-label="Subject Name">subject name</td>
                  <td data-label="View / Delete">
                    <Link to="/admin/teacher-info">
                      <button className="icons-grn">
                        <BsIcons.BsFillEyeFill />
                      </button>
                    </Link>
                    <Link to="#">
                      <button className="icons-red">
                        <MdIcons.MdDelete />
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminTeacherDash;
