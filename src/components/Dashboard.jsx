import styles from './Dashboard.module.css';
import DefaultCard from './DefaultCard';

const Dashboard = () => {

  return (
    <center className={styles.container}>
      <DefaultCard />
    </center>
  );
}

export default Dashboard;