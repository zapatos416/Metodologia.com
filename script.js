// Configuración de paleta Monument Valley para Tailwind CSS
tailwind.config = {
    theme: {
        extend: {
            colors: {
                mvNight: '#1c1936',
                mvTwilight: '#362b59',
                mvIndigo: '#4c3b7a',
                mvRose: '#e298ab',
                mvCoral: '#f08a7e',
                mvPeach: '#f4c2b8',
                mvMint: '#8ad4cf',
                mvTeal: '#4ba3a8',
                mvGold: '#f2c97d',
                mvCream: '#faf7f5'
            },
            fontFamily: {
                display: ['Montserrat', 'sans-serif'],
                sans: ['Quicksand', 'sans-serif'],
            }
        }
    }
};

// Paletas cromáticas por categoría para darle vida y color a cada pestaña
const categoryThemes = {
    "Presentación Institucional": {
        bar: "from-mvNight via-mvRose to-mvGold",
        badge: "bg-amber-100/80 text-mvNight border border-amber-300/60",
        iconBox: "from-mvNight via-mvTwilight to-mvRose",
        glow: "bg-mvGold"
    },
    "Apertura del Proyecto": {
        bar: "from-mvTwilight via-mvRose to-mvPeach",
        badge: "bg-rose-100/80 text-mvTwilight border border-rose-200",
        iconBox: "from-mvTwilight to-mvRose",
        glow: "bg-mvRose"
    },
    "Esquema Visual de Investigación": {
        bar: "from-mvNight via-mvTeal to-mvMint",
        badge: "bg-teal-100/80 text-teal-900 border border-teal-200",
        iconBox: "from-mvNight to-mvTeal",
        glow: "bg-mvMint"
    },
    "Mapeo Empírico y Estructura Funcional": {
        bar: "from-mvTwilight via-mvCoral to-mvPeach",
        badge: "bg-orange-100/80 text-rose-900 border border-orange-200",
        iconBox: "from-mvRose to-mvCoral",
        glow: "bg-mvPeach"
    },
    "Aplicación del Método Científico": {
        bar: "from-mvNight via-mvIndigo to-mvMint",
        badge: "bg-cyan-100/80 text-cyan-950 border border-cyan-200",
        iconBox: "from-mvIndigo to-mvTeal",
        glow: "bg-mvMint"
    },
    "Marco Teórico y Sustentación Académica": {
        bar: "from-mvNight via-purple-700 to-mvRose",
        badge: "bg-purple-100/80 text-purple-950 border border-purple-200",
        iconBox: "from-mvNight via-mvIndigo to-purple-600",
        glow: "bg-purple-400"
    },
    "Justificación Teórica, Práctica y Social": {
        bar: "from-mvTeal via-mvMint to-mvPeach",
        badge: "bg-emerald-100/80 text-emerald-950 border border-emerald-200",
        iconBox: "from-mvTeal to-emerald-500",
        glow: "bg-mvMint"
    },
    "Planteamiento de Hipótesis": {
        bar: "from-mvRose via-mvCoral to-mvGold",
        badge: "bg-pink-100/80 text-pink-950 border border-pink-200",
        iconBox: "from-mvCoral to-mvRose",
        glow: "bg-mvCoral"
    },
    "Sustento Documental y Síntesis": {
        bar: "from-mvNight via-mvTwilight to-mvMint",
        badge: "bg-indigo-100/80 text-indigo-950 border border-indigo-200",
        iconBox: "from-mvNight to-mvTwilight",
        glow: "bg-mvMint"
    }
};

