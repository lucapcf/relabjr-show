import styles from './navbar.module.css';
import { useRef } from "react";
import { FaBars, FaTimes, FaInstagram, FaLinkedin,FaTwitter} from "react-icons/fa";
import classnames from 'classnames';
import Image from 'next/image'
import logo from "../../../public/uploads/05_1.png"


export default function navbar() {
    const navRef = useRef();
    const logoRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsiveNav"
		);
        logoRef.current.classList.toggle(
			"responsiveLogo"
		);
	};
    
    return(
        
            <header className={styles.cabecalho}>
                <a href="/" className={styles.logo} >
                    {/* <h3>RELABJR</h3> */}
                    <Image
                        src={logo}
                        width={90}
                        height={90}
                        // style={{objectFit: 'cover'}}
                        alt="Post"
                    />
                </a>
                <nav className={styles.navbar} ref={navRef}>
                    <button className={
                            classnames(
                              styles.navBtn,
                              styles.navRelabBtn
                            )
                          } ref={logoRef}>
                        {/* <h3>RELABJR</h3> */}
                        <Image
                        src={logo}
                        width={90}
                        height={90}
                        // style={{objectFit: 'cover'}}
                        alt="Post"
                    />
                    </button>
                    {/*<a href="/">HOME</a>*/}
                    <a href="/quemSomos">QUEM SOMOS</a>
                    <a href="/servicos">SERVIÇOS</a>
                    <a href="/blog">BLOG</a>
                    <button
                        className={
                            classnames(
                              styles.navBtn,
                              styles.navCloseBtn
                            )
                          }
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                    <div className={styles.links}>
                        <button
                            className={
                                classnames(
                                styles.navBtn
                                )
                            }
                            onClick={showNavbar}>
                            <FaInstagram />
                        </button>
                        <button
                            className={
                                classnames(
                                styles.navBtn
                                
                                )
                            }
                            onClick={showNavbar}>
                            <FaLinkedin />
                        </button>
                        <button
                            className={
                                classnames(
                                styles.navBtn
                                )
                            }
                            onClick={showNavbar}>
                            <FaTwitter />
                        </button>
                    </div>
                    
                </nav>
                <button
                    className={styles.navBtn}
                    onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
        

    );
}