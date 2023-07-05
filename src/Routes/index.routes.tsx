import { Route, Routes } from "react-router-dom";

import Form from "../layouts/Form";
import Contact from "../pages/Contact";
import Company from "../pages/Company";
import Project from "../pages/Project";

export default function Router() {
  return (
    <Routes>
      <Route element={<Form />} path="/">
        <Route element={<Contact />} path="/" />
        <Route element={<Company />} path="/company" />
        <Route element={<Project />} path="/project" />
      </Route>
    </Routes>
  );
}
