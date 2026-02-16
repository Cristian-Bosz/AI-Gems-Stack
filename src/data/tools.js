// ============================================
// AI GEM STACK — Tu fuente de verdad
// Para agregar una herramienta nueva, simplemente
// añadí un nuevo objeto al array con esta estructura.
// ============================================

const tools = [
  // ── Vibe Coding ──────────────────────────────
  {
    id: 1,
    name: "Cursor",
    url: "https://cursor.sh",
    description:
      "Editor de código impulsado por IA con autocompletado inteligente y chat integrado.",
    category: "Vibe Coding",
    icon: "⌨️",
  },
  {
    id: 2,
    name: "GitHub Copilot",
    url: "https://github.com/features/copilot",
    description:
      "Asistente de programación de GitHub que sugiere código en tiempo real dentro de tu editor.",
    category: "Vibe Coding",
    icon: "🐙",
  },
  {
    id: 3,
    name: "Bolt",
    url: "https://bolt.new",
    description:
      "Genera aplicaciones web completas desde un prompt. Ideal para prototipos rápidos.",
    category: "Vibe Coding",
    icon: "⚡",
  },
  {
    id: 4,
    name: "Windsurf",
    url: "https://windsurf.com",
    description:
      "IDE con IA integrada que entiende tu codebase y te ayuda a escribir mejor código.",
    category: "Vibe Coding",
    icon: "🏄",
  },
  {
    id: 5,
    name: "Lovable",
    url: "https://lovable.dev",
    description:
      "Crea aplicaciones full-stack con IA conversacional. Diseño y código en un solo flujo.",
    category: "Vibe Coding",
    icon: "💜",
  },
  {
    id: 6,
    name: "Replit",
    url: "https://replit.com",
    description:
      "IDE en la nube con agente de IA que puede construir, desplegar y depurar apps por vos.",
    category: "Vibe Coding",
    icon: "🔁",
  },
  {
    id: 7,
    name: "Google Antigravity",
    url: "https://antigravity.dev",
    description:
      "Asistente de programación agéntico de Google DeepMind para coding avanzado.",
    category: "Vibe Coding",
    icon: "🚀",
  },
  {
    id: 22,
    name: "Emergent",
    url: "https://app.emergent.sh/home",
    description:
      "Plataforma de vibe coding para construir y desplegar aplicaciones con IA de forma visual.",
    category: "Vibe Coding",
    icon: "🧠",
  },

  // ── Vibe Design ──────────────────────────────
  {
    id: 8,
    name: "v0",
    url: "https://v0.dev",
    description:
      "Genera componentes UI de alta calidad desde texto. Perfecto para React y Next.js.",
    category: "Vibe Design",
    icon: "🎨",
  },
  {
    id: 9,
    name: "Galileo AI",
    url: "https://www.usegalileo.ai",
    description:
      "Diseña interfaces completas en segundos con IA generativa de alta fidelidad.",
    category: "Vibe Design",
    icon: "🔭",
  },
  {
    id: 10,
    name: "Google Stitch",
    url: "https://stitch.withgoogle.com",
    description:
      "Herramienta de diseño de Google que transforma ideas en prototipos visuales con IA.",
    category: "Vibe Design",
    icon: "🧵",
  },
  {
    id: 11,
    name: "Dora",
    url: "https://www.dora.run",
    description:
      "Convierte diseños en sitios web animados e interactivos con IA. Sin código.",
    category: "Vibe Design",
    icon: "✨",
  },
  {
    id: 12,
    name: "Lovart",
    url: "https://www.lovart.ai",
    description:
      "Diseñador AI que crea arte y assets visuales de alta calidad para tus proyectos.",
    category: "Vibe Design",
    icon: "🖼️",
  },
  {
    id: 13,
    name: "Pencil.dev",
    url: "https://pencil.dev",
    description:
      "Genera wireframes y prototipos a partir de descripciones de texto con IA.",
    category: "Vibe Design",
    icon: "✏️",
  },
  {
    id: 14,
    name: "Pomelli",
    url: "https://pomelli.ai",
    description:
      "Asistente de diseño con IA para crear layouts y componentes web profesionales.",
    category: "Vibe Design",
    icon: "🍅",
  },

  // ── Vibe Learning ────────────────────────────
  {
    id: 15,
    name: "ChatGPT",
    url: "https://chat.openai.com",
    description:
      "Asistente conversacional de OpenAI. Ideal para aprender, investigar y resolver dudas.",
    category: "Vibe Learning",
    icon: "💬",
  },
  {
    id: 16,
    name: "Perplexity",
    url: "https://www.perplexity.ai",
    description:
      "Motor de búsqueda con IA que da respuestas directas con fuentes verificadas.",
    category: "Vibe Learning",
    icon: "🔍",
  },
  {
    id: 17,
    name: "NotebookLM",
    url: "https://notebooklm.google.com",
    description:
      "Herramienta de Google para analizar documentos y generar insights con IA.",
    category: "Vibe Learning",
    icon: "📓",
  },
  {
    id: 18,
    name: "Google AI Studio",
    url: "https://aistudio.google.com",
    description:
      "Plataforma de Google para experimentar y prototipar con modelos Gemini directamente.",
    category: "Vibe Learning",
    icon: "🧪",
  },

  // ── AI DevTools ──────────────────────────────
  {
    id: 19,
    name: "Supabase AI",
    url: "https://supabase.com",
    description:
      "Backend open-source con IA para generar queries SQL, schemas y funciones edge.",
    category: "AI DevTools",
    icon: "⚙️",
  },
  {
    id: 20,
    name: "Vercel AI SDK",
    url: "https://sdk.vercel.ai",
    description:
      "Framework para construir apps con IA en Next.js. Streaming, tools y modelos integrados.",
    category: "AI DevTools",
    icon: "▲",
  },
  {
    id: 21,
    name: "Browser MCP",
    url: "https://browsermcp.com",
    description:
      "Protocolo que conecta agentes de IA con el navegador para automatizar tareas web.",
    category: "AI DevTools",
    icon: "🌐",
  },


  // ── Image & Media ────────────────────────────
  {
    id: 23,
    name: "Midjourney",
    url: "https://www.midjourney.com",
    description:
      "Generador de imágenes artísticas por IA con resultados de calidad excepcional.",
    category: "Image & Media",
    icon: "🎭",
  },
  {
    id: 24,
    name: "DALL·E",
    url: "https://openai.com/dall-e-3",
    description:
      "Modelo de OpenAI para generar imágenes desde texto con alta precisión y creatividad.",
    category: "Image & Media",
    icon: "🖌️",
  },
  {
    id: 25,
    name: "Runway",
    url: "https://runwayml.com",
    description:
      "Suite creativa de IA para video: generación, edición y efectos profesionales.",
    category: "Image & Media",
    icon: "🎬",
  },
  {
    id: 26,
    name: "Leonardo AI",
    url: "https://leonardo.ai",
    description:
      "Plataforma de generación de imágenes con modelos especializados y fine-tuning.",
    category: "Image & Media",
    icon: "🎯",
  },
  {
    id: 27,
    name: "Calaxy",
    url: "https://calaxy.ai",
    description:
      "Plataforma de IA para crear y gestionar contenido visual y multimedia.",
    category: "Image & Media",
    icon: "🌌",
  },
];

export default tools;
