/**
 * ============================================================================
 * CENTRO SST - PSICOLOGÍA LABORAL
 * Script Principal - JavaScript
 * ============================================================================
 * 
 * Este archivo contiene toda la funcionalidad JavaScript para el sitio web
 * del Centro SST, incluyendo:
 * - Mensajes inspiradores rotativos con imágenes de fondo
 * - Sistema de contacto (WhatsApp y Email)
 * - Modo oscuro/claro con persistencia
 * - Menú hamburguesa responsive
 * - Gestión de formularios
 * 
 * Autor: GitHub Copilot
 * Fecha: Octubre 2025
 * ============================================================================
 */

// ============================================================================
// 1. MENSAJES INSPIRADORES ROTATIVOS
// ============================================================================

/**
 * Configuración de mensajes inspiradores con imágenes de fondo
 * Cada mensaje tiene un texto motivacional y una imagen relacionada
 */
const mensajes = [
  {
    texto: 'Tu bienestar es la base del éxito laboral.',
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200'
  },
  {
    texto: 'Pedir ayuda es un acto de fortaleza, no de debilidad.',
    imagen: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200'
  },
  {
    texto: 'Respira, enfoca y sigue adelante con calma.',
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200'
  },
  {
    texto: 'Cada día es una nueva oportunidad para cuidarte.',
    imagen: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1200'
  }
];

// Variables globales para el sistema de mensajes
let mensajeActual = 0;
const mensajeTexto = document.getElementById('mensajeTexto');
const mensajeFondo = document.getElementById('mensajeFondo');
const indicadores = document.querySelectorAll('[data-index]');

/**
 * Cambia el mensaje inspirador mostrado
 * @param {number|null} index - Índice específico del mensaje (opcional)
 */
function cambiarMensaje(index = null) {
  // Si se proporciona un índice específico, usarlo
  if (index !== null) {
    mensajeActual = index;
  }
  
  // Actualizar el texto del mensaje
  mensajeTexto.textContent = mensajes[mensajeActual].texto;
  
  // Cambiar la imagen de fondo con transición suave
  mensajeFondo.style.backgroundImage = `url('${mensajes[mensajeActual].imagen}')`;
  
  // Actualizar los indicadores visuales (puntos)
  indicadores.forEach((ind, i) => {
    ind.classList.toggle('bg-white', i === mensajeActual);
    ind.classList.toggle('bg-white/50', i !== mensajeActual);
  });
  
  // Avanzar al siguiente mensaje para la próxima rotación automática
  mensajeActual = (mensajeActual + 1) % mensajes.length;
}

/**
 * Inicialización del sistema de mensajes inspiradores
 */
function inicializarMensajes() {
  // Agregar eventos click a los indicadores
  indicadores.forEach((ind, i) => {
    ind.addEventListener('click', () => cambiarMensaje(i));
  });
  
  // Mostrar el primer mensaje
  cambiarMensaje(0);
  
  // Configurar rotación automática cada 6 segundos
  setInterval(() => cambiarMensaje(), 6000);
}

// ============================================================================
// 2. SISTEMA DE CONTACTO (WHATSAPP Y EMAIL)
// ============================================================================

/**
 * Genera un mensaje profesional completo para WhatsApp (usado en formularios)
 * @param {Object} datos - Datos del formulario (nombre, correo, servicio, mensaje)
 * @returns {string} - Mensaje codificado para URL de WhatsApp
 */
function generarMensajeProfesional(datos = {}) {
  const { nombre = '', correo = '', servicio = '', mensaje = '' } = datos;
  
  let mensajeWhatsApp = `¡Hola! Soy ${nombre || '[Tu nombre]'} y estoy interesado/a en los servicios de psicología laboral del Centro SST.

📋 *INFORMACIÓN DE CONTACTO:*
• Nombre: ${nombre || '[Por completar]'}
• Email: ${correo || '[Por completar]'}
• Servicio de interés: ${servicio || '[Por especificar]'}

💼 *CONSULTA ESPECÍFICA:*
${mensaje || 'Me gustaría recibir información detallada sobre sus servicios de psicología laboral y cómo pueden ayudar a mejorar el bienestar en mi empresa/situación personal.'}

🤝 *SOLICITUD:*
• Información sobre costos y modalidades de atención
• Disponibilidad de horarios
• Proceso de evaluación inicial
• Metodología de trabajo

Agradezco su atención y espero su pronta respuesta.`;

  return encodeURIComponent(mensajeWhatsApp);
}

/**
 * Genera un mensaje simple para WhatsApp (usado en botones rápidos)
 * @returns {string} - Mensaje simple codificado para URL de WhatsApp
 */
