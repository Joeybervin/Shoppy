import React from "react";
/* hooks */
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
/* components */

/* style */
import { StyledOrdersList } from "./ordersList.style";
/* icons */
import { BsArrowLeft, BsBag } from "react-icons/bs";


function OrdersList() {


  /*======= HOOKS =======*/
  const navigate = useNavigate();
  const user = useSelector(state => state.user)
  const userOrdersList = user.orders;

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
        <div>
        {userOrdersList.length === 0 ? 
          <p>Vous n'avez effectuez aucune commande.</p>
          :
          userOrdersList.map((order, index) => {
            return (
              <div key={"order"+index}>
                <p>commande</p>
                <hr></hr>
              </div>
            )
          })}

        </div>
    </StyledOrdersList>
  );
}

export default OrdersList;