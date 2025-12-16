import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful!");
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>

      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>

      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

      <input
        type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
