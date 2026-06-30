import { useState } from "react";
import { loginThunk } from "../../store/authReducer/authReducer";
import { useDispatch } from "react-redux";


function Home() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginThunk(email, password))

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Home;
