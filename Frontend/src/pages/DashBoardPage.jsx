import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/ui/Sidebar";

const DashboardPage = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box sx={{ flex: 1 }}></Box>
    </Box>
  );
};

export default DashboardPage;
