import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { HomeIcon, Settings, Task } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const getIcon = (icon) => {
  switch (icon) {
    case "HOME":
      return <HomeIcon />;
    case "TASKS":
      return <Task />;
    case "SETTINGS":
      return <Settings />;
    default:
      return <HomeIcon />;
  }
};

const MenuLisItems = ({ list }) => {

const navigate = useNavigate()
const navigateTo = (path)=> navigate(path)

  return (
    <List>
      {list.map(({ text, path, icon }, index) => (
        <ListItem key={index} button onClick={() => navigateTo(path)}>
          <ListItemIcon>{getIcon(icon)}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};

export default MenuLisItems;
