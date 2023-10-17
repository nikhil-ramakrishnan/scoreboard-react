import "./App.css";
import Header from "./ui/Header";
import Main from "./Main";
import LoginForm from "./UserPanel";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignupForm from "./SignupPanel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
