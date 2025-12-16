import { useState } from "react";
import Login from "./component/Login";
import Signup from "./component/Signup";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      {isLogin ? <Login /> : <Signup />}

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? " Signup " : " Login "}
        </button>
      </p>
    </div>
  );
}

export default App;
