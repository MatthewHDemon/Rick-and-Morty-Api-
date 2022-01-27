
  import "../Styles/App.css";
  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import { Navbar } from './Navbar';
  import { Home } from "../pages/Home";
  import { NotFound } from "../pages/NotFound";
  import { Episodes } from "../pages/Episodes";
  import { Locations } from "../pages/Location";
  import { CharacterPage} from "../pages/Characterpage";
  import { Footer} from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterPage/>} />
        <Route path="/episodes" element={<Episodes/>} />
        <Route path="/locations" element={<Locations />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Footer" element={<Footer />} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
