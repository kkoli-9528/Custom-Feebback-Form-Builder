import { PiPlusBold } from "react-icons/pi";
import styles from './FeedBackCutomCard.module.css';
import AddFieldsCardHeader from "./AddFieldsCardHeader";

const FeedBackCutomCard = () => {
  return (
    <div className={`mb-3 ${styles.container}`}>
      <div className="col">
        <div className={`card mb-4 rounded-3 shadow-sm ${styles.card}`}>
          <AddFieldsCardHeader />
          <div className={`card-body  ${styles.cardBody}`}>
            <p className={styles.font}>Add Fields</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBackCutomCard;