import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './CustomFieldComponents.module.css';

const CustomFieldComponents = ({ image }) => {

  return (
    <Toolbar variant="dense" style={{ display: 'flex', justifyContent: "space-between" }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img key={image.id} src={image.source} width="22.5px" height="22.4px" style={{ marginRight: '10px' }} />
        <Typography variant="h6" style={{
          fontFamily: "Roboto",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "160%",
          letterSpacing: "0.15px"
        }}>
          {image.name}
        </Typography>
      </div>
      <span className={`material-icons ${styles.iconSize}`} style={{ color: "#106EA4" }}>
        add
      </span>
    </Toolbar>
  );
}

export default CustomFieldComponents;