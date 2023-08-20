import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/home")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/apple")}>
            Apple
          </Button>
          <Button color="inherit" onClick={() => navigate("/business")}>
            US-Business
          </Button>
          <Button color="inherit" onClick={() => navigate("/tesla")}>
            Tesla
          </Button>
          <Button color="inherit" onClick={() => navigate("/wsj")}>
            Wall street-journals
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
