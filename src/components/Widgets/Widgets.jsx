// redux
import { useSelector } from "react-redux"

// loading widget
import { Loading } from "./Loading/Loading"

export const Widgets = () => {

  const {error,isLoading} = useSelector(state => state.contacts)

  return (
    <>
      {isLoading && <Loading />}
      {error && alert(error)}
    </>
  )
}