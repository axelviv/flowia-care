# FlowiaCare — Definición Funcional de Pantallas (v1)

Este documento detalla las pantallas del sistema FlowiaCare, los datos que muestran y las acciones disponibles para el usuario. Corresponde a la versión inicial (v1) del proyecto.

---

## 🏠 1. HomePage

### Objetivo
Presentar al profesional, su enfoque y los servicios principales, guiando al usuario hacia el contacto.

### Datos que muestra
- Título principal y mensaje de bienvenida.
- Resumen del profesional.
- Servicios destacados (mock).
- Testimonios (mock).
- Botón de llamada a la acción (CTA).

### Acciones del usuario
- Navegar a otras páginas mediante el navbar.
- Hacer clic en el CTA para ir a Contacto.
- Hacer scroll hacia secciones internas.

### Reglas funcionales
- El CTA debe llevar siempre a la página de Contacto.
- Las secciones deben ser accesibles mediante scroll interno.

---

## 🧩 2. ServiciosPage

### Objetivo
Mostrar los servicios ofrecidos por el profesional de manera clara y ordenada.

### Datos que muestra
- Lista de servicios.
- Cada servicio contiene:
  - Título
  - Descripción breve
  - Ícono representativo

### Acciones del usuario
- Hacer clic en “Contactar” para ir a la página de Contacto.

### Reglas funcionales
- La lista debe renderizarse dinámicamente con `*ngFor`.
- El botón “Contactar” debe redirigir a Contacto.

---

## ❓ 3. FAQPage

### Objetivo
Responder preguntas frecuentes de manera simple y accesible.

### Datos que muestra
- Lista de preguntas frecuentes.
- Cada ítem contiene:
  - Pregunta
  - Respuesta

### Acciones del usuario
- Expandir o contraer una pregunta (toggle).

### Reglas funcionales
- El toggle debe funcionar de forma independiente por pregunta.
- La lista debe renderizarse con `*ngFor`.

---

## 👤 4. SobreMiPage

### Objetivo
Presentar la información profesional del psicólogo/a.

### Datos que muestra
- Foto profesional.
- Formación académica.
- Enfoque terapéutico.
- Certificaciones.
- Matrícula profesional.

### Acciones del usuario
- Navegar hacia otras páginas mediante el navbar.

### Reglas funcionales
- Todo el contenido es estático en v1.

---

## ✉️ 5. ContactoPage

### Objetivo
Permitir que un usuario envíe un mensaje al profesional.

### Datos que muestra
- Formulario con:
  - Nombre
  - Email
  - Mensaje

### Acciones del usuario
- Completar el formulario.
- Enviar el formulario.
- Ver mensaje de éxito o error.

### Reglas funcionales
- Validaciones HTML5 obligatorias.
- Envío mediante POST al backend.
- Mostrar feedback al usuario.

---