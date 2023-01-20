import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./Components/Includes/Header";
import SideBar from "./Components/Includes/SideBar";
import ComingSoon from "./Components/Screens/ComingSoon";
import Dashboard from "./Components/Screens/Dashboard";
import Graph from "./Components/Screens/Graph";
import NoMatch from "./Components/Screens/NoMatch";
import Settings from "./Components/Screens/Settings";
import Wallet from "./Components/Screens/Wallet";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <SideBar />

          <Routes>
            <Route
              path="/"
              element={<Navigate to="/dashboard" element={<Dashboard />} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/nothing" element={<ComingSoon />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/settings" element={<Settings />} />
            <Route exact path="*" element={<NoMatch />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;
