import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const UserEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const req = await axios.get(`http://localhost:3000/users/${id}`);
        setUserInput(req.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  const handleInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: userInput.username,
      email: userInput.email,
      mobile: userInput.mobile,
    };
    try {
      const send = await axios.put(`http://localhost:3000/users`, formData);
      if (send) {
        alert("Updated");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex w-100 vh-100 align-items-center justify-content-center">
      <div className="w-50 bg-light p-5 border">
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="uname">Username</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="uname"
              value={userInput.name}
              onChange={handleInput}
              required
            />
          </div>
          <div className="mt-3">
            <label htmlFor="">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              value={userInput.email}
              onChange={handleInput}
              required
            />
          </div>
          <div className="mt-3">
            <label htmlFor="">Mobile</label>
            <input
              className="form-control"
              type="tel"
              name="mobile"
              id="mobile"
              value={userInput.mobile}
              onChange={handleInput}
              required
            />
          </div>
          <br />
          <div className="text-center">
            <button className="btn btn-success ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
