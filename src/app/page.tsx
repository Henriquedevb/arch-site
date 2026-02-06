"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/VerseArquitetura.module.css";

export default function VerseArquitetura() {
  const images = ["/projeto1.png", "/projeto2.png", "/projeto3.png"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Head>
        <title>Verse Arquitetura</title>
      </Head>

      {/* Header */}
      <header className={styles.header}>
        <h1
          className={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          verse arquitetura
        </h1>
        <nav className={styles.nav}>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* Home / Carousel */}
      <section className={styles.hero} id="home">
        <Image
          src={images[current]}
          className={styles.heroImage}
          alt="Projeto de arquitetura"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className={styles.heroText}>
          <h2>Arquitetura que conecta estética, função e identidade</h2>
          <p>
            Inovando em lojas, fachadas, residências e arquitetura
            contemporânea.
          </p>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className={styles.section}>
        <h2 className={styles.sectionTitle}>Sobre nós</h2>
        <p className={styles.sectionText}>
          A Verse Arquitetura nasce da parceria entre duas arquitetas que
          acreditam na força do feminino, na precisão do traço e na inovação
          como linguagem. Uma união que deu certo e hoje se traduz em projetos
          modernos, sensíveis e marcantes.
        </p>

        <div className={styles.aboutGrid}>
          <div className={styles.architectCard}>
            <Image
              src="/bruna.png"
              className={styles.architectImage}
              alt="Bruna - Arquiteta"
              width={300}
              height={300}
            />
            <h3>Bruna</h3>
            <p>
              Bruna traz um olhar técnico refinado aliado à sensibilidade
              estética. Seu trabalho se destaca pela organização espacial, uso
              consciente dos materiais e soluções que equilibram forma e função.
            </p>
          </div>

          <div className={styles.architectCard}>
            <Image
              src="/eliene.png"
              className={styles.architectImage}
              alt="Eliene - Arquiteta"
              width={300}
              height={300}
            />
            <h3>Eliene</h3>
            <p>
              Eliene é movida pela inovação e pela experiência do usuário no
              espaço. Seus projetos exploram o design contemporâneo, fachadas
              marcantes e ambientes que dialogam com o entorno e com as pessoas.
            </p>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className={styles.sectionAlt}>
        <h2 className={styles.sectionTitle}>Atuação</h2>
        <p className={styles.sectionText}>
          Atuamos em lojas, fachadas comerciais, residências, edifícios e todas
          as áreas da arquitetura moderna, sempre com linguagem monocromática,
          linhas limpas e soluções autorais.
        </p>
      </section>

      {/* Contato */}
      <section id="contato" className={styles.section}>
        <h2 className={styles.sectionTitle}>Contato</h2>

        <form className={styles.form}>
          <input className={styles.input} placeholder="Nome" />
          <input className={styles.input} placeholder="E-mail" />
          <textarea className={styles.textarea} placeholder="Mensagem" />
          <button className={styles.button}>Enviar</button>
        </form>

        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps?q=brasil&output=embed"
            width="100%"
            height="250"
            loading="lazy"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Verse Arquitetura</p>
      </footer>
    </>
  );
}
