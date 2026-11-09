# WeCraft-CodeProyect

Fase 1: Validaciones Locales (Trabajo independiente)
Tu Compañero (Hardware - ESP32 en C++):

Crear SensorNivel: Escribir la clase para el HC-SR04. Su única misión hoy es lograr que el Monitor Serie imprima la distancia en centímetros de forma estable, sin saltos raros.

Crear MotorCinta: Escribir la clase para el L298N. Debe lograr encender el motor DC y probar que la función ajustarVelocidad() realmente reduzca las revoluciones usando PWM.Objetivo: Probar que los "ojos" y los "músculos" funcionan por separado antes de conectarlos a internet.

Tú (Frontend - Dashboard en Next.js):

Inicializar el repositorio: Ejecutar npx create-next-app@latest con TypeScript y Tailwind.

Crear NivelTolva.tsx: Maquetar el componente visual que mostrará el nivel de llenado.

Usar Datos Falsos (Mocking): No esperes a que el ESP32 esté listo. Inyecta el JSON de prueba que acordaron directamente en tu código para que la barra cambie de color y tamaño simulando que ya está funcionando.Objetivo: Tener la interfaz lista y reactiva para cuando lleguen los datos reales.

Fase 2: El Cerebro y la Conexión (Trabajo en paralelo)
Tu Compañero (Hardware - ESP32):

Crear ControladorCentral: Unir el sensor y el motor. Programar la lógica: Si distancia < 10cm, entonces Motor PWM baja a 100.

Crear ConexionNube: Conectar el ESP32 al Wi-Fi de la universidad o del teléfono y configurar el envío del JSON (puede ser mediante una petición HTTP POST o MQTT, dependiendo de qué backend usen).

Tú (Frontend - Next.js):

Crear la recepción de datos: Configurar una ruta de API en Next.js (ej. src/app/api/datos/route.ts) o conectar tu frontend a la base de datos en tiempo real (si deciden usar Firebase o Supabase) para escuchar lo que manda el ESP32.

Conectar la UI: Reemplazar tu JSON falso por los datos que llegan del estado global.

Fase 3: Integración (Trabajo en equipo)
Se sientan juntos con el prototipo físico y el computador.

Acercan la mano al sensor ultrasónico simulando que la tolva se llena.

Verifican que el motor DC baje su velocidad físicamente.

Verifican que tu Dashboard web actualice la barra de nivel y muestre la alerta en rojo con menos de 1 segundo de latencia
