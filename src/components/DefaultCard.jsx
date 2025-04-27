import { PiPlusBold } from "react-icons/pi";
import styles from './DefaultCard.module.css';
import { useDispatch } from "react-redux";
import { handleClickOpen } from "../store/defaultCardSlice";
import CreateFormModal from "./CreateFormModal";

const DefaultCard = () => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(handleClickOpen());
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-6 mb-3 text-center">
        <div className="col">
          <div className={`card mb-4 rounded-3 shadow-sm ${styles.card}`}>
            <div className={`card-body  ${styles.cardBody}`} onClick={handleOpen}>
              <PiPlusBold size={60.67} color="#2F4ED7" />
              <p className={styles.font}>New form</p>
            </div>
          </div>
        </div>
      </div>
      <CreateFormModal />
    </>
  );
}

export default DefaultCard;