"use client";

import { useRef, useState } from "react";
import Header from "@/Header";
import { motion, useScroll, useTransform } from "motion/react";

const services = [
  {
    title: "Projeto de arquitetura e engenharia",
    description:
      "Projetos completos de arquitetura e engenharia, desde concepção até documentação técnica, garantindo integração entre estética e execução.",
  },
  {
    title: "Projeto de reforma e Interiores",
    description:
      "Soluções para reformas e design de interiores que transformam espaços existentes em ambientes funcionais e com identidade.",
  },
  {
    title: "Verse Express: Seu ambiente em 24hrs",
    description:
      "Atendimento rápido e objetivo com propostas e layouts expressos em até 24 horas para decisões ágeis de pequenos projetos.",
  },
  {
    title: "Acompanhamento de obra",
    description:
      "Gestão e acompanhamento de obras com controle de cronograma, qualidade e alinhamento com o projeto para entrega conforme combinado.",
  },
];

const metrics = [
  {
    value: "+200",
    label: "Projetos entregues",
  },
  {
    value: "98%",
    label: "de satisfação dos clientes.",
  },
  {
    value: "Atendimento em todo Brasil.",
    label: "",
  },
];


const feedbackData = {
  section: {
    title: "Avaliação do Serviço",
    subtitle: "O que nossos clientes dizem sobre nós",
    total_responses: 12,
  },
  ratings: {
    service_quality: {
      label: "Qualidade do serviço e soluções desenvolvidas",
      responses: 12,
      distribution: {
        extremely_unsatisfied: { label: "Extremamente insatisfeito", count: 0, percentage: 0 },
        unsatisfied: { label: "Insatisfeito", count: 0, percentage: 0 },
        neutral: { label: "Neutro", count: 0, percentage: 0 },
        satisfied: { label: "Satisfeito", count: 0, percentage: 0 },
        very_satisfied: { label: "Extremamente satisfeito", count: 12, percentage: 100 },
      },
      summary_percentage_positive: 100,
    },
    professionalism: {
      label: "Profissionalismo do processo",
      responses: 12,
      distribution: {
        extremely_unsatisfied: { label: "Extremamente insatisfeito", count: 0, percentage: 0 },
        unsatisfied: { label: "Insatisfeito", count: 0, percentage: 0 },
        neutral: { label: "Neutro", count: 0, percentage: 0 },
        satisfied: { label: "Satisfeito", count: 0, percentage: 0 },
        very_satisfied: { label: "Extremamente satisfeito", count: 12, percentage: 100 },
      },
      summary_percentage_positive: 100,
    },
    communication: {
      label: "Eficácia da comunicação durante o processo",
      responses: 12,
      scale: "NPS 0–10",
      distribution: {
        detractors_0_1: { label: "Extremamente insatisfeito (0–1)", count: 0, percentage: 0 },
        detractors_2_4: { label: "Insatisfeito (2–4)", count: 0, percentage: 0 },
        neutral_5: { label: "Neutro (5)", count: 0, percentage: 0 },
        satisfied_6_8: { label: "Satisfeito (6–8)", count: 1, percentage: 8.3 },
        very_satisfied_9_10: { label: "Muito satisfeito (9–10)", count: 11, percentage: 91.7 },
      },
      summary_percentage_positive: 100,
    },
    deadlines: {
      label: "Cumprimento de prazos estabelecidos",
      responses: 12,
      scale: "NPS 0–10",
      distribution: {
        detractors_0_1: { label: "Extremamente insatisfeito (0–1)", count: 0, percentage: 0 },
        detractors_2_4: { label: "Insatisfeito (2–4)", count: 0, percentage: 0 },
        neutral_5: { label: "Neutro (5)", count: 0, percentage: 0 },
        satisfied_6_8: { label: "Satisfeito (6–8)", count: 1, percentage: 8.3 },
        very_satisfied_9_10: { label: "Muito satisfeito (9–10)", count: 11, percentage: 91.7 },
      },
      summary_percentage_positive: 100,
    },
    cost_benefit: {
      label: "Custo benefício investido",
      responses: 12,
      distribution: {
        zero: { label: "Zero custo benefício", count: 0, percentage: 0 },
        bad: { label: "Mal custo benefício", count: 0, percentage: 0 },
        good: { label: "Bom custo benefício", count: 0, percentage: 0 },
        great: { label: "Ótimo custo benefício", count: 3, percentage: 25 },
        excellent: { label: "Excelente custo benefício", count: 9, percentage: 75 },
      },
      summary_percentage_positive: 100,
    },
  },
  overall_stats: {
    satisfaction_rate: 100,
    nps_top_box: 91.7,
    cost_benefit_excellent_rate: 75,
  },
  testimonials: [
    {
      id: 1,
      author: null,
      text: "Desde o início, as meninas foram extremamente atenciosas, cuidadosas e muito profissionais em cada detalhe. Conseguiram entender exatamente o que eu queria e traduziram isso em um projeto lindo, funcional e cheio de identidade.",
      highlight: "Fidelização é a palavra!",
      tags: ["acessibilidade", "comunicação", "fidelização"],
      project_type: "Anônimo",
    },
    {
      id: 2,
      author: "Nayadna",
      text: "Quero deixar registrado todo meu agradecimento e admiração pelo trabalho incrível que vocês realizaram no projeto do meu escritório. Agora que está tudo finalizado, posso dizer com toda certeza: ficou perfeito! Vocês são extremamente dedicadas, eficientes e atentas a cada detalhe. Transformaram um sonho em realidade e fizeram parte de um capítulo muito especial da minha trajetória. Só tenho a agradecer por toda atenção, carinho e profissionalismo. Este espaço carrega a essência do que sempre imaginei e vocês foram fundamentais para isso acontecer.",
      highlight: "Ficou perfeito! Transformaram um sonho em realidade.",
      tags: ["escritório", "dedicação", "atenção aos detalhes", "sonho realizado"],
      project_type: "escritório",
    },
    {
      id: 3,
      author: "Jesus Salon",
      text: "Gostaria de deixar aqui o meu agradecimento e reconhecimento pelo trabalho incrível que vocês realizaram no projeto do nosso salão. Desde o início, as meninas foram extremamente atenciosas, cuidadosas e muito profissionais em cada detalhe. Conseguiram entender exatamente o que eu queria e traduziram isso em um projeto lindo, funcional e cheio de identidade. O resultado final superou minhas expectativas — o espaço ficou elegante, acolhedor e totalmente alinhado com a proposta do Jesus Salon. Muito obrigada pelo carinho, dedicação e excelência no trabalho de vocês. Foi um prazer contar com essa equipe!",
      highlight: "Superou minhas expectativas — elegante, acolhedor e cheio de identidade.",
      tags: ["salão", "identidade", "funcionalidade", "superou expectativas"],
      project_type: "salão comercial",
    },
  ],
};

