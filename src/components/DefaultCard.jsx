import { PiPlusBold } from "react-icons/pi";
import styles from './DefaultCard.module.css';

const DefaultCard = ({ cardClicked }) => {
  return (
    <div className="row row-cols-1 row-cols-md-6 mb-3 text-center">
      <div className="col">
        <div className={`card mb-4 rounded-3 shadow-sm ${styles.card}`}>
          <div className={`card-body  ${styles.cardBody}`} onClick={cardClicked}>
            <PiPlusBold size={60.67} color="#2F4ED7" />
            <p className={styles.font}>New form</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultCard;