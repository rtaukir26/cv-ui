import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routePath } from "./RoutePath";
import UserCV from "../pages/CV/UserCV";
import PrivateRoutes from "./PrivateRoutes";
import CommonOutlet from "./CommonOutlet";
import { useEffect } from "react";
import { THEME_MODE } from "../constant/localStorage";

const AppRoutes = () => {
  useEffect(() => {
    const getLocalStorageValue = sessionStorage.getItem(THEME_MODE);
    if (
      getLocalStorageValue === "light-mode" ||
      getLocalStorageValue === null
    ) {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          element={
            <PrivateRoutes>
              <CommonOutlet />
            </PrivateRoutes>
          }
        >
          <Route path={routePath.root} element={<UserCV />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
