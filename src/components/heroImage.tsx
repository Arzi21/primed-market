
import styles from "./heroImage.module.css";

export const HeroImage = (props: {imagePath:string}) => {
    const {imagePath} = props
    return <img className={styles.heroImage} alt={imagePath} src={imagePath}/>
};