const architects = [
  {
    name: "Elieni",
    role: "Arquiteta & Estrategista",
    image:
      "/eliene-profile.jpg",
    bio: "Prazer Elieni, sou arquiteta proprietária e diretora de estratégia da VERSE Arquitetura. Arquiteta com especialização em area comercial.estrategista e apaixonada por criar espaços que fazem sentido, tanto para as pessoas, quanto para os negócios.\n\nÀ frente do desenvolvimento estratégico, transformo ideias em projetos que unem funcionalidade, estética e experiência, sempre com um olhar humano, intencional e estratégico sobre cada detalhe.",
  },
  {
    name: "Bruna",
    role: "Arquiteta & Diretora Operacional",
    image:
      "/bruna-profile.jpg",
    bio: "Oie, eu sou a Bruna! Sou arquiteta formada pela Unieuro desde 2019 e atuo há 7 anos nas áreas de arquitetura e interiores.\n\nEspecialista em design de interiores, desenvolvo projetos que unem funcionalidade, estética e personalidade, sempre criando espaços autorais, elegantes e acolhedores.\n\nHoje, além de proprietária da VERSE Arquitetura, também atuo como diretora operacional da empresa, acompanhando de perto cada detalhe para garantir experiências bem planejadas e resultados alinhados à essência de cada cliente.",
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
    <div ref={ref} style={{ marginBottom: 80, width: "100%" }}>
      <div style={{ overflow: "hidden", borderRadius: 28, boxShadow: "0 32px 80px rgba(26, 18, 8, 0.06)" }}>
        <motion.div style={{ clipPath }}>
          <motion.img
            src={src}
            alt={alt}
            style={{
              width: "100%",
              height: "clamp(320px, 42vw, 560px)",
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
          flexWrap: "wrap",
          gap: 12,
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

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 28,
        border: "1px solid rgba(26, 18, 8, 0.08)",
        padding: 32,
        minHeight: 260,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            width: 40,
            height: 4,
            background: "#8C643C",
            borderRadius: 2,
            marginBottom: 28,
          }}
        />
        <h3
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: 24,
            fontWeight: 400,
            marginBottom: 18,
            color: "#1A1208",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.8,
            opacity: 0.74,
          }}
        >
          {description}
        </p>
      </div>
     
    </div>
  );
}

