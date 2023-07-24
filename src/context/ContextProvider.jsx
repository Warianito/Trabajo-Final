import React, {createContext, useContext, useState} from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {
    const products =[
        {
            img:  "../../public/imagenCard1.png",
            tipo: 'LAPTOPS',
            nombre: 'Apple Mac Book Pro',
            precio: '950.00',
            stock: 10,
            descripcion: "La MacBook Pro de 16 pulgadas posee la espectacular pantalla Liquid Retina XDR con resolución nativa de 3456x2234 píxeles en el cuál las imágenes adquieren un gran nivel de detalle y realismo, los textos se ven increiblemnte nítidos y definidos. El Magic Keyboard retroiluminado te permite hacer todo más rápido y de forma más eficiente. Con Touch ID puedes iniciar sesion de forma segura mediante una autenticación fácil y rápida. El procesador M1 Pro, acompañado de 16GB de memoria RAM y 1TB de SSD, podrás trabajar con facilidad aún en los proyectos más exigentes con un CPU de hasta 10 núcleos, un GPU de hasta 16 núcleos, un Neural Engine de 16 núcleos y motores multimedia dedicados de codificación y decodificación, compatibles con los códecs H.264, HEVC y ProRes",
            id: '1',
        },
        {
            img:  "../../public/imagenCard2.png",
            tipo: 'PHONES',
            nombre: 'Google Pixel 4',
            precio: '650.00',
            stock: 10,
            descripcion: 'El Google Pixel 4 es la cuarta generación de la serie Pixel, que llega esta vez con una pantalla Full HD+ de 5.7 pulgadas. Potenciado por un procesador Snapdragon 855, el Pixel 4 cuenta con 6GB de memoria RAM con 64GB o 128GB como opciones de almacenamiento interno, que no es expandible vía microSD. La cámara posterior del Pixel 4 es dual, de 12 MP + 16 MP, mientras que su cámara frontal es también dual, con un sensor de 8 MP y un sensor TOF 3D que permite el reconocimiento de rostro biométrico reemplazando el lector de huellas. El Pixel 4 completa sus características con una batería de 2800 mAh con soporte para carga rápida e inalámbrica, parlantes stereo, puerto USB-C, y corre Android 10.',
            id: '2',
        },
        {
            img:  "../../public/imagenCard3.png",
            tipo: 'TV',
            nombre: 'Samsung Qled 4K',
            precio: '850.00',
            stock: 10,
            descripcion: 'Una pantalla QLED es la pieza que complementa la estancia de tu casa y Samsung tiene la indicada para vos. Es el modelo de 55 pulgadas con resolución de QLED 4K que permite ver tus series favoritas hasta el último detalle. Es una pantalla smart que trabaja gracias a un procesador Quantum Lite 4K y sistema operativo Tizen.',
            id: '3',
        },
        {
            img:  "../../public/imagenCard4.png",
            tipo: 'PHONES',
            nombre: 'Samsung Galaxy s23',
            precio: '550.00',
            stock: 10,
            descripcion: 'Celular. Pantalla 6.8 FHD+ Dynamic AMOLED 16M colores. Procesador Qualcomm SM8550 Octa core (3.36, 2.8, 2 GHz) Almacenamiento: 256 Gb. Memoria RAM: 12 Gb. Camara Posterior: 200 MP + 10 MP + 12 MP. Camara Frontal: 12 MP. Bateria: 5000mAh. Puerto USB. Sincronizacion de PC. Identificador de llamadas. GPS. Glonass. Beidou. Sensor acelerometro. Sensor de huellas dactilares. Sensor giroscopico. Sensor geomagnetico. Sala de sensores. Sensor de luz. Sensor de proximidad. Mensajes de voz. Alarma. Reloj. Reproductor multimedia. Calculadora. Agenda. Correo electronico. Sonidos polifonicos. No incluye cargador.',
            id: '4',
        },
        {
            img:  "../../public/imagenCard5.png",
            tipo: 'TABLETS',
            nombre: 'iPad Pro 11',
            precio: '450.00',
            stock: 10,
            descripcion: 'La pantalla retina del iPad Pro de 11 pulgadas IPS con resolución (2.388 x 1.668 píxeles) tiene esquinas redondeadas que rematan el diseño curvo del dispositivo, y esas esquinas se encuentran dentro de un rectángulo estándar. Además, posee la tecnología ProMotion y True Tone. También es antirreflectante, el cuál le da un efecto mate al panel. Gracias al chip M1, de cuatro núcleos de rendimiento y cuatro de eficiencia, además de GPU de ocho núcleos, acompañado de 8GB de RAM y 256GB de almacenamiento, ofrecen un rendimiento fuera de serie. Con el puerto Thunderbolt podrás conectar accesorios de alto rendimiento. Además, posee conexión celular. Y si le sumas el Apple Pencil (2da generación), podrás tomar apuntes, dibujar y hacer anotaciones, y con el Magic Keyboard con trackpad integrado podrás escribir con total comodidad.',
            id: '5',
        },
        {
            img:  "../../public/imagenCard6.png",
            tipo: 'SPEAKER',
            nombre: 'JBL GO',
            precio: '250.00',
            stock: 10,
            descripcion: 'El JBL Go 3 presenta un estilo llamativo y un sonido JBL Pro pleno y sofisticado. Con su llamativo nuevo diseño vanguardista, tejidos coloridos y detalles expresivos, es el accesorio imprescindible para tu próxima salida. Vibrarás al son de tu música con el sonido JBL Pro. Resistente al polvo y al agua conforme a la norma IP67, para que puedas seguir disfrutando llueva o haga sol, y con su asa integrada para que puedas llevarlo a cualquier parte. El Go 3 viene en tonos y combinaciones de colores completamente nuevos inspirados en la actual moda urbana. El JBL Go 3 tiene una apariencia tan vívida como su calidad de sonido.',
            id: '6',
        },
        {
            img:  "../../public/imagenCard7.png",
            tipo: 'COMPUTER',
            nombre: 'MONITOR 4K',
            precio: '850.00',
            stock: 10,
            descripcion: '23.8 pulgadas Full HD (1920x1080) IPS monitor con tasa de refresco de 75 Hz y 5 ms (GTG) Características del tiempo de respuesta de sincronización adaptativo para eliminar el rasgado pantalla y velocidades de fotogramas entrecortados. Marco de menos de diseño ofrece una visión configuración de múltiples pantallas casi sin fisuras y 178 grados de ángulo de visión amplio panel de emparejado con una inclinación ergonómica que ofrece excepcional inmersión y una mejor visualización. La tecnología Asus cuidado de los ojos azules cuenta con tecnologías de filtrado de luz para minimizar la fatiga ocular sin destellos de Conectividad con HDMI, D-Sub, y puertos DVI-D, así como de montaje VESA. Exclusivo Asus juego, más en forma de cruz y el temporizador para una mejor experiencia de juego.',
            id: '7',
        },
        {
            img:  "../../public/imagenCard8.png",
            tipo: 'WATCHES',
            nombre: 'Samsung Watch',
            precio: '350.00',
            stock: 10,
            descripcion: 'El rastreo de rutas por GPS ofrece instrucciones paso a paso para ciclistas y excursionistas. La batería más grande de nuestro dispositivo portátil para la aventura al aire libre. Alcanzá tu objetivo de bienestar al medir la composición corporal con el Samsung BioActive sensor.',
            id: '8',
        },
        {
            img:  "../../public/imagenCard9.png",
            tipo: 'COMPUTERS',
            nombre: 'Pro Display XDR',
            precio: '450.00',
            stock: 10,
            descripcion: 'La primera pantalla Retina 6K de 32 pulgadas del mundo. Hasta 1,600 nits de brillo. Una increíble relación de contraste de 1,000,000:1 y un ángulo de visión superamplio. Más de mil millones de colores con una precisión excepcional. Y un rango dinámico que transformará la forma en que trabajan los profesionales. Presentamos el monitor Pro Display XDR de Apple, el monitor más profesional del mundo.',
            id: '9',
        },
        {
            img:  "../../public/imagenCard10.png",
            tipo: 'XBOX',
            nombre: 'Gamepad Xbox One X',
            precio: '150.00',
            stock: 10,
            descripcion: 'Vive la experiencia del diseño modernizado del control inalámbrico de Xbox Electric Volt, con superficies esculpidas y una geometría refinada para una mayor comodidad durante el juego con uso de la batería de hasta 40 horas. Mantén siempre tu objetivo con el pad direccional híbrido y el agarre texturizado en los gatillos, en los botones superiores y en la carcasa trasera. Captura y comparte contenido sin dificultad, como capturas de pantalla, grabaciones y más, con el nuevo botón para Compartir. Incluye tecnología Xbox Wireless y Bluetooth® para juegos inalámbricos en consolas compatibles, PC con Windows 10, teléfonos Android tablets.',
            id: '10',
        },
        {
            img:  "../../public/imagenCard11.png",
            tipo: 'WATCHES',
            nombre: 'Smart Watch',
            precio: '250.00',
            stock: 10,
            descripcion: ' Display Circular 1.3" Touch / HD - Resolución 240 x 240 IPS - Espesor de 9,9mm - Bateria de 200mAh - Bluetooth 5.0 - G-Sensor - IP68 - Monitoreo de sueño - Podometro - Notificaciones de Llamadas, Aplicaciones y Mensajes - Cronometro - Alarma - Oxigeno en sangre - Electrocardiograma - Monitor de pulsaciones Salí a hacer ejercicio, explorá y lleva la cuenta de tu recorrido. No te preocupes el clima! CRONOS V8 es resistente al agua y a golpes. Con su batería de gran performance solo basta con una carga para utilizarlo por días. Ademas monitoreá tus pulsaciones ( PPG + ECG ) App disponible para Android / iOS',
            id: '11',
        },
        {
            img:  "../../public/imagenCard12.png",
            tipo: 'GADGET',
            nombre: 'Google Nest',
            precio: '350.00',
            stock: 10,
            descripcion: 'El termostato inteligente programable aprende tu horario y las temperaturas que te gustan, y se programa para ayudarte a ahorrar energía y mantenerte cómodo El sistema Home/Away Assist se ajusta automáticamente a una temperatura ecológica después de que te vayas para que no calientes ni enfríes una casa vacía. El mando a distancia permite a los miembros de la familia cambiar la temperatura desde cualquier lugar en un teléfono, portátil o tableta. Bellamente diseñado con acabados metálicos pulidos y una pantalla brillante de alta resolución; la visión de lejos te muestra la temperatura, el clima o la hora en su termostato cuando entra en la habitación',
            id: '12',
        },
        {
            img:  "../../public/imagenCard13.png",
            tipo: 'LAPTOPS',
            nombre: 'Lenovo IdeaPad',
            precio: '1150.00',
            stock: 10,
            descripcion: 'La notebook Lenovo IdeaPad 3 14ITL05 81X700EJAR ofrece una pantalla de 14 pulgadas y resolución HD (1366x768) con tecnología Anti-glare, la cuál evita que se produzcan reflejos, por lo que tus ojos no tendrán que esforzarse de más. Cuenta con una cámara de 0.3 MP que te permitirá realizar videoconferencias fácilmente con amigos y familiares. Además, posee el sistema Privacy Shutter. Con Intel Core i5, Integrated Intel Iris® Xe Graphics y su gran almacenamiento, podrás guardar todos tus archivos, realizar varias tareas a la vez, arrancar a utilizar la notebook en segundos y disfrutar de una excelente experiencia de entretenimiento. La IdeaPad 3 ofrece una memoria RAM de 8GB (4GB Soldered DDR4-2666 + 4GB SO-DIMM DDR4-2666) y un almacenamiento interno de 256GB SSD.',
            id: '13',
        },
        {
            img:  "../../public/imagenCard14.png",
            tipo: 'WATCHES',
            nombre: 'Apple Watch',
            precio: '550.00',
            stock: 10,
            descripcion: 'El Apple Watch SE tiene el mismo tamaño de pantalla que el Apple Watch Series 6 para que veas más información de un solo vistazo. También incluye sensores avanzados para que lleves un registro de tus objetivos de fitness y entrenamiento, e increíbles funcionalidades de salud y seguridad. La app Sueño te permite establecer una rutina para dormir y llevar un registro de tus hábitos de sueño. Y además, puedes recibir llamadas, mandar mensajes y escuchar música directamente desde tu muñeca. Apple Watch SE. Es mucho más que un reloj y está más a tu alcance.',
            id: '14',
            
        },
        {
            img:  "../../public/imagenCard15.png",
            tipo: 'PHONES',
            nombre: 'Iphone X',
            precio: '750.00',
            stock: 10,
            descripcion: 'El Apple iPhone X es el móvil de gama top de Apple de 2017 y llega al mercado con una pantalla OLED panorámica con notch y un peso de 174 g. Tiene un diseño compacto con grosor de 7,7 mm con cuerpo unibody metálico y trasera de cristal. El Apple iPhone X monta una pantalla de 5,8 pulgadas con resolución 2.436x1.125px. Es un panel OLED, la primera vez que Apple apuesta por esta tecnología y ofrece un nivel de negros óptimo y buena calibración de color. Este panel tiene una densidad de pixeles de 458ppp. El Apple iPhone X trabaja sobre el procesador Apple A11 Bionic y 3 GB de memoria RAM. Es un procesador muy potente con una GPU personalizada de Apple que rinde notablemente más que el Apple A10 de los iPhone 7. En cuanto a almacenamiento, el iPhone X parte de 64 GB y es almacenamiento no ampliable. El Apple iPhone X trabaja de serie sobre iOS 11 y Apple va a ir actualizándolo durante los próximos años. La cámara principal del iPhone X tiene un pack de doble sensor de 12 Mpx perfecto para modo retrato ya que uno de los objetivos es telefoto 2X. Cuenta además con Flash True Tone con cuatro LED. En cuanto a vídeo, es capaz de grabar a resolución UHD 4k 60 fps. En cuanto a la cámara frontal, para selfies o videoconferencia, la resolución es de 7 MP. El Apple iPhone X monta una batería de 2.716 mAh con lo que el terminal debería aguantar hasta 21 horas en conversación. Esta batería no es extraíble pero el iPhone X tiene soporte de carga rápida y carga inalámbrica. En cuanto a conectividad, este Apple iPhone X trabaja con una tarjeta nanoSIM con soporte 4G en España. Tiene soporte de redes Wi-Fi ac, Bluetooth y NFC.',
            id: '15',
        }

    ]

    const getProductById = (id) =>{
        return products.find(producto => producto.id == id)
    }

    const getProductCartById = (id) => {
        return cart.find(producto => producto.id == id)
    }

    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.some(producto => producto.id == id)

    const addProductCart = (id, quantity) =>{
        if(isInCart(id)){
            setCart(cart.map(product =>{
                if(product.id == id){
                    product.quantity = quantity
                }
                return product
            }))
        }
        else{
            setCart([...cart, {...getProductById(id), quantity: quantity}])
        }
        
    }
    const getTotal = () => {
        let total = 0;
        cart.forEach(product => total += product.precio * product.quantity );
        return(total);
    }

    return (
        <Context.Provider value={{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
            {children}
        </Context.Provider>
      )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider