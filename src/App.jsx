import { HelmetProvider, Helmet } from "react-helmet-async";

import './App.css'
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";
function App() {
  

  return (
    <HelmetProvider>
      <Helmet>
        <title>Adelrahman</title>
        <meta
          name="description"
          content="A React app with all required libraries"
        />
      </Helmet>

      <div className="relative bg-black z-0 overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>  
        
       <AppRoutes />
        
      </div>
    </HelmetProvider>
  )
}

export default App


  
