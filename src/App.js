import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import AllContacts from "./pages/AllContact";
import AddContact from "./pages/AddContact";
import PageNotFound from "./pages/PageNotFound";
import UpdateContact from "./pages/UpdateContact";
import ViewContact from "./pages/ViewContact";

function App() {
  return (
    <Router>
      <Navbar />
      <>
        <Routes>
          <Route path="/" exact element={<AllContacts />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/update-contact/:id" element={<UpdateContact />} />
          <Route path="/view-contact/:id" element={<ViewContact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
