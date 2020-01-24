import React from "react";

const Login = ({ authenticate }) => {
  return (
    <div>
      <div className='login'>
        <h2>Connecte Toi pour creer tes recettes</h2>
        <button className='facebook-button' onClick={authenticate}>
          Me connecter a Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
