import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../store/authReducer/authReducer";
import { Box, TextField, Button, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

//karinakloyan03@gmail.com

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messages = await dispatch(loginThunk(email, password));
    if (messages) {
      setError(messages[0]);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 350,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 4,
          bgcolor: "white",
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <TextField
          size="small"
          label="Email"
          type="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          size="small"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          type="submit"
          variant="contained"
          startIcon={<LoginIcon />}
          fullWidth
          sx={{ mt: 1 }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
