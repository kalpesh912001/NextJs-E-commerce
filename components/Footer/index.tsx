import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import { logo_white } from '@/public/assets/images';
import useGetFooterDataMapping from './hooks/useGetFooterDataMapping';

export const Footer = () => {
    const { footerDataLinks } = useGetFooterDataMapping();

    return (
        <div className={styles.container}>
            <div>
                <Image src={logo_white} alt='logo' width={100} />
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
