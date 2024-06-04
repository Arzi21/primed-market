
import styles from "./heroImage.module.css";

export const HeroImage = ({imagePath}:{imagePath:string}) => {
    return <img className={styles.heroImage} alt={imagePath} src={imagePath}/>
};