import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import DocsLayout from "./layouts/DocsLayout";
import GeneralTrinity from "./pages/trinity/GeneralTrinity";

function Home() {
  return (
    <main className="home-page">
      <h1>Documentation</h1>
      <p>Select a section from the navigation menu.</p>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DocsLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/general-trinity"
            element={<GeneralTrinity />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
