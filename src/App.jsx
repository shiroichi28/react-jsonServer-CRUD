import { Route, Routes } from "react-router-dom";
import { CreateUser } from "./components/add.jsx";
import { ListUser } from "./components/user.jsx";
import { UserEdit } from "./components/edit.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<ListUser />} />
          <Route path="/add-user" element={<CreateUser />} />
          <Route path="/update-user/:id" element={<UserEdit />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
