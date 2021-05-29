import { Route, Navigate } from "react-router-dom";

import { useAuth } from "./AuthProvider";

export function PrivateRoute({ path, ...props }) {
  const { isUserLogin } = useAuth();

  return isUserLogin ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
