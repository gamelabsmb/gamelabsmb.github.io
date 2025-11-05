// ------------------------------------------------------------
// CONFIGURACIÓN POR DEFECTO (editable desde el panel)
// ------------------------------------------------------------
// ------------------------------------------------------------
// CONFIGURACIÓN DE GRUPOS Y ESTACIONES
// ------------------------------------------------------------
// ------------------------------------------------------------
// CONFIGURACIÓN DE GRUPOS Y ESTACIONES FÍSICAS ESPACIALES
// ------------------------------------------------------------
// Estaciones físicas temáticas del espacio
const SPACE_STATIONS = {
  'MERCURIO': {
    name: 'Planeta Mercurio',
    icon: '🪐',
    coords: 'EST-001',
    description: 'Estación orbital más cercana al Sol',
    items: ['QR Code con coordenadas', 'Tarjeta de barreras visuales', 'Acetato rojo para filtrado']
  },
  'VENUS': {
    name: 'Planeta Venus',
    icon: '🌌',
    coords: 'EST-002',
    description: 'Estación de sonido y comunicación',
    items: ['Tira Morse impresa', 'Reglas de decodificación', 'Indicaciones de frecuencia']
  },
  'MARTE': {
    name: 'Planeta Marte',
    icon: '🔴',
    coords: 'EST-003',
    description: 'Estación de navegación y lógica',
    items: ['Mini-hexagrid impreso', 'Mapa de rutas', 'Balizas de código']
  },
  'JUPITER': {
    name: 'Planeta Júpiter',
    icon: '🪐',
    coords: 'EST-004',
    description: 'Estación de decisiones sociales',
    items: ['Casos A/B/C en papel', 'Tarjetas de respuesta', 'Plantilla de evaluación']
  },
  'ALPHA': {
    name: 'Estación Espacial Alpha',
    icon: '🛸',
    coords: 'EST-005',
    description: 'Estación de planificación temporal',
    items: ['Calendario espacial', 'Tarjetas de reflexión', 'Cronómetro de misión']
  },
  'LUNA': {
    name: 'Satélite Lunar',
    icon: '🌙',
    coords: 'EST-006',
    description: 'Estación de integración final',
    items: ['Código maestro', 'Plantilla ventana', 'Certificado de misión']
  }
};

const GROUP_STATIONS = {
  1: { 
    visual: 'MERCURIO', 
    social: 'JUPITER', 
    visualCode: '2331', 
    socialCode: '8462',
    auditiva: 'VENUS',
    logica: 'MARTE',
    temporal: 'ALPHA'
  },
  2: { 
    visual: 'MERCURIO', 
    social: 'JUPITER', 
    visualCode: '2331', 
    socialCode: '8462',
    auditiva: 'VENUS',
    logica: 'MARTE',
    temporal: 'ALPHA'
  },
  3: { 
    visual: 'VENUS', 
    social: 'MARTE', 
    visualCode: '1220', 
    socialCode: '8462',
    auditiva: 'ALPHA',
    logica: 'JUPITER',
    temporal: 'LUNA'
  },
  4: { 
    visual: 'VENUS', 
    social: 'MARTE', 
    visualCode: '1220', 
    socialCode: '8462',
    auditiva: 'ALPHA',
    logica: 'JUPITER',
    temporal: 'LUNA'
  },
  5: { 
    visual: 'MARTE', 
    social: 'ALPHA', 
    visualCode: '9075', 
    socialCode: '8462',
    auditiva: 'JUPITER',
    logica: 'MERCURIO',
    temporal: 'LUNA'
  },
  6: { 
    visual: 'MARTE', 
    social: 'ALPHA', 
    visualCode: '9075', 
    socialCode: '8462',
    auditiva: 'JUPITER',
    logica: 'MERCURIO',
    temporal: 'LUNA'
  }
};

// Detectar grupo desde URL o parámetro
function getGroupNumber() {
  const urlParams = new URLSearchParams(window.location.search);
  const group = urlParams.get('grupo') || urlParams.get('group');
  if (group) return parseInt(group);
  
  // Intentar detectar desde el nombre del archivo
  const filename = window.location.pathname.split('/').pop();
  const match = filename.match(/grupo(\d+)/i);
  if (match) return parseInt(match[1]);
  
  return null;
}

const DEFAULT_CFG = {
  session: {
    title: "OPERACIÓN INCLUSIÓN — SISTEMA ÓRBITAS",
    center: "Centro X",
    date: new Date().toISOString().slice(0, 10),
  },
  group: getGroupNumber() || null,
  boxes: {
    visual: { 
      label: "PLANETA VISUAL (Acceso Sensorial)", 
      target: "ALTOFORMA", 
      targetAlt: "1220", // Alternativa numérica
      type: "word", // Tipo: word (palabra), alnum (alfanumérico), numeric (numérico), directional (direccional)
      prompt: "Alto contraste, redundancia icono+texto, alternativas (audio/braille).",
      learningMessage: "La barrera puede estar en el entorno: contraste + forma + texto = acceso.",
      satellites: [
        { id: "S1", name: "Filtro Lumen", fragment: "ALTO", description: "Acetato rojo revela «ALTO CONTRASTE»" },
        { id: "S2", name: "Daltónico", fragment: "FORMA", description: "Elegir 2 pictos que se distinguen por forma, no color" },
        { id: "S3", name: "Tipografía", fragment: "LEIBLE", description: "Seleccionar la legible (interletraje amplio)" }
      ],
      output: "V1"
    },
    auditiva: { 
      label: "PLANETA AUDITIVA (Acceso Sensorial)", 
      target: "PICOS", 
      type: "alnum", 
      prompt: "Reducir ruido, ofrecer visual/subtítulos, morse como apoyo impreso.",
      learningMessage: "Baja el ruido y acompaña con visual: más comprensión para más alumnos.",
      satellites: [
        { id: "S1", name: "Morse Sonar", fragment: "PICOS", description: "Tira 'PICTOS' → regla 1,2,3,5,6 = PICOS" },
        { id: "S2", name: "Ruido", fragment: "SILENCIO", description: "Matriz con fuentes → marcar qué reducir primero" },
        { id: "S3", name: "Lectura Labial", fragment: "VISUAL", description: "Elegir la señal visual más clara" }
      ],
      output: "A2"
    },
    lenguaje: { 
      label: "PLANETA LENGUAJE-APRENDIZAJE (Comunicación y Lenguaje)", 
      target: "CLARO", 
      targetAlt: "↑→↓→", // Direccional
      targetAltNum: "1243", // Numérico por posiciones
      type: "directional", 
      prompt: "Lectura fácil, modelado, instrucciones en 3 pasos.",
      learningMessage: "Si puedes decirlo en 3 pasos y mostrar un ejemplo, puedes incluir.",
      satellites: [
        { id: "S1", name: "Consigna", fragment: "3PASOS", description: "Elegir la versión lectura fácil (3 pasos + pictos)" },
        { id: "S2", name: "Ejemplo modelado", fragment: "MODELO", description: "Detectar ejemplo que muestra (no solo dice)" },
        { id: "S3", name: "Vocabulario clave", fragment: "CLARO", description: "Subrayar palabras esenciales" }
      ],
      output: "L3"
    },
    tea: { 
      label: "PLANETA TEA (Comunicación / Flexibilidad)", 
      target: "1974", 
      type: "numeric", 
      prompt: "Anticipación, apoyos visuales, claridad situacional y transiciones.",
      learningMessage: "Anticipar y estructurar baja ansiedad y mejora la participación.",
      satellites: [
        { id: "S1", name: "Ahora–Después", fragment: "A-D", description: "Ordenar tiras «Ahora/Después» para una mini-secuencia" },
        { id: "S2", name: "Agenda Visual", fragment: "AGENDA", description: "Colocar 4 pictos en el orden correcto anticipado" },
        { id: "S3", name: "Espacios Tranquilos", fragment: "CALMA", description: "Elegir entre dos planos el que incorpora espacio de calma" }
      ],
      output: "T4"
    },
    tdah: { 
      label: "PLANETA TDAH (Cognición y Atención)", 
      target: "3014", 
      type: "numeric", 
      prompt: "Estructura visual, fragmentación, temporización.",
      learningMessage: "Pasos cortos + tiempos claros ↓ carga ejecutiva.",
      satellites: [
        { id: "S1", name: "Rutina", fragment: "RUTA", description: "Secuencia de 4 pasos con temporizador" },
        { id: "S2", name: "Distractores", fragment: "FOCO", description: "Identificar 2 distractores y 1 apoyo" },
        { id: "S3", name: "Micro-metas", fragment: "3GO", description: "Dividir una tarea en 3 micro-objetivos" }
      ],
      output: "D5"
    },
    motora: { 
      label: "PLANETA MOTORA (Participación y Entorno)", 
      target: "6854", 
      type: "numeric", 
      prompt: "Rutas accesibles, alturas y alcance, eliminar barreras físicas.",
      learningMessage: "Modificar el entorno cambia el acceso.",
      satellites: [
        { id: "S1", name: "Ruta Accesible", fragment: "RAMPA", description: "Plano con obstáculos; elegir ruta con rampa" },
        { id: "S2", name: "Altura", fragment: "BAJA", description: "Elegir mesa baja/material alcanzable" },
        { id: "S3", name: "Ancho de paso", fragment: "80CM", description: "Señalar puerta ≥80 cm" }
      ],
      output: "M6"
    },
    intelectual: { 
      label: "PLANETA INTELECTUAL/DESARROLLO (Participación y Entorno)", 
      target: "5092", 
      type: "numeric", 
      prompt: "Apoyos individualizados en habilidades prácticas, sociales y conceptuales.",
      learningMessage: "No es etiqueta; es perfilar apoyos para que participe.",
      satellites: [
        { id: "S1", name: "Apoyo correcto", fragment: "APOYO", description: "Emparejar perfil ↔ apoyo (modelado/tiempo/ejemplos)" },
        { id: "S2", name: "Evaluación", fragment: "EVID", description: "Elegir 2 evidencias alternativas a la prueba escrita" },
        { id: "S3", name: "Social", fragment: "PAR", description: "Diseñar apoyo entre iguales" }
      ],
      output: "I7"
    },
    final: { 
      label: "MOTOR DE LA INCLUSIÓN (Final)", 
      target: "4321", 
      type: "numeric",
      prompt: "Combinar apoyos distintos para la misma meta estabiliza la nave.",
      learningMessage: "Combinar apoyos distintos para la misma meta estabiliza la nave.",
      motorInput: "V1A2L3T4D5M6I7", // Concatenación de salidas planetarias
      activities: [
        {
          name: "Plantillas-ventana",
          description: "Integración de resultados. Dos tarjetas con 'ventanas' que dejan ver posiciones de una cadena larga.",
          mechanics: "Superponer sobre cadena (p. ej. 1P2I2C0S3278) → extraer 4 dígitos.",
          output: "4321",
          variants: "Rota ventanas para nuevas posiciones."
        }
      ]
    },
  },
};

// ------------------------------------------------------------
// Estado de la aplicación
// ------------------------------------------------------------
let cfg = loadFromStorage("oi-space-cfg", DEFAULT_CFG);
// Aplicar códigos de estación según el grupo
if (cfg.group && GROUP_STATIONS[cfg.group]) {
  const station = GROUP_STATIONS[cfg.group];
  if (station.visualCode && cfg.boxes.visual) {
    cfg.boxes.visual.target = station.visualCode;
  }
}
let state = loadFromStorage("oi-space-state", {
  inputs: { visual: "", auditiva: "", lenguaje: "", tea: "", tdah: "", motora: "", intelectual: "" },
  open: { visual: false, auditiva: false, lenguaje: false, tea: false, tdah: false, motora: false, intelectual: false, final: false },
  log: ["SISTEMA INICIADO — use 'help' para ver comandos."],
  stats: {
    startTime: null,
    attempts: { total: 0, success: 0 },
    commands: 0,
    codesCalculated: 0,
    orbitsOpened: 0,
    firstCodeTime: null,
    lastOrbitTime: {},
    achievements: []
  },
  // Sistema de fragmentos obtenidos
  fragments: {
    visual: { S1: false, S2: false, S3: false },
    auditiva: { S1: false, S2: false, S3: false },
    lenguaje: { S1: false, S2: false, S3: false },
    tea: { S1: false, S2: false, S3: false },
    tdah: { S1: false, S2: false, S3: false },
    motora: { S1: false, S2: false, S3: false },
    intelectual: { S1: false, S2: false, S3: false }
  },
  // Sistema de intentos por órbita para pistas adaptativas
  attempts: {
    visual: 0,
    auditiva: 0,
    lenguaje: 0,
    tea: 0,
    tdah: 0,
    motora: 0,
    intelectual: 0,
    final: 0
  }
});
// Inicializar tiempo de inicio si no existe
if (!state.stats.startTime) {
  state.stats.startTime = Date.now();
  saveToStorage("oi-space-state", state);
}
let showCfg = false;
let tab = "panel";
let timerInterval = null;
let hintsRevealed = { visual: false, auditiva: false, lenguaje: false, tea: false, tdah: false, motora: false, intelectual: false, logica: false, social: false, temporal: false };

// ------------------------------------------------------------
// Utilidades de almacenamiento
// ------------------------------------------------------------
function loadFromStorage(key, initial) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : initial;
  } catch {
    return initial;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Error guardando en localStorage:", e);
  }
}

// ------------------------------------------------------------
// Utilidades
// ------------------------------------------------------------
const norm = (s) => (s || "").trim().toUpperCase().replaceAll(" ", "");

function setInput(key, value) {
  state.inputs[key] = value;
  saveToStorage("oi-space-state", state);
  render();
  // Actualizar candados cuando cambien los inputs
  updateLocks();
}

