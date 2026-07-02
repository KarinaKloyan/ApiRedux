import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfileThunk } from "../../store/profileReducer";
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
} from "@mui/material";
import userImg from "../../assets/user.png";

function Profile() {
  const { id } = useParams();

  const { profile } = useSelector((state) => state.profileData);
  console.log(profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileThunk(id));
  }, [id]);

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
          justifyContent: "center",
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
      </Box>
      <Box sx={{ flex: 1 }}>
        <TableContainer
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">userId</TableCell>
                <TableCell align="center">About me</TableCell>
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
                <TableCell align="right">{profile?.aboutMe}</TableCell>
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
    </Box>
  );
}

export default Profile;
