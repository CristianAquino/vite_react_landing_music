// import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import PageMusic from "./pages/PageMusic";
import Layout from "./pages/Layout";
import routes from "./utils/routesPage";
import PageFitnes from "./pages/PageFitnes";
import SocialMedia from "./pages/SocialMedia";

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />} />
      <Route path={routes.landingPageMusic} element={<PageMusic />} />
      <Route path={routes.landingPageFitnes} element={<PageFitnes />} />
      <Route path={routes.socialMedia} element={<SocialMedia />} />
      <Route
        path={routes.error}
        element={<Navigate replace to={routes.home} />}
      />
    </Routes>
  );
}

export default App;
