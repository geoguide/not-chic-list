import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<h1 className={styles.title}>This is not Chiclist</h1>
			</main>
			<footer className={styles.footer}>
				<h2>To be setup with mantine, supabase, and style</h2>
			</footer>
		</div>
	)
}
