import { DivProfileImageBox } from "./style";

export default function ProfileImage({size, url}){

  return <DivProfileImageBox size={size}><img src={url} /></DivProfileImageBox>
}