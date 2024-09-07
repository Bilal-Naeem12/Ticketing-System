import React from "react";
import { Box, Typography } from "@mui/material";

const Calendar = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">Calendar View</Typography>
      {/* This is where you would integrate a calendar component */}
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 1 }}
      >
        {/* Mock data for days */}
        {Array.from({ length: 30 }).map((_, index) => (
          <Box
            key={index}
            sx={{ textAlign: "center", p: 1, border: "1px solid #ccc" }}
          >
            {index + 1}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Calendar;
