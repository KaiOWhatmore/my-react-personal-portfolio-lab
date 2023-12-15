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
      <Link to="/" className={styles.logo}>Kai</Link> 
      {/* <a href='#home' className={styles.logo}>Dev. </a> */}

      <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
        <li onClick={removeActive}>
          <Link to="/home" className={styles.navLink}>Home</Link>
        </li>
        <li onClick={removeActive}>
          <Link to="/catalog" className={styles.navLink}>Catalog</Link>
        </li>
        <li onClick={removeActive}>
          <Link to="/all-products" className={styles.navLink}>All products</Link>
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