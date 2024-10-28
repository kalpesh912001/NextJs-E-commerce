import { Footer, Topbar } from '../components';
import React, { ReactNode } from 'react';
import styles from './styles.module.css';
interface Props {
    children: ReactNode;
}
const Main = (props: Props) => {
    const {
        children
    } = props;

    return (
        <div>
            <Topbar />
            <main className={styles.childrenWrapper}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Main
