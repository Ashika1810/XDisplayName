import logo from './logo.svg';
import './App.css';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]= useState("");

  const handleSubmit= (e)=>{
      e.preventDefault();
      setFormData(true);
  }

  return (
    <div>
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      <div>
      <label for="firstname">First Name:</label>
      <input id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
      </div>
      <div>
      <label for="lastname">Last Name:</label>
      <input id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    {formData ? 
    (
        <p className={styles.fullname}>Full Name: {firstName} {lastName}</p>
    ) : (null)
  }
    </div>
  );
}

export default App;
