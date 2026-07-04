import { useSelector } from "react-redux";
import Login from "../Login/Login";
import { Navigate } from "react-router-dom";

function Home() {
  const { userId } = useSelector((state) => state.authData);

  if (localStorage.getItem("userId") && localStorage.getItem("userData")) {
    return <Navigate to={`profile/${localStorage.getItem("userId")}`} />;
  }

  return (
    <div>
      <Login />
    </div>
  );
}

export default Home;