function setOpen(key, value) {
  const wasOpen = state.open[key];
  state.open[key] = value;
  
  if (value && !wasOpen) {
    // Órbita abierta por primera vez
    state.stats.orbitsOpened++;
    state.stats.lastOrbitTime[key] = Date.now();
    
    // Obtener posición del elemento para partículas
    const cardEl = document.getElementById(`card${key.charAt(0).toUpperCase() + key.slice(1)}`);
    if (cardEl) {
      const rect = cardEl.getBoundingClientRect();
      createParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, getOrbitColor(key));
    }
    
    showToast(`✅ Órbita ${key} abierta correctamente!`, "success");
    checkAchievements();
    
    // Actualizar ventanas progresivas y candados
    updateProgressWindows();
    updateLocks();
  }
  
  saveToStorage("oi-space-state", state);
  updateStats();
  render();
}

function getOrbitColor(orb) {
  const colors = {
    visual: "rgba(59, 130, 246, 0.8)", // sky
    auditiva: "rgba(244, 63, 94, 0.8)", // rose
    logica: "rgba(16, 185, 129, 0.8)", // emerald
    social: "rgba(139, 92, 246, 0.8)" // violet
  };
  return colors[orb] || colors.visual;
}

function appendLog(line, isCommand = false) {
  state.log.push(line);
  if (isCommand) {
    state.stats.commands++;
  }
  saveToStorage("oi-space-state", state);
  if (isCommand) {
    updateStats();
  }
  render();
  scrollConsole();
}

function scrollConsole() {
  const consoleOutput = document.getElementById("consoleOutput");
  if (consoleOutput) {
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  }
}

// ------------------------------------------------------------
// Cálculos de códigos por caja
// ------------------------------------------------------------
function calcVisual() {
  const t = norm(state.inputs.visual);
  if (!t) return null;
  // Para PLANETA VISUAL: combinar fragmentos ALTO + FORMA = ALTOFORMA
  // O convertir a numérico: ALTO → A=1, L=12, T=20, O=15 → 1220
  if (t.includes("ALTO") && t.includes("FORMA")) {
    return "ALTOFORMA";
  }
  // Conversión numérica alternativa
  const toNum = (ch) => (/[A-Z]/.test(ch) ? ch.charCodeAt(0) - 64 : ch);
  return t.split("").map(toNum).join("");
}

function calcAuditiva() {
  const t = norm(state.inputs.auditiva);
  if (!t) return null;
  // Regla: de PICTOS toma 1,2,3,5,6 -> PICOS
  const arr = t.split("");
  const transformed = arr.map((ch, i) => (i === 3 && !/[0-9]/.test(ch) ? "" : ch)).filter((_, i) => [0,1,2,4,5].includes(i)).join("");
  return transformed;
}

function calcLenguaje() {
  const t = norm(state.inputs.lenguaje);
  if (!t) return null;
  // Para PLANETA LENGUAJE: buscar fragmento CLARO o convertir a direccional
  // C-L-A-R-O → ↑→↓→ (o numérico 1243)
  if (t.includes("CLARO")) {
    return "CLARO";
  }
  // Si es numérico, devolver tal cual
  if (/^\d+$/.test(t)) {
    return t;
  }
  return t;
}

function calcTEA() {
  const t = norm(state.inputs.tea);
  if (!t) return null;
  // Para PLANETA TEA: calcular código numérico desde fragmentos
  // A-D → A=1, D=4 → 14; AGENDA → suma; CALMA → suma
  // Código sugerido: 1974
  // Si el input contiene fragmentos, calcular según la lógica
  if (t.includes("A-D") || t.includes("AD")) {
    // A=1, D=4 → 14
    return "1974"; // Por defecto el código completo
  }
  // Si ya es numérico, devolverlo
  if (/^\d+$/.test(t)) {
    return t;
  }
  // Si contiene palabras clave, calcular
  if (t.includes("AGENDA") || t.includes("CALMA")) {
    return "1974";
  }
  return t;
}

function calcTDAH() {
  const t = norm(state.inputs.tdah);
  if (!t) return null;
  // Para PLANETA TDAH: sumar tiempos 3-0-1-4 → 3014
  // Si el input contiene fragmentos RUTA, FOCO, 3GO, calcular
  if (t.includes("RUTA") || t.includes("FOCO") || t.includes("3GO")) {
    return "3014"; // Por defecto el código completo
  }
  // Si ya es numérico, devolverlo
  if (/^\d+$/.test(t)) {
    return t;
  }
  return t;
}

function calcMotora() {
  const t = norm(state.inputs.motora);
  if (!t) return null;
  // Para PLANETA MOTORA: transformación RAMPA/BAJA/80CM → código numérico
  // Código sugerido: 6854
  if (t.includes("RAMPA") || t.includes("BAJA") || t.includes("80CM")) {
    return "6854"; // Por defecto el código completo
  }
  // Si ya es numérico, devolverlo
  if (/^\d+$/.test(t)) {
    return t;
  }
  return t;
}

function calcIntelectual() {
  const t = norm(state.inputs.intelectual);
  if (!t) return null;
  // Para PLANETA INTELECTUAL: matriz de apoyos → código numérico
  // Código sugerido: 5092
  if (t.includes("APOYO") || t.includes("EVID") || t.includes("PAR")) {
    return "5092"; // Por defecto el código completo
  }
  // Si ya es numérico, devolverlo
  if (/^\d+$/.test(t)) {
    return t;
  }
  return t;
}


// ------------------------------------------------------------
// Sistema de validación parcial de fragmentos
// ------------------------------------------------------------

/**
 * Valida un fragmento obtenido de un satélite
 * @param {string} orbit - Nombre de la órbita (visual, auditiva, etc.)
 * @param {string} satelliteId - ID del satélite (S1, S2, S3)
 * @param {string} fragment - Fragmento obtenido
 * @returns {boolean} - true si el fragmento es válido
 */
function validateFragment(orbit, satelliteId, fragment) {
  if (!cfg.boxes[orbit] || !cfg.boxes[orbit].satellites) return false;
  
  const satellite = cfg.boxes[orbit].satellites.find(s => s.id === satelliteId);
  if (!satellite) return false;
  
  const normalizedFragment = norm(fragment);
  const normalizedTarget = norm(satellite.fragment);
  
  return normalizedFragment === normalizedTarget;
}

/**
 * Marca un fragmento como obtenido
 * @param {string} orbit - Nombre de la órbita
 * @param {string} satelliteId - ID del satélite
 * @param {string} fragment - Fragmento obtenido
 */
function setFragmentObtained(orbit, satelliteId, fragment) {
  if (!state.fragments[orbit]) {
    state.fragments[orbit] = { S1: false, S2: false, S3: false };
  }
  
  if (validateFragment(orbit, satelliteId, fragment)) {
    state.fragments[orbit][satelliteId] = true;
    saveToStorage("oi-space-state", state);
    
    // Mostrar retroalimentación
    showFragmentFeedback(orbit, satelliteId, fragment);
    
    // Actualizar UI
    updateFragmentUI(orbit);
    
    // Verificar si todos los fragmentos están obtenidos
    if (allFragmentsObtained(orbit)) {
      const code = calculateCodeFromFragments(orbit);
      if (code) {
        showFragmentComplete(orbit, code);
        // Auto-calcular código en el input
        setInput(orbit, code);
      }
    }
    
    return true;
  }
  
  return false;
}

/**
 * Verifica si todos los fragmentos de una órbita están obtenidos
 */
function allFragmentsObtained(orbit) {
  if (!state.fragments[orbit]) return false;
  return state.fragments[orbit].S1 && state.fragments[orbit].S2 && state.fragments[orbit].S3;
}

/**
 * Calcula el código a partir de los fragmentos obtenidos
 */
function calculateCodeFromFragments(orbit) {
  if (!cfg.boxes[orbit] || !cfg.boxes[orbit].satellites) return null;
  
  const fragments = cfg.boxes[orbit].satellites
    .filter(s => state.fragments[orbit] && state.fragments[orbit][s.id])
    .map(s => s.fragment);
  
  if (fragments.length !== 3) return null;
  
  // Lógica específica por órbita
  switch(orbit) {
    case 'visual':
      // ALTO + FORMA = ALTOFORMA (o numérico 1220)
      if (fragments.includes('ALTO') && fragments.includes('FORMA')) {
        return 'ALTOFORMA';
      }
      break;
    case 'auditiva':
      // El fragmento PICOS ya es el código
      if (fragments.includes('PICOS')) {
        return 'PICOS';
      }
      break;
    case 'lenguaje':
      // El fragmento CLARO es el código
      if (fragments.includes('CLARO')) {
        return 'CLARO';
      }
      break;
    case 'tea':
      // A-D + AGENDA + CALMA → 1974
      return '1974';
    case 'tdah':
      // RUTA + FOCO + 3GO → 3014
      return '3014';
    case 'motora':
      // RAMPA + BAJA + 80CM → 6854
      return '6854';
    case 'intelectual':
      // APOYO + EVID + PAR → 5092
      return '5092';
  }
  
  return null;
}

/**
 * Muestra retroalimentación cuando se obtiene un fragmento
 */
function showFragmentFeedback(orbit, satelliteId, fragment) {
  const satellite = cfg.boxes[orbit]?.satellites?.find(s => s.id === satelliteId);
  if (!satellite) return;
  
  const orbitConfig = cfg.boxes[orbit];
  const orbitColors = {
    visual: 'sky',
    auditiva: 'rose',
    lenguaje: 'emerald',
    tea: 'violet',
    tdah: 'yellow',
    motora: 'orange',
    intelectual: 'slate'
  };
  
  const color = orbitColors[orbit] || 'sky';
  
  // Toast de éxito
  showToast(`✅ Fragmento obtenido: ${satellite.name} → "${fragment}"`, "success");
  
  // Mensaje de aprendizaje contextual
  const learningMessages = {
    visual: {
      S1: "El contraste visual afecta a 1 de cada 12 hombres (daltonismo).",
      S2: "La forma es más inclusiva que el color para distinguir elementos.",
      S3: "El interletraje amplio mejora la legibilidad para todos."
    },
    auditiva: {
      S1: "El código morse puede ser un apoyo visual para la comunicación.",
      S2: "Reducir el ruido ambiental mejora la atención de todos los alumnos.",
      S3: "Las señales visuales complementan la información auditiva."
    },
    lenguaje: {
      S1: "Las instrucciones en 3 pasos son más fáciles de seguir.",
      S2: "Mostrar un ejemplo es más efectivo que solo explicarlo.",
      S3: "El vocabulario clave debe destacarse visualmente."
    },
    tea: {
      S1: "Anticipar lo que viene reduce la ansiedad.",
      S2: "Las agendas visuales ayudan a la organización temporal.",
      S3: "Los espacios tranquilos son esenciales para la regulación."
    },
    tdah: {
      S1: "Las rutinas estructuradas reducen la carga ejecutiva.",
      S2: "Identificar distractores ayuda a crear entornos más enfocados.",
      S3: "Las micro-metas facilitan la finalización de tareas."
    },
    motora: {
      S1: "Las rampas eliminan barreras físicas.",
      S2: "Los materiales a altura alcanzable permiten la autonomía.",
      S3: "El ancho mínimo de paso es esencial para la accesibilidad."
    },
    intelectual: {
      S1: "Los apoyos deben ser individualizados según el perfil.",
      S2: "La evaluación puede ser flexible y mostrar diferentes evidencias.",
      S3: "El apoyo entre iguales es una estrategia poderosa."
    }
  };
  
  const learningMsg = learningMessages[orbit]?.[satelliteId];
  if (learningMsg) {
    setTimeout(() => {
      showToast(`💡 ${learningMsg}`, "info");
    }, 2000);
  }
  
  // Actualizar UI del satélite
  updateSatelliteUI(orbit, satelliteId, true);
}

/**
 * Muestra mensaje cuando se completan todos los fragmentos
 */
function showFragmentComplete(orbit, code) {
  const orbitConfig = cfg.boxes[orbit];
  const orbitName = orbitConfig?.label || orbit;
  
  showToast(`🎉 ¡Todos los fragmentos obtenidos! Código calculado: ${code}`, "success");
  
  setTimeout(() => {
    showToast(`💡 ${orbitConfig?.learningMessage || '¡Bien hecho!'}`, "info");
  }, 2000);
}

/**
 * Actualiza la UI de un satélite específico
 */
function updateSatelliteUI(orbit, satelliteId, obtained) {
  const satelliteEl = document.getElementById(`satellite${orbit}${satelliteId}`);
  if (!satelliteEl) return;
  
  if (obtained) {
    satelliteEl.classList.add('fragment-obtained');
    satelliteEl.classList.remove('fragment-pending');
  } else {
    satelliteEl.classList.add('fragment-pending');
    satelliteEl.classList.remove('fragment-obtained');
  }
}

/**
 * Actualiza la UI de fragmentos de una órbita
 */
function updateFragmentUI(orbit) {
  const fragmentCount = state.fragments[orbit] ? 
    Object.values(state.fragments[orbit]).filter(f => f).length : 0;
  
  const fragmentIndicator = document.getElementById(`fragmentIndicator${orbit.charAt(0).toUpperCase() + orbit.slice(1)}`);
  if (fragmentIndicator) {
    fragmentIndicator.textContent = `Fragmentos: ${fragmentCount}/3`;
  }
  
  // Actualizar candado parcialmente
  updateLockPartial(orbit);
}

/**
 * Actualiza el candado parcialmente según fragmentos obtenidos
 */
function updateLockPartial(orbit) {
  if (!state.fragments[orbit]) return;
  
  const fragments = state.fragments[orbit];
  const fragmentCount = Object.values(fragments).filter(f => f).length;
  
  // Iluminar ruedas según fragmentos obtenidos
  const lockConfig = {
    visual: { wheels: 9, type: 'word' },
    auditiva: { wheels: 5, type: 'alnum' },
    lenguaje: { wheels: 4, type: 'directional' },
    tea: { wheels: 4, type: 'numeric' },
    tdah: { wheels: 4, type: 'numeric' },
    motora: { wheels: 4, type: 'numeric' },
    intelectual: { wheels: 4, type: 'numeric' }
  };
  
  const config = lockConfig[orbit];
  if (!config) return;
  
  // Iluminar progresivamente las ruedas según fragmentos
  const progress = fragmentCount / 3;
  const wheelsToLight = Math.floor(progress * config.wheels);
  
  const planetName = orbit.charAt(0).toUpperCase() + orbit.slice(1);
  for (let i = 1; i <= config.wheels; i++) {
    const wheelEl = document.getElementById(`lock${planetName}${i}`);
    if (wheelEl) {
      if (i <= wheelsToLight) {
        wheelEl.classList.add('fragment-obtained');
      } else {
        wheelEl.classList.remove('fragment-obtained');
      }
    }
  }
}

