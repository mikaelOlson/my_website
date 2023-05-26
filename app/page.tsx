import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    Get started by editing&nbsp;
                    <code className={styles.code}>app/page.tsx</code>
                </p>
            </div>

            <div className={styles.center}>
                <h1 className={styles.title}>
                    <a>Welcome to my website!</a>
                </h1>
            </div>

            <div className={styles.grid}>
                <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p>
                        Find in-depth information about Next.js features and
                        API.
                    </p>
                </a>

                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Learn <span>-&gt;</span>
                    </h2>
                    <p>
                        Learn about Next.js in an interactive course
                        with&nbsp;quizzes!
                    </p>
                </a>

                <Link
                    href="/projects"
                    className={styles.card}
                    rel="noopener noreferrer"
                >
                    <h2>
                        Projects <span>-&gt;</span>
                    </h2>
                    <p>Check out what I'm working on!</p>
                </Link>

                <Link
                    href="/contact"
                    className={styles.card}
                    rel="noopener noreferrer"
                >
                    <h2>
                        Contact <span>-&gt;</span>
                    </h2>
                    <p>Get in touch with me!</p>
                </Link>
            </div>
        </main>
    );
}
