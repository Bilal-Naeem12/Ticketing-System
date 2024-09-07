import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import EventCard from "../components/ui/EventCard";
import Skeleton from "@mui/material/Skeleton";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data with hardcoded dummy data
    const fetchUpcomingEvents = async () => {
      try {
        // Simulate network delay
        setTimeout(() => {
          // Dummy data for events
          const dummyEvents = [
            {
              _id: "1",
              name: "Sample Event 1",
              banner:
                "https://images.unsplash.com/photo-1518709268801-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              description: "This is a sample description for event 1.",
            },
            {
              _id: "2",
              name: "Sample Event 2",
              banner:
                "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              description: "This is a sample description for event 2.",
            },
            {
              _id: "3",
              name: "Sample Event 3",
              banner:
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              description: "This is a sample description for event 3.",
            },
            {
              _id: "4",
              name: "Sample Event 4",
              banner:
                "https://images.unsplash.com/photo-1533114970335-19a0c77ba10b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              description: "This is a sample description for event 4.",
            },
          ];
          setEvents(dummyEvents);
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        setError("Failed to load events");
        setIsLoading(false);
      }
    };

    fetchUpcomingEvents();
  }, []);

  return (
    <div className="mt-16">
      <div className="mx-auto space-y-6 max-w-7xl px-5 sm:px-6 lg:px-8">
        <Typography
          variant="h4"
          fontWeight={"bold"}
          className="text-center mb-10"
        >
          Upcoming{" "}
          <span className="text-orange-400 font-extrabold">Events</span>
        </Typography>

        {isLoading ? (
          <div className="flex flex-col gap-5 flex-wrap w-full justify-start items-center sm:items-start sm:flex-row">
            {[...Array(4)].map((_, i) => (
              <Skeleton
                key={i}
                sx={{ maxWidth: 400 }}
                variant="rectangular"
                className="min-w-[200px] w-full h-[300px] sm:h-[300px] sm:w-[23.33%]"
              />
            ))}
          </div>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <div className="flex flex-col gap-5 flex-wrap w-full justify-start items-center sm:items-start sm:flex-row">
            {events.map((item) => (
              <EventCard
                key={item._id}
                src={item.banner}
                name={item.name}
                event={item}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
