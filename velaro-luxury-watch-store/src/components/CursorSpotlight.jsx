import { useEffect } from 'react';
export default function CursorSpotlight(){useEffect(()=>{const move=e=>document.documentElement.style.setProperty('--cursor-x',`${e.clientX}px`);window.addEventListener('pointermove',move);return()=>window.removeEventListener('pointermove',move)},[]);return null}
