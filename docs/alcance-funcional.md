# FlowiaCare — Documento de Alcance Funcional
Versión: 1.0 — Fecha: 2026-03-20

## 1. Objetivo del Sistema
FlowiaCare es una aplicación web orientada a profesionales de la salud mental (psicólogos/as) que buscan una presencia digital clara, simple y profesional.
El objetivo principal es ofrecer un sitio informativo que permita:
- Presentar al profesional y su enfoque terapéutico.
- Mostrar los servicios ofrecidos.
- Responder preguntas frecuentes.
- Facilitar el contacto inicial con potenciales pacientes.

## 2. Alcance del Proyecto
El sistema incluirá:
- Una landing page completa con secciones informativas.
- Un listado de servicios con descripciones.
- Una sección de preguntas frecuentes (FAQ) con interacción básica.
- Una página “Sobre mí” con información del profesional.
- Un formulario de contacto funcional (envío a backend).
- Navegación completa entre todas las páginas.
- Diseño responsive básico.
- Estética profesional y coherente con la temática de salud mental.

## 3. No-Alcance
Las siguientes funcionalidades no forman parte de la versión inicial del proyecto,
pero podrían considerarse en futuras iteraciones:
- Gestión de pacientes
- Agenda o turnos online
- Login o autenticación
- Panel administrativo
- Base de datos para almacenar contactos
- Chat en vivo
- Integraciones avanzadas con WhatsApp o redes sociales


## 4. Usuarios del Sistema
Usuario final (paciente potencial)
- Busca información sobre el profesional.
- Quiere conocer servicios, enfoque y credenciales.
- Puede enviar un mensaje de contacto.
Administrador (psicólogo/a)
- No interactúa con el sistema desde el frontend.
- Solo recibe los mensajes enviados desde el formulario (vía backend).

## 5. Pantallas del Sistema
- Landing Page (Home)
- Servicios
- FAQ
- Sobre mí
- Contacto
Además:
- Navbar (componente global)
- Footer (componente global)

## 6. Funcionalidades por Pantalla
6.1 Landing Page
Secciones:
- Hero principal con mensaje y CTA.
- Sobre el profesional (resumen).
- Servicios destacados.
- Testimonios (mock).
- CTA final para contacto.
Funcionalidades:
- Navegación a otras páginas.
- Scroll interno a secciones.

6.2 Servicios
Contenido:
- Lista de servicios ofrecidos.
- Cada servicio incluye: título, descripción breve e ícono.
Funcionalidades:
- Render dinámico con *ngFor.
- Botón “Contactar” que lleva a la página de contacto.

6.3 FAQ
Contenido:
- Lista de preguntas frecuentes.
Funcionalidades:
- Toggle de respuesta (abrir/cerrar).
- Render dinámico con *ngFor.

6.4 Sobre mí
Contenido:
- Foto profesional.
- Formación académica.
- Enfoque terapéutico.
- Certificaciones y matrícula.
Funcionalidades:
- Solo contenido estático.

6.5 Contacto
Contenido:
- Formulario con: nombre, email, mensaje.
- Validaciones HTML5 (y opcionalmente reactivas).
Funcionalidades:
- Envío de datos al backend vía POST.
- Mensaje de éxito o error.

## 7. Reglas Básicas del Sistema
- El sitio debe ser responsive (mobile-first).
- El diseño debe transmitir profesionalismo, calma y confianza.
- El formulario debe validar campos antes de enviar.
- El backend debe recibir el mensaje de contacto (cuando exista).
- No se almacena información en el frontend.
- No se requiere autenticación.

## 8. Tecnologías Previstas
- Frontend: Angular 21 (standalone components).
- Backend: .NET 8.
- Estilos: CSS / Bootstrap / Tailwind (a definir).
- Comunicación: HTTPClient con URL desde environment.ts.



