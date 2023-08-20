import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Authentication/Login";
import { Register } from "./Pages/Authentication/Register";
import { Home } from "./Pages/NewsTopics/Home";
import { Apple } from "./Pages/NewsTopics/Apple";
import { Business } from "./Pages/NewsTopics/Business";
import { Tesla } from "./Pages/NewsTopics/Tesla";
import { Journals } from "./Pages/NewsTopics/Journals";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/business" element={<Business />} />
        <Route path="/tesla" element={<Tesla />} />
        <Route path="/wsj" element={<Journals />} />
      </Routes>
    </div>
  );
}

export default App;
