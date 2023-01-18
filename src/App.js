import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./Components/Includes/Header";
import SideBar from "./Components/Includes/SideBar";
import Dashboard from "./Components/Screens/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Container>
        <SideBar />
      </Router>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;
