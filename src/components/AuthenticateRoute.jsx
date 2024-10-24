import { useUser } from "@clerk/clerk-react"
import { Navigate, useLocation } from "react-router";


export default function AuthenticateRoute({children}) {
  const { isSignedIn, isLoaded, user } = useUser();
  const pathName = useLocation();

  if (isLoaded && !isSignedIn && isSignedIn !== undefined ) {
    return <Navigate to={"/?sign-in=true"} />
  }


  //to do fix -- if no role is found -redirect user

  // if (user !== undefined && !user.unsafeMetadata?.role && pathName !== "/onboard") {
  //   return <Navigate to= "/onboard" />
  // }
  return children;
}
