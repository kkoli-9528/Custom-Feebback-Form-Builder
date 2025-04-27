import { useSelector } from "react-redux";
import styles from './CreateCustomFeedback.module.css';
import SideBar from "./SideBar";


const CreateCustomFeedback = () => {
  const labelName = useSelector(store => store.newFeedbackFormCustomize.labelName);

  return (
    <SideBar />
  );
}

export default CreateCustomFeedback;