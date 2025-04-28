import styles from './CreateCustomFeedback.module.css';
import SideBar from "./SideBar";
import FeedBackCutomCard from "./FeedBackCutomCard";


const CreateCustomFeedback = () => {

  return (
    <center className={styles.cardCenterAlign}>
      <SideBar />
      <div className={styles.cardAlignHorizontal}>
        <FeedBackCutomCard />
      </div>
    </center>
  );
}

export default CreateCustomFeedback;