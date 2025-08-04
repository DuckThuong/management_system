import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WebRouter } from "./webRouter/webRouter";
const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<WebRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
