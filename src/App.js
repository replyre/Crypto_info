import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Coinpage from "./pages/Coinpage";

function App() {
  const styles = {
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  };
  return (
    <BrowserRouter basename="">
      <div style={styles.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<Coinpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
