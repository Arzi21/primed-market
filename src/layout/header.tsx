import { Link } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {

    return (
    <header className={styles.header}>
        <h1> Primed Market </h1>
        <Link to="new_Set">
            Create New Set
        </Link>
        <input type="text"></input>
    </header>
    );
}