import { useEffect,useState } from 'react';
export default function Loader(){const [show,setShow]=useState(true);useEffect(()=>{const id=setTimeout(()=>setShow(false),650);return()=>clearTimeout(id)},[]);return show?<div className="loader"><span>VELARO</span></div>:null}
