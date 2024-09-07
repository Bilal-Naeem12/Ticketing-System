import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Divider,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Skeleton } from "@mui/material";

import CountdownTimer from "../components/ui/CountdownTimer";
import Confetti from "react-confetti";

export default function EventPage() {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false); // State for showing confetti

  // Simulating event data (instead of fetching from the backend)
  const eventData = {
    _id: "1",
    name: "Sample Event",
    description: "This is a sample event for demonstration purposes.",
    highlights: ["Live music", "Free food", "Networking opportunities"],
    date_from: "2024-09-25T12:00:00",
    date_to: "2024-09-26T18:00:00",
    location: "New York City, NY",
    ticket_price: 20,
    ticket_quantity: 100,
    ticket_quantity_left: 75,
    terms_conditions: "Terms and conditions apply to this event.",
    banner: "https://example.com/event-banner.jpg",
    organizer_id: {
      first_name: "John",
      last_name: "Doe",
    },
    tags: ["Music", "Food", "Networking"],
    event_type: "Paid",
  };

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setEvent(eventData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleBuyTicket = () => {
    // Simulate ticket purchase
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  if (loading) {
    return (
      <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 4, p: 2 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          className="text-center mb-10"
        >
          Event <span className="text-orange-400 font-extrabold">Details</span>
        </Typography>
        {/* Loading Skeleton */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Skeleton variant="rectangular" height={600} />
          </Grid>
          <Grid item xs={12} md={5}>
            <Skeleton variant="rectangular" height={400} />
          </Grid>
        </Grid>
      </Box>
    );
  }

  const targetDate = event.date_from; // Use event's date_from as the countdown target date

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 4, p: 2 }}>
      {/* Confetti will show only if showConfetti is true */}
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <Typography
        variant="h4"
        fontWeight={"bold"}
        className="text-center mb-10"
      >
        Event <span className="text-orange-400 font-extrabold">Details</span>
      </Typography>

      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Description
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              {event.name}
            </Typography>
            <Typography variant="body1" paragraph>
              {event.description}
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Event Highlights
            </Typography>
            <div variant="body2" paragraph>
              {event.highlights
                .join(", ")
                .split(",")
                .map((highlight, index) => (
                  <React.Fragment key={index}>
                    <li className="my-1">{highlight.trim()}</li>
                  </React.Fragment>
                ))}
            </div>

            {/* Countdown */}
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Fun begins in
            </Typography>
            <CountdownTimer targetDate={targetDate} />

            {/* Tickets Section */}
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Tickets
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Ticket</TableCell>
                    <TableCell>Total Price</TableCell>
                    <TableCell>Early Bird Discount</TableCell>
                    <TableCell>Final Price</TableCell>
                    <TableCell>Require Approval</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{event.name}</TableCell>
                    <TableCell>
                      {event.ticket_price ? `$${event.ticket_price}` : "Free"}
                    </TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>
                      {event.ticket_price ? `$${event.ticket_price}` : "Free"}
                    </TableCell>
                    <TableCell>No</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            {/* Terms & Conditions */}
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Terms & Conditions
            </Typography>
            <Typography variant="body2" paragraph>
              {event.terms_conditions}
            </Typography>
          </Paper>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={5} className=" sticky top-0">
          <Paper elevation={3} sx={{ p: 3 }}>
            <img
              src={event.banner}
              alt="Event Banner"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            />
            <Typography variant="h5" gutterBottom>
              {event.name}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              By {event.organizer_id.first_name} {event.organizer_id.last_name}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              <strong>Starts on:</strong>{" "}
              {new Date(event.date_from).toLocaleString()}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              <strong>Ends on:</strong>{" "}
              {event.date_to ? new Date(event.date_to).toLocaleString() : "N/A"}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              <strong>Location:</strong> {event.location}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              <strong>Category:</strong> {event.tags.join(", ")}
            </Typography>
            <Typography
              variant="body2"
              color="green"
              className="text-xl"
              gutterBottom
            >
              <strong>
                {event.ticket_price ? `$${event.ticket_price}` : "Free"} (
                {event.event_type})
              </strong>
            </Typography>
            <div className="flex justify-between items-center mt-5">
              <Button
                variant="contained"
                color="warning"
                onClick={handleBuyTicket}
              >
                Buy Tickets
              </Button>
              <Typography variant="body2" gutterBottom>
                <strong>
                  {event.ticket_quantity_left}/{event.ticket_quantity}
                </strong>
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
