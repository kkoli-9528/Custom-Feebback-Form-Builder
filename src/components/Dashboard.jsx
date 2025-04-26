import { useState } from 'react';
import styles from './Dashboard.module.css';
import DefaultCard from './DefaultCard';
import CreateFeedback from './CreateFeedback';

const Dashboard = () => {
  const [createNewForm, setCreateNewForm] = useState(false);

  const handleCreateNewForm = () => {
    console.log(createNewForm);
    setCreateNewForm(currState => !currState);
  };

  return (
    <center className={styles.container}>
      {!createNewForm ? <DefaultCard cardClicked={handleCreateNewForm} /> : <CreateFeedback />}
    </center>
  );
}

export default Dashboard;