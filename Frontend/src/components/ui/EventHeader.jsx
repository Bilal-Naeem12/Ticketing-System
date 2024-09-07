import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const EventHeader = ({ events }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", p: 2 }}>
      {events.map((event) => (
        <Paper
          key={event.id}
          elevation={3}
          sx={{ p: 2, minWidth: 150, bgcolor: event.color }}
        >
          <Typography variant="h6" sx={{ color: "#fff" }}>
            {event.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            {event.date}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default EventHeader;
