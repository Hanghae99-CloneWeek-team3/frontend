// DefaultIcon example --------------------------------------
// <DefaultIcon size='25' href='/' onClick={f_name}> *Icon or Component </DefaultIcon>
// * : 필수 입력값
// ----------------------------------------------------------

// Styled Components 
import { DivIconBox } from "./style";

export default function DefaultIcon({size='50', href='#', onClick, children}){

  // render
  return <a href={href} onClick={onClick}><DivIconBox  size={size}>{children}</DivIconBox></a>
}