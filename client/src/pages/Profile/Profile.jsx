import React, {useEffect} from 'react'

import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
/* slice */
import { logOut} from '../../store/slices/userSlice'
/* components */
import  BadWay  from '../../components/BadWay' ;
import { BigButton } from '../../components/ui/Button';

/* style */
import StyledProfile from './profile.style';

export default function Profile() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);


  useEffect(() => {
    if (!user.token) {
      console.log("PAS COCO")
      navigate("/authentification")
      
    }

  })

  
  if (!user.token) {
    return (
      <BadWay />
    )
  }


  
    return (
      <StyledProfile>
        
        <h1>Profile page</h1>


        <BigButton onClick={()=> {dispatch(logOut())}}>se déconnecter</BigButton>



      </StyledProfile>
    )
  
  
}
