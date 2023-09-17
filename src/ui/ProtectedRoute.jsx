import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!username) navigate("/");
    },
    [username, navigate],
  );
  return children;
}

export default ProtectedRoute;
