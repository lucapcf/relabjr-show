// import relabIconYellow from '../../../public/uploads/image/footer/relabIconYellow.svg'
import styles from './footer.module.css'
import { handleJSONfile } from '@/utils/functions/jsonHandler'
import Image from 'next/image'
import LinkedinIcon from "../../../public/uploads/image/footer/linkedinIcon.png"
import TwitterIcon from "../../../public/uploads/image/footer/twitterIcon.png"
import InstagramIcon from "../../../public/uploads/image/footer/instagramIcon.png"


const handleMove = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // here it goes
};



export default function Footer(footerData) {
    return (
            <div className={styles.footer}>
                <div className={styles['bg-img-handle']}/>
                <div className={styles.topPart}>
                    
                    <button onClick={handleMove} className={styles.relabIcon}>
                        <Image
                            
                            src={footerData.logo}
                            width={150}
                            height={150}
                            className={styles['logoImg']}
                            />

                        
                    </button>                
                    
                    <div className={styles.contactSocials}>
                        <span className={styles.contactText}>
                            Entre em contato:
                        </span>
                        <div className={styles['social-icons']}>
                        
                            <a className={styles['linkedin-icon']} href={footerData.linkedin} target="_blank">
                                <Image
                                    src={LinkedinIcon}
                                    width={50}
                                    height={50}
                                    className={styles['insideImg']}
                                    quality={100}
                                    />
                            </a>
                        
                        
                            <a className={styles.twitterIcon} href='/' target="_blank">
                                <Image
                                    src={TwitterIcon}
                                    width={50}
                                    height={50}
                                    className={styles['insideImg']}
                                    quality={100}
                                    />
                            </a>
                        
                        
                            <a className={styles['instagram-icon']} href={footerData.instagram} target="_blank">
                                <Image
                                    src={InstagramIcon}
                                    width={50}
                                    height={50}
                                    className={styles['insideImg']}
                                    quality={100}
                                    />
                            </a>
                        

                        </div>
                    </div>
                </div>


                
                <div className={styles['bottom-part']}>
                    <div className={styles['membership-icons']}>
                        
                        <a className={styles['lab-icon']} href='https://unisinos.br/lab/programas/relab' target='_blank'>
                            <Image
                                src={footerData.watermark1}
                                width={90}
                                height={35}
                                className={styles['watermarkImg']}
                                quality={100}
                                />
                        </a>
                        
                        
                        <a className={styles['jesuitas-icon']} href='https://jesuitasbrasil.org.br' target='_blank'>
                            <Image
                                src={footerData.watermark2}
                                width={165}
                                height={50}
                                className={styles['watermarkImg']}
                                quality={100}
                                />
                        </a>


                        <a className={styles['unisinos-icon']} href='https://www.unisinos.br/' target='_blank'>
                            <Image
                                src={footerData.watermark3}
                                width={150}
                                height={40}
                                className={styles['watermarkImg']}
                                quality={100}
                                />
                        </a>
                    
                    </div>

                    <span className={styles.footerText}>
                    <text className={styles.footerText}>{footerData.copy}</text>
                    </span>
                </div>
            </div>
    );
}