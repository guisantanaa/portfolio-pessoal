import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function Header() {
  const [toggle, setToggle] = useState(true);
  const [cor, setCor] = useState('#F5F5F5');
  useEffect(() => {
    setCor((state) => (toggle ? '#F5F5F5' : '#4F6272'));
  });

  return (
    <header className={styles.headerContainer}>
      <Link href="/contact">
        <a onClick={(e) => setToggle((state) => !state)} color={cor}>
          Contato
        </a>
      </Link>

      <Link href="/project">
        <a onClick={(e) => setToggle((state) => !state)} color={cor}>
          Projetos
        </a>
      </Link>

      <Link href="/">
        <a onClick={(e) => setToggle((state) => !state)} color={cor}>
          Home
        </a>
      </Link>
    </header>
  );
}