const sectionsData = [
    {
        id: 0,
        category: "Presentación Institucional",
        title: "Portada",
        icon: "fa-university",
        isCover: true,
        coverImage: "images.png",
        preview: "Universidad del Sur • Licenciatura en Ciencias de la Comunicación y Periodismo • Integrantes del equipo.",
        content: `
            <div class="flex flex-col items-center text-center py-2 space-y-6">
                <div class="relative p-6 bg-gradient-to-br from-white via-[#faf7f5] to-rose-50/60 rounded-3xl shadow-md border border-mvRose/30">
                    <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-mvMint/60 blur-sm"></div>
                    <img src="images.png" alt="Logo Universidad del Sur" class="h-32 sm:h-40 object-contain mx-auto">
                </div>
                <div class="space-y-2">
                    <span class="inline-block px-3 py-1 rounded-full bg-mvNight/5 text-mvTwilight text-[11px] font-display uppercase tracking-[0.22em] font-bold">Institución Educativa</span>
                    <h3 class="text-xl sm:text-2xl font-bold text-mvNight tracking-widest uppercase">Universidad del Sur</h3>
                    <p class="text-sm font-display uppercase tracking-widest text-mvTwilight font-semibold">Licenciatura en Ciencias de la Comunicación y Periodismo</p>
                    <p class="text-xs font-display uppercase tracking-widest text-rose-500 font-semibold">Materia: Metodología de la Investigación</p>
                </div>
                <div class="w-24 h-1 rounded-full bg-gradient-to-r from-mvTwilight via-mvRose to-mvMint mx-auto"></div>
                <div class="bg-gradient-to-r from-purple-50 via-white to-rose-50 p-6 rounded-2xl border border-purple-200/70 max-w-2xl w-full shadow-sm relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-mvTwilight to-mvRose"></div>
                    <span class="text-[11px] font-display uppercase tracking-[0.2em] text-mvTwilight font-bold block mb-2">Proyecto Integrador de Investigación</span>
                    <p class="text-lg font-bold text-mvNight">Análisis del Apoyo Comunitario y la Ayuda Mutua Digital en Facebook</p>
                </div>
                <div class="w-full max-w-xl bg-gradient-to-br from-mvNight via-[#28204d] to-mvTwilight text-mvCream rounded-3xl p-6 sm:p-8 shadow-xl border border-white/15 relative overflow-hidden">
                    <div class="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-mvRose/15 pointer-events-none"></div>
                    <div class="flex items-center justify-center gap-2 mb-5">
                        <i class="fa-solid fa-users text-mvMint text-sm"></i>
                        <h4 class="text-xs font-display uppercase tracking-[0.25em] text-mvMint font-bold">Integrantes del Equipo</h4>
                    </div>
                    <ul class="space-y-2.5 text-sm sm:text-base font-medium tracking-wide">
                        <li class="py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition flex items-center justify-center gap-2.5">
                            <span class="w-2 h-2 rounded-full bg-mvMint"></span> Gael Donato Ríos Agüero
                        </li>
                        <li class="py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition flex items-center justify-center gap-2.5">
                            <span class="w-2 h-2 rounded-full bg-mvRose"></span> Jorge Daniel Cruz Pech
                        </li>
                        <li class="py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition flex items-center justify-center gap-2.5">
                            <span class="w-2 h-2 rounded-full bg-mvPeach"></span> Violeta Erzsebeth Machuca Amatton
                        </li>
                        <li class="py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition flex items-center justify-center gap-2.5">
                            <span class="w-2 h-2 rounded-full bg-mvGold"></span> José Ignacio Ramírez Lizarraga
                        </li>
                        <li class="py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition flex items-center justify-center gap-2.5">
                            <span class="w-2 h-2 rounded-full bg-mvMint"></span> Gael Alonzo Pech Torres
                        </li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 1,
        category: "Apertura del Proyecto",
        title: "Introducción al Estudio del Apoyo Comunitario Digital",
        icon: "fa-compass",
        preview: "Las plataformas digitales como infraestructuras cruciales de organización ciudadana y ayuda mutua en contextos urbanos.",
        content: `
            <div class="bg-gradient-to-r from-rose-50 via-white to-purple-50 p-5 rounded-2xl border border-rose-200/70 shadow-sm flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-mvTwilight to-mvRose text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <i class="fa-solid fa-quote-left text-sm"></i>
                </div>
                <p class="text-mvNight font-medium leading-relaxed">
                    En el panorama contemporáneo de las ciencias de la comunicación, las plataformas de redes sociales han dejado de funcionar de manera exclusiva como canales de entretenimiento o interacción social superficial para transformarse en <strong>infraestructuras cruciales de organización ciudadana y ayuda mutua</strong>.
                </p>
            </div>

            <p class="bg-white/80 p-5 rounded-2xl border border-gray-100 shadow-sm">
                En contextos urbanos y locales, la plataforma digital <span class="px-2 py-0.5 rounded-md bg-blue-100/80 text-blue-900 font-bold">Facebook</span> opera como un espacio catalizador donde las necesidades emergentes del mundo físico —tales como crisis de salud, alertas viales, búsqueda de personas desaparecidas o rescate de mascotas— encuentran una respuesta rápida y coordinada mediante la solidaridad de los propios habitantes.
            </p>

            <div class="bg-gradient-to-br from-mvNight to-mvTwilight text-white p-6 rounded-2xl shadow-md space-y-3">
                <span class="text-[11px] font-display uppercase tracking-[0.2em] text-mvPeach font-bold block">Ruta de Articulación Metodológica</span>
                <p class="text-white/90 text-sm sm:text-base leading-relaxed">
                    El presente documento integrador articula el desarrollo continuo de nuestra investigación metodológica. En primer lugar, se establece el mapeo empírico de las dinámicas comunitarias observadas en pantallas y grupos locales; posteriormente, se sistematiza la aplicación del método científico para el registro objetivo e imparcial de métricas digitales; en tercer lugar, se fundamenta este estudio empírico mediante cuatro marcos teóricos provenientes de la literatura académica arbitrada; y finalmente, se presenta la justificación integral (teórica, práctica y social) del proyecto, culminando con el planteamiento de hipótesis y matriz de resultados.
                </p>
            </div>
        `
    },
    {
        id: 2,
        category: "Esquema Visual de Investigación",
        title: "Mapa de Indagación",
        icon: "fa-diagram-project",
        hasThumbnail: true,
        thumbSrc: "Identidad Universitaria Indagación Framework-2026-11-23-014612.jpg",
        preview: "Identidad Universitaria Indagación Framework: estructura visual de articulación metodológica y conceptual.",
        content: `
            <div class="space-y-4">
                <div class="bg-gradient-to-r from-teal-50 via-white to-cyan-50 p-4 rounded-2xl border border-teal-200/70 flex items-center gap-3.5">
                    <div class="w-9 h-9 rounded-xl bg-mvTeal text-white flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-magnifying-glass-plus text-sm"></i>
                    </div>
                    <p class="text-sm text-teal-950 font-medium">
                        Esquema visual del marco de indagación e identidad universitaria aplicado al análisis del apoyo comunitario y la ayuda mutua digital en Facebook. <strong>Haz clic en la imagen para ampliarla en pantalla completa:</strong>
                    </p>
                </div>
                <div class="bg-gradient-to-br from-white via-teal-50/30 to-purple-50/40 p-3.5 rounded-2xl border-2 border-mvMint/50 shadow-md overflow-x-auto">
                    <a href="Identidad Universitaria Indagación Framework-2026-11-23-014612.jpg" target="_blank" title="Abrir imagen en pantalla completa">
                        <img src="Identidad Universitaria Indagación Framework-2026-11-23-014612.jpg" alt="Identidad Universitaria Indagación Framework" class="w-full h-auto rounded-xl hover:opacity-95 transition cursor-zoom-in shadow-sm">
                    </a>
                </div>
                <div class="text-center">
                    <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-900/5 text-teal-900 text-xs font-display uppercase tracking-wider font-semibold">
                        <i class="fa-solid fa-diagram-project text-mvTeal"></i> Identidad Universitaria Indagación Framework
                    </span>
                </div>
            </div>
        `
    },
    {
        id: 3,
        category: "Mapeo Empírico y Estructura Funcional",
        title: "Manifestación del Fenómeno: Entorno Físico vs. Espacio Virtual",
        icon: "fa-layer-group",
        preview: "El origen de las dinámicas digitales en Facebook frente a emergencias médicas, crisis locales y urgencias vecinales.",
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-gradient-to-br from-rose-50 to-white p-5 rounded-2xl border border-rose-200/70 shadow-sm space-y-2">
                    <span class="inline-flex items-center gap-1.5 text-[11px] font-display uppercase tracking-widest text-rose-700 font-bold">
                        <i class="fa-solid fa-globe"></i> Ecosistema Digital
                    </span>
                    <p class="text-gray-700 leading-relaxed">
                        Este fenómeno se desarrolla principalmente en la plataforma digital de <strong>Facebook</strong>. Su origen está estrechamente vinculado con situaciones detonadas por el mundo físico tales como emergencias médicas, crisis locales, carencias económicas o necesidades urgentes de los habitantes.
                    </p>
                </div>
                <div class="bg-gradient-to-br from-amber-50/80 to-white p-5 rounded-2xl border border-amber-200/70 shadow-sm space-y-2">
                    <span class="inline-flex items-center gap-1.5 text-[11px] font-display uppercase tracking-widest text-amber-800 font-bold">
                        <i class="fa-solid fa-bolt"></i> Detonante de Urgencia
                    </span>
                    <p class="text-gray-700 leading-relaxed">
                        Aunque ocurre de manera constante y continua en el entorno digital, su manifestación se vuelve mucho más específica e intensa cuando una comunidad, colectivo o individuo se encuentra en la imperiosa necesidad de difundir una noticia de carácter urgente, solicitar ayuda médica o económica, o visibilizar una problemática que afecta el bienestar común.
                    </p>
                </div>
            </div>
        `
    },
    {
        id: 4,
        category: "Mapeo Empírico y Estructura Funcional",
        title: "Características y Directrices de los Mensajes Comunitarios",
        icon: "fa-bullhorn",
        preview: "Claridad, concisión y enfoque en la resolución de problemas para movilizar recursos humanos y materiales.",
        content: `
            <p class="text-mvNight font-medium">Las publicaciones y mensajes de apoyo comunitario en las redes sociales suelen regirse por dos directrices fundamentales que garantizan su efectividad operacional en la red:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div class="bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/60 p-5 rounded-2xl border-t-4 border-mvTwilight shadow-sm relative overflow-hidden">
                    <div class="w-9 h-9 rounded-xl bg-mvTwilight text-white flex items-center justify-center mb-3 shadow-sm">
                        <i class="fa-solid fa-align-left text-sm"></i>
                    </div>
                    <strong class="text-mvNight text-base block mb-2">Claridad y concisión</strong>
                    <p class="text-sm text-gray-700 leading-relaxed">
                        Buscan transmitir el mensaje de manera directa, asegurándose de que la información esencial (ubicación, tipo de ayuda requerida, datos de contacto) sea comprendida de inmediato por los usuarios, logrando así un llamado a la acción efectivo en la comunidad.
                    </p>
                </div>
                <div class="bg-gradient-to-br from-rose-50/90 via-white to-orange-50/60 p-5 rounded-2xl border-t-4 border-mvRose shadow-sm relative overflow-hidden">
                    <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-mvRose to-mvCoral text-white flex items-center justify-center mb-3 shadow-sm">
                        <i class="fa-solid fa-hands-helping text-sm"></i>
                    </div>
                    <strong class="text-mvNight text-base block mb-2">Enfoque en la resolución de problemas</strong>
                    <p class="text-sm text-gray-700 leading-relaxed">
                        Son directas y van orientadas a movilizar recursos humanos, económicos o materiales para dar solución a una situación crítica o adversa que enfrenta una persona, colectivo o sector vecinal.
                    </p>
                </div>
            </div>
        `
    },
    {
        id: 5,
        category: "Mapeo Empírico y Estructura Funcional",
        title: "Factores Estructurales, Tecnológicos y Sociales Intervinientes",
        icon: "fa-network-wired",
        preview: "Seguridad y veracidad, condiciones socioeconómicas, visibilidad digital y escala social de participación.",
        content: `
            <p class="text-mvNight font-medium">Para que estas iniciativas de apoyo tengan alcance y efectividad real, intervienen diversos factores interrelacionados:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div class="bg-gradient-to-br from-purple-50/80 to-white p-5 rounded-2xl border border-purple-200/70 shadow-sm hover:shadow-md transition">
                    <div class="flex items-center gap-2.5 mb-2">
                        <span class="w-7 h-7 rounded-lg bg-mvTwilight text-white text-xs font-bold flex items-center justify-center">1</span>
                        <h4 class="font-bold text-mvNight text-sm">Seguridad y Veracidad</h4>
                    </div>
                    <p class="text-sm text-gray-600 leading-relaxed">Elemento clave para verificar la autenticidad de los casos y evitar la desconfianza o la proliferación de noticias falsas dentro de las plataformas digitales.</p>
                </div>
                <div class="bg-gradient-to-br from-rose-50/80 to-white p-5 rounded-2xl border border-rose-200/70 shadow-sm hover:shadow-md transition">
                    <div class="flex items-center gap-2.5 mb-2">
                        <span class="w-7 h-7 rounded-lg bg-mvRose text-white text-xs font-bold flex items-center justify-center">2</span>
                        <h4 class="font-bold text-mvNight text-sm">Condiciones Socioeconómicas</h4>
                    </div>
                    <p class="text-sm text-gray-600 leading-relaxed">Reflejan las desigualdades del entorno físico que motivan a la solidaridad vecinal y la asistencia mutua ante la falta o lentitud de recursos institucionales.</p>
                </div>
                <div class="bg-gradient-to-br from-teal-50/80 to-white p-5 rounded-2xl border border-teal-200/70 shadow-sm hover:shadow-md transition">
                    <div class="flex items-center gap-2.5 mb-2">
                        <span class="w-7 h-7 rounded-lg bg-mvTeal text-white text-xs font-bold flex items-center justify-center">3</span>
                        <h4 class="font-bold text-mvNight text-sm">Visibilidad Digital</h4>
                    </div>
                    <p class="text-sm text-gray-600 leading-relaxed">La capacidad de los algoritmos y de las redes de contactos para amplificar un mensaje y lograr que llegue a un público masivo en cuestión de minutos.</p>
                </div>
                <div class="bg-gradient-to-br from-amber-50/80 to-white p-5 rounded-2xl border border-amber-200/70 shadow-sm hover:shadow-md transition">
                    <div class="flex items-center gap-2.5 mb-2">
                        <span class="w-7 h-7 rounded-lg bg-amber-500 text-white text-xs font-bold flex items-center justify-center">4</span>
                        <h4 class="font-bold text-mvNight text-sm">Escala Social y Participación</h4>
                    </div>
                    <p class="text-sm text-gray-600 leading-relaxed">La vinculación activa de distintos estratos de la sociedad que se unen compartiendo información, aportando donativos o brindando acompañamiento moral y logístico.</p>
                </div>
            </div>
        `
    },
    {
        id: 6,
        category: "Mapeo Empírico y Estructura Funcional",
        title: "Justificación e Importancia Social del Estudio",
        icon: "fa-hand-holding-heart",
        preview: "Visibilización de problemáticas reales, empatía social y uso activo de las TIC para el desarrollo humano.",
        content: `
            <div class="space-y-4">
                <div class="bg-gradient-to-r from-rose-50 via-white to-amber-50 p-5 rounded-2xl border-l-4 border-mvCoral shadow-sm">
                    <p class="text-gray-800 leading-relaxed">
                        El estudio y análisis de estas dinámicas digitales resulta fundamental porque permite darle <strong>visibilidad a problemas comunitarios reales</strong> y a aquellas personas que se encuentran en situaciones de vulnerabilidad y necesitan apoyo urgente.
                    </p>
                </div>
                <div class="bg-white/90 p-5 rounded-2xl border border-purple-100 shadow-sm flex items-start gap-4">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-mvMint to-mvTeal text-white flex items-center justify-center shrink-0 mt-0.5">
                        <i class="fa-solid fa-heart-pulse text-sm"></i>
                    </div>
                    <p class="text-gray-700 leading-relaxed">
                        Comprender cómo se estructuran estos canales de ayuda en Facebook ayuda a <strong>optimizar la comunicación digital</strong>, fomenta la empatía social y promueve el uso de las tecnologías de la información como herramientas activas para el desarrollo humano y la resolución de conflictos locales.
                    </p>
                </div>
            </div>
        `
    },
    {
        id: 7,
        category: "Aplicación del Método Científico",
        title: "Rigor Metodológico y Objetividad en Observación Digital",
        icon: "fa-microscope",
        preview: "Transformación de publicaciones y mensajes visuales en variables observables, medibles y libres de sesgos.",
        content: `
            <div class="space-y-4">
                <p class="bg-white/90 p-5 rounded-2xl border border-indigo-100 shadow-sm">
                    El análisis de los fenómenos digitales requiere de un tratamiento riguroso que evite la distorsión subjetiva. Para estudiar el fenómeno del apoyo comunitario en Facebook —como la organización ciudadana ante emergencias o la búsqueda de personas desaparecidas— desde una perspectiva científica, es fundamental aplicar las etapas del método científico: <strong>la observación sistemática, el planteamiento de hipótesis, la recopilación de datos empíricos y el análisis crítico</strong>.
                </p>
                <div class="bg-gradient-to-r from-indigo-50 via-white to-cyan-50 p-5 rounded-2xl border-l-4 border-mvIndigo shadow-sm">
                    <p class="text-gray-800">
                        La aplicación estricta del rigor metodológico y la objetividad implica no dejarse guiar por juicios de valor o percepciones empíricas superficiales, sino establecer categorías de análisis cuantitativas y cualitativas verificables, tales como el registro de interacciones, la frecuencia de publicaciones de ayuda y la medición del impacto real de la red de apoyo.
                    </p>
                </div>
                <p class="bg-mvNight text-mvCream p-5 rounded-2xl shadow-md text-sm sm:text-base">
                    <i class="fa-solid fa-check-circle text-mvMint mr-2"></i>
                    Al transformar las publicaciones y los mensajes visuales en variables observables y medibles, el investigador logra documentar la realidad social de manera neutral, garantizando que el estudio de la tecnología y la comunicación mantenga <strong>validez científica y académica</strong>.
                </p>
            </div>
        `
    },
    {
        id: 8,
        category: "Aplicación del Método Científico",
        title: "Fases del Método: Delimitación de Indicadores e Hipótesis",
        icon: "fa-sliders",
        preview: "Operativización mediante indicadores observables, correlación de interacciones e instrumentos replicables.",
        content: `
            <div class="space-y-4">
                <div class="flex items-start gap-4 bg-white/90 p-5 rounded-2xl border border-indigo-100 shadow-sm">
                    <span class="px-3 py-1 rounded-full bg-mvIndigo text-white text-xs font-display font-bold shrink-0">Fase 01</span>
                    <p class="text-gray-700">Para llevar a cabo un estudio riguroso sobre las comunidades virtuales en Facebook sin caer en la subjetividad o en impresiones individuales, es indispensable operativizar el análisis mediante las fases fundamentales del método científico.</p>
                </div>
                <div class="flex items-start gap-4 bg-gradient-to-r from-cyan-50/70 to-white p-5 rounded-2xl border border-cyan-200/70 shadow-sm">
                    <span class="px-3 py-1 rounded-full bg-mvTeal text-white text-xs font-display font-bold shrink-0">Fase 02</span>
                    <p class="text-gray-700">El primer paso consiste en la <strong>observación neutral del fenómeno</strong>, la cual no debe basarse en la percepción emocional de los mensajes, sino en la delimitación de indicadores observables como la frecuencia de publicación, el tipo de contenido compartido y los patrones de interacción social.</p>
                </div>
                <div class="flex items-start gap-4 bg-gradient-to-r from-purple-50/70 to-white p-5 rounded-2xl border border-purple-200/70 shadow-sm">
                    <span class="px-3 py-1 rounded-full bg-mvTwilight text-white text-xs font-display font-bold shrink-0">Fase 03</span>
                    <p class="text-gray-700">A partir de esta etapa de observación, es posible estructurar un planteamiento del problema e hipótesis comprobables; por ejemplo, determinar si existe una correlación directa entre el volumen de interacciones en una publicación de emergencia y la rapidez de la respuesta comunitaria en el entorno físico. Posteriormente, el proceso exige el diseño de instrumentos de recolección de datos que garanticen la <strong>replicabilidad del estudio</strong>.</p>
                </div>
            </div>
        `
    },
    {
        id: 9,
        category: "Aplicación del Método Científico",
        title: "Criterios Sistemáticos para el Análisis en Perfiles de Facebook",
        icon: "fa-list-check",
        preview: "Definición de muestra, categorización objetiva, descripción verificable y triangulación entre investigadores.",
        content: `
            <p class="text-mvNight font-medium">Para estudiar científicamente un perfil o grupo de Facebook sin caer en opiniones personales, es necesario aplicar un método ordenado, verificable y basado en evidencias:</p>
            <div class="space-y-3 mt-2">
                <div class="bg-gradient-to-r from-indigo-50/80 to-white p-4 rounded-2xl border border-indigo-200/70 shadow-sm flex items-start gap-3.5">
                    <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-mvNight to-mvIndigo text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                        <strong class="text-mvNight block mb-0.5">Definición del Objetivo y Muestra</strong>
                        <span class="text-sm text-gray-700">Definir el propósito específico de análisis y seleccionar una muestra representativa de publicaciones considerando fechas, tipo de contenido y métricas de interacción.</span>
                    </div>
                </div>
                <div class="bg-gradient-to-r from-cyan-50/80 to-white p-4 rounded-2xl border border-cyan-200/70 shadow-sm flex items-start gap-3.5">
                    <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-mvTeal to-cyan-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                        <strong class="text-mvNight block mb-0.5">Establecimiento de Categorías</strong>
                        <span class="text-sm text-gray-700">Registrar variables objetivas como el tema de la publicación, propósito del mensaje, tono del lenguaje, presencia de recursos multimedia, cantidad de reacciones, comentarios y veces compartida.</span>
                    </div>
                </div>
                <div class="bg-gradient-to-r from-rose-50/80 to-white p-4 rounded-2xl border border-rose-200/70 shadow-sm flex items-start gap-3.5">
                    <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-mvRose to-mvCoral text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                        <strong class="text-mvNight block mb-0.5">Objetividad en la Descripción</strong>
                        <span class="text-sm text-gray-700">Describir únicamente lo que puede comprobarse sin calificativos personales (por ejemplo, registrar tres argumentos y <em>x</em> interacciones en lugar de tildar la publicación de "interesante").</span>
                    </div>
                </div>
                <div class="bg-gradient-to-r from-purple-50/80 to-white p-4 rounded-2xl border border-purple-200/70 shadow-sm flex items-start gap-3.5">
                    <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-mvTwilight to-purple-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                        <strong class="text-mvNight block mb-0.5">Contraste y Triangulación</strong>
                        <span class="text-sm text-gray-700">Comparar publicaciones, consultar fuentes vinculadas y contrastar interpretaciones entre investigadores para reducir sesgos individuales.</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 10,
        category: "Aplicación del Método Científico",
        title: "Clasificación de Ejes de Acción y Auxilio Mutuo Vecinal",
        icon: "fa-shapes",
        preview: "Difusión estratégica en tiempo real, canalización logística/material y contención social y emocional.",
        content: `
            <p class="text-mvNight font-medium">En el entorno digital de Facebook, los usuarios configuran redes dinámicas de auxilio mutuo que se clasifican en tres ejes concretos de acción:</p>
            <div class="space-y-3.5 mt-2">
                <div class="p-5 rounded-2xl bg-gradient-to-r from-mvNight via-[#272049] to-mvIndigo text-white shadow-md flex items-start gap-4">
                    <div class="w-10 h-10 rounded-xl bg-mvMint/20 text-mvMint flex items-center justify-center shrink-0 mt-0.5">
                        <i class="fa-solid fa-satellite-dish"></i>
                    </div>
                    <div>
                        <span class="text-mvMint font-display text-[11px] uppercase tracking-widest font-bold block mb-1">Eje 1 • Alerta Inmediata</span>
                        <p class="font-bold text-base">Difusión estratégica de datos en tiempo real</p>
                        <p class="text-sm text-white/80 mt-1">Reportes de personas no localizadas, alertas viales y denuncias comunitarias.</p>
                    </div>
                </div>
                <div class="p-5 rounded-2xl bg-gradient-to-r from-mvTwilight via-[#4f387c] to-rose-900/90 text-white shadow-md flex items-start gap-4">
                    <div class="w-10 h-10 rounded-xl bg-mvPeach/20 text-mvPeach flex items-center justify-center shrink-0 mt-0.5">
                        <i class="fa-solid fa-box-open"></i>
                    </div>
                    <div>
                        <span class="text-mvPeach font-display text-[11px] uppercase tracking-widest font-bold block mb-1">Eje 2 • Movilización Tangible</span>
                        <p class="font-bold text-base">Canalización logística y material</p>
                        <p class="text-sm text-white/80 mt-1">Colectas de víveres, fondeo de gastos médicos y brigadas ciudadanas.</p>
                    </div>
                </div>
                <div class="p-5 rounded-2xl bg-gradient-to-r from-rose-50 via-white to-peach-50 border-2 border-mvRose/60 text-mvNight shadow-sm flex items-start gap-4">
                    <div class="w-10 h-10 rounded-xl bg-mvRose/25 text-mvTwilight flex items-center justify-center shrink-0 mt-0.5">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <div>
                        <span class="text-rose-600 font-display text-[11px] uppercase tracking-widest font-bold block mb-1">Eje 3 • Respaldo Humano</span>
                        <p class="font-bold text-base">Contención social y emocional ante contingencias</p>
                        <p class="text-sm text-gray-600 mt-1">Acompañamiento moral, redes de escucha y respaldo comunitario inmediato.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 11,
        category: "Marco Teórico y Sustentación Académica",
        title: "Fundamentación Teórica de la Autocomunicación de Masas (Castells)",
        icon: "fa-tower-broadcast",
        preview: "Producción autónoma de mensajes y contrapoder digital ciudadano sin mediación de medios tradicionales.",
        content: `
            <div class="bg-gradient-to-r from-purple-900 to-mvNight text-white p-5 rounded-2xl shadow-md flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                    <div class="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-mvPeach font-display font-bold">MC</div>
                    <div>
                        <span class="text-[10px] font-display uppercase tracking-widest text-mvMint block">Autor Referente</span>
                        <strong class="text-base">Manuel Castells (2009)</strong>
                    </div>
                </div>
                <span class="px-3 py-1 rounded-full bg-white/10 text-xs italic text-mvPeach">Comunicación y poder</span>
            </div>

            <p>Para comprender la dinámica mediante la cual los ciudadanos comunes logran difundir convocatorias de ayuda sin la mediación de los medios de comunicación tradicionales, resulta imprescindible acudir al marco teórico de la <strong>autocomunicación de masas</strong> propuesto por <strong>Manuel Castells (2009)</strong>.</p>
            
            <blockquote class="bg-purple-50/90 border-l-4 border-purple-600 p-4 rounded-r-2xl text-purple-950 font-medium">
                En su obra <em>Comunicación y poder</em>, Castells define la autocomunicación de masas como una forma de comunicación donde el mensaje es producido autónomamente por el emisor, orientado a una audiencia potencialmente global en la red, y cuya recepción es auto-seleccionada por los propios usuarios.
            </blockquote>

            <p class="bg-white/90 p-5 rounded-2xl border border-purple-100 shadow-sm">
                En el contexto empírico de nuestro estudio en Facebook, las publicaciones de auxilio vecinal o búsqueda de personas representan un claro ejemplo de autocomunicación de masas. El ciudadano no requiere solicitar autorización a un canal de televisión o periódico impreso para visibilizar una crisis médica o comunitaria; genera su propio mensaje, selecciona el soporte visual y lo emite en grupos locales. Castells sostiene que esta capacidad técnica y comunicativa otorga a la sociedad civil un <strong>contrapoder digital</strong>, permitiéndole reconfigurar las agendas públicas locales y movilizar apoyo social de forma horizontal y descentralizada.
            </p>
        `
    },
    {
        id: 12,
        category: "Marco Teórico y Sustentación Académica",
        title: "El Capital Social Digital y la Eficiencia Organizacional (Putnam)",
        icon: "fa-bridge",
        preview: "Capital vinculante y capital social de puente (bridging) como catalizadores de solidaridad colectiva.",
        content: `
            <div class="bg-gradient-to-r from-mvIndigo to-mvTwilight text-white p-5 rounded-2xl shadow-md flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                    <div class="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-mvMint font-display font-bold">RP</div>
                    <div>
                        <span class="text-[10px] font-display uppercase tracking-widest text-mvMint block">Autor Referente</span>
                        <strong class="text-base">Robert D. Putnam (2000)</strong>
                    </div>
                </div>
                <span class="px-3 py-1 rounded-full bg-white/10 text-xs italic text-mvPeach">Bowling Alone</span>
            </div>

            <p>La rápida conversión de una publicación digital en acciones concretas dentro del entorno físico no puede explicarse únicamente por el funcionamiento técnico del algoritmo de Facebook, sino por la existencia previa y la revitalización del capital social. <strong>Robert D. Putnam (2000)</strong>, en <em>Bowling Alone: The Collapse and Revival of American Community</em>, establece una distinción fundamental entre dos formas de capital social: el capital vinculante (<em>bonding social capital</em>) y el capital de puente (<em>bridging social capital</em>).</p>
            
            <div class="bg-gradient-to-r from-teal-50 via-white to-indigo-50 p-5 rounded-2xl border-l-4 border-mvTeal shadow-sm">
                <span class="text-xs font-display uppercase tracking-widest text-mvTeal font-bold block mb-1">Concepto Clave</span>
                <p class="text-gray-800">El <strong>capital de puente</strong> se refiere a aquellas conexiones entre individuos de diversos trasfondos sociales, económicos o geográficos que no poseen lazos afectivos primarios pero que se unen en función de causas o intereses compartidos.</p>
            </div>

            <p class="bg-white/90 p-5 rounded-2xl border border-indigo-100 shadow-sm">
                Las comunidades virtuales en grupos de Facebook operan como potentes generadores de capital social de puente. Cuando un habitante publica una solicitud urgente de donación de sangre o insumos ante un desastre, la red conecta a personas heterogéneas que, aunque no se conocen en la vida cotidiana, responden movilizadas por valores de reciprocidad y solidaridad generalizada. La plataforma digital actúa así como una infraestructura facilitadora que reduce drásticamente los costos de transacción para la acción colectiva.
            </p>
        `
    },
    {
        id: 13,
        category: "Marco Teórico y Sustentación Académica",
        title: "Economía Política Crítica de las Plataformas Comunitarias (Fuchs)",
        icon: "fa-coins",
        preview: "Capitalismo de datos, trabajo digital no pagado y condicionamiento algorítmico de la solidaridad.",
        content: `
            <div class="bg-gradient-to-r from-rose-900 via-mvTwilight to-mvNight text-white p-5 rounded-2xl shadow-md flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                    <div class="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-mvRose font-display font-bold">CF</div>
                    <div>
                        <span class="text-[10px] font-display uppercase tracking-widest text-mvRose block">Enfoque Crítico</span>
                        <strong class="text-base">Christian Fuchs (2017)</strong>
                    </div>
                </div>
                <span class="px-3 py-1 rounded-full bg-white/10 text-xs italic text-mvPeach">Social Media: A Critical Introduction</span>
            </div>

            <p>Un estudio riguroso del fenómeno del apoyo comunitario digital debe mantener una perspectiva crítica que evite el determinismo tecnológico o la idealización del entorno virtual. <strong>Christian Fuchs (2017)</strong>, en <em>Social Media: A Critical Introduction</em>, examina las plataformas digitales desde la perspectiva de la economía política crítica de la comunicación, señalando que redes como Facebook operan bajo la lógica del capitalismo de datos y la extracción del trabajo digital no pagado (<em>digital labor</em>).</p>
            
            <div class="bg-gradient-to-r from-rose-50 via-white to-amber-50 p-5 rounded-2xl border-l-4 border-mvRose shadow-sm">
                <span class="text-xs font-display uppercase tracking-widest text-rose-700 font-bold block mb-1">Dualidad Constitutiva</span>
                <p class="text-gray-800">Al analizar los grupos de apoyo vecinal bajo el enfoque de Fuchs, se evidencia una dualidad constitutiva: por un lado, los usuarios utilizan la infraestructura tecnológica para resolver carencias sociales y comunitarias reales; por otro lado, cada interacción, reacción y comentario generado durante una crisis o solicitud de auxilio produce métricas de <em>engagement</em> que son monetizadas por la plataforma a través de la venta de publicidad dirigida.</p>
            </div>

            <p class="bg-white/90 p-5 rounded-2xl border border-rose-100 shadow-sm">
                Reconocer esta dimensión estructural permite comprender que la efectividad del apoyo comunitario en redes sociales está condicionada por los algoritmos corporativos que priorizan ciertos contenidos en función de su rentabilidad y tasa de interacción.
            </p>
        `
    },
    {
        id: 14,
        category: "Marco Teórico y Sustentación Académica",
        title: "Estructura Social, Reciprocidad y Articulación Ciudadana (Coleman)",
        icon: "fa-handshake-angle",
        preview: "Obligaciones de reciprocidad diferida, confianza interpersonal y gobernanza mediante moderadores.",
        content: `
            <div class="bg-gradient-to-r from-mvTwilight via-purple-800 to-mvIndigo text-white p-5 rounded-2xl shadow-md flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                    <div class="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-mvGold font-display font-bold">JC</div>
                    <div>
                        <span class="text-[10px] font-display uppercase tracking-widest text-mvGold block">Autor Referente</span>
                        <strong class="text-base">James S. Coleman (1988)</strong>
                    </div>
                </div>
                <span class="px-3 py-1 rounded-full bg-white/10 text-xs italic text-mvPeach">American Journal of Sociology</span>
            </div>

            <p>Complementando la visión del capital social, la teoría del capital social en la estructura social formulada por <strong>James S. Coleman (1988)</strong> aporta conceptos clave para operativizar el análisis de la reciprocidad en redes de apoyo. Coleman sostiene que el capital social no radica de forma aislada en los individuos, sino en la estructura de las relaciones de confianza, las expectativas de reciprocidad y las normas de sanción social que regulan a un grupo.</p>
            
            <div class="bg-gradient-to-r from-amber-50 via-white to-purple-50 p-5 rounded-2xl border-l-4 border-mvGold shadow-sm">
                <span class="text-xs font-display uppercase tracking-widest text-amber-800 font-bold block mb-1">Norma Comunitaria</span>
                <p class="text-gray-800">En las redes comunitarias de Facebook, las publicaciones de ayuda crean <strong>"obligaciones de reciprocidad diferida"</strong>: el usuario que comparte o apoya la causa de un vecino fortalece una norma comunitaria implícita según la cual, ante una eventualidad futura, él también podrá acudir a la red en busca de respaldo.</p>
            </div>

            <p class="bg-white/90 p-5 rounded-2xl border border-purple-100 shadow-sm">
                La existencia de administradores y moderadores en los grupos locales de Facebook actúa como un mecanismo de gobernanza que preserva las normas de confianza, filtrando publicaciones fraudulentas o SPAM. De este modo, la estructura digital se convierte en un soporte normativo donde la confianza interpersonal se institucionaliza informalmente.
            </p>
        `
    },
    {
        id: 15,
        category: "Marco Teórico y Sustentación Académica",
        title: "Integración Teórico-Empírica y Conclusiones del Estudio",
        icon: "fa-puzzle-piece",
        preview: "Articulación de Castells, Putnam, Coleman y Fuchs para validar las observaciones empíricas en pantalla.",
        content: `
            <p class="text-mvNight font-medium">La articulación de estos cuatro enfoques académicos consolida la validez de nuestra investigación al demostrar que el apoyo comunitario en Facebook no constituye un fenómeno aislado ni contingente.</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
                <div class="p-4 rounded-xl bg-purple-50 border border-purple-200 text-sm">
                    <strong class="text-purple-950 block">Autocomunicación de masas</strong>
                    <span class="text-purple-800 text-xs">Manuel Castells</span>
                </div>
                <div class="p-4 rounded-xl bg-teal-50 border border-teal-200 text-sm">
                    <strong class="text-teal-950 block">Capital social de puente</strong>
                    <span class="text-teal-800 text-xs">Robert D. Putnam</span>
                </div>
                <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm">
                    <strong class="text-amber-950 block">Reciprocidad comunitaria</strong>
                    <span class="text-amber-800 text-xs">James S. Coleman</span>
                </div>
                <div class="p-4 rounded-xl bg-rose-50 border border-rose-200 text-sm">
                    <strong class="text-rose-950 block">Economía política digital</strong>
                    <span class="text-rose-800 text-xs">Christian Fuchs</span>
                </div>
            </div>

            <p>Por el contrario, se trata de una manifestación madura de la <strong>autocomunicación de masas (Castells)</strong> soportada en la movilización de <strong>capital social de puente (Putnam)</strong> y regida por <strong>normas de reciprocidad comunitaria (Coleman)</strong>, las cuales operan dentro de las restricciones estructurales y algorítmicas de la <strong>economía política digital (Fuchs)</strong>.</p>
            
            <div class="bg-gradient-to-r from-mvNight via-mvTwilight to-mvIndigo text-white p-5 rounded-2xl border-l-4 border-mvMint shadow-md">
                <p class="font-medium text-mvCream">Este marco teórico integrado valida las observaciones empíricas realizadas en pantallas y proporciona la base conceptual para el análisis cuantitativo y cualitativo de la investigación sobre el apoyo vecinal.</p>
            </div>
        `
    },
    {
        id: 16,
        category: "Justificación Teórica, Práctica y Social",
        title: "Planteamiento del Escenario Actual y Antecedentes del Fenómeno",
        icon: "fa-globe",
        preview: "Facebook como chat de emergencia vecinal en Latinoamérica frente a la mediación algorítmica actual.",
        content: `
            <div class="space-y-4">
                <div class="bg-white/90 p-5 rounded-2xl border border-teal-100 shadow-sm">
                    <span class="inline-block px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-900 text-[10px] font-display uppercase tracking-widest font-bold mb-2">Contexto Latinoamericano</span>
                    <p class="text-gray-700 leading-relaxed">
                        En el panorama actual de la investigación sobre comunicación digital y cibercultura, gran parte de los estudios se enfocan en dos vertientes: el marketing digital comercial o la polarización y desinformación (<em>fake news</em>). Sin embargo, en la cotidianidad de las ciudades en Latinoamérica, Facebook funciona primordialmente como un <strong>canal de emergencia</strong> donde la ciudadanía se organiza para pedir auxilio médico, reportar alertas de seguridad o brindarse apoyo mutuo entre vecinos.
                    </p>
                </div>
                <div class="bg-gradient-to-r from-emerald-50/80 via-white to-cyan-50/80 p-5 rounded-2xl border-l-4 border-mvTeal shadow-sm">
                    <span class="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-display uppercase tracking-widest font-bold mb-2">Mediación Algorítmica</span>
                    <p class="text-gray-800 leading-relaxed">
                        Desde la perspectiva teórica, autores como Manuel Castells con la autocomunicación de masas (2009) y Robert Putnam con el capital social (2000) explicaron cómo se articulan los movimientos sociales y la confianza comunitaria. No obstante, en el ecosistema digital contemporáneo mediado por algoritmos comerciales, las interacciones ya no ocurren en foros neutrales: si una publicación de emergencia no alcanza suficiente interacción inicial, el algoritmo reduce su visibilidad.
                    </p>
                </div>
            </div>
        `
    },
    {
        id: 17,
        category: "Justificación Teórica, Práctica y Social",
        title: "Identificación del Vacío Conceptual y Limitaciones Teóricas",
        icon: "fa-magnifying-glass-chart",
        preview: "La tensión entre solidaridad vecinal, capital social y monetización algorítmica de los datos.",
        content: `
            <div class="space-y-4">
                <p class="bg-white/90 p-5 rounded-2xl border border-teal-100 shadow-sm">
                    Al revisar la literatura reciente de comunicología, se identifica un <strong>vacío conceptual relevante</strong>: el escaso análisis sobre cómo los algoritmos de las plataformas tecnológicas condicionan la solidaridad vecinal y la construcción del capital social.
                </p>
                <p class="bg-white/90 p-5 rounded-2xl border border-teal-100 shadow-sm">
                    Mientras enfoques clásicos como los de Putnam o Coleman asociaban el apoyo comunitario a la proximidad física o el conocimiento cara a cara, y Castells concebía las redes como espacios horizontales libres de control central, la perspectiva crítica de Christian Fuchs (2017) advierte que las plataformas son corporaciones que monetizan los datos y las interacciones.
                </p>
                <div class="bg-gradient-to-r from-mvNight to-teal-950 text-white p-6 rounded-2xl shadow-md border-l-4 border-mvMint">
                    <span class="text-[11px] font-display uppercase tracking-[0.2em] text-mvMint font-bold block mb-2">Interrogante Central del Estudio</span>
                    <p class="text-base sm:text-lg font-medium text-white leading-relaxed">
                        De ahí surge la interrogante central que este estudio busca resolver conectando lo virtual con lo presencial: ¿Facebook democratiza y potencia efectivamente la organización comunitaria, o capitaliza la solidaridad ciudadana para generar tráfico y datos rentables?
                    </p>
                </div>
            </div>
        `
    },
    {
        id: 18,
        category: "Justificación Teórica, Práctica y Social",
        title: "Justificación Teórica: Aportaciones a las Ciencias de la Comunicación",
        icon: "fa-book-open",
        preview: "Actualización del modelo de mediación digital, validación en contexto latinoamericano y nuevas métricas.",
        content: `
            <p class="text-mvNight font-medium">Desde el ámbito académico, esta investigación aporta tres contribuciones clave al desarrollo de la Licenciatura en Ciencias de la Comunicación:</p>
            <div class="space-y-3 mt-2">
                <div class="bg-gradient-to-r from-teal-50/90 to-white p-5 rounded-2xl border border-teal-200/70 shadow-sm flex items-start gap-3.5">
                    <span class="w-8 h-8 rounded-xl bg-mvTeal text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                        <strong class="text-mvNight block mb-1">Actualizar el debate de la mediación digital</strong>
                        <span class="text-sm text-gray-700">Demuestra que los esquemas tradicionales de emisor, receptor y canal se transforman bajo la lógica algorítmica, convirtiendo a cada usuario en un nodo activo que valida y redistribuye el llamado de auxilio.</span>
                    </div>
                </div>
                <div class="bg-gradient-to-r from-emerald-50/90 to-white p-5 rounded-2xl border border-emerald-200/70 shadow-sm flex items-start gap-3.5">
                    <span class="w-8 h-8 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                        <strong class="text-mvNight block mb-1">Contrastar teorías en nuestra realidad sociocultural</strong>
                        <span class="text-sm text-gray-700">Permite evaluar la vigencia de las teorías del capital social en contextos de México y Latinoamérica, donde las redes digitales suplen o complementan respuestas institucionales.</span>
                    </div>
                </div>
                <div class="bg-gradient-to-r from-cyan-50/90 to-white p-5 rounded-2xl border border-cyan-200/70 shadow-sm flex items-start gap-3.5">
                    <span class="w-8 h-8 rounded-xl bg-cyan-700 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                        <strong class="text-mvNight block mb-1">Construir categorías metodológicas replicables</strong>
                        <span class="text-sm text-gray-700">Establece indicadores para medir la efectividad del llamado a la acción, la credibilidad percibida y la velocidad de transición entre la pantalla y la ayuda física, sirviendo como base para futuras investigaciones en cibercultura.</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 19,
        category: "Justificación Teórica, Práctica y Social",
        title: "Justificación Práctica: Beneficiarios y Transferencia de Resultados",
        icon: "fa-users-gear",
        preview: "Guías de comunicación para colectivos vecinales, enlace con Protección Civil y casos de estudio aplicados.",
        content: `
            <p class="text-mvNight font-medium">Los hallazgos de esta investigación ofrecen aplicaciones directas para distintos actores sociales e institucionales:</p>
            <div class="space-y-3.5 mt-2">
                <div class="bg-gradient-to-r from-indigo-50/80 to-white p-5 rounded-2xl border-l-4 border-mvTwilight shadow-sm flex items-start gap-3.5">
                    <div class="w-9 h-9 rounded-xl bg-mvTwilight/10 text-mvTwilight flex items-center justify-center shrink-0 mt-0.5">
                        <i class="fa-solid fa-people-group"></i>
                    </div>
                    <div>
                        <strong class="text-mvNight block mb-1">Colectivos y organizaciones vecinales</strong>
                        <span class="text-sm text-gray-700">Brinda lineamientos prácticos de comunicación digital (estructura del mensaje, jerarquía de datos, uso de evidencia visual y horarios de difusión) para maximizar el alcance algorítmico y la respuesta ciudadana en emergencias o búsquedas.</span>
                    </div>
                </div>
                <div class="bg-gradient-to-r from-rose-50/80 to-white p-5 rounded-2xl border-l-4 border-mvRose shadow-sm flex items-start gap-3.5">
                    <div class="w-9 h-9 rounded-xl bg-mvRose/20 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                        <i class="fa-solid fa-kit-medical"></i>
                    </div>
                    <div>
                        <strong class="text-mvNight block mb-1">Protección Civil y cuerpos de emergencia</strong>
                        <span class="text-sm text-gray-700">Facilita la comprensión de la autoorganización ciudadana en redes para articular canales institucionales eficientes que colaboren con las brigadas digitales vecinales.</span>
                    </div>
                </div>
                <div class="bg-gradient-to-r from-teal-50/80 to-white p-5 rounded-2xl border-l-4 border-mvTeal shadow-sm flex items-start gap-3.5">
                    <div class="w-9 h-9 rounded-xl bg-mvTeal/15 text-mvTeal flex items-center justify-center shrink-0 mt-0.5">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div>
                        <strong class="text-mvNight block mb-1">Estudiantes de comunicación</strong>
                        <span class="text-sm text-gray-700">Proporciona un caso empírico aplicado que demuestra el potencial de las redes sociales para la comunicación con sentido social y comunitario más allá del ámbito comercial.</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 20,
        category: "Justificación Teórica, Práctica y Social",
        title: "Justificación Social: Impacto en la Resiliencia Comunitaria Local",
        icon: "fa-shield-heart",
        preview: "Fortalecimiento del tejido social, alfabetización digital contra estafas y primera línea de defensa vecinal.",
        content: `
            <div class="space-y-4">
                <div class="bg-white/90 p-5 rounded-2xl border border-emerald-100 shadow-sm">
                    <p class="text-gray-700 leading-relaxed">
                        En la dimensión humana y comunitaria, la población enfrenta cotidianamente contingencias médicas, económicas y de seguridad en las que la respuesta institucional puede verse rebasada o demorada, llevando a los ciudadanos a utilizar <strong>Facebook como primera línea de defensa</strong>.
                    </p>
                </div>
                <div class="bg-gradient-to-r from-emerald-50 via-teal-50/60 to-white p-5 rounded-2xl border-l-4 border-emerald-500 shadow-sm flex items-start gap-4">
                    <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <p class="text-gray-800 leading-relaxed">
                        Investigar este fenómeno permite visibilizar y fortalecer las redes de solidaridad existentes entre vecinos. Asimismo, promueve la <strong>alfabetización digital crítica</strong> para identificar y prevenir publicaciones fraudulentas o estafas, consolidando comunidades locales más resilientes y articuladas ante situaciones de crisis.
                    </p>
                </div>
            </div>
        `
    },
    {
        id: 21,
        category: "Planteamiento de Hipótesis",
        title: "Exploración de Investigaciones Recientes sobre Interacciones Digitales",
        icon: "fa-magnifying-glass",
        preview: "Articulación entre vulnerabilidad emocional y evidencia empírica verificable para detonar la acción colectiva.",
        content: `
            <div class="space-y-4">
                <p class="bg-white/90 p-5 rounded-2xl border border-pink-100 shadow-sm">
                    Para la formulación de una hipótesis sólida dentro del campo de la comunicación y los entornos virtuales, es indispensable explorar las evidencias aportadas por investigaciones recientes sobre la conducta de los usuarios en redes sociales durante situaciones de vulnerabilidad o contingencia. Diversos estudios contemporáneos sobre cibercultura e interacción humano-computadora concuerdan en que las respuestas solidarias en espacios digitales no ocurren de manera azarosa, sino que están condicionadas por variables comunicacionales específicas.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-gradient-to-br from-rose-50 to-white p-5 rounded-2xl border border-rose-200/70 shadow-sm">
                        <span class="text-[11px] font-display uppercase tracking-widest text-rose-700 font-bold block mb-1.5">Factor 1 • Emocionalidad</span>
                        <p class="text-sm text-gray-700 leading-relaxed">La revisión de publicaciones científicas recientes demuestra que la probabilidad de que un usuario ejecute una acción concreta (como compartir la publicación, dejar un comentario de apoyo, realizar un donativo o acudir presencialmente al llamado) se incrementa de forma significativa cuando la apelación del mensaje utiliza estrategias narrativas orientadas a la <strong>vulnerabilidad emocional</strong>.</p>
                    </div>
                    <div class="bg-gradient-to-br from-amber-50 to-white p-5 rounded-2xl border border-amber-200/70 shadow-sm">
                        <span class="text-[11px] font-display uppercase tracking-widest text-amber-800 font-bold block mb-1.5">Factor 2 • Verificación</span>
                        <p class="text-sm text-gray-700 leading-relaxed">No obstante, la sola carga emocional resulta insuficiente por sí misma; las investigaciones destacan que debe existir una articulación con <strong>datos verificables</strong> (ubicación precisa, evidencia fotográfica o datos directos de contacto) para romper con el escepticismo inicial generado por la proliferación de desinformación en las redes.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 22,
        category: "Planteamiento de Hipótesis",
        title: "Redacción de la Hipótesis de Trabajo",
        icon: "fa-bullseye",
        preview: "Relación causal entre estrategias de vulnerabilidad emocional, verificación empírica y respuesta comunitaria.",
        content: `
            <p class="text-mvNight font-medium">Tomando como referente las aportaciones teóricas previas sobre la autocomunicación de masas y la movilización del capital social digital, y con el fin de proponer una relación lógica entre variables medibles, se redacta la hipótesis de trabajo principal para la presente investigación:</p>
            <blockquote class="bg-gradient-to-br from-mvNight via-[#2b1f52] to-rose-950 text-mvCream p-6 sm:p-8 rounded-3xl shadow-xl border-l-4 border-mvMint my-2 leading-relaxed relative overflow-hidden">
                <div class="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-mvRose/15 pointer-events-none"></div>
                <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mvMint/15 text-mvMint text-xs font-display uppercase tracking-widest font-bold mb-3">
                    <i class="fa-solid fa-bullseye"></i> Hipótesis de Trabajo (H1)
                </span>
                <p class="text-base sm:text-lg font-medium text-white leading-relaxed">
                    "El uso de estrategias de vulnerabilidad emocional y verificación empírica en las publicaciones de contenido digital en Facebook incrementa directamente la tasa de interacción, alcance y fidelización de su audiencia, optimizando la velocidad de respuesta y la movilización de ayuda comunitaria en el entorno físico."
                </p>
            </blockquote>
        `
    },
    {
        id: 23,
        category: "Planteamiento de Hipótesis",
        title: "Redacción de la Hipótesis Nula y Alternativas",
        icon: "fa-code-branch",
        preview: "Contrastación metodológica mediante hipótesis nula (H0) e hipótesis alternativa (Ha) basada en cercanía geográfica.",
        content: `
            <p class="text-mvNight font-medium">Con la finalidad de dar estricto cumplimiento al rigor metodológico exigido por el método científico y permitir la contrastación de los datos empíricos recolectados en el estudio, se establecen las hipótesis nula y alternativa:</p>
            <div class="space-y-4 mt-2">
                <div class="bg-gradient-to-r from-rose-50 via-white to-pink-50/60 p-6 rounded-2xl border-l-4 border-mvRose shadow-sm">
                    <span class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-display uppercase tracking-widest font-bold mb-2">
                        <i class="fa-solid fa-ban"></i> Hipótesis Nula (H0)
                    </span>
                    <p class="italic text-gray-800 leading-relaxed">"El uso de estrategias de vulnerabilidad emocional y verificación empírica en las publicaciones de contenido digital en Facebook no genera un incremento directo en la tasa de interacción ni en la velocidad de movilización comunitaria de la audiencia en el entorno físico."</p>
                </div>
                <div class="bg-gradient-to-r from-indigo-50 via-white to-purple-50/60 p-6 rounded-2xl border-l-4 border-mvTwilight shadow-sm">
                    <span class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-indigo-100 text-indigo-900 text-xs font-display uppercase tracking-widest font-bold mb-2">
                        <i class="fa-solid fa-shuffle"></i> Hipótesis Alternativa (Ha)
                    </span>
                    <p class="italic text-gray-800 leading-relaxed">"La tasa de interacción y la efectividad del auxilio comunitario en Facebook dependen primordialmente de la cercanía geográfica o el lazo afectivo previo entre los miembros del grupo, siendo irrelevante el tipo de estrategia discursiva o de emocionalidad empleada en la publicación."</p>
                </div>
            </div>
        `
    },
    {
        id: 24,
        category: "Planteamiento de Hipótesis",
        title: "Relación Lógica entre Variables del Estudio",
        icon: "fa-diagram-next",
        preview: "Sistema causal: Variable Independiente (VI), Variables Dependientes (VD1 y VD2) y Variables Intervinientes.",
        content: `
            <p class="text-mvNight font-medium">La formulación previa delimita con claridad la estructura causal del objeto de estudio a través de un sistema coherente de variables interrelacionadas:</p>
            <div class="space-y-3.5 mt-2">
                <div class="bg-gradient-to-r from-rose-50/90 to-white p-5 rounded-2xl border border-rose-200/80 shadow-sm">
                    <span class="inline-block px-2.5 py-0.5 rounded-md bg-mvCoral text-white text-[10px] font-display uppercase tracking-widest font-bold mb-1.5">Causa • VI</span>
                    <strong class="text-mvNight block mb-1">Variable Independiente (VI)</strong>
                    <p class="text-sm text-gray-700">Las estrategias de comunicación digital basadas en la apelación a la vulnerabilidad emocional y la inclusión de elementos discursivos de verificación empírica.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    <div class="bg-gradient-to-br from-purple-50/90 to-white p-5 rounded-2xl border border-purple-200/80 shadow-sm">
                        <span class="inline-block px-2.5 py-0.5 rounded-md bg-mvTwilight text-white text-[10px] font-display uppercase tracking-widest font-bold mb-1.5">Efecto Digital • VD1</span>
                        <strong class="text-mvNight block mb-1">Variable Dependiente 1 (VD1)</strong>
                        <p class="text-sm text-gray-700">La tasa de interacción y fidelización de la audiencia en la red social (medida a través de <em>likes</em>, reacciones, comentarios, alcance algorítmico y veces que se comparte el contenido).</p>
                    </div>
                    <div class="bg-gradient-to-br from-teal-50/90 to-white p-5 rounded-2xl border border-teal-200/80 shadow-sm">
                        <span class="inline-block px-2.5 py-0.5 rounded-md bg-mvTeal text-white text-[10px] font-display uppercase tracking-widest font-bold mb-1.5">Efecto Físico • VD2</span>
                        <strong class="text-mvNight block mb-1">Variable Dependiente 2 (VD2)</strong>
                        <p class="text-sm text-gray-700">La movilización comunitaria presencial (efectividad y rapidez con la que el auxilio solicitado en el entorno virtual se materializa en el entorno físico).</p>
                    </div>
                </div>
                <div class="bg-gradient-to-r from-amber-50/90 to-white p-5 rounded-2xl border border-amber-200/80 shadow-sm">
                    <span class="inline-block px-2.5 py-0.5 rounded-md bg-amber-500 text-white text-[10px] font-display uppercase tracking-widest font-bold mb-1.5">Contexto • Intervinientes</span>
                    <strong class="text-mvNight block mb-1">Variables Intervinientes</strong>
                    <p class="text-sm text-gray-700">La visibilidad otorgada por el algoritmo de Facebook, la hora de publicación y las condiciones socioeconómicas del sector vecinal donde ocurre la contingencia.</p>
                </div>
            </div>
        `
    },
    {
        id: 25,
        category: "Sustento Documental y Síntesis",
        title: "Referencias Bibliográficas Académicas",
        icon: "fa-bookmark",
        preview: "Fuentes académicas arbitradas que sustentan el estudio: Castells, Coleman, Fuchs y Putnam.",
        content: `
            <div class="space-y-3 bg-white/95 p-6 rounded-2xl border border-indigo-100 shadow-sm">
                <div class="p-4 rounded-xl bg-purple-50/70 border-l-4 border-mvTwilight hover:bg-purple-50 transition">
                    Castells, M. (2009). <em>Comunicación y poder</em>. Alianza Editorial.
                </div>
                <div class="p-4 rounded-xl bg-rose-50/70 border-l-4 border-mvRose hover:bg-rose-50 transition">
                    Coleman, J. S. (1988). Social capital in the creation of human capital. <em>American Journal of Sociology</em>, 94, S95-S120. https://doi.org/10.1086/228943
                </div>
                <div class="p-4 rounded-xl bg-teal-50/70 border-l-4 border-mvTeal hover:bg-teal-50 transition">
                    Fuchs, C. (2017). <em>Social media: A critical introduction</em> (2nd ed.). SAGE Publications.
                </div>
                <div class="p-4 rounded-xl bg-indigo-50/70 border-l-4 border-mvNight hover:bg-indigo-50 transition">
                    Putnam, R. D. (2000). <em>Bowling alone: The collapse and revival of American community</em>. Simon & Schuster.
                </div>
            </div>
        `
    },
    {
        id: 26,
        category: "Sustento Documental y Síntesis",
        title: "Matriz de Resultados y Discusión",
        icon: "fa-table-cells",
        preview: "Sistematización de indicadores, insumos metodológicos, validación de hipótesis y proyección futura.",
        content: `
            <div class="space-y-5">
                <div class="bg-gradient-to-r from-indigo-50 via-white to-teal-50 p-4 rounded-2xl border border-indigo-200/70 flex items-center gap-3">
                    <i class="fa-solid fa-table-list text-mvTwilight"></i>
                    <p class="text-sm text-mvNight font-medium">Articulación de los indicadores empíricos, contrastación de hipótesis y matriz para la discusión teórica de resultados:</p>
                </div>
                <div class="overflow-x-auto rounded-2xl border border-purple-200/80 shadow-md bg-white">
                    <table class="w-full mv-table border-collapse">
                        <thead>
                            <tr>
                                <th>Indicador</th>
                                <th>Insumo</th>
                                <th>Contenido</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-950 font-bold text-xs inline-block">Objetivo</span></td>
                                <td>El objetivo general del proyecto (analizar el apoyo comunitario y ayuda mutua digital en Facebook).</td>
                                <td>La presente investigación tuvo por objetivo analizar cómo las publicaciones de auxilio vecinal en grupos de Facebook estructuran la movilización comunitaria y la respuesta en el entorno físico.</td>
                            </tr>
                            <tr>
                                <td><span class="px-2.5 py-1 rounded-lg bg-teal-100 text-teal-950 font-bold text-xs inline-block">Resultado</span></td>
                                <td>Técnica de análisis, significancia y fuerza de correlación.</td>
                                <td>Luego de la recolección de datos y su análisis respectivo, se halló que el uso de publicaciones con llamados a la vulnerabilidad emocional y verificación empírica incrementa significativamente la tasa de interacción y la velocidad de movilización vecinal.</td>
                            </tr>
                            <tr>
                                <td><span class="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-950 font-bold text-xs inline-block">Hipótesis</span></td>
                                <td>Decisión de aceptación o rechazo (H1, H0, Ha).</td>
                                <td>Por lo consiguiente, se acepta la hipótesis de trabajo (H1), evidenciando que la estrategia discursiva en Facebook correlaciona directamente con la respuesta comunitaria efectiva.</td>
                            </tr>
                            <tr>
                                <td><span class="px-2.5 py-1 rounded-lg bg-purple-100 text-purple-950 font-bold text-xs inline-block">Interpretación</span></td>
                                <td>Significado de la hipótesis y congruencia teórica.</td>
                                <td>Esto significa que los usuarios no solo actúan por cercanía física, sino que la arquitectura de la plataforma y el diseño del mensaje validan la urgencia, conectando con las teorías de Castells sobre autocomunicación de masas.</td>
                            </tr>
                            <tr>
                                <td><span class="px-2.5 py-1 rounded-lg bg-cyan-100 text-cyan-950 font-bold text-xs inline-block">Antecedentes</span></td>
                                <td>Artículos científicos precedentes o estudios de plataformas digitales.</td>
                                <td>Como señala Putnam (2000) y estudios recientes sobre cibercultura, las redes de puente digital reducen los costos de transacción para la acción colectiva, corroborando los hallazgos obtenidos en la presente investigación.</td>
                            </tr>
                            <tr>
                                <td><span class="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-950 font-bold text-xs inline-block">Base Teórica</span></td>
                                <td>Concepción, características, factores asociados y multicausalidad.</td>
                                <td>Estos resultados confirman lo que sostiene Manuel Castells (2009) sobre la autocomunicación de masas, donde la emisión autónoma de mensajes de ayuda descentraliza agendas y moviliza contrapoderes digitales efectivos.</td>
                            </tr>
                            <tr>
                                <td><span class="px-2.5 py-1 rounded-lg bg-rose-100 text-rose-950 font-bold text-xs inline-block">Análisis Crítico</span></td>
                                <td>Brechas encontradas, limitaciones y teorías que contrastan.</td>
                                <td>Por su parte, desde una perspectiva crítica, las limitaciones encontradas señalan que las plataformas (Fuchs, 2017) operan bajo la extracción de datos, condicionando la visibilidad del apoyo a métricas algorítmicas.</td>
                            </tr>
                            <tr>
                                <td><span class="px-2.5 py-1 rounded-lg bg-pink-100 text-pink-950 font-bold text-xs inline-block">Proyección Futura</span></td>
                                <td>Recomendaciones, líneas futuras e impacto práctico.</td>
                                <td>Se sugiere profundizar en futuras investigaciones sobre el impacto de la moderación en grupos locales y la alfabetización digital para evitar desinformación en crisis comunitarias.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    }
];

