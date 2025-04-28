import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';

const SideBar = () => {

  const [state, setState] = useState({ right: false });

  const toggleDrawer = (right, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [right]: open });
  };

  const list = (right) => (
    <Box
      sx={{ width: right === 'top' || right === 'bottom' ? 'auto' : 317 }}
      role="presentation"
      onClick={toggleDrawer(right, false)}
      onKeyDown={toggleDrawer(right, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <div key='right'>
        <Drawer
          anchor='right'
          variant='permanent'
          open={state['right']}
          onClose={toggleDrawer('right', false)}
          sx={{
            '& .MuiDrawer-paper': {
              minHeight: 'calc(100vh - 64px)',
              top: "65px",
              zIndex: 2
            }
          }}
        >
          {list('right')}
        </Drawer>
      </div>
    </div>
  );
}

export default SideBar;