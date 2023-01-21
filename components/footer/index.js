import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with  by&nbsp; {/* non breaking white space */}
      <Link href="https://linkedin.com/in/sertacgultekin" target="_blank">sertacgltkn</Link>
    </footer>
  );
}
export { Footer };
