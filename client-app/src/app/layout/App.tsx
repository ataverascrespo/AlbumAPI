import HomePage from "@/features/home/HomePage";
import SearchPage from "@/features/search/SearchPage";
import Navbar from "./Navbar";

import { ThemeProvider } from "@/components/theme-provider"
import { observer } from "mobx-react-lite"
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

"use client"
 
function App() {  
  
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="App">
        <Navbar></Navbar>
          <Outlet />
        <Toaster />
      </div>
    </ThemeProvider>
  )
}

// Wrap app component in observer
export default observer(App);
