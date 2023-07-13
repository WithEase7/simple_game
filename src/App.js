import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="primaryFont">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