let currentModalIndex = 0;

// Renderizar tarjetas en pantalla
function renderCards() {
    const grid = document.getElementById('cardsGrid');
    grid.innerHTML = sectionsData.map((item, index) => {
        if (item.isCover) {
            return `
                <div onclick="openModal(${index})" class="mv-card rounded-2xl p-6 cursor-pointer flex flex-col justify-between group sm:col-span-2 lg:col-span-1 border-2 border-mvPeach/50">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-[10px] font-display uppercase tracking-[0.2em] text-mvTwilight font-bold">${item.category}</span>
                            <span class="w-7 h-7 rounded-full bg-mvNight/5 group-hover:bg-mvNight group-hover:text-white flex items-center justify-center transition text-xs">
                                <i class="fa-solid fa-expand"></i>
                            </span>
                        </div>
                        <div class="bg-white rounded-xl p-4 mb-4 flex items-center justify-center border border-gray-100 shadow-sm h-28">
                            <img src="${item.coverImage}" alt="Logo Universidad del Sur" class="h-20 object-contain group-hover:scale-105 transition duration-500">
                        </div>
                        <h3 class="text-base font-bold text-mvNight uppercase tracking-wider mb-2 group-hover:text-mvTwilight transition">
                            ${item.title}
                        </h3>
                        <p class="text-xs text-gray-600 leading-relaxed">
                            ${item.preview}
                        </p>
                    </div>
                    <div class="mt-5 pt-3 border-t border-gray-200/70 flex items-center justify-between text-[11px] font-display uppercase tracking-widest text-mvTwilight font-semibold">
                        <span>Ver integrantes</span>
                        <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition"></i>
                    </div>
                </div>
            `;
        }

        if (item.hasThumbnail) {
            return `
                <div onclick="openModal(${index})" class="mv-card rounded-2xl p-6 cursor-pointer flex flex-col justify-between group">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-[10px] font-display uppercase tracking-[0.2em] text-mvTwilight font-bold">${item.category}</span>
                            <span class="w-7 h-7 rounded-full bg-mvNight/5 group-hover:bg-mvNight group-hover:text-white flex items-center justify-center transition text-xs">
                                <i class="fa-solid ${item.icon}"></i>
                            </span>
                        </div>
                        <div class="rounded-xl overflow-hidden mb-4 border border-gray-200 h-28 bg-white">
                            <img src="${item.thumbSrc}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                        </div>
                        <h3 class="text-base font-bold text-mvNight uppercase tracking-wider mb-2 group-hover:text-mvTwilight transition">
                            ${item.title}
                        </h3>
                        <p class="text-xs text-gray-600 leading-relaxed">
                            ${item.preview}
                        </p>
                    </div>
                    <div class="mt-5 pt-3 border-t border-gray-200/70 flex items-center justify-between text-[11px] font-display uppercase tracking-widest text-mvTwilight font-semibold">
                        <span>Explorar esquema</span>
                        <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition"></i>
                    </div>
                </div>
            `;
        }

        return `
            <div onclick="openModal(${index})" class="mv-card rounded-2xl p-6 cursor-pointer flex flex-col justify-between group">
                <div>
                    <div class="flex items-center justify-between mb-5">
                        <span class="text-[10px] font-display uppercase tracking-[0.18em] text-mvTwilight/80 font-semibold">${item.category}</span>
                        <span class="w-8 h-8 rounded-full bg-mvNight/5 group-hover:bg-mvTwilight group-hover:text-white text-mvTwilight flex items-center justify-center transition duration-300 text-xs">
                            <i class="fa-solid ${item.icon}"></i>
                        </span>
                    </div>
                    <h3 class="text-sm sm:text-base font-bold text-mvNight uppercase tracking-wider leading-snug mb-3 group-hover:text-mvTwilight transition">
                        ${item.title}
                    </h3>
                    <p class="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                        ${item.preview}
                    </p>
                </div>
                <div class="mt-6 pt-3 border-t border-gray-200/70 flex items-center justify-between text-[11px] font-display uppercase tracking-widest text-mvTwilight font-semibold">
                    <span>Abrir pestaña</span>
                    <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition"></i>
                </div>
            </div>
        `;
    }).join('');
}

