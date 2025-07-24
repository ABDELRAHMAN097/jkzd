import { HelmetProvider, Helmet } from "react-helmet-async";

import './App.css'
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";
function App() {
  const { i18n } = useTranslation();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Adelrahman</title>
        <meta
          name="description"
          content="A React app with all required libraries"
        />
      </Helmet>

      <div 
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className="grid grid-cols-1 relative bg-black min-h-[100dvh] z-0 overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>  
       <AppRoutes />
      </div>
    </HelmetProvider>
  )
}
export default App;