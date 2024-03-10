import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, Navigate } from "react-router-dom";
import {
  selectCurrentUser,
  selectIsLoggedIn,
} from "../features/session/sessionSlice";

export default function Profile() {
  const currentUser = useSelector(selectCurrentUser);
  const loggedIn = useSelector(selectIsLoggedIn);

  if (!loggedIn) {
    return <Navigate to="/sign-up" />;
  }

  // use loggedIn to return a Navigate

  return (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to={`edit`}>Edit</Link>
      {/* Tell React Router where to render child routes` */}
      <Outlet />
    </main>
  );
}