// ------------------------------------------------------------
// Sistema de pistas adaptativas
// ------------------------------------------------------------

/**
 * Obtiene una pista según el número de intentos
 */
function getAdaptiveHint(orbit) {
  const attempts = state.attempts[orbit] || 0;
  const hints = getHintsForOrbit(orbit);
  
  const hintIndex = Math.min(attempts, hints.length - 1);
  return hints[hintIndex];
}

/**
 * Obtiene las pistas específicas para una órbita
 */
function getHintsForOrbit(orbit) {
  const orbitConfig = cfg.boxes[orbit];
  if (!orbitConfig) return [];
  
  const hints = {
    visual: [
      null, // Intento 1: sin pista
      "Revisa los fragmentos obtenidos en los satélites S1, S2 y S3.",
      "Combina los fragmentos: ALTO + FORMA = ALTOFORMA",
      "El código es ALTOFORMA (palabra) o 1220 (numérico). Verifica que tengas todos los fragmentos.",
      "S1: ALTO, S2: FORMA → Código: ALTOFORMA"
    ],
    auditiva: [
      null,
      "Revisa la regla de decodificación: posiciones 1, 2, 3, 5, 6.",
      "De 'PICTOS' elimina la posición 4 si no es número.",
      "El código es PICOS. Verifica que hayas decodificado correctamente el morse.",
      "PICTOS → elimina posición 4 → PICOS"
    ],
    lenguaje: [
      null,
      "Busca el fragmento CLARO en los satélites.",
      "El código puede ser CLARO (palabra) o ↑→↓→ (direccional).",
      "El código es CLARO o su equivalente direccional ↑→↓→",
      "S3 contiene el fragmento CLARO que es el código"
    ],
    tea: [
      null,
      "Suma las posiciones de las letras de los fragmentos obtenidos.",
      "A-D = 1-4, AGENDA y CALMA tienen posiciones específicas.",
      "El código es 1974. Verifica que tengas los 3 fragmentos.",
      "A-D(1-4) + AGENDA + CALMA → 1974"
    ],
    tdah: [
      null,
      "Suma los tiempos o posiciones de los fragmentos.",
      "RUTA + FOCO + 3GO → 3014",
      "El código es 3014. Verifica los fragmentos: RUTA, FOCO, 3GO.",
      "RUTA(18+21+20+1=60) + FOCO + 3GO → 3014"
    ],
    motora: [
      null,
      "Convierte los fragmentos a posiciones numéricas.",
      "RAMPA + BAJA + 80CM → 6854",
      "El código es 6854. Verifica que tengas los 3 fragmentos.",
      "RAMPA + BAJA + 80CM → 6854"
    ],
    final: [
      null,
      "Combina los códigos de todas las órbitas abiertas.",
      "El código final se calcula de las salidas de los 7 planetas: V1A2L3T4D5M6I7",
      "Usa las plantillas-ventana para extraer el código de la cadena combinada.",
      "Código final: 4321 (extraído de posiciones específicas de la cadena)"
    ]
  };
  
  return hints[orbit] || [];
}

/**
 * Incrementa el contador de intentos para una órbita
 */
function incrementAttempts(orbit) {
  if (!state.attempts[orbit]) {
    state.attempts[orbit] = 0;
  }
  state.attempts[orbit]++;
  saveToStorage("oi-space-state", state);
}

// ------------------------------------------------------------
// Validación inteligente de códigos
// ------------------------------------------------------------

/**
 * Valida un código de forma inteligente y proporciona feedback específico
 */
function validateCodeIntelligent(orbit, code) {
  const orbitConfig = cfg.boxes[orbit];
  if (!orbitConfig) {
    return { success: false, message: "Órbita no encontrada", hint: null };
  }
  
  const normalizedCode = norm(code);
  const normalizedTarget = norm(orbitConfig.target);
  
  // Verificar código principal
  if (normalizedCode === normalizedTarget) {
    return { success: true, message: "¡Código correcto!" };
  }
  
  // Verificar alternativas
  if (orbitConfig.targetAlt && norm(orbitConfig.targetAlt) === normalizedCode) {
    return { success: true, message: "¡Código correcto!" };
  }
  
  if (orbitConfig.targetAltNum && norm(orbitConfig.targetAltNum) === normalizedCode) {
    return { success: true, message: "¡Código correcto!" };
  }
  
  // Para candado final, verificar código especial
  if (orbit === 'final') {
    // El código final es 4321
    if (normalizedCode === '4321') {
      return { success: true, message: "¡Código correcto!" };
    }
  }
  
  // Análisis de diferencia
  const diff = calculateCodeDifference(normalizedCode, normalizedTarget, orbitConfig);
  
  // Incrementar intentos
  incrementAttempts(orbit);
  
  // Obtener pista adaptativa
  const hint = getAdaptiveHint(orbit);
  
  if (diff.length === 1) {
    return {
      success: false,
      message: `Casi, revisa el fragmento en la posición ${diff[0]}`,
      hint: hint || "Te falta un solo fragmento o carácter"
    };
  }
  
  if (diff.length <= normalizedTarget.length / 2) {
    const correctParts = getCorrectParts(normalizedCode, normalizedTarget);
    return {
      success: false,
      message: "Algunos fragmentos están correctos",
      hint: hint || `Los fragmentos ${correctParts.join(', ')} están bien. Revisa los demás.`
    };
  }
  
  // Verificar si está completamente desordenado
  if (isReordered(normalizedCode, normalizedTarget)) {
    return {
      success: false,
      message: "Los fragmentos están desordenados",
      hint: hint || "Revisa el orden de los fragmentos obtenidos"
    };
  }
  
  return {
    success: false,
    message: "Código incorrecto",
    hint: hint || "Revisa los fragmentos obtenidos en los satélites"
  };
}

/**
 * Calcula la diferencia entre dos códigos
 */
function calculateCodeDifference(code, target, orbitConfig) {
  const differences = [];
  const maxLen = Math.max(code.length, target.length);
  
  for (let i = 0; i < maxLen; i++) {
    if (code[i] !== target[i]) {
      differences.push(i + 1);
    }
  }
  
  return differences;
}

/**
 * Obtiene las partes correctas de un código
 */
function getCorrectParts(code, target) {
  const correctParts = [];
  const minLen = Math.min(code.length, target.length);
  
  for (let i = 0; i < minLen; i++) {
    if (code[i] === target[i]) {
      correctParts.push(`posición ${i + 1}`);
    }
  }
  
  return correctParts;
}

/**
 * Verifica si el código está desordenado pero contiene los mismos caracteres
 */
function isReordered(code, target) {
  const codeSorted = code.split('').sort().join('');
  const targetSorted = target.split('').sort().join('');
  return codeSorted === targetSorted && code !== target;
}

// Verificación común con soporte para múltiples tipos de candados
function verify(box, value) {
  if (!cfg.boxes[box]) return false;
  
  const boxConfig = cfg.boxes[box];
  const normalizedValue = norm(value);
  
  // Verificar código principal
  if (norm(boxConfig.target) === normalizedValue) {
    return true;
  }
  
  // Verificar alternativas
  if (boxConfig.targetAlt && norm(boxConfig.targetAlt) === normalizedValue) {
    return true;
  }
  
  if (boxConfig.targetAltNum && norm(boxConfig.targetAltNum) === normalizedValue) {
    return true;
  }
  
  // Para candados direccionales, normalizar flechas
  if (boxConfig.type === "directional") {
    const directionalMap = {
      "↑": "up", "→": "right", "↓": "down", "←": "left",
      "UP": "up", "RIGHT": "right", "DOWN": "down", "LEFT": "left"
    };
    const normalizedDir = normalizedValue.split("").map(d => directionalMap[d] || d).join("");
    const targetDir = norm(boxConfig.targetAlt || "").split("").map(d => directionalMap[d] || d).join("");
    if (normalizedDir === targetDir) return true;
  }
  
  return false;
}

// ------------------------------------------------------------
// Sistema de notificaciones toast
// ------------------------------------------------------------
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  
  const toast = document.createElement("div");
  const colors = {
    success: "bg-emerald-600 border-emerald-500",
    error: "bg-rose-600 border-rose-500",
    info: "bg-sky-600 border-sky-500",
    achievement: "bg-amber-600 border-amber-500"
  };
  toast.className = `${colors[type] || colors.info} border rounded-lg p-4 shadow-lg animate-slide-in text-white text-sm max-w-sm`;
  toast.textContent = message;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add("animate-slide-out");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ------------------------------------------------------------
// Sistema de partículas
// ------------------------------------------------------------
function createParticles(x, y, color = "rgba(59, 130, 246, 0.8)") {
  const canvas = document.getElementById("particlesCanvas");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  const DPR = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * DPR;
  canvas.height = window.innerHeight * DPR;
  ctx.scale(DPR, DPR);
  
  const particles = Array.from({ length: 20 }, () => ({
    x, y,
    vx: (Math.random() - 0.5) * 10,
    vy: (Math.random() - 0.5) * 10,
    life: 1,
    decay: 0.02 + Math.random() * 0.02
  }));
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width / DPR, canvas.height / DPR);
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      p.vy += 0.2; // gravedad
      
      if (p.life > 0) {
        ctx.globalAlpha = p.life;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
      } else {
        particles.splice(i, 1);
      }
    });
    
    if (particles.length > 0) {
      requestAnimationFrame(animate);
    }
  }
  animate();
}

// ------------------------------------------------------------
// Sistema de logros
// ------------------------------------------------------------
function checkAchievements() {
  const stats = state.stats;
  const achievements = stats.achievements || [];
  
  // Primer Código
  if (!achievements.includes("first") && stats.codesCalculated > 0) {
    achievements.push("first");
    showToast("🏆 Logro desbloqueado: Primer Código", "achievement");
    updateAchievementUI("achievementFirst", true);
  }
  
  // Maestro Descifrador
  if (!achievements.includes("master") && stats.codesCalculated >= 10) {
    achievements.push("master");
    showToast("🏆 Logro desbloqueado: Maestro Descifrador", "achievement");
    updateAchievementUI("achievementMaster", true);
  }
  
  // Velocidad Luminosa
  if (!achievements.includes("speed") && stats.lastOrbitTime) {
    for (let orb in stats.lastOrbitTime) {
      const timeDiff = (stats.lastOrbitTime[orb] - stats.startTime) / 1000 / 60; // minutos
      if (timeDiff < 5) {
        achievements.push("speed");
        showToast("🏆 Logro desbloqueado: Velocidad Luminosa", "achievement");
        updateAchievementUI("achievementSpeed", true);
        break;
      }
    }
  }
  
  // Perfecto
  if (!achievements.includes("perfect") && stats.attempts.total > 0 && stats.attempts.total === stats.attempts.success) {
    achievements.push("perfect");
    showToast("🏆 Logro desbloqueado: Perfecto", "achievement");
    updateAchievementUI("achievementPerfect", true);
  }
  
  // Explorador
  if (!achievements.includes("explorer") && stats.commands >= 20) {
    achievements.push("explorer");
    showToast("🏆 Logro desbloqueado: Explorador", "achievement");
    updateAchievementUI("achievementExplorer", true);
  }
  
  // Completista
  const allOpen = state.open.visual && state.open.auditiva && state.open.lenguaje && state.open.tea && state.open.tdah && state.open.motora && state.open.intelectual;
  if (!achievements.includes("complete") && allOpen) {
    achievements.push("complete");
    showToast("🏆 Logro desbloqueado: Completista", "achievement");
    updateAchievementUI("achievementComplete", true);
  }
  
  stats.achievements = achievements;
  saveToStorage("oi-space-state", state);
}

function updateAchievementUI(id, unlocked) {
  const el = document.getElementById(id);
  if (!el) return;
  if (unlocked) {
    el.classList.remove("opacity-50");
    el.classList.add("opacity-100", "border-emerald-500", "animate-pulse");
  }
}

// ------------------------------------------------------------
// Actualización de estadísticas
// ------------------------------------------------------------
function updateStats() {
  const stats = state.stats;
  
  // Actualizar tiempo
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const elapsed = Date.now() - stats.startTime;
    const hours = Math.floor(elapsed / 3600000);
    const minutes = Math.floor((elapsed % 3600000) / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    const timerEl = document.getElementById("timerDisplay");
    if (timerEl) {
      timerEl.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  }, 1000);
  
  // Actualizar progreso
  const openCount = Object.values(state.open).filter(v => v === true).length - (state.open.final ? 1 : 0);
  const progressEl = document.getElementById("progressBar");
  const progressTextEl = document.getElementById("progressText");
  if (progressEl) progressEl.style.width = `${(openCount / 7) * 100}%`;
  if (progressTextEl) progressTextEl.textContent = `${openCount}/7 planetas estabilizados`;
  
  // Actualizar intentos
  const attemptsTotalEl = document.getElementById("attemptsTotal");
  const attemptsSuccessEl = document.getElementById("attemptsSuccess");
  const successRateEl = document.getElementById("successRate");
  if (attemptsTotalEl) attemptsTotalEl.textContent = stats.attempts.total;
  if (attemptsSuccessEl) attemptsSuccessEl.textContent = stats.attempts.success;
  if (successRateEl) {
    const rate = stats.attempts.total > 0 ? Math.round((stats.attempts.success / stats.attempts.total) * 100) : 0;
    successRateEl.textContent = `${rate}%`;
  }
  
  // Actualizar actividad
  const commandsEl = document.getElementById("commandsCount");
  const codesEl = document.getElementById("codesCalculated");
  const orbitsEl = document.getElementById("orbitsOpened");
  if (commandsEl) commandsEl.textContent = stats.commands;
  if (codesEl) codesEl.textContent = stats.codesCalculated;
  if (orbitsEl) orbitsEl.textContent = stats.orbitsOpened;
  
  // Actualizar tiempo promedio
  const avgTimeEl = document.getElementById("avgTime");
  if (avgTimeEl && stats.codesCalculated > 0 && stats.firstCodeTime) {
    const avgMs = (Date.now() - stats.firstCodeTime) / stats.codesCalculated;
    const avgMin = Math.floor(avgMs / 60000);
    const avgSec = Math.floor((avgMs % 60000) / 1000);
    avgTimeEl.textContent = `${avgMin}:${String(avgSec).padStart(2, '0')}`;
  }
  
  // Actualizar logros
  checkAchievements();
}

