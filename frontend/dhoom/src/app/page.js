import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <div className={styles.navBrand}>Dhoom</div>
                <div className={styles.navItems}>
                    <Link href="/" className={styles.navItem}>
                        Home
                    </Link>
                    <Link href="/about" className={styles.navItem}>
                        About
                    </Link>
                    <Link href="/contact" className={styles.navItem}>
                        Contact
                    </Link>
                </div>
            </nav>
            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to Dhoom</h1>
                <p className={styles.description}>Start your meeting now</p>
                <button className={styles.button}>Start Meeting</button>
            </main>
        </div>
    );
}
