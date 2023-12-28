import { useEffect } from "react";
import { useNavigate } from "react-router";

const ToHome = () => {
  const nav = useNavigate()
  useEffect(() => {
    nav('/Home')
}, []);
  
  return (
    <></>
  )
}

export default ToHome