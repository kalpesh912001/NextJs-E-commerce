import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import { logo_white } from '../../public/assets/images';
import useGetFooterDataMapping from './hooks/useGetFooterDataMapping';
import { useRouter } from 'next/router';
import { ROUTER_PATHS } from '../../constants/enums';

export const Footer = () => {
    const { footerDataLinks } = useGetFooterDataMapping();
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div>
                <Image src={logo_white} alt='logo' width={100}
                    onClick={() => {
                        router.push(ROUTER_PATHS.home)
                    }} />
            </div>
            <div className={styles.footerColumnsContainer}>
                {
                    footerDataLinks?.map((item, index) => {
                        return (
                            <div key={index}
                                className={styles.footerSections}>
                                <div className={styles.linksHeader}>{item.header}</div>
                                <div className={styles.linksSection}>
                                    {
                                        item.links?.map((link, index) => (
                                            <div key={index} className={styles.links}>{link}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.copyRightsSection}>
                <span className={styles.copyRightsText}>Copyright © 2020. All rights reserved.</span>
            </div>
        </div>
    )
}
