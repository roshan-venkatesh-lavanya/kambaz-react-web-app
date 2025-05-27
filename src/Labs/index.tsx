import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router-dom";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import AddPathParameters from "./Lab3/AddPathParameters";
export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
     <h4> Roshan Venkatesh Lavanya</h4>
     <h5>SEC 04 Summer 1 2025</h5>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="/Labs/Lab3/Add/:a/:b" element={<AddPathParameters />} />

      </Routes>
    </div>
);}