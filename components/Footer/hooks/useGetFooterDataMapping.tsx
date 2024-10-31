import Image from "next/image"
import { socialNetworks } from "../../../constants";
import styles from '../styles.module.css';
import { apple, playStore } from "@/public/assets/icons";

const useGetFooterDataMapping = () => {

    const SocialNetworkSection = () => {
        return (
            <div className={styles.socialNetworkSection}>
                {
                    socialNetworks.map((item, index) => {
                        return (
                            <div key={index}>
                                <Image src={item.icon} alt={item.name} width={20} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    const GetAppButtons = () => {
        return (
            <div className={styles.getAppSection}>
                <div className={styles.getAppBtn}>
                    <Image src={apple} alt="apple store" width={24} />
                    <div className={styles.getAppBtnText}>
                        <span className={styles.getAppDownload}>Download on the</span>
                        <span className={styles.getAppBtnHeader}>Apple Store</span>
                    </div>
                </div>
                <div className={styles.getAppBtn}>
                    <Image src={playStore} alt="play store" width={24} />
                    <div className={styles.getAppBtnText}>
                        <span className={styles.getAppDownload}>GET IT ON</span>
                        <span className={styles.getAppBtnHeader}>Google Play</span>
                    </div>
                </div>
            </div>
        )
    }

    const footerDataLinks = [
        {
            header: 'Contact us',
            links: [
                'Logo@gmail.com',
                '+91 12345 67890',
                'Lorem ipsum dolor sit amet consectetur.',
                'Nulla tempus elit nec.',
                < SocialNetworkSection key={'socialNetworkSection'} />
            ]
        },
        {
            header: 'Products Links',
            links: [
                'Auctor volutpat.', 'Fermentum turpis.', 'Mi consequat.', 'Amet venenatis.', 'Convallis porttitor.'
            ]
        },
        {
            header: 'Quick Links',
            links: [
                'Egestas vitae.', 'Viverra lorem ac.', 'Eget ac tellus.', 'Erat nulla.', 'Vulputate proin.'
            ]
        },
        {
            header: 'Legal Links',
            links: [
                'Egestas vitae.', 'Viverra lorem ac.', 'Eget ac tellus.', 'Erat nulla.', 'Vulputate proin.'
            ]
        },
        {
            header: 'Get the app',
            links: [
                <GetAppButtons key={'getAppButtons'} />
            ]
        }

    ]
    return {
        footerDataLinks
    }
}

export default useGetFooterDataMapping;
