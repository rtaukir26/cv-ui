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
      document.getElementById("root")?.classList.add("light-mode");
      document.getElementById("root")?.classList.remove("dark-mode");
    } else {
      document.getElementById("root")?.classList.add("dark-mode");
      document.getElementById("root")?.classList.remove("light-mode");
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
