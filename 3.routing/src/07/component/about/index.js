import React from 'react';
import SiteLayout from "../../layout/SiteLayout";
import styles from '../../assets/scss/component/about/Navigation.scss';

export default function About() {
    return (
        <SiteLayout>
            <nav className={styles.Navigation}>
                <a href={'/about/kickscar'}>Kickscar</a>
                <span/>
                <a href={'/about/location'}>Location</a>
            </nav>

        </SiteLayout>
    );
}