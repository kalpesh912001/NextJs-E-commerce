import { Footer, Topbar } from '../components';
import React, { ReactNode } from 'react';

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
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Main