function generarMensajeSimple() {
  let mensajeWhatsApp = `¡Hola! Estoy interesado/a en los servicios de psicología laboral del Centro SST.

💼 *CONSULTA ESPECÍFICA:*
Me gustaría recibir información detallada sobre sus servicios de psicología laboral y cómo pueden ayudar a mejorar el bienestar en mi empresa/situación personal.

🤝 *SOLICITUD:*
• Información sobre costos y modalidades de atención
• Disponibilidad de horarios
• Proceso de evaluación inicial
• Metodología de trabajo

Agradezco su atención y espero su pronta respuesta.`;

  return encodeURIComponent(mensajeWhatsApp);
}

/**
 * Envía un mensaje a WhatsApp
 * @param {Object} datos - Datos del formulario (opcional)
 * @param {boolean} esFormulario - Si es verdadero, usa mensaje completo; si es falso, usa mensaje simple
 */
function enviarWhatsApp(datos = {}, esFormulario = false) {
  // Número de WhatsApp del Centro SST (solo números, sin espacios ni símbolos)
  const numeroWhatsApp = '573143084410';
  
  // Usar mensaje diferente según el origen
  const mensaje = esFormulario ? generarMensajeProfesional(datos) : generarMensajeSimple();
  
  // Construir URL de WhatsApp
  const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
  
  // Verificar que la URL no sea demasiado larga (WhatsApp tiene límites)
  if (url.length > 2000) {
    console.warn('URL de WhatsApp muy larga, se podría truncar');
  }
  
  // Abrir WhatsApp en una nueva ventana/pestaña
  window.open(url, '_blank');
}

/**
 * Envía un email usando el cliente de correo del sistema
 * @param {Object} datos - Datos del formulario con nombre, correo, servicio y mensaje
 */