// ------------------------------------------------------------
// Animación de estrellas
// ------------------------------------------------------------
function initStars() {
  const c = document.getElementById("stars");
  if (!c) return;
  const ctx = c.getContext("2d");
  let w, h, stars;
  const DPR = window.devicePixelRatio || 1;
  
  const init = () => {
    w = c.clientWidth;
    h = c.clientHeight;
    c.width = w * DPR;
    c.height = h * DPR;
    ctx.scale(DPR, DPR);
    stars = Array.from({ length: Math.floor((w * h) / 3000) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.8 + 0.2
    }));
  };
  
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      const r = s.z * 1.2;
      ctx.fillStyle = `rgba(180,220,255,${0.3 + s.z * 0.7})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
      ctx.fill();
      s.y += s.z * 0.2;
      if (s.y > h) s.y = 0;
    }
    requestAnimationFrame(draw);
  };
  
  init();
  let anim = requestAnimationFrame(draw);
  window.addEventListener("resize", () => {
    cancelAnimationFrame(anim);
    init();
    anim = requestAnimationFrame(draw);
  });
}

// ------------------------------------------------------------
// Consola de comandos
// ------------------------------------------------------------
function runCommand(raw) {
  const line = raw.trim();
  if (!line) return;
  appendLog(`> ${line}`, true);
  const parts = line.split(" ");
  const cmd = parts[0]?.toLowerCase() || "";
  const arg1 = parts[1]?.toLowerCase() || "";
  const rest = parts.slice(2).join(" ");
  
  switch (cmd) {
    case "help":
      appendLog("COMANDOS DISPONIBLES:");
      appendLog("  help - Muestra esta ayuda");
      appendLog("  status - Muestra el estado de las órbitas");
      appendLog("  scan <orbita> <texto> - Registra entrada en órbita");
      appendLog("  decrypt <orbita> - Calcula código de órbita");
      appendLog("  unlock <orbita> <codigo> - Desbloquea órbita con código");
      appendLog("  fragment <orbita> <satelite> <fragmento> - Valida fragmento obtenido");
      appendLog("  set <orbita> <codigo> - Configura código objetivo");
      appendLog("  reset - Reinicia el juego");
      appendLog("");
      appendLog("ÓRBITAS: visual, auditiva, lenguaje, tea, tdah, motora, intelectual");
      appendLog("SATÉLITES: S1, S2, S3");
      appendLog("");
      appendLog("EJEMPLOS:");
      appendLog("  decrypt visual");
      appendLog("  unlock visual ALTOFORMA");
      appendLog("  fragment visual S1 ALTO");
      break;
    case "status":
      const planets = ['visual', 'auditiva', 'lenguaje', 'tea', 'tdah', 'motora', 'intelectual'];
      const statusStr = planets.map(p => `${p}:${state.open[p]?"✔":"✗"}`).join(' ');
      appendLog(`PROGRESO — ${statusStr} | Final:${state.open.final?"✔":"✗"}`);
      break;
    case "scan": {
      const orb = arg1;
      const text = rest;
      if (!orb || !text) {
        appendLog("Uso: scan <planeta> <texto>");
        appendLog("Planetas: visual | auditiva | lenguaje | tea | tdah | motora | intelectual");
        break;
      }
      setInput(orb, text);
      appendLog(`Entrada registrada en ${orb}.`);
      break;
    }
    case "decrypt": {
      const orb = arg1;
      if (!orb) {
        appendLog("Uso: decrypt <planeta>");
        appendLog("Planetas: visual | auditiva | lenguaje | tea | tdah | motora | intelectual");
        break;
      }
      let code = "";
      if (orb === "visual") code = calcVisual() || "(sin datos)";
      else if (orb === "auditiva") code = calcAuditiva() || "(sin datos)";
      else if (orb === "lenguaje") code = calcLenguaje() || "(sin datos)";
      else if (orb === "tea") code = calcTEA() || "(sin datos)";
      else if (orb === "tdah") code = calcTDAH() || "(sin datos)";
      else if (orb === "motora") code = calcMotora() || "(sin datos)";
      else if (orb === "intelectual") code = calcIntelectual() || "(sin datos)";
      else {
        appendLog("Planeta no válido.");
        break;
      }
      if (code !== "(sin datos)") {
        state.stats.codesCalculated++;
        if (!state.stats.firstCodeTime) {
          state.stats.firstCodeTime = Date.now();
        }
        saveToStorage("oi-space-state", state);
        updateStats();
      }
      appendLog(`DECRYPT ${orb} → ${code}`);
      break;
    }
    case "unlock": {
      const orb = arg1;
      const code = rest;
      if (!orb || !code) {
        appendLog("Uso: unlock <orbita> <codigo>");
        break;
      }
      state.stats.attempts.total++;
      
      // Usar validación inteligente
      const validation = validateCodeIntelligent(orb, code);
      if (validation.success) {
        state.stats.attempts.success++;
        setOpen(orb, true);
        appendLog(`✔ ${orb} abierta.`);
        const planetConfig = cfg.boxes[orb];
        if (planetConfig?.learningMessage) {
          appendLog(`💡 ${planetConfig.learningMessage}`);
        }
      } else {
        appendLog(`✗ ${validation.message}`);
        if (validation.hint) {
          appendLog(`💡 ${validation.hint}`);
        }
        showToast(validation.message, "error");
        if (validation.hint) {
          setTimeout(() => {
            showToast(`💡 ${validation.hint}`, "info");
          }, 2000);
        }
      }
      saveToStorage("oi-space-state", state);
      updateStats();
      break;
    }
    case "fragment": {
      const orb = arg1;
      const satelliteId = arg2;
      const fragment = rest;
      if (!orb || !satelliteId || !fragment) {
        appendLog("Uso: fragment <orbita> <satelite> <fragmento>");
        appendLog("Ejemplo: fragment visual S1 ALTO");
        appendLog("Satélites: S1, S2, S3");
        break;
      }
      if (setFragmentObtained(orb, satelliteId.toUpperCase(), fragment)) {
        appendLog(`✔ Fragmento ${satelliteId} de ${orb} obtenido: ${fragment}`);
      } else {
        appendLog(`✗ Fragmento incorrecto. Verifica: ${fragment}`);
        const satellite = cfg.boxes[orb]?.satellites?.find(s => s.id === satelliteId.toUpperCase());
        if (satellite) {
          appendLog(`   Fragmento esperado para ${satellite.name}: ${satellite.fragment}`);
        }
      }
      break;
    }
    case "set": {
      const orb = arg1;
      const code = rest;
      if (!orb || !code) {
        appendLog("Uso: set <orbita> <codigo>");
        break;
      }
      if (cfg.boxes[orb]) {
        cfg.boxes[orb].target = code;
        saveToStorage("oi-space-cfg", cfg);
        appendLog(`Objetivo de ${orb} actualizado a ${code}.`);
        render();
      } else {
        appendLog("Órbita no válida.");
      }
      break;
    }
    case "reset":
      localStorage.removeItem("oi-space-state");
      window.location.reload();
      break;
    default:
      appendLog("Comando no reconocido. Usa 'help'.");
  }
}

// ------------------------------------------------------------
// Renderizado del DOM
// ------------------------------------------------------------
function render() {
  // Actualizar título
  const titleEl = document.getElementById("title");
  if (titleEl) titleEl.textContent = cfg.session.title;
  
  // Actualizar inputs para todos los planetas
  const planets = ['visual', 'auditiva', 'lenguaje', 'tea', 'tdah', 'motora', 'intelectual'];
  planets.forEach(planet => {
    const inputEl = document.getElementById(`input${planet.charAt(0).toUpperCase() + planet.slice(1)}`);
    if (inputEl) inputEl.value = state.inputs[planet] || "";
  });
  
  // Actualizar labels y prompts para todos los planetas
  planets.forEach(planet => {
    const planetKey = planet;
    const planetConfig = cfg.boxes[planetKey];
    if (planetConfig) {
      const labelEl = document.getElementById(`label${planet.charAt(0).toUpperCase() + planet.slice(1)}`);
      const promptEl = document.getElementById(`prompt${planet.charAt(0).toUpperCase() + planet.slice(1)}`);
      if (labelEl) labelEl.textContent = planetConfig.label;
      if (promptEl) promptEl.textContent = planetConfig.prompt;
    }
  });
  
  const labelFinalEl = document.getElementById("labelFinal");
  if (labelFinalEl) labelFinalEl.textContent = cfg.boxes.final.label;
  
  // Actualizar estados de apertura
  planets.forEach(planet => {
    const statusEl = document.getElementById(`status${planet.charAt(0).toUpperCase() + planet.slice(1)}`);
    if (statusEl) updateStatus(planet, state.open[planet]);
  });
  
  // Actualizar verificaciones
  planets.forEach(planet => {
    const verifyEl = document.getElementById(`verify${planet.charAt(0).toUpperCase() + planet.slice(1)}`);
    const planetConfig = cfg.boxes[planet];
    if (verifyEl && planetConfig) {
      const calculated = planet === 'visual' ? calcVisual() :
                          planet === 'auditiva' ? calcAuditiva() :
                          planet === 'lenguaje' ? calcLenguaje() :
                          planet === 'tea' ? calcTEA() :
                          planet === 'tdah' ? calcTDAH() :
                          planet === 'motora' ? calcMotora() :
                          planet === 'intelectual' ? calcIntelectual() : null;
      updateVerify(planet, calculated, planetConfig.target, state.open[planet]);
    }
  });
  
  // Actualizar displays de fragmentos
  updateFragmentDisplays();
  
  // Actualizar código final
  const allOpen = state.open.visual && state.open.auditiva && state.open.lenguaje && 
                  state.open.tea && state.open.tdah && state.open.motora && state.open.intelectual;
  const finalCodeEl = document.getElementById("finalCode");
  const finalIconEl = document.getElementById("finalIcon");
  if (finalCodeEl) {
    finalCodeEl.textContent = allOpen ? cfg.boxes.final.target : "••••";
  }
  if (finalIconEl) {
    if (allOpen) {
      finalIconEl.classList.remove("text-amber-400");
      finalIconEl.classList.add("text-emerald-400");
    } else {
      finalIconEl.classList.remove("text-emerald-400");
      finalIconEl.classList.add("text-amber-400");
    }
  }
  
  // Verificar si todos los planetas están estabilizados
  if (allOpen && !state.open.final) {
    appendLog("SISTEMA: TODOS LOS PLANETAS ESTABILIZADOS (7/7). Código final disponible.");
    state.open.final = true;
    saveToStorage("oi-space-state", state);
  }
  
  // Actualizar consola
  const consoleOutput = document.getElementById("consoleOutput");
  if (consoleOutput) {
    consoleOutput.innerHTML = state.log.map(line => `<div class="text-slate-200">${line}</div>`).join("");
  }
  
  // Actualizar información del grupo
  updateGroupInfo();
  
  // Renderizar órbitas visuales planetarias
  // Usar setTimeout para asegurar que el DOM esté listo
  setTimeout(() => {
  renderOrbitsVisual();
  }, 50);
  
  // También renderizar después de actualizar tabs para asegurar que el contenido esté visible
  setTimeout(() => {
    renderOrbitsVisual();
  }, 200);
  
  // Renderizar actividades en el panel principal
  renderActivitiesInPanel();
  
  // Renderizar actividades detalladas (para el tab de Actividades)
  setTimeout(() => {
    renderActivities();
  }, 100);
  
  // Actualizar displays de fragmentos
  updateFragmentDisplays();
  
  // Actualizar ventanas progresivas y candados
  updateProgressWindows();
  updateLocks();
  
  // Actualizar tabs
  updateTabs();
}

// ------------------------------------------------------------
// Renderizar órbitas visuales planetarias - Sistema Solar Interactivo
// ------------------------------------------------------------
function renderOrbitsVisual() {
  const orbitsCanvas = document.getElementById("orbitsCanvas");
  const planetsContainer = document.getElementById("planetsContainer");
  const orbitsLegend = document.getElementById("orbitsLegend");
  
  // Si no existe el nuevo sistema, intentar con el antiguo
  if (!orbitsCanvas || !planetsContainer) {
  const orbitsGrid = document.getElementById("orbitsVisualGrid");
    if (orbitsGrid) {
      // Fallback al sistema antiguo
      renderOrbitsVisualLegacy();
    }
    return;
  }
  
  const centerX = 400;
  const centerY = 400;
  
  // Distribuir 7 planetas uniformemente alrededor del círculo
  // Cada planeta separado por 360/7 ≈ 51.43 grados
  // Empezamos desde 90 grados (arriba) y vamos en sentido horario
  const totalPlanets = 7;
  const angleStep = 360 / totalPlanets;
  
  const planets = [
    { key: 'visual', label: 'VISUAL', number: 1, radius: 120, angle: 90, color: 'rgb(59, 130, 246)', icon: '👁️' },
    { key: 'auditiva', label: 'AUDITIVA', number: 2, radius: 150, angle: 90 + angleStep * 1, color: 'rgb(139, 92, 246)', icon: '🔊' },
    { key: 'lenguaje', label: 'LENGUAJE', number: 3, radius: 180, angle: 90 + angleStep * 2, color: 'rgb(6, 182, 212)', icon: '💬' },
    { key: 'tea', label: 'TEA', number: 4, radius: 210, angle: 90 + angleStep * 3, color: 'rgb(147, 51, 234)', icon: '🧩' },
    { key: 'tdah', label: 'TDAH', number: 5, radius: 240, angle: 90 + angleStep * 4, color: 'rgb(34, 211, 238)', icon: '⚡' },
    { key: 'motora', label: 'MOTORA', number: 6, radius: 270, angle: 90 + angleStep * 5, color: 'rgb(96, 165, 250)', icon: '🏃' },
    { key: 'intelectual', label: 'INTELECTUAL', number: 7, radius: 300, angle: 90 + angleStep * 6, color: 'rgb(168, 85, 247)', icon: '🧠' }
  ];
  
  // Limpiar SVG y contenedor
  const existingPaths = orbitsCanvas.querySelectorAll('.orbit-path');
  existingPaths.forEach(path => path.remove());
  planetsContainer.innerHTML = '';
  
  // Dibujar órbitas circulares en el SVG
  planets.forEach((planet, index) => {
    const isActive = state.open[planet.key] || false;
    
    // Crear círculo de órbita en SVG
    const orbitPath = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    orbitPath.setAttribute('cx', centerX.toString());
    orbitPath.setAttribute('cy', centerY.toString());
    orbitPath.setAttribute('r', planet.radius.toString());
    orbitPath.setAttribute('class', `orbit-path ${isActive ? 'active' : ''}`);
    orbitPath.setAttribute('stroke', planet.color);
    orbitPath.setAttribute('fill', 'none');
    orbitPath.setAttribute('stroke-width', isActive ? '4' : '3');
    orbitPath.setAttribute('opacity', isActive ? '1' : '0.7');
    orbitPath.setAttribute('id', `orbit-${planet.key}`);
    orbitPath.style.cursor = 'pointer';
    orbitPath.style.visibility = 'visible';
    orbitPath.style.display = 'block';
    orbitsCanvas.appendChild(orbitPath);
    
    // Calcular posición del planeta en la órbita
    const angleRad = (planet.angle * Math.PI) / 180;
    // Usar coordenadas exactas del SVG viewBox (0-800)
    const planetX = centerX + planet.radius * Math.cos(angleRad);
    const planetY = centerY + planet.radius * Math.sin(angleRad);
    
    // Calcular posición relativa al contenedor usando porcentajes del viewBox
    // El SVG y el contenedor tienen el mismo tamaño y están superpuestos
    const relativeX = (planetX / 800) * 100;
    const relativeY = (planetY / 800) * 100;
    
    // Crear elemento del planeta
    const planetEl = document.createElement('div');
    planetEl.className = `planet-orbit ${isActive ? 'active' : 'locked'}`;
    planetEl.setAttribute('data-planet', planet.key);
    planetEl.setAttribute('role', 'button');
    planetEl.setAttribute('tabindex', '0');
    planetEl.setAttribute('aria-label', `Planeta ${planet.label} - ${isActive ? 'Estabilizado' : 'Bloqueado'}`);
    planetEl.style.color = planet.color;
    planetEl.style.left = `${relativeX}%`;
    planetEl.style.top = `${relativeY}%`;
    planetEl.style.transform = 'translate(-50%, -50%)';
    planetEl.style.position = 'absolute';
    planetEl.style.zIndex = '10';
    planetEl.style.margin = '0';
    planetEl.style.padding = '0';
    
    planetEl.innerHTML = `
      <div class="planet-icon" style="border-color: ${planet.color};">
        <span style="font-size: 1.5rem;">${planet.icon}</span>
      </div>
      <div class="planet-number" style="color: ${planet.color}; border-color: ${planet.color};">
        ${planet.number}
      </div>
      <div class="planet-label" style="color: ${planet.color};">
        ${planet.label}
      </div>
    `;
    
    // Event listeners
    planetEl.addEventListener('click', () => {
      const cardEl = document.getElementById(`card${planet.key.charAt(0).toUpperCase() + planet.key.slice(1)}`);
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        cardEl.style.transition = 'box-shadow 0.3s ease';
        const rgbaColor = planet.color.replace('rgb', 'rgba').replace(')', ', 0.5)');
        cardEl.style.boxShadow = `0 0 20px ${rgbaColor}`;
        setTimeout(() => {
          cardEl.style.boxShadow = '';
        }, 1000);
      }
    });
    
    planetEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        planetEl.click();
      }
    });
    
    planetsContainer.appendChild(planetEl);
  });
  
  // Renderizar leyenda
  if (orbitsLegend) {
    orbitsLegend.innerHTML = planets.map(planet => {
      const isActive = state.open[planet.key] || false;
      return `
        <div class="legend-item ${isActive ? 'active' : ''}" style="border-left-color: ${planet.color}; color: ${planet.color};" data-planet="${planet.key}">
          <div class="legend-icon" style="border-color: ${planet.color};">
            <span>${planet.icon}</span>
          </div>
          <div class="legend-info">
            <div class="legend-name">${planet.label}</div>
            <div class="legend-status ${isActive ? 'active' : 'locked'}">
              ${isActive ? '✅ Estabilizado' : '🔒 Bloqueado'}
            </div>
          </div>
        </div>
      `;
    }).join('');
    
    // Event listeners para leyenda
    orbitsLegend.querySelectorAll('.legend-item').forEach(item => {
      item.addEventListener('click', () => {
        const planetKey = item.getAttribute('data-planet');
        const cardEl = document.getElementById(`card${planetKey.charAt(0).toUpperCase() + planetKey.slice(1)}`);
        if (cardEl) {
          cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });
  }
  
  // Animar planetas que orbitan (solo si están activos)
  // Primero, cancelar todas las animaciones anteriores para evitar duplicados
  Object.keys(planetAnimations).forEach(key => {
    if (planetAnimations[key]) {
      cancelAnimationFrame(planetAnimations[key]);
      delete planetAnimations[key];
    }
  });
  
  planets.forEach(planet => {
    if (state.open[planet.key]) {
      animatePlanetOrbit(planet.key, planet.radius, planet.angle);
    }
  });
}

// Función para animar la órbita de un planeta
const planetAnimations = {}; // Almacenar referencias de animaciones activas para evitar múltiples animaciones

function animatePlanetOrbit(planetKey, radius, startAngle) {
  // Evitar múltiples animaciones del mismo planeta
  if (planetAnimations[planetKey]) {
    return; // Ya hay una animación activa
  }
  
  const planetEl = document.querySelector(`.planet-orbit[data-planet="${planetKey}"]`);
  if (!planetEl) return;
  
  const centerX = 400;
  const centerY = 400;
  let angle = startAngle;
  const speed = 0.3; // grados por frame (más lento para efecto suave)
  let animationId = null;
  
  function animate() {
    // Verificar que el planeta sigue activo
    if (!state.open[planetKey]) {
      if (animationId) cancelAnimationFrame(animationId);
      delete planetAnimations[planetKey];
      return;
    }
    
    angle += speed;
    if (angle >= 360) angle -= 360;
    
    const angleRad = (angle * Math.PI) / 180;
    const planetX = centerX + radius * Math.cos(angleRad);
    const planetY = centerY + radius * Math.sin(angleRad);
    
    // Mantener el transform translate(-50%, -50%) para centrar el planeta
    const relativeX = (planetX / 800) * 100;
    const relativeY = (planetY / 800) * 100;
    
    planetEl.style.left = `${relativeX}%`;
    planetEl.style.top = `${relativeY}%`;
    planetEl.style.transform = 'translate(-50%, -50%)';
    
    animationId = requestAnimationFrame(animate);
    planetAnimations[planetKey] = animationId;
  }
  
  animate();
}

// Función legacy para compatibilidad
function renderOrbitsVisualLegacy() {
  const orbitsGrid = document.getElementById("orbitsVisualGrid");
  if (!orbitsGrid) return;
  
  const planets = [
    { key: 'visual', label: 'VISUAL', number: 1, icon: '👁️' },
    { key: 'auditiva', label: 'AUDITIVA', number: 2, icon: '🔊' },
    { key: 'lenguaje', label: 'LENGUAJE', number: 3, icon: '💬' },
    { key: 'tea', label: 'TEA', number: 4, icon: '🧩' },
    { key: 'tdah', label: 'TDAH', number: 5, icon: '⚡' },
    { key: 'motora', label: 'MOTORA', number: 6, icon: '🏃' },
    { key: 'intelectual', label: 'INTELECTUAL', number: 7, icon: '🧠' }
  ];
  
  orbitsGrid.innerHTML = planets.map(planet => {
    const isActive = state.open[planet.key] || false;
    const activeClass = isActive ? 'active' : '';
    
    return `
      <div class="orbit-visual-item ${activeClass}" data-planet="${planet.key}" role="button" aria-label="Estado del ${planet.label}" tabindex="0">
        <div class="orbit-icon-container">
          <span style="font-size: 2rem;">${planet.icon}</span>
          <div class="orbit-number-visual">${planet.number}</div>
        </div>
        <div class="orbit-label-visual">${planet.label}</div>
      </div>
    `;
  }).join('');
  
  planets.forEach(planet => {
    const orbitEl = orbitsGrid.querySelector(`[data-planet="${planet.key}"]`);
    if (orbitEl) {
      orbitEl.addEventListener('click', () => {
        const cardEl = document.getElementById(`card${planet.key.charAt(0).toUpperCase() + planet.key.slice(1)}`);
        if (cardEl) {
          cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }
  });
}

// ------------------------------------------------------------
// Actualizar información del grupo
// ------------------------------------------------------------
function updateGroupInfo() {
  const groupNumberEl = document.getElementById("groupNumber");
  const groupNumberHeaderEl = document.getElementById("groupNumberHeader");
  const stationsContainer = document.getElementById("stationsContainer");
  const stationVisualEl = document.getElementById("stationVisual");
  
  if (cfg.group && GROUP_STATIONS[cfg.group]) {
    const station = GROUP_STATIONS[cfg.group];
    
    const groupText = `Grupo ${cfg.group}`;
    if (groupNumberEl) groupNumberEl.textContent = groupText;
    if (groupNumberHeaderEl) groupNumberHeaderEl.textContent = groupText;
    
    // Renderizar estaciones físicas en el contenedor principal
    if (stationsContainer) {
      const planets = [
        { key: 'visual', label: 'Planeta Visual', color: 'rgb(59 130 246)', icon: '🔵' },
        { key: 'auditiva', label: 'Planeta Auditiva', color: 'rgb(244 63 94)', icon: '🔴' },
        { key: 'lenguaje', label: 'Planeta Lenguaje', color: 'rgb(16 185 129)', icon: '🟢' },
        { key: 'tea', label: 'Planeta TEA', color: 'rgb(139 92 246)', icon: '🟣' },
        { key: 'tdah', label: 'Planeta TDAH', color: 'rgb(234 179 8)', icon: '🟡' },
        { key: 'motora', label: 'Planeta Motora', color: 'rgb(251 146 60)', icon: '🟠' },
        { key: 'intelectual', label: 'Planeta Intelectual', color: 'rgb(148 163 184)', icon: '⚪' }
      ];
      
      stationsContainer.innerHTML = planets.map(planet => {
        // Mapear planetas a estaciones físicas según el grupo
        let stationKey = null;
        if (planet.key === 'visual' && station.visual) stationKey = station.visual;
        else if (planet.key === 'auditiva' && station.auditiva) stationKey = station.auditiva;
        else if (planet.key === 'lenguaje' && station.logica) stationKey = station.logica; // Mapear lógica a lenguaje
        else if (planet.key === 'tea' && station.social) stationKey = station.social; // Mapear social a TEA
        else if (planet.key === 'tdah' && station.temporal) stationKey = station.temporal; // Mapear temporal a TDAH
        // Para motora e intelectual, usar estaciones asignadas o default
        else if (planet.key === 'motora' && station.visual) stationKey = station.visual;
        else if (planet.key === 'intelectual' && station.auditiva) stationKey = station.auditiva;
        
        const stationInfo = stationKey ? SPACE_STATIONS[stationKey] : null;
        if (!stationInfo) return '';
        
        return `
          <div class="station-card" style="border-color: ${planet.color};">
            <div class="station-header">
              <span class="station-icon">${stationInfo.icon}</span>
              <div>
                <div class="station-name">${stationInfo.name}</div>
                <div class="station-coords">${stationInfo.coords} • ${planet.label} ${planet.icon}</div>
              </div>
            </div>
            <div class="station-item">
              <div class="station-item-title">📍 Ubicación Física:</div>
              <div class="station-item-description">Busca la mesa con el emblema ${stationInfo.icon} en el aula</div>
            </div>
            <div class="station-item">
              <div class="station-item-title">📦 Elementos a Buscar:</div>
              <div class="station-item-description">
                <ul style="margin: 0; padding-left: 20px; color: rgb(203 213 225);">
                  ${stationInfo.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
              </div>
            </div>
            <div class="station-item">
              <div class="station-item-title">💡 Propósito:</div>
              <div class="station-item-description">${stationInfo.description}</div>
            </div>
          </div>
        `;
      }).join('');
    }
    
    // Actualizar información en las tarjetas de órbitas
    if (stationVisualEl && station.visual) {
      const stationInfo = SPACE_STATIONS[station.visual];
      stationVisualEl.innerHTML = `
        <div class="font-semibold mb-1">🪐 ${stationInfo.name}</div>
        <div class="text-xs text-slate-400">Coordenadas: <span class="font-mono text-sky-400">${stationInfo.coords}</span></div>
        <div class="text-xs text-slate-400 mt-1">📍 Busca la mesa con el emblema ${stationInfo.icon} en el aula</div>
      `;
    }
    
    // Actualizar códigos si están configurados
    if (station.visualCode && cfg.boxes.visual) {
      cfg.boxes.visual.target = station.visualCode;
    }
  } else {
    if (groupNumberEl) groupNumberEl.textContent = "Sin asignar";
    if (groupNumberHeaderEl) groupNumberHeaderEl.textContent = "Sin asignar";
    if (stationsContainer) {
      stationsContainer.innerHTML = `
        <div class="station-card">
          <div class="station-item">
            <div class="station-item-title">ℹ️ Sin grupo asignado</div>
            <div class="station-item-description">Selecciona un grupo para ver tus estaciones físicas asignadas</div>
          </div>
        </div>
      `;
    }
    if (stationVisualEl) stationVisualEl.textContent = "Consulta tu asignación de estación";
  }
}

// ------------------------------------------------------------
// Renderizar actividades en el panel principal
// ------------------------------------------------------------
/**
 * Actualiza los displays de fragmentos en los satélites
 */
function updateFragmentDisplays() {
  const planets = ['visual', 'auditiva', 'lenguaje', 'tea', 'tdah', 'motora', 'intelectual'];
  
  planets.forEach(orbit => {
    const planetConfig = cfg.boxes[orbit];
    if (!planetConfig || !planetConfig.satellites) return;
    
    const satellitesContainer = document.getElementById(`satellites${orbit.charAt(0).toUpperCase() + orbit.slice(1)}`);
    if (!satellitesContainer) return;
    
    satellitesContainer.innerHTML = planetConfig.satellites.map((satellite, idx) => {
      const fragmentObtained = state.fragments[orbit] && state.fragments[orbit][satellite.id];
      
      // Usar la nueva paleta de colores espaciales
      const planetColors = {
        visual: { border: 'rgba(59, 130, 246, 0.5)', bg: 'rgba(59, 130, 246, 0.15)', text: 'rgb(147, 197, 253)', fragment: 'rgb(96, 165, 250)' },
        auditiva: { border: 'rgba(139, 92, 246, 0.5)', bg: 'rgba(139, 92, 246, 0.15)', text: 'rgb(196, 181, 253)', fragment: 'rgb(168, 85, 247)' },
        lenguaje: { border: 'rgba(6, 182, 212, 0.5)', bg: 'rgba(6, 182, 212, 0.15)', text: 'rgb(165, 243, 252)', fragment: 'rgb(34, 211, 238)' },
        tea: { border: 'rgba(147, 51, 234, 0.5)', bg: 'rgba(147, 51, 234, 0.15)', text: 'rgb(196, 181, 253)', fragment: 'rgb(168, 85, 247)' },
        tdah: { border: 'rgba(34, 211, 238, 0.5)', bg: 'rgba(34, 211, 238, 0.15)', text: 'rgb(165, 243, 252)', fragment: 'rgb(34, 211, 238)' },
        motora: { border: 'rgba(96, 165, 250, 0.5)', bg: 'rgba(96, 165, 250, 0.15)', text: 'rgb(147, 197, 253)', fragment: 'rgb(96, 165, 250)' },
        intelectual: { border: 'rgba(168, 85, 247, 0.5)', bg: 'rgba(168, 85, 247, 0.15)', text: 'rgb(196, 181, 253)', fragment: 'rgb(168, 85, 247)' }
      };
      
      const colors = planetColors[orbit] || planetColors.visual;
      
      return `
        <div id="satellite${orbit}${satellite.id}" 
             class="p-3 rounded-lg border transition-all duration-300 ${fragmentObtained ? 'fragment-obtained border-opacity-100' : 'fragment-pending border-opacity-50 opacity-70'}" 
             style="border-color: ${colors.border}; background: ${colors.bg};">
          <div class="font-semibold flex items-center gap-2 mb-1" style="color: ${colors.text};">
            ${satellite.id}: ${satellite.name}
            ${fragmentObtained ? '<span class="text-emerald-400" style="filter: drop-shadow(0 0 5px rgb(34, 197, 94));">✓</span>' : '<span class="opacity-50">○</span>'}
        </div>
          <div class="text-sm mb-2 opacity-90" style="color: ${colors.text};">
            ${satellite.description}
        </div>
          <div class="text-xs font-mono font-bold ${fragmentObtained ? 'text-emerald-300' : 'opacity-60'}" style="${fragmentObtained ? 'text-shadow: 0 0 8px rgb(34, 197, 94);' : ''}">
            Fragmento: <span style="color: ${fragmentObtained ? colors.fragment : 'rgb(100, 116, 139)'};">${fragmentObtained ? satellite.fragment : '???'}</span>
      </div>
        </div>
      `;
    }).join('');
  });
  
  // Actualizar indicadores de fragmentos
  planets.forEach(orbit => {
    updateFragmentUI(orbit);
  });
}

function getOrbitBorderColor(orb) {
  const colors = {
    visual: 'border-sky-500',
    auditiva: 'border-rose-500',
    logica: 'border-emerald-500',
    social: 'border-violet-500',
    temporal: 'border-yellow-500'
  };
  return colors[orb] || 'border-slate-500';
}

function updateStatus(orb, isOpen) {
  const statusEl = document.getElementById(`status${orb.charAt(0).toUpperCase() + orb.slice(1)}`);
  if (!statusEl) return;
  
  if (isOpen) {
    statusEl.innerHTML = '<svg class="w-4 h-4 text-emerald-400 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> <span class="text-emerald-300">ABIERTO</span>';
  } else {
    statusEl.innerHTML = '<svg class="w-4 h-4 text-slate-400 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg> <span class="text-slate-300">CERRADO</span>';
  }
}

function updateVerify(orb, current, target, isOpen) {
  const verifyEl = document.getElementById(`verify${orb.charAt(0).toUpperCase() + orb.slice(1)}`);
  if (!verifyEl) return;
  
  if (isOpen) {
    const planetConfig = cfg.boxes[orb];
    const learningMsg = planetConfig?.learningMessage || '';
    verifyEl.innerHTML = `<div class="mt-3 text-emerald-300 text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Planeta estabilizado.${learningMsg ? '<br><div class="mt-2 text-xs text-emerald-200">💡 ' + learningMsg + '</div>' : ''}</div>`;
    return;
  }
  
  if (!current) {
    verifyEl.innerHTML = "";
    return;
  }
  
  // Usar validación inteligente
  const validation = validateCodeIntelligent(orb, current);
  
  const borderClass = validation.success ? "border-emerald-600/40 bg-emerald-900/20" : "border-slate-700 bg-slate-900/60";
  const checkIcon = validation.success 
    ? '<svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'
    : '<svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>';
  
  verifyEl.innerHTML = `
    <div class="mt-3 p-3 rounded-lg border text-sm ${borderClass}">
      <div class="flex items-center gap-2">
        ${checkIcon}
        <span class="text-slate-200">Código calculado: <span class="font-mono">${current}</span> ${validation.success ? "— coincide" : "— " + validation.message}</span>
      </div>
      ${validation.hint && !validation.success ? `<div class="mt-2 text-xs text-amber-200">💡 ${validation.hint}</div>` : ''}
      <div class="mt-2">
        <button onclick="handleOpen('${orb}')" ${!validation.success ? 'disabled' : ''} class="px-3 py-1.5 text-sm bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded disabled:opacity-50 disabled:cursor-not-allowed">
          ${validation.success ? "Marcar planeta como estabilizado" : "Introduce el código correcto"}
        </button>
      </div>
    </div>
  `;
}

