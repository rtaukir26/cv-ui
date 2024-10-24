import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routePath } from "./RoutePath";
import UserCV from "../pages/CV/UserCV";
import PrivateRoutes from "./PrivateRoutes";
import CommonOutlet from "./CommonOutlet";
import { useEffect } from "react";

const AppRoutes = () => {
  // const [hemeValue, setThemeValue] = useState(true);
  useEffect(() => {
    const getLocalStorageValue = localStorage.getItem("theme-mode");

    if (
      getLocalStorageValue === "light-mode" ||
      getLocalStorageValue === null
    ) {
      // setThemeValue(true);
      document.getElementById("root")?.classList.add("light-theme");
      document.getElementById("root")?.classList.remove("dark-theme");
    } else {
      // setThemeValue(false);
      document.getElementById("root")?.classList.add("dark-theme");
      document.getElementById("root")?.classList.remove("light-theme");
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
