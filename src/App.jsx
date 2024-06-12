import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./styles/partials/_globals.scss";
import MainPage from "./pages/MainPage/MainPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="/videos/:videoId" element={<MainPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