function enviarEmail(datos) {
  const { nombre, correo, servicio, mensaje } = datos;
  
  // Crear asunto descriptivo
  const asunto = `Consulta Centro SST - ${servicio || 'Información General'}`;
  
  // Crear cuerpo del email con formato estructurado
  const cuerpo = `Nombre: ${nombre}
Correo: ${correo}
Servicio de interés: ${servicio}

Mensaje:
${mensaje}

---
Enviado desde el sitio web Centro SST - Psicología Laboral`;
  
  // Crear URL mailto con parámetros codificados
  const mailtoUrl = `mailto:psicologa@ejemplo.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  
  // Abrir cliente de correo
  window.location.href = mailtoUrl;
}

// ============================================================================
// 3. GESTIÓN DE EVENTOS DE CONTACTO
// ============================================================================

/**
 * Inicializa los eventos de contacto rápido (botones de WhatsApp y Email)
 */
function inicializarContactoRapido() {
  // Botón "Contactar ahora" de WhatsApp en la sección de contacto
  const whatsappContactBtn = document.getElementById('whatsappContactBtn');
  if (whatsappContactBtn) {
    whatsappContactBtn.addEventListener('click', () => {
      enviarWhatsApp({}, false); // false = mensaje simple
    });
  }

  // Botón WhatsApp en el menú de navegación
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();
      enviarWhatsApp({}, false); // false = mensaje simple
    });
  }

  // Botón de email rápido
  const emailBtn = document.getElementById('emailBtn');
  if (emailBtn) {
    emailBtn.addEventListener('click', () => {
      enviarEmail({
        nombre: '[Tu nombre]',
        correo: '[Tu correo]',
        servicio: 'Información General',
        mensaje: 'Me gustaría recibir información sobre los servicios de psicología laboral.'
      });
    });
  }
}

/**
 * Inicializa el formulario de contacto completo
 */
function inicializarFormularioContacto() {
  const contactForm = document.getElementById('contactForm');
  const estadoEnvio = document.getElementById('estadoEnvio');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Extraer datos del formulario
    const formData = new FormData(e.target);
    const datos = {
      nombre: formData.get('nombre'),
      correo: formData.get('correo'),
      servicio: formData.get('servicio'),
      mensaje: formData.get('mensaje')
    };

    // Determinar qué botón fue presionado (Email o WhatsApp)
    const metodo = e.submitter.dataset.method;
    
    if (metodo === 'whatsapp') {
      // Enviar por WhatsApp con mensaje completo
      enviarWhatsApp(datos, true); // true = mensaje completo del formulario
      estadoEnvio.innerHTML = '✅ <strong>Redirigiendo a WhatsApp...</strong><br>Se abrirá WhatsApp con tu mensaje predeterminado.';
    } else {
      // Enviar por Email
      enviarEmail(datos);
      estadoEnvio.innerHTML = '✅ <strong>Abriendo cliente de correo...</strong><br>Selecciona tu aplicación de correo preferida para enviar el mensaje.';
    }
    
    // Limpiar el formulario después del envío
    e.target.reset();
    
    // Limpiar mensaje de estado después de 5 segundos
    setTimeout(() => {
      estadoEnvio.textContent = '';
    }, 5000);
  });
}

// ============================================================================
// 4. MODO OSCURO/CLARO
// ============================================================================

/**
 * Inicializa el sistema de modo oscuro/claro
 */
function inicializarModoOscuro() {
  const darkBtn = document.getElementById('darkModeBtn');
  const html = document.documentElement;
  
  if (!darkBtn) return;
  
  /**
   * Aplica el tema especificado
   * @param {boolean} esModoOscuro - True para modo oscuro, false para modo claro
   */
  function aplicarTema(esModoOscuro) {
    if (esModoOscuro) {
      html.classList.add('dark');
      darkBtn.textContent = '☀️';
      darkBtn.setAttribute('aria-label', 'Cambiar a modo claro');
    } else {
      html.classList.remove('dark');
      darkBtn.textContent = '🌙';
      darkBtn.setAttribute('aria-label', 'Cambiar a modo oscuro');
    }
    // Guardar preferencia en localStorage
    localStorage.setItem('darkMode', esModoOscuro);
  }
  
  // Determinar tema inicial basado en preferencia guardada o del sistema
  const temaGuardado = localStorage.getItem('darkMode');
  let modoOscuroInicial;
  
  if (temaGuardado !== null) {
    // Usar preferencia guardada
    modoOscuroInicial = temaGuardado === 'true';
  } else {
    // Usar preferencia del sistema operativo
    modoOscuroInicial = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  // Aplicar tema inicial
  aplicarTema(modoOscuroInicial);
  
  // Evento del botón de modo oscuro
  darkBtn.addEventListener('click', () => {
    const esModoOscuro = html.classList.contains('dark');
    aplicarTema(!esModoOscuro);
  });
  
  // Atajo de teclado (tecla D) con prevención de conflictos
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'd' && !e.ctrlKey && !e.altKey && !e.metaKey) {
      e.preventDefault();
      darkBtn.click();
    }
  });
  
  // Escuchar cambios en las preferencias del sistema operativo
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Solo auto-cambiar si no hay preferencia guardada del usuario
    if (localStorage.getItem('darkMode') === null) {
      aplicarTema(e.matches);
    }
  });
}

// ============================================================================
// 5. MENÚ HAMBURGUESA RESPONSIVE
// ============================================================================

/**
 * Inicializa el menú hamburguesa para dispositivos móviles
 */
function inicializarMenuHamburguesa() {
  const menuBtn = document.getElementById('menuBtn');
  const navMenu = document.getElementById('navMenu');
  
  if (!menuBtn || !navMenu) return;
  
  // Toggle del menú al hacer clic en el botón hamburguesa
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevenir que el evento se propague
    navMenu.classList.toggle('hidden');
  });
  
  // Cerrar menú al hacer clic fuera de él
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      navMenu.classList.add('hidden');
    }
  });
  
  // Cerrar menú al hacer clic en cualquier enlace de navegación
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.add('hidden');
    });
  });
  
  // Gestión responsive: mostrar/ocultar menú según el tamaño de pantalla
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      // En pantallas grandes, mostrar el menú
      navMenu.classList.remove('hidden');
    } else {
      // En pantallas pequeñas, ocultar el menú por defecto
      navMenu.classList.add('hidden');
    }
  });
}

// ============================================================================
// 6. UTILIDADES GENERALES
// ============================================================================

/**
 * Actualiza el año actual en el footer
 */
function actualizarAño() {
  const currentYear = new Date().getFullYear();
  const footerYear = document.getElementById('footerYear');
  
  if (footerYear) {
    footerYear.textContent = currentYear;
  }
}

// ============================================================================
// 7. INICIALIZACIÓN PRINCIPAL
// ============================================================================

/**
 * Función principal que inicializa toda la funcionalidad cuando el DOM está listo
 */
function inicializarSitio() {
  // Verificar que el DOM esté completamente cargado
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarSitio);
    return;
  }
  
  try {
    // Inicializar todos los módulos
    console.log('🚀 Inicializando Centro SST...');
    
    inicializarMensajes();
    console.log('✅ Mensajes inspiradores inicializados');
    
    inicializarContactoRapido();
    console.log('✅ Contacto rápido inicializado');
    
    inicializarFormularioContacto();
    console.log('✅ Formulario de contacto inicializado');
    
    inicializarModoOscuro();
    console.log('✅ Modo oscuro inicializado');
    
    inicializarMenuHamburguesa();
    console.log('✅ Menú hamburguesa inicializado');
    
    actualizarAño();
    console.log('✅ Año actualizado');
    
    console.log('🎉 Centro SST inicializado correctamente');
    
  } catch (error) {
    console.error('❌ Error inicializando el sitio:', error);
  }
}

// ============================================================================
// 8. PUNTO DE ENTRADA
// ============================================================================

// Inicializar el sitio cuando el script se carga
inicializarSitio();

// ============================================================================
// FIN DEL SCRIPT
// ============================================================================