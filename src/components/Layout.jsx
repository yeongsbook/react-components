import styles from "styles/components/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.inner}>
          <h1 className={styles.main_title}>React Components</h1>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.inner}>{children}</div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.inner}>Footer</div>
      </footer>
    </div>
  );
}

export default Layout;
