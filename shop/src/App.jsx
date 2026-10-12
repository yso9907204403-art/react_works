import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';

function App() {
  return (
    <section className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;