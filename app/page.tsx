import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
     <main className={styles.main}>
        <h1 className={styles.title}>Vampatars</h1>

        <div style={{ display: 'grid', gap: 10, gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', marginTop: "16px" }}>
          <img
            className={styles.avatar}
            src="/bla"
            alt="Vercel"
          />
          <img className={styles.avatar} src="/1" alt="Vercel" />
          <img className={styles.avatar} src="/2" alt="Vercel" />
          <img className={styles.avatar} src="/3" alt="Vercel" />
          <img className={styles.avatar} src="/4" alt="Vercel" />
          <img className={styles.avatar} src="/5" alt="Vercel" />
          <img className={styles.avatar} src="/6" alt="Vercel" />
          <img className={styles.avatar} src="/7" alt="Vercel" />
          <img className={styles.avatar} src="/8" alt="Vercel" />
          <img className={styles.avatar} src="/9" alt="Vercel" />
          <img className={styles.avatar} src="/10" alt="Vercel" />
          <img className={styles.avatar} src="/12" alt="Vercel" />
          <img className={styles.avatar} src="/13" alt="Vercel" />
          <img className={styles.avatar} src="/seed1" alt="Vercel" />
          <img className={styles.avatar} src="/seed5" alt="Vercel" />
          <img className={styles.avatar} src="/seed1" alt="Vercel" />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}
