import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { logo_green } from '../../public/assets/images';
import { useGetTopbarData } from './hooks/useGetTopbarData';
import { useRouter } from 'next/router';
import { TopbarManuLinks } from '../../types';
import { topBarFeturesKeys } from '@/constants';

export const Topbar = () => {
    const router = useRouter();
    const {
        menuItems,
        topBarFetures,
        cartItemCount
    } = useGetTopbarData();

    return (
        <div className={styles.container}>
            <div>
                <Image src={logo_green} alt='logo' width={100} />
            </div>
            <div className={styles.menuItems}>
                {
                    menuItems?.map((item: TopbarManuLinks, index: number) => {
                        const isActive = item?.path ? router.pathname.includes(item?.path) : false
                        return (
                            <div
                                key={index}
                                className={isActive ? styles.activeMenuLink : styles.menuLink}
                                onClick={() => {
                                    if (item.path)
                                        router.push(item.path)

                                }}>
                                {item?.component}
                            </div>
                        )
                    })
                }
                {
                    topBarFetures?.map((item: TopbarManuLinks, index: number) => {
                        const isActive = item?.path ? router.pathname.includes(item?.path) : false
                        return (
                            <div
                                key={index}
                                className={isActive ? styles.activeTopbarFeature : styles.topbarFeatureBox}>
                                <Image src={isActive ? item?.activeIcon : item?.icon} alt='menu' width={16} />
                                {
                                    item?.key === topBarFeturesKeys.shoppingCart &&
                                    <div className={styles.cartBadge}>{cartItemCount}</div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