// Abrir pestaña emergente (modal) con identidad cromática por categoría
function openModal(index) {
    currentModalIndex = index;
    const item = sectionsData[index];
    const theme = categoryThemes[item.category] || {
        bar: "from-mvNight via-mvRose to-mvMint",
        badge: "bg-mvTwilight/10 text-mvTwilight",
        iconBox: "from-mvTwilight to-mvNight",
        glow: "bg-mvRose"
    };

    const topBar = document.getElementById('modalTopBar');
    topBar.className = `h-2.5 w-full bg-gradient-to-r ${theme.bar}`;

    const subtitleEl = document.getElementById('modalSubtitle');
    subtitleEl.className = `text-[10px] font-display uppercase tracking-[0.18em] px-3 py-0.5 rounded-full font-bold ${theme.badge}`;
    subtitleEl.innerText = item.category;

    document.getElementById('modalCounter').innerText = `${index + 1} / ${sectionsData.length}`;
    document.getElementById('modalTitle').innerText = item.title;

    const iconBox = document.getElementById('modalHeaderIconBox');
    iconBox.className = `hidden sm:flex w-12 h-12 rounded-2xl bg-gradient-to-br ${theme.iconBox} text-white items-center justify-center shadow-md shrink-0`;
    document.getElementById('modalHeaderIcon').className = `fa-solid ${item.icon || 'fa-compass'} text-lg`;

    const glowEl = document.getElementById('modalHeaderGlow');
    glowEl.className = `absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-25 pointer-events-none blur-xl ${theme.glow}`;

    const bodyEl = document.getElementById('modalBody');
    bodyEl.innerHTML = `<div class="modal-content-animate space-y-5">${item.content}</div>`;

    document.getElementById('prevBtn').style.visibility = index > 0 ? 'visible' : 'hidden';
    document.getElementById('nextBtn').style.visibility = index < sectionsData.length - 1 ? 'visible' : 'hidden';

    const modal = document.getElementById('detailModal');
    const box = document.getElementById('modalBox');
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    box.scrollTop = 0;

    setTimeout(() => {
        box.classList.remove('scale-95', 'opacity-0');
        box.classList.add('scale-100', 'opacity-100');
    }, 15);
}

