import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { auth } from "../../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export function Register() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const statusStyles = {
    textAlign: "center",
    color: status === "success" ? "green" : "red",
  };

  const register = async () => {
    if (!mail || !password) return setStatus("Please fill out the fields");
    try {
      const user = await createUserWithEmailAndPassword(auth, mail, password);
      setStatus("success");
      navigate("/home");
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "10%" }}>Register</h2>
      <form className="login">
        <TextField
          variant="outlined"
          id="email"
          label="Create Email"
          type="email"
          placeholder="Create new email"
          onChange={(event) => setMail(event.target.value)}
        />
        <TextField
          variant="outlined"
          id="password"
          label="Create Password"
          type="password"
          placeholder="Create new password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button variant="contained" color="primary" onClick={register}>
          Sign Up
        </Button>
        <h3 style={statusStyles}>{status}</h3>
      </form>
    </div>
  );
}
