import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomFieldComponents from "./CustomFieldComponents";
import AddLogicComponent from "./AddLogicComponent";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const [sidebarHeight, setSidebarHeight] = useState(0);
  const arrayOfImages = useSelector((store) => store.addFieldsComponent);
  const addLogicComponent = useSelector((store) => store.addLogicComponent);

  useEffect(() => {
    const updateHeight = () => {
      const headerHeight =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height"
          )
        ) || 64;
      setSidebarHeight(window.innerHeight - headerHeight);
    };

    updateHeight(); // Set initially
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className={styles.sidebar} style={{ height: `${sidebarHeight}px` }}>
      <div className={styles.section}>
        <h6 className={styles.textHeader}>Add fields</h6>
        <ul className={styles.list}>
          {arrayOfImages.map((image) => (
            <li key={image.id}>
              <CustomFieldComponents image={image} />
            </li>
          ))}
        </ul>
      </div>

      <hr className={styles.divider} />

      <div className={styles.section}>
        <h6 className={styles.textHeader}>Add Logic</h6>
        <ul className={styles.list}>
          {addLogicComponent.map((item) => (
            <li key={item.id}>
              <AddLogicComponent item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
