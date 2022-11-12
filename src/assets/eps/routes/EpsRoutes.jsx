import { Navigate, Routes, Route } from "react-router-dom";
import { NavBar } from "../../design/components/NavBar";

import { Form, HomeEps, TablePage } from "../pages";

export const EpsRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
      <Route path="inicio" element={<HomeEps />} />
        <Route path="table" element={<TablePage />} />
        <Route path="form" element={<Form />} />
        <Route path="/*" element={<Navigate to="/inicio" />} />
      </Routes>
    </>
  );
};
