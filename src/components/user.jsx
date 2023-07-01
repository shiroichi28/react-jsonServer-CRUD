import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export const ListUser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:3000/users/${id}`);
        getData();
      } catch (error) {
        console.error(error);
      }
    }
  };

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
          {data.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                <Link to={`/update-user/${user.id}`}>
                  <button className="btn btn-primary me-5">Edit</button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
