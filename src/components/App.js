import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import { ProductDetailsPage } from "./views";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>

      <Routes>
        <Route path='/' element={<ProductDetailsPage id={"apple-airpods-pro"}></ProductDetailsPage>} />
        <Route path='*' element={<Navigate to={"/"} replace />} />
      </Routes>
    </div>
  );
}

export default App;
