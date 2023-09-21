import ClipLoader from "react-spinners/ClipLoader";
import { LoadingContainer } from "./Loading.styled";

export const Loading = () => {
  return (
    <LoadingContainer>
      <ClipLoader  color="rgba(13, 106, 230, 1)"/>
      <b>Loading ...</b>
    </LoadingContainer>
  )
}