import React from "react";
/* hooks */
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
/* components */

/* style */
import { StyledMessages } from "./messages.style";
/* icons */
import { BsEnvelope, BsArrowLeft } from "react-icons/bs";


function Messages() {

  const navigate = useNavigate();

    /*======= HOOKS =======*/

  /*======= VARIABLES =======*/

  /*======= STATES =======*/

  /*======= USEEFFECT =======*/

  /*======= FUNCTIONS =======*/


  return (
    <StyledMessages>
      <div onClick={() => navigate(-1)}>
        <BsArrowLeft />
        <p>retour</p>
      </div>
        <div>
            <BsEnvelope />
            <p>Vos Échanges</p>
        </div>
        
        <div></div>
    </StyledMessages>
  );
}

export default Messages;