import React from "react";
/* hooks */
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
/* components */

/* style */
import { StyledOrdersList } from "./ordersList.style";
/* icons */
import { BsArrowLeft, BsBag } from "react-icons/bs";


function OrdersList() {

  const navigate = useNavigate();

    /*======= HOOKS =======*/

  /*======= VARIABLES =======*/

  /*======= STATES =======*/

  /*======= USEEFFECT =======*/

  /*======= FUNCTIONS =======*/


  return (
    <StyledOrdersList>
      <div onClick={() => navigate(-1)}>
        <BsArrowLeft />
        <p>retour</p>
      </div>
        <div>
            <BsBag />
            <p>Vos achats</p>
        </div>
        
        <div></div>
    </StyledOrdersList>
  );
}

export default OrdersList;