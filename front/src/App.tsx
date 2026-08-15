import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import DocsLayout from './layouts/DocsLayout';

function Home() {
  return (
      <>
      </>
  );
}

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<DocsLayout />}>
            <Route path="/" element={<Home />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );

}

export default App;
