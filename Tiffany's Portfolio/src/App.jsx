import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
