import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Sidebar() {
  const [menuSidebar, setMenuSidebar] = React.useState(false);

  const handleOpenClose = () => {
    setMenuSidebar(!menuSidebar);
  }

  const list = (anchor) => (
    <div>
      Opcoes
    </div>
  );

  return (
    <div>

    </div>
  );
}
