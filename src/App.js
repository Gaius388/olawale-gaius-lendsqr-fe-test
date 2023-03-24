import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Users from "./components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleUser from "./components/SingleUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="users" element={<Dashboard />}>
          <Route index element={<Users />} />
          <Route path="/users/:id" element={<SingleUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
