import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";

export default function EventCard() {
  // Dummy data for the event
  const event = {
    _id: "12345",
    name: "Sample Event",
    banner:
      "https://images.unsplash.com/photo-1424161318821-cb73e69b9422?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "This is a sample description of the event. It can have more details about what the event offers, the schedule, or key speakers.",
    entry_type: "Paid",
    ticket_price: 20,
  };

  const isLoading = false; // Simulate loading state

  return isLoading ? (
    <Skeleton
      sx={{ width: "100%", height: "100%" }}
      variant="rectangular"
      className="min-w-[200px] w-full h-[300px] sm:h-[300px] sm:w-[23.33%]"
    />
  ) : (
    <Link
      to={`/event/${event._id}`}
      className="min-w-[200px] sm:w-[23.33%] hover:scale-110 cursor-pointer transition-all hover:text-gray-800"
    >
      <Card
        sx={{
          maxWidth: 345,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {event.entry_type === "Free" ? (
          <div className="absolute top-0 left-0 bg-green-800 px-5 py-1 z-10">
            <Typography variant="caption" style={{ color: "white" }}>
              Free
            </Typography>
          </div>
        ) : (
          <div className="absolute top-0 left-0 bg-red-500 px-5 py-1 z-10">
            <Typography
              variant="caption"
              style={{ color: "white" }}
              className="font-bold text-lg"
            >
              {event.ticket_price}$
            </Typography>
          </div>
        )}
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            image={event.banner}
            alt={event.name}
            sx={{
              height: 180, // Fixed height
              width: "100%",
              objectFit: "cover",
              flexShrink: 0, // Prevent image from shrinking
            }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div" noWrap>
              {event.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="hover:text-orange-300"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                flexGrow: 1,
              }}
            >
              {event.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
