import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { TextField } from '@mui/material';

const AddLogicComponent = ({ item }) => {

  return (
    <Toolbar
      variant="dense"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        marginTop: item.textType !== 'url' && '8px'
      }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Typography variant="h6" style={{
          fontFamily: "Roboto",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "160%",
          letterSpacing: "0.15px",
        }}>
          {item.label}
        </Typography>
        <Switch sx={{ width: '50px' }} defaultChecked />
      </div>
      <TextField
        fullWidth
        type={item.textType}
        id={item.textType}
        name={item.textType}
        label={item.textType === 'url' && "http://"}
        variant="standard"
      />
    </Toolbar>
  );
}

export default AddLogicComponent;