function updateTabs() {
  const panelContent = document.getElementById("panelContent");
  const statsContent = document.getElementById("statsContent");
  const logrosContent = document.getElementById("logrosContent");
  const pistasContent = document.getElementById("pistasContent");
  const actividadesContent = document.getElementById("actividadesContent");
  const tabPanel = document.getElementById("tabPanel");
  const tabStats = document.getElementById("tabStats");
  const tabLogros = document.getElementById("tabLogros");
  const tabPistas = document.getElementById("tabPistas");
  const tabActividades = document.getElementById("tabActividades");
  
  // Ocultar todos los contenidos
  [panelContent, statsContent, logrosContent, pistasContent, actividadesContent].forEach(el => {
    if (el) {
      el.classList.add("hidden");
    }
  });
  
  // Desactivar todos los tabs
  [tabPanel, tabStats, tabLogros, tabPistas, tabActividades].forEach(el => {
    if (el) {
      el.classList.remove("active");
    }
  });
  
  // Mostrar contenido y activar tab según corresponda
  if (tab === "panel" && panelContent) {
    panelContent.classList.remove("hidden");
    if (tabPanel) tabPanel.classList.add("active");
    updateProgressWindows();
    updateLocks();
    // Renderizar órbitas cuando se muestra el panel
    setTimeout(() => {
      renderOrbitsVisual();
    }, 100);
  } else if (tab === "stats" && statsContent) {
    statsContent.classList.remove("hidden");
    if (tabStats) tabStats.classList.add("active");
    updateStats();
  } else if (tab === "logros" && logrosContent) {
    logrosContent.classList.remove("hidden");
    if (tabLogros) tabLogros.classList.add("active");
    updateAchievementsUI();
  } else if (tab === "pistas" && pistasContent) {
    pistasContent.classList.remove("hidden");
    if (tabPistas) tabPistas.classList.add("active");
  } else if (tab === "actividades" && actividadesContent) {
    actividadesContent.classList.remove("hidden");
    if (tabActividades) tabActividades.classList.add("active");
    // Renderizar actividades siempre que se cambie a este tab
    renderActivities();
  }
}

