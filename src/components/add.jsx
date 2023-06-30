import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const CreateUser = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    mobile: "",
  });
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
      const send = await axios.post(`http://localhost:3000/users`, formData);
      if (send) {
        alert("Inserted");
        setTimeout(() => {
          navigate("/");
        }, 1000);
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
              name="username"
              id="uname"
              value={userInput.username}
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
