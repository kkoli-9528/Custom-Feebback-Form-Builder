import { useSelector } from 'react-redux';
import styles from './Header.module.css';
import { Button } from '@mui/material';

const Header = () => {
  const headerButton = useSelector(store => store.headerButton.value);

  return (
    <>
      <div className={`container ${styles.container}`}>
        <header className="d-flex flex-wrap justify-content-center">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src='images/header_symbol.png' width="64px" height="64px" className="bi me-2" alt='Header_Logo'></img>
            <span className={styles.fontStyle}>USER Feedback</span>
          </a>

          {headerButton && (<ul className="nav nav-pills align-items-center">
            <li className="nav-item px-3"><Button className="btn btn-primary" variant="contained" size='large'>
              Save
            </Button></li>
            <li className="nav-item pe-3"><Button className="btn btn-success" variant="contained" color="success" size='large'>
              Publish
            </Button></li>
          </ul>)}
        </header>
      </div>
    </>
  );
}

export default Header;