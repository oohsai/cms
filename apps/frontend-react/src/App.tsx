// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainPage from "./pages/MainPage";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<MainPage />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

// src/App.tsx
import React from "react";
import EntityForm from "./components/EntityForm";
import EntityList from "./components/EntityList";
import axios from "axios";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

const App: React.FC = () => {
  const handleSubmit = async (attributes: any) => {
    try {
      const response = await axios.post("http://localhost:3003", attributes, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        console.log("Entity created successfully");
      } else {
        console.error("Error creating entity:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating entity:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <SideBar />
      {/* <EntityForm onSubmit={handleSubmit} />
      <EntityList /> */}
    </div>
  );
};

export default App;
