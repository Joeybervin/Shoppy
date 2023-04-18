import React from "react";
/* hooks */
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
/* components */
import { MessageCard } from "../../../components/MessageCard"
/* style */
import { StyledMessages } from "./messages.style";
/* icons */
import { BsEnvelope, BsArrowLeft } from "react-icons/bs";

function Messages() {

  /*======= HOOKS =======*/
  const navigate = useNavigate();
  const user = useSelector(state => state.user)
  const userMessagesList = user.messages

  /*======= VARIABLES =======*/

  /*======= STATES =======*/

  /*======= USEEFFECT =======*/

  /*======= FUNCTIONS =======*/
  console.log(userMessagesList)

  return (
    <StyledMessages>

      <div onClick={() => navigate(-1)}>
        <BsArrowLeft />
        <p>retour</p>
      </div>

        <div>
            <BsEnvelope />
            <p>Messages</p>
        </div>
        
        <div>
          {userMessagesList.length === 0 ? 
          <p>Vous n'avez pas de messages</p>
          :
          userMessagesList.map((message, index) => {
            return (
              <div key={"message"+index}>
                <MessageCard 
                  
                  date={message.insert_date}
                  message={message.message}
                  message_id={message.message_id}
                  order_id={message.order_id}
                  subject={message.subject}
                  title={message.title}
                />
                <hr></hr>
              </div>
            )
          })}


        </div>
    </StyledMessages>
  );
}

export default Messages;