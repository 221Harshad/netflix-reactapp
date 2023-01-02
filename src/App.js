import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { actions, originals,horror,comedy,toprated  } from "./urls";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Error from "./components/pages/Error";
import Signin from "./components/home/SignUp/SignIn";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <>
              <NavBar />
              <Banner />
              
              <RowPost url={originals} title="Netflix Originals" />
              <RowPost url={toprated} title="Toprated" isSmall />
              <RowPost url={actions} title="Action" isSmall />
              <RowPost url={horror} title="Horror" isSmall />
              <RowPost url={comedy} title="Comedy" isSmall />
            </>
          }
        />
        <Route path="*" element={<Error />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
