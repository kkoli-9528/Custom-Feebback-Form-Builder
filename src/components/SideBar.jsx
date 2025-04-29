import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomFieldComponents from './CustomFieldComponents';
import styles from './SideBar.module.css';
import { Divider } from '@mui/material';
import AddLogicComponent from './AddLogicComponent';

const SideBar = () => {

  const [state, setState] = useState({ right: false });
  const arrayOfImages = useSelector(store => store.addFieldsComponent);
  const addLogicComponent = useSelector(store => store.addLogicComponent);

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
        <h6 className={styles.textHeader}>Add fields</h6>
        {arrayOfImages.map((image) => (
          <CustomFieldComponents key={image.id} image={image} />
        ))}
      </List>
      <Divider />
      <List>
        <h6 className={styles.textHeader}>Add Logic</h6>
        {addLogicComponent.map((item) => (
          <AddLogicComponent key={item.id} item={item} />
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
              zIndex: 2,
              boxShadow: "0px 4px 4px 0px #00000040"
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