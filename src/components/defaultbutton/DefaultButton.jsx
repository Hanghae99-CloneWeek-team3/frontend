// DefaultButton example ------------------------------------
// <DefaultButton type='important' href='/' onClick={f_name}> *Button Value </DefaultButton>
// * : 필수 입력값
// type : default, important, disable
// ----------------------------------------------------------

// Library & Package 
import { useState, useEffect } from 'react'

// Styled Components 
import { DivButton } from './style'

export default function DefaultButton({type='default', href='#', onClick=()=>{}, children}){
  // variable 
  const [ colorSet, setColorSet ] = useState({
    fontColor: 'rgb(17, 17, 17)', 
    defaultBackgroundColor: 'rgb(239, 239, 239)',
    hoverBackgroundColor: 'rgb(226, 226, 226)'
  });

  // hooks 
  useEffect(() => {
    switch(type){
      case 'important':
        setColorSet({
          fontColor: 'rgb(255, 255, 255)', 
          defaultBackgroundColor: 'rgb(230, 0, 35)',
          hoverBackgroundColor: '#AD081B'
        })
        break;
      case 'disable':
        setColorSet({
          fontColor: 'rgb(118, 118, 118)', 
          defaultBackgroundColor: 'rgb(239, 239, 239)',
          hoverBackgroundColor: 'rgb(239, 239, 239)'
        })
        break; 
    }
  }, [type])

  // render 
  return <a href={href} onClick={onClick}><DivButton colorSet={colorSet}>{children}</DivButton></a>
}