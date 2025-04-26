import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <div className={`container ${styles.container}`}>
        <header className="d-flex flex-wrap justify-content-center py-3">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src='images/header_symbol.png' width="64px" height="64px" className="bi me-2" alt='Header_Logo'></img>
            <span className={styles.fontStyle}>USER Feedback</span>
          </a>

          <ul className="nav nav-pills invisible">
            <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default Header;