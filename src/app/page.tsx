"use client";

import { useRef } from "react";
import Header from "@/Header";
import { motion, useScroll, useTransform } from "motion/react";

// ─── Data ────────────────────────────────────────────────────────────────────

const architects = [
  {
    name: "Ana Paula Ferreira",
    role: "Arquiteta & Sócia",
    bio: "Formada pela FAU-USP com especialização em arquitetura residencial contemporânea, Ana Paula traz mais de 12 anos de experiência unindo funcionalidade e estética minimalista. Sua abordagem coloca o cliente no centro de cada projeto.",
  },
  {
    name: "Marina Costa",
    role: "Arquiteta & Sócia",
    bio: "Com mestrado em design sustentável pela UNICAMP, Marina é especialista em espaços que respeitam o meio ambiente sem abrir mão da elegância. Seus projetos são marcados pelo uso inteligente da luz natural e materiais locais.",
  },
];

const projects = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
    title: "Residência Jardins",
    category: "Residencial",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop",
    title: "Casa Branca",
    category: "Residencial",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format&fit=crop",
    title: "Villa Contemporânea",
    category: "Residencial",
  },
  {
    src: "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1200&q=80&auto=format&fit=crop",
    title: "Estúdio Minimalista",
    category: "Comercial",
  },
  {
    src: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1200&q=80&auto=format&fit=crop",
    title: "Apartamento Itaim",
    category: "Residencial",
  },
  {
    src: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=1200&q=80&auto=format&fit=crop",
    title: "Cobertura Alto de Pinheiros",
    category: "Residencial",
  },
];

// ─── Scroll Image Reveal ──────────────────────────────────────────────────────

function RevealImage({
  src,
  alt,
  title,
  category,
}: {
  src: string;
  alt: string;
  title: string;
  category: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.35],
    ["inset(0 50% 0 50%)", "inset(0 0% 0 0%)"],
  );

  const scale = useTransform(scrollYProgress, [0, 0.35], [1.18, 1]);

  const labelOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const labelY = useTransform(scrollYProgress, [0.25, 0.45], [16, 0]);

  return (
    <div ref={ref} style={{ marginBottom: 80 }}>
      <div style={{ overflow: "hidden" }}>
        <motion.div style={{ clipPath }}>
          <motion.img
            src={src}
            alt={alt}
            style={{
              width: "100%",
              height: 560,
              objectFit: "cover",
              display: "block",
              scale,
            }}
          />
        </motion.div>
      </div>
      <motion.div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginTop: 18,
          opacity: labelOpacity,
          y: labelY,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: 22,
            fontWeight: 400,
            color: "#1A1208",
            margin: 0,
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(26,18,8,0.50)",
            margin: 0,
          }}
        >
          {category}
        </p>
      </motion.div>
    </div>
  );
}

// ─── Social Icons ─────────────────────────────────────────────────────────────

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: 32, height: 32 }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: 32, height: 32 }}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: 32, height: 32 }}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────

function SectionDivider() {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(140,100,60,0.20)",
      }}
    />
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function VerseArquitetura() {
  return (
    <>
      <GlobalStyles />
      <Header />

      <main
        style={{
          background: "#F5F0EB",
          color: "#1A1208",
          fontFamily: "var(--font-montserrat)",
        }}
      >
        {/* ── SOBRE ── */}
        <section id="sobre">
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "160px 32px 120px",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.4,
                marginBottom: 20,
                fontWeight: 500,
              }}
            >
              Sobre
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(36px, 5vw, 62px)",
                fontWeight: 400,
                lineHeight: 1.12,
                marginBottom: 88,
                maxWidth: 560,
              }}
            >
              Arquitetura que conta histórias
            </motion.h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 60,
              }}
            >
              {architects.map((architect, i) => (
                <motion.div
                  key={architect.name}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.15 }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 1,
                      background: "rgba(140,100,60,0.45)",
                      marginBottom: 28,
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: 24,
                      fontWeight: 400,
                      marginBottom: 8,
                    }}
                  >
                    {architect.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.13em",
                      textTransform: "uppercase",
                      opacity: 0.4,
                      marginBottom: 22,
                      fontWeight: 500,
                    }}
                  >
                    {architect.role}
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.85,
                      opacity: 0.65,
                      maxWidth: 420,
                    }}
                  >
                    {architect.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── PROJETOS ── */}
        <section id="projetos">
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "120px 32px",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.4,
                marginBottom: 20,
                fontWeight: 500,
              }}
            >
              Projetos
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(36px, 5vw, 62px)",
                fontWeight: 400,
                lineHeight: 1.12,
                marginBottom: 88,
              }}
            >
              Portfólio
            </motion.h2>

            {projects.map((project) => (
              <RevealImage
                key={project.title}
                src={project.src}
                alt={project.title}
                title={project.title}
                category={project.category}
              />
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* ── CONTATO ── */}
        <section id="contato">
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "120px 32px 140px",
              textAlign: "center",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.4,
                marginBottom: 20,
                fontWeight: 500,
              }}
            >
              Contato
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(36px, 5vw, 62px)",
                fontWeight: 400,
                lineHeight: 1.12,
                marginBottom: 20,
              }}
            >
              Vamos conversar
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontSize: 15,
                opacity: 0.5,
                lineHeight: 1.8,
                maxWidth: 380,
                margin: "0 auto 72px",
              }}
            >
              Entre em contato e conte-nos sobre o seu próximo projeto.
            </motion.p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 64,
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  icon: <WhatsAppIcon />,
                  label: "WhatsApp",
                  // TODO: substituir pelo número real
                  href: "https://wa.me/5511999999999",
                },
                {
                  icon: <InstagramIcon />,
                  label: "Instagram",
                  // TODO: substituir pelo @ real
                  href: "https://instagram.com/versearquitetura",
                },
                {
                  icon: <FacebookIcon />,
                  label: "Facebook",
                  // TODO: substituir pela página real
                  href: "https://facebook.com/versearquitetura",
                },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 0.55, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  whileHover={{ opacity: 1, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 14,
                    color: "#1A1208",
                    textDecoration: "none",
                  }}
                >
                  {social.icon}
                  <span
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      fontFamily: "var(--font-montserrat)",
                    }}
                  >
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <SectionDivider />
        <footer
          style={{
            padding: "32px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.1em",
              opacity: 0.2,
              textTransform: "uppercase",
              fontFamily: "var(--font-montserrat)",
            }}
          >
            © {new Date().getFullYear()} Verse Arquitetura. Todos os direitos
            reservados.
          </p>
        </footer>
      </main>
    </>
  );
}

function GlobalStyles() {
  return (
    <style>{`
      *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      html {
        scroll-behavior: smooth;
      }
      body {
        background: #F5F0EB;
        overflow-x: hidden;
      }
    `}</style>
  );
}
