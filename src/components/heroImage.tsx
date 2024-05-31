
import styles from "./heroImage.module.css";

export const HeroImage = (props: {imageName:string}) => {
    const {imageName} = props
    return <img className={styles.heroImage} alt="test" src={imageName}/>
};