import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProfileThunk, getProfileAC } from "../../store/profileReducer";
import {
  Box,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  styled,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import userImg from "../../assets/user.png";
import { logoutThunk } from "../../store/authReducer/authReducer";
import { SocialAPI } from "../../api";

function Profile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const { profile } = useSelector((state) => state.profileData);
  const authData = JSON.parse(localStorage.getItem("userData"));

  const isLoggedInUser = authData?.id === +id;

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate("/");
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const { data, status } = await SocialAPI.uploadFile(file);
      if (status === "success") {
        dispatch(
          getProfileAC({
            ...profile,
            photos: {
              ...profile.photos,
              large: data,
            },
          }),
        );
      } else {
        setError(data);
      }
    }
  };

  useEffect(() => {
    dispatch(getProfileThunk(id));
  }, [id]);

  console.log(profile);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        mt: 5,
        p: 3,
        display: "flex",
        gap: 5,
        alignItems: "flex-start",
        bgcolor: "#fff",
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          width: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <CardMedia
          component="img"
          image={profile?.photos?.large ? profile?.photos?.large : userImg}
          sx={{
            width: 280,
            height: 280,
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #1976d2",
          }}
        />
        <Box>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileUpload(e)}
              multiple
            />
          </Button>
          <Typography color="error" sx={{ mt: "20px" }}>
            {error}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ flex: 1 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">userId</TableCell>
                {/* <TableCell align="center">About me</TableCell> */}
                <TableCell align="center">Contact</TableCell>
                <TableCell align="center">Looking for job</TableCell>
                <TableCell align="center">
                  Looking for job description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  {profile?.fullName}
                </TableCell>
                <TableCell align="right">{profile?.userId}</TableCell>
                {/* <TableCell align="right">{profile?.aboutMe}</TableCell> */}
                <TableCell align="right">
                  {isLoggedInUser ? authData?.email : ""}
                </TableCell>
                <TableCell align="right">
                  {profile?.lookingForAJob ? "Open to work" : ""}
                </TableCell>
                <TableCell align="right">
                  {profile?.lookingForAJobDescription}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {isLoggedInUser && (
        <Box>
          <Button variant="contained" onClick={handleLogout}>
            LOG OUT
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Profile;