// Navegar entre pestañas sin cerrar el modal
function navigateModal(direction) {
    const newIndex = currentModalIndex + direction;
    if (newIndex >= 0 && newIndex < sectionsData.length) {
        openModal(newIndex);
    }
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('detailModal');
    const box = document.getElementById('modalBox');
    
    box.classList.remove('scale-100', 'opacity-100');
    box.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 220);
}

function closeModalOnBackdrop(event) {
    if (event.target.id === 'detailModal') {
        closeModal();
    }
}

// Cerrar con tecla Escape o navegar con flechas
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('detailModal');
    if (!modal.classList.contains('hidden')) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') navigateModal(1);
        if (e.key === 'ArrowLeft') navigateModal(-1);
    }
});

// Lógica de reproducción continua de música ambiental sin cortes
const bgMusic = document.getElementById('bgMusic');
const musicIcon = document.getElementById('musicIcon');
const musicStatus = document.getElementById('musicStatus');
let isPlaying = false;

bgMusic.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

function updateMusicUI(playing) {
    isPlaying = playing;
    if (playing) {
        musicIcon.classList.remove('fa-play');
        musicIcon.classList.add('fa-pause');
        musicStatus.innerText = 'Reproduciendo en bucle';
    } else {
        musicIcon.classList.remove('fa-pause');
        musicIcon.classList.add('fa-play');
        musicStatus.innerText = 'Música en pausa';
    }
}

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play().then(() => updateMusicUI(true)).catch(() => {});
    } else {
        bgMusic.pause();
        updateMusicUI(false);
    }
}

function startMusicAutomatically() {
    bgMusic.volume = 0.65;
    bgMusic.play().then(() => {
        updateMusicUI(true);
        document.removeEventListener('click', startMusicAutomatically);
    }).catch(() => {});
}

// Inicialización compatible con CodePen
renderCards();
startMusicAutomatically();
document.addEventListener('click', startMusicAutomatically, { once: true });