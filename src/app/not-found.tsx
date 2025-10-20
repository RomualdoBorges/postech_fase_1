import Link from "next/link";
import Image from "next/image";
import styles from "./styles/not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Ops! Não encontramos a página...</h1>
        <div className={styles.description}>
          <p>E olha que exploramos o universo procurando por ela!</p>
          <p>Que tal voltar e tentar novamente?</p>
        </div>

        <Link href="/" className={styles.link}>
          Voltar ao início
        </Link>
      </div>

      <Image
        src="/ilustracao404.svg"
        alt="Padrão decorativo topo"
        width={470.1}
        height={354}
        priority
      />
    </div>
  );
}