function ResultCard({value, label}: {value: string; label: string}) {
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.7)",
        borderRadius: 24,
        border: "1px solid rgba(26, 18, 8, 0.08)",
        padding: 28,
        minHeight: 180,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: 40,
          fontWeight: 400,
          margin: 0,
          color: "#1A1208",
        }}
      >
        {value}
      </p>
      <p
        style={{
          fontSize: 15,
          opacity: 0.7,
          lineHeight: 1.8,
          marginTop: 16,
          maxWidth: 280,
        }}
      >
        {label}
      </p>
    </div>
  );
}

function FeedbackCard({
  author,
  projectType,
  text,
  highlight,
}: {
  author?: string | null;
  projectType?: string | null;
  text: string;
  highlight?: string | null;
}) {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 220;
  const isLong = text.length > maxChars;
  const preview = isLong && !expanded ? text.slice(0, maxChars).trimEnd() + "…" : text;
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 28,
        padding: 32,
        boxShadow: "0 24px 60px rgba(26, 18, 8, 0.08)",
        minHeight: 260,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.9,
            opacity: 0.85,
            margin: 0,
            whiteSpace: "pre-wrap",
          }}
        >
          “{preview}”
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded((s) => !s)}
            aria-expanded={expanded}
            style={{
              marginTop: 12,
              background: "none",
              border: "none",
              color: "#8C643C",
              cursor: "pointer",
              fontWeight: 700,
              padding: 0,
            }}
          >
            {expanded ? "Ler menos" : "Ler mais"}
          </button>
        )}
      </div>
      <div>
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: 20,
            fontWeight: 400,
            margin: "24px 0 8px",
            color: "#1A1208",
          }}
        >
          {author ?? "Anônimo"}
        </p>
        <p
          style={{
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            opacity: 0.55,
            margin: 0,
          }}
        >
          {projectType ?? ""}
        </p>
      </div>
    </div>
  );
}

function ClientBadge({name}: {name: string}) {
  return (
    <span
      style={{
        padding: "16px 22px",
        borderRadius: 999,
        background: "rgba(140, 100, 60, 0.08)",
        color: "#1A1208",
        fontSize: 13,
        fontWeight: 600,
        whiteSpace: "nowrap",
      }}
    >
      {name}
    </span>
  );
}

function SectionDivider() {
  return (
    <div
      style={{
        height: 1,
        background: "rgba(140, 100, 60, 0.14)",
        margin: "0 32px",
      }}
    />
  );
}

