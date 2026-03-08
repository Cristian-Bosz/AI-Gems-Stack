// ============================================
// AI GEM STACK — Tu fuente de verdad
// Para agregar una herramienta nueva, simplemente
// añadí un nuevo objeto al array con esta estructura.
// ============================================

const tools = [
  // ── AI IDEs ──────────────────────────────────
  { id: 1, name: "Cursor", url: "https://cursor.com", category: "AI IDEs", icon: "⌨️", description: "Editor de código nativo con IA para una programación fluida." },
  { id: 2, name: "Windsurf", url: "https://codeium.com/windsurf", category: "AI IDEs", icon: "🏄", description: "IDE agéntico que entiende tu contexto y codea con vos." },
  { id: 3, name: "Google Antigravity", url: "https://antigravity.google/", category: "AI IDEs", icon: "🚀", description: "Entorno de programación avanzado de DeepMind." },

  // ── Vibe Coding ──────────────────────────────
  { id: 4, name: "Bolt", url: "https://bolt.new", category: "Vibe Coding", icon: "⚡", description: "Genera aplicaciones web completas desde un prompt." },
  { id: 5, name: "Lovable", url: "https://lovable.dev", category: "Vibe Coding", icon: "💜", description: "Desarrollo full-stack conversacional de alta fidelidad." },
  { id: 6, name: "Replit Agent", url: "https://replit.com", category: "Vibe Coding", icon: "🔁", description: "Agente que construye y despliega apps por vos en la nube." },
  { id: 7, name: "GitHub Copilot", url: "https://github.com/features/copilot", category: "Vibe Coding", icon: "🐙", description: "El asistente clásico que autocompleta tu lógica." },
  { id: 8, name: "Flames.blue", url: "https://flames.blue/", category: "Vibe Coding", icon: "🔥", description: "Optimización avanzada de flujos de programación con IA." },
  { id: 9, name: "Emergent", url: "https://app.emergent.sh", category: "Vibe Coding", icon: "🧠", description: "Plataforma visual para construir con IA agéntica." },

  // ── LLMs ─────────────────────────────────────
  { id: 10, name: "ChatGPT", url: "https://chatgpt.com", category: "LLMs", icon: "💬", description: "El modelo de OpenAI para razonamiento y asistencia general." },
  { id: 11, name: "Claude", url: "https://claude.ai", category: "LLMs", icon: "🎭", description: "IA de Anthropic, excelente para escritura y código limpio." },
  { id: 12, name: "Grok", url: "https://grok.com", category: "LLMs", icon: "🦾", description: "IA de xAI con acceso a datos en tiempo real y tono sin filtros." },
  { id: 13, name: "Perplexity", url: "https://www.perplexity.ai", category: "LLMs", icon: "🔍", description: "Buscador conversacional con fuentes en tiempo real." },
  { id: 14, name: "Kimi", url: "https://www.kimi.com", category: "LLMs", icon: "🌑", description: "Modelo con gran ventana de contexto para archivos largos." },
  { id: 15, name: "Microsoft Copilot", url: "https://copilot.microsoft.com", category: "LLMs", icon: "🟦", description: "Asistente integrado con el ecosistema de Microsoft." },
  { id: 16, name: "Okara", url: "https://okara.ai", category: "LLMs", icon: "🛡️", description: "IA enfocada en privacidad y procesamiento de data estructurada." },

  // ── Research & Brainstorming ─────────────────
  { id: 17, name: "NotebookLM", url: "https://notebooklm.google.com", category: "Research & Brainstorming", icon: "📓", description: "Analizá tus propios documentos y generá insights." },
  { id: 18, name: "Napkin", url: "https://www.napkin.ai/", category: "Research & Brainstorming", icon: "📝", description: "Transformá ideas en diagramas visuales al toque." },
  { id: 19, name: "Ideamap", url: "https://ideamap.ai/", category: "Research & Brainstorming", icon: "🗺️", description: "Brainstorming colaborativo potenciado por IA." },
  { id: 20, name: "Mixboard", url: "https://mixboard.google.com", category: "Research & Brainstorming", icon: "🎛️", description: "Laboratorio para mezclar conceptos e ideas complejas." },

  // ── Vibe Design ──────────────────────────────
  { id: 21, name: "v0", url: "https://v0.dev", category: "Vibe Design", icon: "🎨", description: "Generador de UI componentes para React y Next.js." },
  { id: 22, name: "Google Stitch", url: "https://stitch.withgoogle.com/", category: "Vibe Design", icon: "🧵", description: "Diseño que transforma ideas en prototipos visuales." },
  { id: 23, name: "Readdy", url: "https://readdy.ai/", category: "Vibe Design", icon: "📦", description: "Crea interfaces y landings listas para usar." },
  { id: 24, name: "Dora", url: "https://www.dora.run", category: "Vibe Design", icon: "✨", description: "Diseño 3D y animaciones web sin código." },
  { id: 25, name: "UX Pilot", url: "https://uxpilot.ai", category: "Vibe Design", icon: "🕹️", description: "Automatización de sitemaps y flujos de usuario." },
  { id: 26, name: "Design Arena", url: "https://www.designarena.ai/", category: "Vibe Design", icon: "🏟️", description: "Plataforma para comparar y refinar diseños de UI." },
  { id: 27, name: "Variant", url: "https://variant.com/", category: "Vibe Design", icon: "🎭", description: "Diseño generativo para crear variantes visuales rápidas." },
  { id: 28, name: "Lovart", url: "https://www.lovart.ai", category: "Vibe Design", icon: "💖", description: "Diseñador AI para arte y assets de alta calidad." },
  { id: 29, name: "Pencil", url: "https://pencil.dev", category: "Vibe Design", icon: "✏️", description: "Genera wireframes desde descripciones de texto." },

  // ── Agentic Automation ───────────────────────
  { id: 30, name: "Lindy", url: "https://www.lindy.ai/", category: "Agentic Automation", icon: "🤖", description: "Crea empleados de IA para automatizar cualquier tarea." },
  { id: 31, name: "Dia Browser", url: "https://www.diabrowser.com/", category: "Agentic Automation", icon: "🌐", description: "Navegador optimizado para que agentes ejecuten acciones." },
  { id: 32, name: "Browser MCP", url: "https://browsermcp.com", category: "Agentic Automation", icon: "🔗", description: "Protocolo para conectar agentes con la web." },

  // ── AI DevTools ──────────────────────────────
  { id: 33, name: "Supabase AI", url: "https://supabase.com", category: "AI DevTools", icon: "⚙️", description: "Backend con IA para SQL y funciones edge." },
  { id: 34, name: "Vercel AI SDK", url: "https://sdk.vercel.ai", category: "AI DevTools", icon: "▲", description: "Framework para integrar modelos en apps Next.js." },
  { id: 35, name: "Skills.sh", url: "https://skills.sh/", category: "AI DevTools", icon: "📈", description: "Evaluación y optimización de habilidades técnicas con IA." },

  // ── UI Components ────────────────────────────
  { id: 36, name: "21st", url: "https://21st.dev", category: "UI Components", icon: "💎", description: "Componentes UI modernos y fondos animados." },
  { id: 37, name: "Uiverse", url: "https://uiverse.io/", category: "UI Components", icon: "🌌", description: "Biblioteca de elementos UI open-source hechos con CSS y HTML." },

  // ── Vibe Marketing ───────────────────────────
  { id: 38, name: "Brandmark", url: "https://brandmark.io/", category: "Vibe Marketing", icon: "🎨", description: "Crea logos y sistemas de branding completos con IA." },
  { id: 39, name: "Holo", url: "https://tryholo.ai/", category: "Vibe Marketing", icon: "📢", description: "Estrategias y assets para campañas virales." },
  { id: 40, name: "Pomelli", url: "https://labs.google.com/pomelli/about/", category: "Vibe Marketing", icon: "🍅", description: "Diseño orientado a conversión y marketing digital." },

  // ── Visual Assets ────────────────────────────
  { id: 41, name: "Midjourney", url: "https://www.midjourney.com", category: "Visual Assets", icon: "🖼️", description: "Generación de imágenes artísticas de máxima calidad." },
  { id: 42, name: "DALL·E 3", url: "https://openai.com/dall-e-3", category: "Visual Assets", icon: "🖌️", description: "Generación de imágenes con alta precisión semántica." },
  { id: 43, name: "Leonardo AI", url: "https://leonardo.ai", category: "Visual Assets", icon: "🎯", description: "Modelos especializados para assets y fine-tuning." },
  { id: 44, name: "Freepik AI", url: "https://www.freepik.es", category: "Visual Assets", icon: "📸", description: "Banco de recursos con herramientas de edición IA." },

  // ── Generative Media ─────────────────────────
  { id: 45, name: "Runway", url: "https://runwayml.com", category: "Generative Media", icon: "🎬", description: "Suite profesional de generación y edición de video." },
  { id: 46, name: "WaveSpeed", url: "https://wavespeed.ai/", category: "Generative Media", icon: "🌊", description: "Generación y edición de video ultrarrápida." },
  { id: 47, name: "Seedance 2.0", url: "https://seedance2.ai/", category: "Generative Media", icon: "💃", description: "Animaciones y bailes realistas a partir de imágenes." },
  { id: 48, name: "MusicFX", url: "https://labs.google/fx/tools/music-fx", category: "Generative Media", icon: "🎵", description: "Creación de música y loops originales." },

  // ── SEO Insights ──────────────────────────────
  { id: 49, name: "Hotjar", url: "https://www.hotjar.com", category: "SEO", icon: "🔥", description: "Análisis de comportamiento real de usuarios en tu web." },

  // ── OG Essentials ───────────────────
  { id: 50, name: "CDN Logo", url: "https://cdnlogo.com/", category: "OG Essentials", icon: "🏷️", description: "Buscador de logos vectoriales de marcas famosas." },
  { id: 51, name: "SVG Repo", url: "https://www.svgrepo.com/", category: "OG Essentials", icon: "📐", description: "Enorme repositorio de vectores y sets de iconos gratuitos." },
  { id: 52, name: "Haikei", url: "https://app.haikei.app/", category: "OG Essentials", icon: "🌈", description: "Generador de formas y fondos SVG orgánicos únicos." },
  { id: 53, name: "Storyset", url: "https://storyset.com/", category: "OG Essentials", icon: "🙋", description: "Ilustraciones personalizables y animadas para web." },
  { id: 54, name: "Ray.so", url: "https://ray.so/", category: "OG Essentials", icon: "📸", description: "Crea imágenes bellas de tus snippets de código." },
  { id: 55, name: "uiGradients", url: "https://www.uigradients.com/", category: "OG Essentials", icon: "🌇", description: "Colección de degradados de color listos para usar." },
  { id: 56, name: "ColorSpace", url: "https://mycolor.space/", category: "OG Essentials", icon: "🎨", description: "Generador de paletas de colores a partir de un HEX." },
  { id: 57, name: "BGJar", url: "https://bgjar.com/", category: "OG Essentials", icon: "🍯", description: "Generador de fondos SVG gratuitos para tus proyectos." },
  { id: 58, name: "Lottiefiles", url: "https://lottiefiles.com/", category: "OG Essentials", icon: "📽️", description: "Animaciones JSON livianas para apps e interfaces web." },
  { id: 59, name: "W3C Validator", url: "https://validator.w3.org/", category: "OG Essentials", icon: "👮", description: "El estándar para validar la estructura de tu HTML/CSS." },
  { id: 60, name: "Font Awesome", url: "https://fontawesome.com/", category: "OG Essentials", icon: "🚩", description: "La librería de iconos icónica más utilizada en el mundo." },
  { id: 61, name: "Framer Motion", url: "https://motion.dev/", category: "OG Essentials", icon: "🎢", description: "Librería de animaciones profesional para React." },
  { id: 62, name: "SVG Backgrounds", url: "https://www.svgbackgrounds.com/", category: "OG Essentials", icon: "🖼️", description: "Fondos vectoriales personalizables para diseño web." }
];

export default tools;
