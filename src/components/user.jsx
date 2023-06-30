import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
export const ListUser = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const req = await axios.get(`http://localhost:3000/users`);
      setData(req.data);
    };
    getData();
  }, []);
  return (
    <div className="container mt-5">
      <div className="text-end">
        <Link to="/add-user">
          <button className="btn-primary btn">Add</button>
        </Link>
      </div>
      <table className="table table-bordered table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.mobile}</td>
              <td>
                {/* Delete user button */}
                <Link to={"/update-user/" + data.id}>
                  <button className="btn btn-primary me-5">Edit</button>
                </Link>
                <Link to={"/delete-user/" + data.id}>
                  <button className="btn btn-danger">Delete</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
