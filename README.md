Para el setup inicial del proyecto, despues de clonar el repositorio accedan a la terminal de VS y utilizen el siguiente comando en la carpeta raiz.
    
    "npm install" 

Dependencias utilizadas:

    "expo": "~52.0.35": Se encarga de compilacion y manejo de React Native y su ambiente movil. En caso de causar problemas de compatibilidad puede ser eyectado.
    "expo-barcode-scanner": "^13.0.1": Requiere de "expo-camera", permite lectura de diferentes codigos, incluyendo QRs.
    "expo-camera": "^16.0.16": Maneja uso de camara.
    "expo-font": "~13.0.3": Permite la carga de diferentes fuentes para texto, configure fuentes adicionales en la seccion de "plugins" en "app.json". (Guarden fuentes en la carpeta "fonts")
    "expo-router": "^4.0.17": Añade herramientas de enrutamientos basado en ubicacion de archivos, usado para cambiar de pantallas.
    "expo-splash-screen": "^0.29.22": Pantalla mostrada brevemente cuando inicias la aplicacion, detalle extra de prioridad baja.
    "expo-status-bar": "~2.0.1": Permite personalizar la "Barra de estatus" u zona del notch en dispositivos, detalle extra de prioridad baja.
    "expo-system-ui": "~4.0.8": Permite el manejo de interfaz fuera del DOM de react, util para funciones como colores de fondo.
    "react": "18.3.1": Se explica por si solo.
    "react-dom": "^18.3.1": Maneja actualizaciones de estados visuales y objetos renderizados en pantalla.
    "react-native": "0.76.7": Se explica por si solo.
    "react-native-pie-chart": "^4.0.1": Permite la renderizacion de graficos de pay personalizados.
    "react-native-qrcode-svg": "^6.3.14": Permite generar codigos QR funcionales con valores personalizados.
    "react-native-safe-area-context": "^5.2.0": Provee valores de area segura de dispositivos de forma global.
    "react-native-svg": "^15.11.1": Dependecia requerida de "react-native-pie-chart" y "react-native-pie-chart", permite la renderizacion y generacion de imagenes SVG.
    "react-native-web": "^0.19.13": Permite visualizacion de la app en navegadores web (como Google Chrome de escritorio), buena para prototipado rapido.
    "react-native-webview": "^13.13.2": Permite acceso a visualizaciones de paginas web desde la app, podria ser util en un futuro.

A partir del 15/02/2025, el proyecto es compilable y se puede hacer una build completa para Android (Prueba en iOS pendiente). 
Para hacer una build de Android utiliza el comando:

    npx expo run:android

Requiere la SDK de Android instalada y un dispositivo con depuracion USB activada conecctado.
