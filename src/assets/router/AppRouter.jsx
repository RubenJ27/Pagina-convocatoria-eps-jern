import { Routes, Route } from "react-router-dom";
import { EpsRoutes } from "../eps/routes/EpsRoutes";



export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<EpsRoutes />} />
      </Routes>
    </>
  );
};