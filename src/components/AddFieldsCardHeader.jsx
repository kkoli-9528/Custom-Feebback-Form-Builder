import { useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import styles from './AddFieldsCardHeader.module.css';

const AddFieldsCardHeader = () => {
  const labelName = useSelector(store => store.newFeedbackFormCustomize.labelName);

  return (
    <AppBar position="static" className={styles.container}>
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <span className={`material-icons ${styles.iconSize}`}>
            arrow_back_ios
          </span>
        </IconButton>
        <Typography variant="h6" style={{
          fontFamily: "Roboto",
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "160%",
          letterSpacing: "0.15px"
        }}>
          {labelName}
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="menu">
          <span className={`material-icons ${styles.iconSize}`}>
            edit
          </span>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default AddFieldsCardHeader;