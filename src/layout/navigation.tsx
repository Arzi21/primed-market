
import { Link } from "react-router-dom";
import styles from "./navigation.module.css";
import button from "../styles/button.module.css";

export const NavigationBar = () => {

    return (<nav className={styles.navLinks}>
        <ul>
            <li>
                <Link className={button.link} to="/">Item Sets</Link>
            </li>
            <li>
                <Link className={button.link} to="/test">Top Sellers</Link>
            </li>
            <li>
                <Link className={button.link} to="/test">Top Buyers</Link>
            </li>
            <li>
                <Link className={button.link} to="/test">Highest Listings</Link>
            </li>
            <li>
                <Link className={button.link} to="/new_set"> Create New Set</Link>
            </li>
        </ul>
    </nav>);
}