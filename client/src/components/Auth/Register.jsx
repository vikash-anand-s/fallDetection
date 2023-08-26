import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const type = 'patient';

  const handleRegister = async (e) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(cred => {
        setDoc(doc(db, 'users', cred.user.uid), {type:type, doctor:"NA"})
      });
    } catch (err){
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Register - Patient</h2>
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
