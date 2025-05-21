import { PiPlusBold } from "react-icons/pi";
import styles from "./FeedBackCutomCard.module.css";
import AddFieldsCardHeader from "./AddFieldsCardHeader";
import AddFieldComponents from "./AddFieldComponents";
import { useSelector } from "react-redux";

const FeedBackCutomCard = () => {
  const { toggle } = useSelector((store) => store.switchComponent);

  return (
    <div className={`mb-3 ${styles.container}`}>
      <div className="col">
        <div className={`card mb-4 rounded-3 shadow-sm ${styles.card}`}>
          <AddFieldsCardHeader />
          {toggle ? (
            <div className={styles.addFields}>
              <AddFieldComponents />
            </div>
          ) : (
            <div className={`card-body ${styles.cardBody}`}>
              <p className={styles.font}>Add Fields</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedBackCutomCard;
