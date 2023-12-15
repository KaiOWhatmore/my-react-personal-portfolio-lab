import { useState } from 'react';
import { Link } from 'react-router-dom'
import  styles from './Navbar.module.css';


function Navbar() {

  // adding the states 
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  return (
    <nav className={styles.navbar}>

      {/* logo */}
      <Link to="/home" className={styles.logo}>Kai</Link> 
      <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
        <li onClick={removeActive}>
          <Link to="/home" className={styles.navLink}>Home</Link>
        </li>
        <li onClick={removeActive}>
          <Link to="/about" className={styles.navLink}>About Me</Link>
        </li>
        <li onClick={removeActive}>
          <Link to="/books" className={styles.navLink}>Books</Link>
        </li>
        <li onClick={removeActive}>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </li>
      </ul>

      <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
      </div>
    </nav>
  );
}

export default Navbar;