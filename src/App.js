import logo from './logo.svg';
import './App.css';
import RegistrationFrom from './components/RegistrationForm'
import React, { useState } from 'react';
import Modal from './components/Modal/Modal'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Custom functions
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <button onClick={openModal}>Sign Up</button>
     
      {isOpen && <Modal onClose={closeModal}><RegistrationFrom/></Modal>}
    </>
  );
}

export default App;
