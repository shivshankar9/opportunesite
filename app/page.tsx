"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Notes from "@/components/platformabout";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import Integrations from "@/components/Integrations";
import RecentProjects from "@/components/RecentProjects";
import OpportunePage from "./opportune/page";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { ClerkProvider } from "@clerk/nextjs";

const Home = () => {
  return (
    <ClerkProvider>
   
        
          <OpportunePage />
  
    </ClerkProvider>
  );
};

export default Home;
