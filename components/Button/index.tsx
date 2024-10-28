import React, { ReactNode } from 'react';
import styles from './styles.module.css';
import { BUTTON_STYLES } from '../../constants/enums';


interface Props {
    type?: 'primary' | 'secondaryBordered';
    label: string | ReactNode;
    mainClassName?: string;
    labelClassName?: string;

}

export const Button = (props: Props) => {
    const {
        label,
        type = BUTTON_STYLES.primary,
        mainClassName,
        labelClassName
    } = props;

    return (
        <button
            className={`${styles.container} ${mainClassName}
            ${type === BUTTON_STYLES.primary && styles.primary}
            ${type === BUTTON_STYLES.secondaryBordered && styles.secondoryBordered}
        `}
        >
            <span className={labelClassName}>{label}</span>
        </button>
    )
}


