import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No user found");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      alert(`Welcome ${savedUser.name}`);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

      <input
        type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