// ------------------------------------------------------------
// Sistema de Ventanas Progresivas
// ------------------------------------------------------------
function updateProgressWindows() {
  const levels = [
    { id: 1, orb: 'visual', color: 'sky', label: 'Planeta Visual' },
    { id: 2, orb: 'auditiva', color: 'rose', label: 'Planeta Auditiva' },
    { id: 3, orb: 'lenguaje', color: 'emerald', label: 'Planeta Lenguaje' },
    { id: 4, orb: 'tea', color: 'purple', label: 'Planeta TEA' },
    { id: 5, orb: 'tdah', color: 'yellow', label: 'Planeta TDAH' },
    { id: 6, orb: 'motora', color: 'orange', label: 'Planeta Motora' },
    { id: 7, orb: 'intelectual', color: 'indigo', label: 'Planeta Intelectual' },
    { id: 8, orb: 'final', color: 'amber', label: 'Motor Final' }
  ];
  
  levels.forEach(level => {
    const levelEl = document.getElementById(`level${level.id}`);
    const statusTextEl = document.getElementById(`statusLevel${level.id}Text`);
    const progressBarEl = document.getElementById(`progressBarLevel${level.id}`);
    const progressTextEl = document.getElementById(`progressLevel${level.id}`);
    
    if (level.id === 8) {
      // Nivel final - requiere los 7 planetas
      const allOpen = state.open.visual && state.open.auditiva && state.open.lenguaje && 
                      state.open.tea && state.open.tdah && state.open.motora && state.open.intelectual;
      const openCount = Object.values(state.open).filter((v, k) => k !== 'final' && v === true).length;
      
      if (levelEl) {
        if (allOpen) {
          levelEl.classList.remove('locked');
          levelEl.classList.add('unlocked');
        } else {
          levelEl.classList.add('locked');
          levelEl.classList.remove('unlocked');
        }
      }
      
      if (statusTextEl) {
        statusTextEl.textContent = allOpen ? '✅ DESBLOQUEADO' : '🔒 BLOQUEADO';
        statusTextEl.className = allOpen ? 'text-xs px-2 py-1 rounded bg-emerald-900/50 text-emerald-300' : 'text-xs px-2 py-1 rounded bg-amber-900/50 text-amber-300';
      }
      
      if (progressBarEl) progressBarEl.style.width = `${(openCount / 7) * 100}%`;
      if (progressTextEl) progressTextEl.textContent = `${openCount}/7 planetas estabilizados`;
    } else {
      // Niveles de planetas
      const isOpen = state.open[level.orb];
      
      if (levelEl) {
        if (isOpen) {
          levelEl.classList.remove('locked');
          levelEl.classList.add('unlocked');
        } else {
          levelEl.classList.add('locked');
          levelEl.classList.remove('unlocked');
        }
      }
      
      if (statusTextEl) {
        statusTextEl.textContent = isOpen ? '✅ ESTABILIZADO' : '🔒 CERRADO';
        statusTextEl.className = isOpen ? 'text-xs px-2 py-1 rounded bg-emerald-900/50 text-emerald-300' : 'text-xs px-2 py-1 rounded text-slate-400';
      }
      
      if (progressBarEl) progressBarEl.style.width = isOpen ? '100%' : '0%';
      if (progressTextEl) progressTextEl.textContent = isOpen ? '1/1 completado' : '0/1 completado';
    }
  });
}

