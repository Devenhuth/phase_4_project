import React, { useState, useEffect } from "react";
import Header from "./Header"
import Body from "./Body"
import CreateCharacter from "./CreateCharacter";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function App() {

  const [overwatchChar, setOverwatchChar] = useState([])
  const [showLogin, setShowLogin] = useState(true);
  const [user, setUser] = useState(null);


  useEffect(() => {
    fetch("/characters")
    .then(response => response.json())
    .then(data => setOverwatchChar(data))
  },[])

  function handleDeleteCharacter(id) {
    const updatedCharacter = overwatchChar.filter((character) => character.id !== id);
    setOverwatchChar(updatedCharacter);
  }

  const addNewCharacter = (newCharacter) => {
    setOverwatchChar([...overwatchChar, newCharacter])
  }

  function handleUpdateCharacter(updatedChar) {
    const updatedCharacter = overwatchChar.map(character => {
      if (character.id === updatedChar.id) {
        return updatedChar;
      } else {
        return character
      }
    })
    setOverwatchChar(updatedCharacter)
  }

  return (
    <div className="App">
      <h3 className="Login">
      {showLogin ? (
        <>
          <LoginForm onLogin={setUser} />
          <p />
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={setUser} />
          <p />
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </h3>
      <Header />
      <CreateCharacter addNewCharacter={addNewCharacter} />
      <Body overwatchChar={overwatchChar} handleUpdateCharacter={handleUpdateCharacter} handleDeleteCharacter={handleDeleteCharacter}/>
    </div>
  );
}

export default App;