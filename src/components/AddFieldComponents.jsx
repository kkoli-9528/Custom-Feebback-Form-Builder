import { useSelector } from "react-redux";
import styles from "./AddFieldComponents.module.css";
import componentRegistry from "../store/componentRegistry";

const AddFieldComponents = () => {
  const obj = useSelector((store) => store.addFieldsComponent);
  const newElement = obj.filter((arr) => arr.elementLoaded > 0);
  console.log(newElement);

  if (newElement.length === 0) {
    return <div className={styles.container}>No New Element/Type</div>;
  }

  return (
    <div className={styles.container}>
      {newElement.map((element) => {
        console.log(element);
        const Component = componentRegistry[element.type];
        console.log(Component);
        return <Component key={element.id} {...(element.props || {})} />;
      })}
    </div>
  );
};

export default AddFieldComponents;
