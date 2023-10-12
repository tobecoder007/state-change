import { useState } from 'react';
import './App.css';

function App() {

  const [contact, setFullName] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
const {value, name} = event.target

    setFullName(prevValue => {
      if(name === "fName"){
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        }
      } else if (name === "lName"){
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email"){
        return{
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        }
      }
    });
  }

  return (
    <div className="container">
    <h1>
      Hello {contact.fName} {contact.lName}
    </h1>
    <p>{contact.email}</p>
    <form onSubmit={(event) => {event.preventDefault()}}>
      <input name="fName" placeholder="First Name" value={contact.fName} onChange={handleChange} />
      <input name="lName" placeholder="Last Name" value={contact.lName} onChange={handleChange}/>
      <input name="email" placeholder="Email" value={contact.email} onChange={handleChange}/>
      <button >Submit</button>
    </form>
  </div>
  );
}

export default App;
