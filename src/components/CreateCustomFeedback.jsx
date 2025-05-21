import styles from "./CreateCustomFeedback.module.css";
import SideBar from "./SideBar";
import FeedBackCutomCard from "./FeedBackCutomCard";

const CreateCustomFeedback = () => {
  return (
    <div className={styles.cardCenterAlign}>
      <div className={styles.cardAlignHorizontal}>
        <FeedBackCutomCard />
      </div>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
    </div>
  );
};

export default CreateCustomFeedback;