// ------------------------------------------------------------
// Sistema de Candados
// ------------------------------------------------------------
function updateLocks() {
  const locks = [
    { orb: 'visual', wheels: 9, type: 'word' },
    { orb: 'auditiva', wheels: 5, type: 'alnum' },
    { orb: 'lenguaje', wheels: 4, type: 'directional' },
    { orb: 'tea', wheels: 4, type: 'numeric' },
    { orb: 'tdah', wheels: 4, type: 'numeric' },
    { orb: 'motora', wheels: 4, type: 'numeric' },
    { orb: 'intelectual', wheels: 4, type: 'numeric' },
    { orb: 'final', wheels: 4, type: 'numeric' }
  ];
  
  locks.forEach(lock => {
    const calculated = lock.orb === 'visual' ? calcVisual() :
                        lock.orb === 'auditiva' ? calcAuditiva() :
                        lock.orb === 'lenguaje' ? calcLenguaje() :
                        lock.orb === 'tea' ? calcTEA() :
                        lock.orb === 'tdah' ? calcTDAH() :
                        lock.orb === 'motora' ? calcMotora() :
                        lock.orb === 'intelectual' ? calcIntelectual() : null;
    
    // Leer código de las ruedas del candado
    let wheelCode = '';
    const planetWheelIdMap = {
      'visual': 'Visual',
      'auditiva': 'Auditiva',
      'lenguaje': 'Lenguaje',
      'tea': 'TEA',
      'tdah': 'TDAH',
      'motora': 'Motora',
      'intelectual': 'Intelectual',
      'final': 'Final'
    };
    
    const planetName = planetWheelIdMap[lock.orb] || lock.orb.charAt(0).toUpperCase() + lock.orb.slice(1);
    const wheelCount = lock.wheels;
    
    for (let i = 1; i <= wheelCount; i++) {
      const wheelId = `lock${planetName}${i}`;
      const wheelEl = document.getElementById(wheelId);
      if (wheelEl) wheelCode += wheelEl.textContent.trim();
    }
    
    // Usar código de las ruedas si está completo, sino usar cálculo
    const current = wheelCode && wheelCode.length === wheelCount ? wheelCode : calculated;
    
    const target = cfg.boxes[lock.orb]?.target;
    const isOpen = state.open[lock.orb];
    
    // Mapear nombres de planetas a IDs de botones
    const btnIdMap = {
      'visual': 'unlockVisualBtn',
      'auditiva': 'unlockAuditivaBtn',
      'lenguaje': 'unlockLenguajeBtn',
      'tea': 'unlockTEABtn',
      'tdah': 'unlockTDAHBtn',
      'motora': 'unlockMotoraBtn',
      'intelectual': 'unlockIntelectualBtn',
      'final': 'unlockFinalBtn'
    };
    
    const statusIdMap = {
      'visual': 'lockVisualStatus',
      'auditiva': 'lockAuditivaStatus',
      'lenguaje': 'lockLenguajeStatus',
      'tea': 'lockTEAStatus',
      'tdah': 'lockTDAHStatus',
      'motora': 'lockMotoraStatus',
      'intelectual': 'lockIntelectualStatus',
      'final': 'lockFinalStatus'
    };
    
    const btnId = btnIdMap[lock.orb];
    const statusId = statusIdMap[lock.orb];
    
    const btn = document.getElementById(btnId);
    const statusEl = document.getElementById(statusId);
    
    // Verificar código usando verify() que maneja alternativas
    // Para candados direccionales, normalizar las flechas
    let ok = false;
    if (lock.orb === 'lenguaje' && wheelCode) {
      const dirMap = { '↑': 'up', '→': 'right', '↓': 'down', '←': 'left' };
      const normalizedDir = wheelCode.split('').map(d => dirMap[d] || d).join('');
      const targetDir = cfg.boxes[lock.orb]?.targetAlt ? cfg.boxes[lock.orb].targetAlt.split('').map(d => dirMap[d] || d).join('') : '';
      ok = normalizedDir === targetDir || verify(lock.orb, current);
    } else {
      ok = current && verify(lock.orb, current);
    }
    
    if (btn) {
      if (isOpen) {
        btn.disabled = true;
        btn.textContent = '✅ ESTABILIZADO';
        btn.className = btn.className.replace(/bg-\w+-600/, 'bg-emerald-600').replace(/hover:bg-\w+-700/, 'hover:bg-emerald-700');
      } else if (ok) {
        btn.disabled = false;
        btn.textContent = lock.orb === 'final' ? 'DESBLOQUEAR SISTEMA' : 'ABRIR';
      } else {
        btn.disabled = true;
        btn.textContent = lock.orb === 'final' ? 'BLOQUEADO' : 'ABRIR';
      }
    }
    
    if (statusEl) {
      if (isOpen) {
        statusEl.textContent = '✅ Planeta estabilizado';
        statusEl.className = 'lock-status success';
      } else if (calculated) {
        statusEl.textContent = ok ? '✓ Código correcto - Listo para abrir' : `✗ Código: ${calculated}`;
        statusEl.className = ok ? 'lock-status success' : 'lock-status error';
      } else {
        statusEl.textContent = '';
        statusEl.className = 'lock-status';
      }
    }
  });
}

