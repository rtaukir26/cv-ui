import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const Navigate = useNavigate();
  //   const userToken = getUserToken();
  const userToken = true;
  useEffect(() => {
    if (userToken === null) {
      return Navigate("/unauthorized");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return children;
};

export default PrivateRoutes;
