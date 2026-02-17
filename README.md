Amaris - Gestión de Turnos (Frontend)
Sistema de gestión de turnos para sucursales de Amaris, desarrollado con Angular 19. Esta interfaz permite a los usuarios solicitar turnos de atención de manera ágil y visualizar el estado de los mismos en tiempo real.

Características principales
Registro de Turnos: Formulario intuitivo con validaciones para el número de identificación y selección de sucursal.

Visualización en Tiempo Real: Lista dinámica de turnos que muestra el estado actual (Pendiente, Atendido o Expirado).

Validaciones de Negocio: Integración con reglas de límite de turnos (máximo 5 por día) y tiempos de expiración de 15 minutos.

Pruebas Unitarias: Suite de pruebas con Jasmine y Karma para asegurar la estabilidad del servicio y los componentes.
Tecnologías utilizadas
Framework: Angular 19.2.19

Estilos: CSS3 / Bootstrap

Pruebas: Jasmine & Karma

Comunicación: HttpClient para consumo de API REST

Configuración Local
Requisitos previos
Node.js (Versión recomendada v18 o superior)
Angular CLI instalado globalmente (npm install -g @angular/cli)

Instalación
Clona el repositorio: git clone https://github.com/esmariaca/AmarisScheduleAppointmentsUI.git
Instala las dependencias: npm install
Ejecución: ng serve
