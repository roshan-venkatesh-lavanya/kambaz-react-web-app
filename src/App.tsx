import Kambaz from "./Kambaz";
import Labs from "./Labs";
import { Route, Navigate, Routes, HashRouter } from "react-router-dom";
export default function App() {
 return (

  <HashRouter>
   <div>
    <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />

    </Routes>
   </div>
  </HashRouter>
  
);}