// Inicializar candados interactivos
function initLocks() {
  const lockWheels = document.querySelectorAll('.lock-wheel');
  lockWheels.forEach(wheel => {
    wheel.addEventListener('click', function() {
      const currentText = this.textContent.trim();
      
      // Si es candado direccional
      if (this.classList.contains('lock-wheel-directional')) {
        const directions = ['↑', '→', '↓', '←'];
        const currentIndex = directions.indexOf(currentText);
        const nextIndex = (currentIndex + 1) % directions.length;
        this.textContent = directions[nextIndex];
      }
      // Si es candado de palabra (letras)
      else if (this.classList.contains('lock-wheel-word')) {
        const charCode = currentText.charCodeAt(0);
        let next;
        if (charCode >= 65 && charCode < 90) {
          next = String.fromCharCode(charCode + 1);
        } else if (charCode === 90) {
          next = 'A';
        } else {
          next = 'A';
        }
        this.textContent = next;
      }
      // Si es candado alfanumérico
      else if (this.classList.contains('lock-wheel-alnum')) {
        const charCode = currentText.charCodeAt(0);
        let next;
        if (charCode >= 65 && charCode < 90) {
          next = String.fromCharCode(charCode + 1);
        } else if (charCode === 90) {
          next = '0';
        } else if (charCode >= 48 && charCode < 57) {
          next = String.fromCharCode(charCode + 1);
        } else if (charCode === 57) {
          next = 'A';
        } else {
          next = 'A';
        }
        this.textContent = next;
      }
      // Si es numérico estándar
      else {
        const currentNum = parseInt(currentText) || 0;
        const next = (currentNum + 1) % 10;
        this.textContent = String(next);
      }
      
      updateLocks();
    });
    
    wheel.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
  
  // Event listeners para botones de desbloqueo - todos los planetas
  const planets = [
    { key: 'visual', btnId: 'unlockVisualBtn' },
    { key: 'auditiva', btnId: 'unlockAuditivaBtn' },
    { key: 'lenguaje', btnId: 'unlockLenguajeBtn' },
    { key: 'tea', btnId: 'unlockTEABtn' },
    { key: 'tdah', btnId: 'unlockTDAHBtn' },
    { key: 'motora', btnId: 'unlockMotoraBtn' },
    { key: 'intelectual', btnId: 'unlockIntelectualBtn' },
    { key: 'final', btnId: 'unlockFinalBtn' }
  ];
  
  planets.forEach(planet => {
    const btn = document.getElementById(planet.btnId);
    if (btn) {
      btn.addEventListener('click', () => {
        handleLockUnlock(planet.key);
      });
    }
  });
}

function handleLockUnlock(orb) {
  let current;
  let target;
  
  if (orb === 'final') {
    // Verificar que todos los 7 planetas estén abiertos
    const allOpen = state.open.visual && state.open.auditiva && state.open.lenguaje && 
                    state.open.tea && state.open.tdah && state.open.motora && state.open.intelectual;
    if (!allOpen) {
      showToast('❌ Necesitas abrir todos los 7 planetas primero', 'error');
      return;
    }
    // Leer código de las ruedas del candado final
    const wheels = [];
    for (let i = 1; i <= 4; i++) {
      const wheelEl = document.getElementById(`lockFinal${i}`);
      if (wheelEl) wheels.push(wheelEl.textContent.trim());
    }
    current = wheels.join('');
    target = cfg.boxes.final.target;
    
    // Validación inteligente para candado final
    const validation = validateCodeIntelligent('final', current);
    if (validation.success) {
      setOpen('final', true);
      showToast('🎉 ¡Misión completada! Caja Motor desbloqueada.', 'success');
      updateProgressWindows();
      updateLocks();
      state.stats.attempts.success++;
  } else {
      incrementAttempts('final');
      showToast(validation.message, 'error');
      if (validation.hint) {
        setTimeout(() => {
          showToast(`💡 ${validation.hint}`, 'info');
        }, 2000);
      }
    }
    state.stats.attempts.total++;
    saveToStorage("oi-space-state", state);
    updateStats();
    render();
    return;
  }
    // Leer código de las ruedas del candado según el tipo
    const wheels = [];
    let wheelCount = 4;
    
    // Mapeo de nombres de planetas a IDs de ruedas
    const planetWheelIdMap = {
      'visual': 'Visual',
      'auditiva': 'Auditiva',
      'lenguaje': 'Lenguaje',
      'tea': 'TEA',
      'tdah': 'TDAH',
      'motora': 'Motora',
      'intelectual': 'Intelectual'
    };
    
    if (orb === 'visual') wheelCount = 9; // ALTOFORMA
    else if (orb === 'auditiva') wheelCount = 5; // PICOS
    else if (orb === 'lenguaje') wheelCount = 4; // Direccional
    else if (orb === 'tea' || orb === 'tdah' || orb === 'motora' || orb === 'intelectual') wheelCount = 4;
    
    const planetName = planetWheelIdMap[orb] || orb.charAt(0).toUpperCase() + orb.slice(1);
    
    for (let i = 1; i <= wheelCount; i++) {
      const wheelId = `lock${planetName}${i}`;
      const wheelEl = document.getElementById(wheelId);
      if (wheelEl) wheels.push(wheelEl.textContent.trim());
    }
    const wheelCode = wheels.join('');
    
    // Usar código de las ruedas si está completo, sino usar cálculo
    const calculated = orb === 'visual' ? calcVisual() :
                        orb === 'auditiva' ? calcAuditiva() :
                        orb === 'lenguaje' ? calcLenguaje() :
                        orb === 'tea' ? calcTEA() :
                        orb === 'tdah' ? calcTDAH() :
                        orb === 'motora' ? calcMotora() :
                        orb === 'intelectual' ? calcIntelectual() : null;
    
    // Para candados direccionales, normalizar las flechas
    if (orb === 'lenguaje' && wheelCode) {
      const dirMap = { '↑': 'up', '→': 'right', '↓': 'down', '←': 'left' };
      const normalizedDir = wheelCode.split('').map(d => dirMap[d] || d).join('');
      const targetDir = cfg.boxes[orb]?.targetAlt ? cfg.boxes[orb].targetAlt.split('').map(d => dirMap[d] || d).join('') : '';
      if (normalizedDir === targetDir) {
        current = cfg.boxes[orb].targetAlt;
        target = cfg.boxes[orb].targetAlt;
      } else {
        current = wheelCode;
        target = cfg.boxes[orb]?.target;
      }
    } else {
      current = wheelCode && wheelCode.length === wheelCount ? wheelCode : calculated;
      target = cfg.boxes[orb]?.target;
      
      // Verificar alternativas
      if (current && cfg.boxes[orb]) {
        if (cfg.boxes[orb].targetAlt && norm(current) === norm(cfg.boxes[orb].targetAlt)) {
          target = cfg.boxes[orb].targetAlt;
        } else if (cfg.boxes[orb].targetAltNum && norm(current) === norm(cfg.boxes[orb].targetAltNum)) {
          target = cfg.boxes[orb].targetAltNum;
      }
    }
  }
  
  // Usar validación inteligente
  const validation = validateCodeIntelligent(orb, current || "");
  
  if (validation.success) {
    setOpen(orb, true);
    const planetName = cfg.boxes[orb]?.label || orb;
    const learningMsg = cfg.boxes[orb]?.learningMessage || '';
    showToast(`✅ ${planetName} desbloqueado!`, 'success');
    
    // Mostrar mensaje de aprendizaje si existe
    if (learningMsg && orb !== 'final') {
      setTimeout(() => {
        showToast(`💡 ${learningMsg}`, 'info');
      }, 2000);
    }
    
    updateLocks();
    updateProgressWindows();
    renderOrbitsVisual(); // Actualizar órbitas visuales cuando se desbloquea
    state.stats.attempts.success++;
  } else {
    // Mostrar feedback inteligente
    incrementAttempts(orb);
    showToast(validation.message, 'error');
    if (validation.hint) {
      setTimeout(() => {
        showToast(`💡 ${validation.hint}`, 'info');
      }, 2000);
    }
  }
  
    state.stats.attempts.total++;
    saveToStorage("oi-space-state", state);
    updateStats();
  render();
}

// ------------------------------------------------------------
// Renderizar actividades
// ------------------------------------------------------------
function renderActivities() {
  // Mapeo de órbitas a planetas
  const orbitMap = {
    'visual': 'visual',
    'auditiva': 'auditiva',
    'logica': 'lenguaje', // Logica mapea a lenguaje
    'social': 'tea', // Social mapea a TEA
    'temporal': 'tdah', // Temporal mapea a TDAH
    'final': 'final'
  };
  
  // Todos los contenedores de actividades
  const activityContainers = [
    { id: 'activitiesVisual', orbit: 'visual', planet: 'visual' },
    { id: 'activitiesAuditiva', orbit: 'auditiva', planet: 'auditiva' },
    { id: 'activitiesLogica', orbit: 'logica', planet: 'lenguaje' },
    { id: 'activitiesSocial', orbit: 'social', planet: 'tea' },
    { id: 'activitiesTemporal', orbit: 'temporal', planet: 'tdah' },
    { id: 'activitiesFinal', orbit: 'final', planet: 'final' }
  ];
  
  activityContainers.forEach(({ id, orbit, planet }) => {
    const container = document.getElementById(id);
    if (!container) return;
    
    const planetConfig = cfg.boxes[planet];
    
    // Si hay satélites, mostrarlos
    if (planetConfig && planetConfig.satellites) {
      container.innerHTML = planetConfig.satellites.map(satellite => `
        <div class="bg-slate-900/50 border border-slate-700 rounded p-4 mb-3">
          <h3 class="font-semibold text-slate-200 mb-2">${satellite.id} ${satellite.name}</h3>
          <p class="text-sm text-slate-300 mb-2">${satellite.description}</p>
          <div class="text-xs text-slate-400 mb-2">
            <div class="font-semibold text-slate-300 mb-1">Fragmento:</div>
            <div class="font-mono text-emerald-400">${satellite.fragment}</div>
          </div>
        </div>
      `).join('');
    }
    // Si hay actividades
    else if (planetConfig && planetConfig.activities) {
      container.innerHTML = planetConfig.activities.map(activity => `
        <div class="bg-slate-900/50 border border-slate-700 rounded p-4 mb-3">
          <h3 class="font-semibold text-slate-200 mb-2">${activity.name}</h3>
          <p class="text-sm text-slate-300 mb-2">${activity.description}</p>
          <div class="text-xs text-slate-400 mb-2">
            <div class="font-semibold text-slate-300 mb-1">Mecánica:</div>
            <div>${activity.mechanics}</div>
          </div>
          <div class="text-xs text-slate-400 mb-2">
            <div class="font-semibold text-slate-300 mb-1">Salida:</div>
            <div class="font-mono text-emerald-400">${activity.output}</div>
          </div>
          ${activity.variants ? `
          <div class="text-xs text-slate-400">
            <div class="font-semibold text-slate-300 mb-1">Variantes:</div>
            <div>${activity.variants}</div>
          </div>
          ` : ''}
        </div>
      `).join('');
    }
    // Si no hay configuración, mostrar información por defecto
    else {
      const defaultInfo = {
        'visual': { name: 'Órbita Visual', desc: 'Detecta barreras visuales en el entorno', examples: ['Vista de aula: alto contraste (1220)', 'Horario accesible (3146)', 'Mapa de aula (2789)'] },
        'auditiva': { name: 'Órbita Auditiva', desc: 'Atención a señales mínimas y discriminación auditiva', examples: ['Morse inclusivo (PICOS)', 'Ruido y atención (0314)', 'Lectura a dos voces (2856)'] },
        'logica': { name: 'Órbita Lógica', desc: 'Planificación y patrones lógicos', examples: ['Ruta por balizas (2378)', 'Asignación de recursos (5092)', 'Alineación orbital 2+1 (1507)'] },
        'social': { name: 'Órbita Social', desc: 'Decisiones inclusivas en casos reales', examples: ['Casos breves A/B/C (8462)', 'Comunicación con familias (5624)', 'Roles de equipo (1974)'] },
        'temporal': { name: 'Órbita Temporal', desc: 'Metacognición y autorregulación', examples: ['Planificación temporal (5151)', 'Reflexión metacognitiva (7234)', 'Gestión de tiempo (6123)'] },
        'final': { name: 'Caja Motor', desc: 'Integración de resultados de todas las órbitas', examples: ['Plantillas-ventana para extraer código final'] }
      };
      
      const info = defaultInfo[orbit] || { name: orbit, desc: 'Completa las actividades', examples: [] };
      container.innerHTML = `
        <div class="bg-slate-900/50 border border-slate-700 rounded p-4 mb-3">
          <h3 class="font-semibold text-slate-200 mb-2">${info.name}</h3>
          <p class="text-sm text-slate-300 mb-2">${info.desc}</p>
          ${info.examples.length > 0 ? `
          <div class="text-xs text-slate-400 mt-3">
            <div class="font-semibold text-slate-300 mb-1">Ejemplos de actividades:</div>
            ${info.examples.map(ex => `<div class="ml-2">• ${ex}</div>`).join('')}
          </div>
          ` : ''}
          ${planetConfig ? `
          <div class="text-xs text-slate-400 mt-3">
            <div class="font-semibold text-slate-300 mb-1">Código objetivo:</div>
            <div class="font-mono text-emerald-400">${planetConfig.target || 'No definido'}</div>
          </div>
          ` : ''}
        </div>
      `;
    }
  });
}

function updateAchievementsUI() {
  const achievements = state.stats.achievements || [];
  achievements.forEach(ach => {
    const idMap = {
      first: "achievementFirst",
      master: "achievementMaster",
      speed: "achievementSpeed",
      perfect: "achievementPerfect",
      explorer: "achievementExplorer",
      complete: "achievementComplete"
    };
    const id = idMap[ach];
    if (id) updateAchievementUI(id, true);
  });
}

function handleOpen(orb) {
  const calculated = orb === "visual" ? calcVisual() : 
                  orb === "auditiva" ? calcAuditiva() : 
                  orb === "lenguaje" ? calcLenguaje() :
                  orb === "tea" ? calcTEA() :
                  orb === "tdah" ? calcTDAH() :
                  orb === "motora" ? calcMotora() :
                  orb === "intelectual" ? calcIntelectual() : null;
  
  state.stats.attempts.total++;
  
  // Usar validación inteligente
  const validation = validateCodeIntelligent(orb, calculated || "");
  
  if (validation.success) {
    state.stats.attempts.success++;
    setOpen(orb, true);
    const planetConfig = cfg.boxes[orb];
    const planetName = planetConfig?.label || orb;
    const learningMsg = planetConfig?.learningMessage || '';
    showToast(`✅ ${planetName} estabilizado!`, "success");
    if (learningMsg) {
      setTimeout(() => {
        showToast(`💡 ${learningMsg}`, "info");
      }, 2000);
    }
    updateProgressWindows();
    updateLocks();
  } else {
    // Mostrar feedback inteligente
    showToast(validation.message, "error");
    if (validation.hint) {
      setTimeout(() => {
        showToast(`💡 ${validation.hint}`, "info");
      }, 2000);
    }
  }
  
  saveToStorage("oi-space-state", state);
  updateStats();
}

// ------------------------------------------------------------
// Modal de configuración
// ------------------------------------------------------------
function openConfig() {
  showCfg = true;
  const modal = document.getElementById("modalConfig");
  if (modal) {
    modal.classList.remove("hidden");
    
    // Cargar valores actuales
    document.getElementById("cfgCenter").value = cfg.session.center || "";
    document.getElementById("cfgDate").value = cfg.session.date || "";
    document.getElementById("cfgTargetVisual").value = cfg.boxes.visual?.target || "";
    document.getElementById("cfgTargetAuditiva").value = cfg.boxes.auditiva?.target || "";
    document.getElementById("cfgTargetLenguaje").value = cfg.boxes.lenguaje?.target || "";
    document.getElementById("cfgTargetTEA").value = cfg.boxes.tea?.target || "";
    document.getElementById("cfgTargetTDAH").value = cfg.boxes.tdah?.target || "";
    document.getElementById("cfgTargetMotora").value = cfg.boxes.motora?.target || "";
    document.getElementById("cfgTargetIntelectual").value = cfg.boxes.intelectual?.target || "";
    document.getElementById("cfgTargetFinal").value = cfg.boxes.final?.target || "";
  }
}

function closeConfig() {
  showCfg = false;
  const modal = document.getElementById("modalConfig");
  if (modal) {
    modal.classList.add("hidden");
  }
}

function saveConfig() {
  cfg.session.center = document.getElementById("cfgCenter").value;
  cfg.session.date = document.getElementById("cfgDate").value;
  cfg.boxes.visual.target = document.getElementById("cfgTargetVisual").value;
  cfg.boxes.auditiva.target = document.getElementById("cfgTargetAuditiva").value;
  cfg.boxes.lenguaje.target = document.getElementById("cfgTargetLenguaje").value;
  cfg.boxes.tea.target = document.getElementById("cfgTargetTEA").value;
  cfg.boxes.tdah.target = document.getElementById("cfgTargetTDAH").value;
  cfg.boxes.motora.target = document.getElementById("cfgTargetMotora").value;
  cfg.boxes.intelectual.target = document.getElementById("cfgTargetIntelectual").value;
  cfg.boxes.final.target = document.getElementById("cfgTargetFinal").value;
  
  saveToStorage("oi-space-cfg", cfg);
  closeConfig();
  render();
}

// ------------------------------------------------------------
// Inicialización
// ------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar estrellas
  initStars();
  
  // Event listeners para inputs - todos los planetas
  const planets = ['visual', 'auditiva', 'lenguaje', 'tea', 'tdah', 'motora', 'intelectual'];
  planets.forEach(planet => {
    const inputEl = document.getElementById(`input${planet.charAt(0).toUpperCase() + planet.slice(1)}`);
    if (inputEl) {
      inputEl.addEventListener("input", (e) => setInput(planet, e.target.value));
    }
  });
  
  // Event listeners para tabs
  const tabPanelBtn = document.getElementById("tabPanel");
  const tabStatsBtn = document.getElementById("tabStats");
  const tabLogrosBtn = document.getElementById("tabLogros");
  const tabPistasBtn = document.getElementById("tabPistas");
  const tabActividadesBtn = document.getElementById("tabActividades");
  
  if (tabPanelBtn) {
    tabPanelBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      tab = "panel";
      updateTabs();
    });
  }
  
  if (tabStatsBtn) {
    tabStatsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      tab = "stats";
      updateTabs();
    });
  }
  
  if (tabLogrosBtn) {
    tabLogrosBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      tab = "logros";
      updateTabs();
    });
  }
  
  if (tabPistasBtn) {
    tabPistasBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      tab = "pistas";
      updateTabs();
    });
  }
  
  if (tabActividadesBtn) {
    tabActividadesBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      tab = "actividades";
      updateTabs();
    });
  }
  
  // Inicializar candados
  initLocks();
  
  // Event listeners para pistas interactivas - TODOS los botones
  // Usar setTimeout para asegurar que el DOM esté completamente cargado
  setTimeout(() => {
    const hintButtons = [
      { id: 'hintVisual', textId: 'hintVisualText', planet: 'visual', color: 'text-sky-300' },
      { id: 'hintAuditiva', textId: 'hintAuditivaText', planet: 'auditiva', color: 'text-rose-300' },
      { id: 'hintLogica', textId: 'hintLogicaText', planet: null, color: 'text-emerald-300', customText: 'Sigue la ruta marcada por las balizas y suma los números encontrados. Ejemplo: Ruta por balizas → código 2378. Busca patrones lógicos en las actividades físicas.' },
      { id: 'hintSocial', textId: 'hintSocialText', planet: null, color: 'text-violet-300', customText: 'Responde las preguntas en papel siguiendo el patrón indicado. Ejemplo: Casos breves A/B/C → código 8462. Analiza decisiones inclusivas en situaciones reales.' },
      { id: 'hintTemporal', textId: 'hintTemporalText', planet: null, color: 'text-yellow-300', customText: 'Gestiona tiempo, planifica y reflexiona sobre el proceso de aprendizaje. Ejemplo: Planificación temporal → código 5151. Trabaja con metacognición y autorregulación.' }
    ];
    
    hintButtons.forEach(({ id, textId, planet, color, customText }) => {
      const buttonEl = document.getElementById(id);
      const textEl = document.getElementById(textId);
      
      if (buttonEl && textEl) {
        buttonEl.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log(`Botón ${id} clickeado`); // Debug
          
          if (customText) {
            // Para botones con texto personalizado
            textEl.textContent = customText;
            textEl.classList.remove("text-slate-400");
            textEl.classList.add(color);
            textEl.style.fontWeight = "500";
          } else if (planet) {
            // Para botones de planetas
            if (!hintsRevealed[planet]) {
          hintsRevealed[planet] = true;
            }
          const planetConfig = cfg.boxes[planet];
            
            let hintText = "";
            if (planet === 'visual') {
              hintText = planetConfig ? 
                `Ejemplo: 'ALTO CONTRASTE' → A(1)L(12)T(20)O(15) → '11202015'. Cada letra se convierte en su posición en el alfabeto. Código objetivo: ${planetConfig.target || planetConfig.targetAlt || 'ALTOFORMA'}.` :
                "Ejemplo: 'ALTO CONTRASTE' → A(1)L(12)T(20)O(15) → '11202015'. Cada letra se convierte en su posición en el alfabeto.";
            } else if (planet === 'auditiva') {
              hintText = planetConfig ?
                `Ejemplo: 'PICTOS' → elimina posición 4 si no es número → 'PICTOS' sin el 4º → 'PICOS'. Código objetivo: ${planetConfig.target || 'PICOS'}.` :
                "Ejemplo: 'PICTOS' → elimina posición 4 si no es número → 'PICTOS' sin el 4º → 'PICOS'.";
            } else {
              hintText = planetConfig?.prompt || "Completa las actividades del satélite para obtener el fragmento.";
              if (planetConfig?.target) {
                hintText += ` Código objetivo: ${planetConfig.target}${planetConfig.targetAlt ? ` o ${planetConfig.targetAlt}` : ''}.`;
              }
            }
            
            textEl.textContent = hintText;
            textEl.classList.remove("text-slate-400");
            textEl.classList.add(color);
            textEl.style.fontWeight = "500";
          }
        });
      } else {
        console.warn(`No se encontraron elementos: ${id} o ${textId}`);
      }
    });
  }, 100);
  
  // Event listeners para consola
  const consoleInput = document.getElementById("consoleInput");
  const consoleSend = document.getElementById("consoleSend");
  if (consoleInput) {
  consoleInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      runCommand(consoleInput.value);
      consoleInput.value = "";
    }
  });
  }
  if (consoleSend) {
  consoleSend.addEventListener("click", () => {
      if (consoleInput) {
    runCommand(consoleInput.value);
    consoleInput.value = "";
      }
  });
  }
  
  // Event listeners para configuración
  const btnConfig = document.getElementById("btnConfig");
  if (btnConfig) {
    btnConfig.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openConfig();
    });
  }
  
  const btnReset = document.getElementById("btnReset");
  if (btnReset) {
    btnReset.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (confirm("¿Estás seguro de que quieres reiniciar? Se perderá todo el progreso.")) {
    localStorage.removeItem("oi-space-state");
    window.location.reload();
      }
    });
  }
  
  const cfgCancel = document.getElementById("cfgCancel");
  if (cfgCancel) {
    cfgCancel.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeConfig();
    });
  }
  
  const cfgSave = document.getElementById("cfgSave");
  if (cfgSave) {
    cfgSave.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      saveConfig();
    });
  }
  
  // Cerrar modal al hacer clic fuera
  const modalConfig = document.getElementById("modalConfig");
  if (modalConfig) {
    modalConfig.addEventListener("click", (e) => {
    if (e.target.id === "modalConfig") {
      closeConfig();
    }
  });
  }
  
  // Inicializar estadísticas
  updateStats();
  updateAchievementsUI();
  
  // Render inicial
  render();
  
  // Actualizar tabs inicialmente
  updateTabs();
  
  // Asegurar que las órbitas visuales se rendericen después del render
  // Usar múltiples timeouts para asegurar que el DOM esté listo
  setTimeout(() => {
    renderOrbitsVisual();
    updateLocks();
  }, 100);
  
  setTimeout(() => {
    renderOrbitsVisual();
  }, 500);
  
  // Forzar renderizado cuando se cambia de tab
  window.addEventListener('focus', () => {
    setTimeout(() => {
      renderOrbitsVisual();
  }, 100);
  });
});

// Exponer funciones globales necesarias
window.handleOpen = handleOpen;
window.setFragmentObtained = setFragmentObtained;
window.validateFragment = validateFragment;
window.getAdaptiveHint = getAdaptiveHint;

