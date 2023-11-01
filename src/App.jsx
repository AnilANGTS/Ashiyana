import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage";
import Property from "./pages/Property";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <>
    <BrowserRouter>
    <Toaster />
    <Routes>

    <Route path="/" element={<LandingPage />} />
    <Route path="/property/:id" element={<Property />} />
    <Route path="/propertydetails" element={<PropertyDetails />} />

    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
