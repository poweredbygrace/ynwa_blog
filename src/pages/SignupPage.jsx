import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Form.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup feature will be connected to Firebase later!");
  };

  return (
    <div className="page-container">
      <div className="form-card">
        <h2>Create an Account</h2>

        <form onSubmit={handleSignup}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required 
          />

          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required 
          />

          <button type="submit" className="btn">Sign Up</button>
        </form>

        <p>
          Already have an account?  
          <Link to="/login" className="link">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
