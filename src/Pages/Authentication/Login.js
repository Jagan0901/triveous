import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../config/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const statusStyles = {
    textAlign: "center",
    color: status === "success" ? "green" : "red",
  };

  const loginHandler = async () => {
    if (!mail || !password) return setStatus("Please fill out the fields");
    try {
      const user = await signInWithEmailAndPassword(auth, mail, password);
      setStatus("success");
      navigate("/home");
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "10%" }}>User Login</h2>
      <div className="login">
        <TextField
          id="email"
          label="Enter Email"
          variant="outlined"
          type="email"
          value={mail}
          onChange={(event) => setMail(event.target.value)}
        />

        <TextField
          id="password"
          label="Enter Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button
          variant="contained"
          color="success"
          type="submit"
          onClick={loginHandler}
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            setMail("cool@mail.com");
            setPassword("Password@123");
          }}
        >
          To Get User Credentials
        </Button>
        <h3 style={statusStyles}>{status}</h3>

        <h4 style={{ textAlign: "center" }}>
          Don't have an account? Create an account
          <Button
            variant="text"
            size="small"
            onClick={() => navigate("/register")}
          >
            Click here
          </Button>
        </h4>
      </div>
    </div>
  );
}
