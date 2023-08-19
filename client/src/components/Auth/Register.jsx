import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword} from "firebase/auth";
function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err){
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