export default function VerseArquitetura() {
  const sectionBase = {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "100px 32px",
    scrollMarginTop: 110,
  };

  const contactButtonBase = {
    width: "100%",
    maxWidth: 420,
    padding: "18px 22px",
    borderRadius: 24,
    textDecoration: "none",
    fontSize: 15,
    fontWeight: 700,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    transition: "transform 180ms ease, box-shadow 180ms ease",
  } as const;

  const contactButtonPrimary = {
    ...contactButtonBase,
    background: "#1A1208",
    color: "#fff",
  };

  const contactButtonSecondary = {
    ...contactButtonBase,
    background: "rgba(140, 100, 60, 0.15)",
    color: "#1A1208",
  };

  const contactButtonOutline = {
    ...contactButtonBase,
    background: "transparent",
    color: "#1A1208",
    border: "1px solid rgba(26, 18, 8, 0.08)",
  };

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
        <section
          id="top"
          style={{
            minHeight: "calc(100vh - 98px)",
            padding: "140px 32px 90px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gap: 32,
            }}
          >
            <div style={{ maxWidth: 680, display: "grid", gap: 28 }}>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                style={{
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  opacity: 0.55,
                  fontWeight: 500,
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <img
                  src="/logo.png"
                  alt="Verse logo"
                  style={{ height: 36, width: "auto", display: "inline-block" }}
                />
                
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(44px, 6vw, 84px)",
                  fontWeight: 400,
                  lineHeight: 1.02,
                  margin: 0,
                  maxWidth: 720,
                }}
              >
               Não projetamos espaços, projetamos resultados.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  maxWidth: 620,
                  opacity: 0.78,
                }}
              >
                Projetos pensados para a sua marca, combinando arquitetura comercial,
                identidade visual e espaços instagramáveis que geram mais reconhecimento
                e vendas.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ display: "flex", flexWrap: "wrap", gap: 16 }}
              >
                <a
                  href="#projetos"
                  style={{
                    padding: "16px 26px",
                    borderRadius: 999,
                    background: "#1A1208",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: 13,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  Ver portfólio
                </a>
                <a
                  href="#contato"
                  style={{
                    padding: "16px 26px",
                    borderRadius: 999,
                    background: "rgba(140, 100, 60, 0.12)",
                    color: "#1A1208",
                    textDecoration: "none",
                    fontSize: 13,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  Solicite uma proposta
                </a>
              </motion.div>
            </div>

            <div
              style={{
                display: "grid",
                gap: 20,
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              }}
            >
              {metrics.map((metric) => (
                <ResultCard key={metric.label} value={metric.value} label={metric.label} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section id="sobre" style={{ ...sectionBase, background: "#fff" }}>
          <div style={{ display: "grid", gap: 36 }}>
            <div style={{ maxWidth: 720 }}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
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
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(36px, 5vw, 62px)",
                  fontWeight: 400,
                  lineHeight: 1.12,
                  marginBottom: 24,
                }}
              >
                 Cada projeto, um verso.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  fontSize: 16,
                  lineHeight: 1.9,
                  maxWidth: 680,
                  opacity: 0.72,
                }}
              >
                Conheça nosso escritório:
              </motion.p>
            </div>

            <div
              style={{
                display: "grid",
                gap: 32,
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                alignItems: "start",
              }}
            >
              {architects.map((architect, i) => (
                <motion.div
                  key={architect.name}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.12 + i * 0.14 }}
                  style={{
                    background: "#fff",
                    borderRadius: 28,
                    overflow: "hidden",
                    boxShadow: "0 24px 60px rgba(26, 18, 8, 0.08)",
                    border: "1px solid rgba(26, 18, 8, 0.08)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "stretch",
                    minHeight: 560,
                  }}
                >
                  <div style={{ width: "100%", minHeight: 360, overflow: "hidden", background: "#f5f0eb" }}>
                    <img
                      src={architect.image}
                      alt={`Foto de ${architect.name}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "center center",
                        display: "block",
                      }}
                    />
                  </div>
                  <div style={{ padding: 32, display: "grid", gap: 18, alignItems: "start" }}>
                    <div>
                      <p
                        style={{
                          fontSize: 11,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "#8C643C",
                          marginBottom: 12,
                          fontWeight: 700,
                          textAlign: "left",
                        }}
                      >
                        Sobre a {architect.name}
                      </p>
                      <h3
                        style={{
                          fontFamily: "var(--font-playfair)",
                          fontSize: 28,
                          fontWeight: 400,
                          margin: 0,
                          color: "#1A1208",
                          textAlign: "left",
                        }}
                      >
                        {architect.name}
                      </h3>
                      <p
                        style={{
                          fontSize: 12,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          opacity: 0.55,
                          marginTop: 10,
                          fontWeight: 500,
                          textAlign: "left",
                        }}
                      >
                        {architect.role}
                      </p>
                    </div>
                    <p
                      style={{
                        fontSize: 15,
                        lineHeight: 1.9,
                        opacity: 0.78,
                        whiteSpace: "pre-wrap",
                        margin: 0,
                        textAlign: "left",
                      }}
                    >
                      {architect.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section id="servicos" style={sectionBase}>
          <div style={{ display: "grid", gap: 36 }}>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  opacity: 0.4,
                  marginBottom: 20,
                  fontWeight: 500,
                }}
              >
                Serviços
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(36px, 5vw, 62px)",
                  fontWeight: 400,
                  lineHeight: 1.12,
                  marginBottom: 24,
                }}
              >
                Soluções para cada etapa do seu projeto.
              </motion.h2>
            </div>

            <div
              style={{
                display: "grid",
                gap: 24,
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              }}
            >
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section id="projetos" style={{ ...sectionBase, background: "#fff" }}>
          <div style={{ display: "grid", gap: 36 }}>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  opacity: 0.4,
                  marginBottom: 20,
                  fontWeight: 500,
                }}
              >
                Portfólio
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(36px, 5vw, 62px)",
                  fontWeight: 400,
                  lineHeight: 1.12,
                  marginBottom: 24,
                }}
              >
                Projetos recentes com presença forte e narrativa visual.
              </motion.h2>
            </div>

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

        <section id="clientes" style={sectionBase}>
          <div style={{ display: "grid", gap: 36 }}>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  opacity: 0.4,
                  marginBottom: 20,
                  fontWeight: 500,
                }}
              >
                Resultados
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(36px, 5vw, 62px)",
                  fontWeight: 400,
                  lineHeight: 1.12,
                  marginBottom: 24,
                }}
              >
                Projetos que geram impacto e confiança.
              </motion.h2>
            </div>

            <div
              style={{
                display: "grid",
                gap: 20,
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              }}
            >
              {metrics.map((metric) => (
                <ResultCard key={metric.label} value={metric.value} label={metric.label} />
              ))}
            </div>

          
          </div>
        </section>

        <SectionDivider />

        <section id="feedbacks" style={{ ...sectionBase }}>
          <div style={{ display: "grid", gap: 36 }}>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  opacity: 0.4,
                  marginBottom: 20,
                  fontWeight: 500,
                }}
              >
                Feedbacks
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(36px, 5vw, 62px)",
                  fontWeight: 400,
                  lineHeight: 1.12,
                  marginBottom: 24,
                }}
              >
                O que nossos clientes dizem sobre nossos projetos.
              </motion.h2>
            </div>

            <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
              <ResultCard value={`${feedbackData.overall_stats.satisfaction_rate}%`} label="Satisfação geral" />
              <ResultCard value={`${feedbackData.overall_stats.nps_top_box}%`} label="NPS (9–10)" />
              <ResultCard value={`${feedbackData.overall_stats.cost_benefit_excellent_rate}%`} label="Custo-benefício ótimo/excelente" />
            </div>

            <div
              style={{
                display: "grid",
                gap: 24,
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              }}
            >
              {feedbackData.testimonials.map((t) => (
                <FeedbackCard
                  key={t.id}
                  author={t.author}
                  projectType={t.project_type}
                  text={t.text}
                  highlight={t.highlight}
                />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section id="contato" style={sectionBase}>
          <div style={{ display: "grid", gap: 36, textAlign: "center" }}>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
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
                initial={{ opacity: 0, y: 24 }}
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
                Pronto para iniciar o seu projeto?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  fontSize: 16,
                  lineHeight: 1.9,
                  maxWidth: 620,
                  opacity: 0.72,
                  margin: "0 auto",
                }}
              >
               Fale conosco e transforme seu sonho em realidade.
              </motion.p>
            </div>

            <div
              style={{
                display: "grid",
                gap: 18,
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                justifyItems: "center",
              }}
            >
              <a
                href="https://wa.me/556191030407"
                target="_blank"
                rel="noreferrer"
                style={contactButtonPrimary}
              >
                <img
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  style={{ height: 20, width: "auto", display: "inline-block" }}
                />
                Falar no WhatsApp
              </a>
              <a
                href="mailto:verse.arqui@gmail.com"
                style={contactButtonSecondary}
              >
                <img
                  src="/gmail.png"
                  alt="E-mail"
                  style={{ height: 20, width: "auto", display: "inline-block" }}
                />
                Enviar e-mail
              </a>
              <a
                href="https://www.instagram.com/verse_arquitetura?igsh=NzBtOWQwYnJxcnpo"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={contactButtonOutline}
              >
                <img src="/instagram.png" alt="Instagram" style={{ height: 20, width: "auto", display: "inline-block" }} />
                Instagram
              </a>
            </div>
          </div>
        </section>

        <footer
          style={{
            padding: "32px 32px 48px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.1em",
              opacity: 0.4,
              textTransform: "uppercase",
              fontFamily: "var(--font-montserrat)",
            }}
          >
            © {new Date().getFullYear()} Verse Arquitetura. Todos os direitos reservados.
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
        color: #1A1208;
      }

      button,
      a {
        font: inherit;
      }

      img {
        display: block;
        max-width: 100%;
      }

      @media (max-width: 720px) {
        body {
          font-size: 15px;
        }
      }
    `}</style>
  );
}
