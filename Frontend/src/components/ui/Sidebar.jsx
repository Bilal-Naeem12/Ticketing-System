import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";

// Sidebar Component
const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "240px",
        bgcolor: "gray.200",
        height: "100vh",
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Profile */}
      <Box sx={{ mb: 4, display: "flex", alignItems: "center" }}>
        <Avatar
          alt="User Profile"
          src="https://randomuser.me/api/portraits/men/75.jpg"
          sx={{ width: 56, height: 56, mr: 2 }}
        />
        <Box>
          <Typography variant="h6">Fatih Takey</Typography>
        </Box>
      </Box>
      <Divider />
      {/* Navigation Links */}
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Discover" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CalendarTodayIcon />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Apps" />
        </ListItem>
      </List>
      <Divider sx={{ mt: "auto" }} />
      <List>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItem>
      </List>
    </Box>
  );
};

// Calendar Component
const Calendar = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">February 2018</Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 1,
          mt: 2,
        }}
      >
        {/* Mock data for calendar days */}
        {Array.from({ length: 28 }).map((_, index) => (
          <Paper
            key={index}
            sx={{
              height: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: index % 2 === 0 ? "gray" : "white",
            }}
          >
            <Typography>{index + 1}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

// Dashboard Page Component
const DashboardPage = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box sx={{ flex: 1, p: 2 }}>
        <Calendar />
      </Box>
    </Box>
  );
};

export default DashboardPage;
