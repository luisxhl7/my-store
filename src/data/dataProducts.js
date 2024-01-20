import images from "../assets"

export const dataProducts = [
    {
        id: '18',
        name: 'Chasis Gamer Wattana Romvous + 1 Ventiladores RGB',
        link: 'Chasis-Gamer-Wattana-Romvous-+-1-Ventiladores-RGB',
        image: images.chasis1,
        price: 440000,
        discount: 20,
        category: 'chasis',
        marca: 'Generico',
        units: 10,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Caja de torre media chasis blanco, malla de acero de 0,5 mm + tira ARGB USB3.0*1+1xUSB2.0, vidrio templado de audio HD (puerta deslizante fácil de abrir) 1 ventilador ARGB de 12 cm (GMX-12) -Rainbow-C9) 1 ventilador Turbo COC de 14 cm (incl.). Con capacidad de alojar hasta cuatro dispositivos de almacenamiento en sus bahías (2 HDD 3.5"" Y 2 SSD 2.5""). Cuenta con 3 ventiladores ARGB en su panel frontal, 1 Ventilador RGB en el panel trasero y 1 ventilador Board COC.'
    },
    {
        id: '19',
        name: 'Chasis Gamer Wattana Obruks Wa-Ch-3603 Negro + 4 Ventiladores',
        link: 'Chasis-Gamer-Wattana-Obruks-Wa-Ch-3603-Negro-+-4-Ventiladores',
        image: images.chasis2,
        price: 460000,
        discount: null,
        category: 'chasis',
        marca: 'Generico',
        units: 14,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'El chasis Mid Tower Obruks de tipo gamer ATX cuenta con panel izquierdo de vidrio templado que se sujeta con tornillos en cada esquina, panel derecho y superior metálico y con panel frontal de ABS y vidrio templado. Con capacidad de alojar hasta cuatro dispositivos de almacenamiento en sus bahías (2 HDD 3.5"" Y 2 SSD 2.5""). Cuenta con 3 ventiladores ARGB en su panel frontal y 1 ventilador ARGB en el panel trasero.'
    },
    {
        id: '20',
        name: 'Chasis Cooler Master Masterbox Q300p',
        link: 'Chasis-Cooler-Master-Masterbox-Q300p',
        image: images.chasis3,
        price: 538000,
        discount: null,
        category: 'chasis',
        marca: 'Cooler Master',
        units: 5,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'La parte frontal admite hasta dos ventiladores de 140 mm y un radiador de hasta 240 mm. La parte trasera admite un ventilador o radiador de 120 mm y los dos ventiladores superiores de 120 mm. Todo para asegurarte de que no tienes que comprometer el rendimiento.'
    },
    {
        id: '21',
        name: 'Chasis Micro Atx Thermaltake Ah T200 Green Racen',
        link: 'Chasis-Micro-Atx-Thermaltake-Ah-T200-Green-Racen',
        image: images.chasis4,
        price: 899900,
        discount: null,
        category: 'chasis',
        marca: 'Thermaltake',
        units: 30,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: <>
            MODELO : AH T200
            <br/>
            TIPO DE CASO : Micro estuche
            <br/>
            DIMENSIÓN (AL X AN X PR) : 444,2 x 282 x 551,5 mm(17,5 x 11,1 x 21,7 pulgadas)
            <br/>
            PESO NETO : 10,8 kg / 23,8 libras
            <br/>
            PANEL LATERAL : Vidrio templado x 2
            <br/>
            COLOR : blanco
            <br/>
            MATERIAL : SPCC
            <br/>
            SISTEMA DE REFRIGERACIÓN : N / A
            BAHÍAS DE unitsAD -ACCESIBLES -OCULTAS : 2 x 3,5 “o 3 x 2,5” (límite de grosor del disco duro de 3,5 “: 22 mm).
            <br/>
            RANURAS DE EXPANSIÓN : 5
            <br/>
            PLACAS MADRE : 6.7 “x 6.7” (Mini ITX), 9.6 “x 9.6” (Micro ATX)
            <br/>
            PUERTO DE E / S : USB 3.1 (Gen 2) Tipo C x 1, USB 3.0 x 2, Audio HD x 1
            <br/>
            FUENTE DE ALIMENTACIÓN : PSU PS2 estándar (opcional)
            <br/>
            SOPORTE DE VENTILADOR
            <br/>
            Frente: 2 x 120 mm o 1 x 120 mm , 2 x 140 mm o 1 x 140 mm
            <br/>
            Parte superior: 2 x 120 mm o 1 x 120 mm , 2 x 140 mm o 1 x 140 mm
            <br/>
            SOPORTE RADIADOR
            <br/>
            Delantero: 1 x 240 mm o 1 x 120 mm , 1 x 280 mm o 1 x 140 mm
            <br/>
            AUTORIZACIÓN
            <br/>
            Altura máxima del enfriador de la CPU: 150 mm
            <br/>
            Longitud máxima de VGA: 320
            <br/>
            mm Longitud máxima de la PSU: 180 mm Límite de
            <br/>
            espesor del disco duro de 3,5 ”: 22 mm
        </>
    },
    {
        id: '22',
        name: 'CHASIS THERMALTAKE CERES 500 TG ARGB + 4 FAN WHITE',
        link: 'CHASIS-THERMALTAKE-CERES-500-TG-ARGB-+-4-FAN-WHITE',
        image: images.chasis5,
        price: 889000,
        discount: null,
        category: 'Thermaltake',
        marca: 'amd',
        units: 13,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        }
    },
    {
        id: '10',
        name: 'Disco Duro Sata Pc Interno 2tb Teras Seagate Wd Pull P',
        link: 'Disco-Duro-Sata-Pc-Interno-2tb-Teras-Seagate-Wd-Pull-P',
        image: images.DiscoDuroSata,
        price: 280000,
        discount: null,
        category: 'almacenamiento',
        marca: 'Seagate',
        units: 55,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: <>
            DISCO INTERNO PARA PC WD, Hitachi, Seagate 2 TERAS PULL
            <br/>
            Especificaciones
            <br/>
            • Disco duro interno PC
            <br/>
            • Características:
            <br/>
            • Marca: WD- SEAGATE - HITACHI
            <br/>
            • Capacidad: 2 Teras
            <br/>
            • 5900 rpm
            <br/>
            • Peso: 450grm
            <br/>
            • Interfaz: serial ata
            <br/>
            • Interfaces estándar admitidas: ata-8 serial ata 3.0
            <br/>
            • LOS DISCOS PULL, SON DISCOS QUE YA TIENEN UN TIEMPO DE USO NO ESPECIFICADO YA QUE VIENEN SELLADOS DE FABRICA, NO SON NUEVOS, ESTAN 100 % FUNCIONALES
            <br/>
            SE ENVÍA SEGÚN DISPONIBILIDAD DE LA MARCA
        </>
    },
    {
        id: '11',
        name: 'Memoria USB 128 GB unitsad flash USB OTG para IOS|Android|PC',
        link: 'Memoria-USB-128-GB-unitsad-flash-USB-OTG-para-IOS-Android-PC',
        image: images.MemoriaUSB128GB,
        price: 280000,
        discount: 28,
        category: 'almacenamiento',
        marca: 'Generico',
        units: 221,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: <>
            caracteristicas:
            <br/>
            1.Expansión externa para IOS / PC.
            <br/>
            2.Equipado con adaptador USB 2.0.
            <br/>
            3.Soporte de archivos cifrados.
            <br/>
            4.Support administrar datos directamente en el i-FlashDrive. (Crear, mover, eliminar, renombrar, abrir, etc.)
        </>
    },
    {
        id: '12',
        name: 'unitsad Solida Kingston M.2 NV2 NVMe PCIe 2TB Gen 4x4',
        link: 'unitsad-Solida-Kingston-M.2-NV2-NVMe-PCIe-2TB-Gen-4x4',
        image: images.UnidadSolidaKingston,
        price: 890000 ,
        discount: null,
        category: 'almacenamiento',
        marca: 'Kingston',
        units: 17,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'El disco SSD NVMe PCIe 4.0 NV2 es una solución de almacenamiento de nueva generación mejorada basada en un controlador NVME Gen 4x4. NV2 alcanza velocidades de lectura/escritura de hasta 3.500/2.800 MB/s, con menor consumo eléctrico y generando menos calor, con lo cual optimiza el rendimiento de su sistema y mejora su valor sin sacrificar nada. El compacto diseño de M.2 2280 de una cara (22 x 80 mm) amplía el almacenamiento hasta los 2 TB, además de ahorrar espacio para otros componentes. Por ello, el NV2 es ideal para portátiles más delgados, sistemas de pequeño factor de forma (SFF) y placas base para integradores de sistemas.'
    },
    {
        id: '13',
        name: 'Memoria Ram Corsair Vegeance RGB Pro DDR4 Kit (2 x 8 GB) 3200 Mhz',
        link: 'Memoria-Ram-Corsair-Vegeance-RGB-Pro-DDR4-Kit-(2-x-8-GB)-3200-Mhz',
        image: images.MemoriaRamCorsair,
        price: 349900,
        discount: null,
        category: 'almacenamiento',
        marca: 'Corsair',
        units: 99,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Kit de memoria DRAM DDR4 a 3200 MHz VENGEANCE® RGB PRO de 16 GB (2 x 8 GB) C16 VISUALICE, SINCRONICE, MEMORICE.La memoria con overclocking DDR4 VENGEANCE RGB PRO-SERIES ilumina el PC con un efecto hipnótico gracias a la iluminación RGB dinámica multizona, además de ofrecer las mejores características de las DDR4 en cuanto a rendimiento. SOFTWARE DE NUEVA GENERACIÓNEl potente software CORSAIR iCUE da vida a su sistema con el control de la iluminación dinámica RGB, sincronizada en todos sus productos compatibles con iCUE, incluida la memoria, los ventiladores, tiras de iluminación LED RGB, teclados, ratones, etc.'
        
    },
    {
        id: '14',
        name: 'BOARD Asus B760M-A AX D4 WIFI PCIE 4.0',
        link: 'BOARD-Asus-B760M-A-AX-D4-WIFI-PCIE-4.0',
        image: images.BOARDAsusB760MA,
        price: 1230000,
        discount: null,
        category: 'board',
        marca: 'Asus',
        units: 65,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: <>
            Socket Intel® LGA 1700: Listo para la 13a y 12a Gen de porcesadores Intel®.
            <br/>
            Conectividad ultrarrápida: PCIe 4.0, dos puertos M.2, Realtek 2.5Gb Ethernet, Wi-Fi 6, USB 3.2 Gen 2 posterior, USB 3.2 Gen 1 Type-C® frontal.
            <br/>
            Enfriamiento completo: Disipador de calor VRM, disipador de calor M.2, disipador de calor PCH, puerto para ventilador híbrido y Fan Xpert 2+.
            <br/>
            ASUS OptiMem II: Enrutamiento cuidadoso de trazas y vías, además de optimizaciones de la capa base para preservar la integridad de la señal para mejorar el overclocking de la memoria.
            <br/>
            Iluminación Aura Sync RGB: Puertos Gen 2 direccionables integrados y puerto Aura RGB para tiras de LED RGB, sincronizados fácilmente con hardware compatible con Aura Sync.
        </>
    },
    {
        id: '15',
        name: 'Board AMD B650E PC RIPTIDE WIFI AM5 DDR5 Ryzen 7000 ASROCK',
        link: 'Board-AMD-B650E-PC-RIPTIDE-WIFI-AM5-DDR5-Ryzen-7000-ASROCK',
        image: images.BoardAMDB650E,
        price: 1716000,
        discount: null,
        category: 'board',
        marca: 'Asrock',
        units: 87,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Riptide lleva el nombre de un tipo específico de corriente de agua con fuertes olas que se produce en el océano, lo que representa la filosofía de la fuerza ilimitada, tranquila y de doble cara del mar. Construido alrededor de potentes funciones relacionadas con los juegos, Riptide ha dado un gran golpe y ha sumergido a los usuarios en la sensación de estabilidad.'
    },
    {
        id: '16',
        name: 'BOARD ASUS PRIME H610M-E D4 CSM PCIe 4.0 DDR4 SOCKET 1700 12GN|13GN',
        link: 'BOARD-ASUS-PRIME-H610M-E-D4-CSM-PCIe-4.0-DDR4-SOCKET-1700-12GN-13GN',
        image: images.BOARDASUSPRIME,
        price: 594000,
        discount: 7,
        category: 'board',
        marca: 'Asus',
        units: 10,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: <>
            Fabricante de procesador: Intel
            <br/>
            Socket de procesador: LGA 1700
            <br/>
            Procesador compatible: Intel® Celeron®, Intel® Core™ i3, Intel® Core™ i5, Intel® Core™ i7, Intel® Core™ i9, Intel® Pentium®
            <br/>
            Máx. número de procesador SMP: 1
        </>
    },
    {
        id: '17',
        name: 'BOARD ASROCK B450M PRO4 R2.0',
        link: 'BOARD-ASROCK-B450M-PRO4-R2.0',
        image: images.BOARDASROCKB450M,
        price: 638000,
        discount: null,
        category: 'board',
        marca: 'Asrock',
        units: 6,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'TARJETA MADRE PARA PROCESADORES AMD RYZEN, SOCKET AM4, BOARD MICRO ATX,  SOPORTA PROCESADORES SERIE 3000, 4000, 5000, SOPORTE PARA TECNOLOGIA LED RGB - ARGB, EXCELENTE DISIPACION EN LAS VRM , SOPORTE PARA DISCOS SOLIDOS M.2 NVMe 3.500Mbs, Y M.2 SATA , SOPORTE PARA 4 DISCOS SATA SSD O HDD, COLOR GRIS CON PLATA , CONTROLADOR DE AUDIO REALTECK GIGABIT 7.1'
    },
    {
        id: '23',
        name: 'Audifonos Gamer Cybeat Shield Pc Ps4 Ps5 Xbox Luz Rgb',
        link: 'Audifonos-Gamer-Cybeat-Shield-Pc-Ps4-Ps5-Xbox-Luz-Rgb',
        image: images.diademas1,
        price: 89990,
        discount: null,
        category: 'diademas',
        marca: 'Cybeat Gaming',
        units: 23,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Cybeat ESports Partner te presenta los audífonos Bison RGB para una experiencia auditiva única'
    },
    {
        id: '24',
        name: 'Audifonos Diadema Gamer Logitech G335 Microfono Negro',
        link: 'Audifonos-Diadema-Gamer-Logitech-G335-Microfono-Negro',
        image: images.diademas2,
        price: 259900,
        discount: null,
        category: 'diademas',
        marca: 'Logitech',
        units: 14,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Selecciona entre animaciones RGB precargadas o elige entre 16,8 millones de colores y crea tus propios efectos personalizados con el software G HUB. G HUB también permite usar efectos RGB que responden a la acción de juego, al audio o al color de la pantalla. También puedes optar por sincronizar los audífonos G935 con otros dispositivos RGB LIGHTSYNC Logitech G, para meterte de lleno en el juego con un equipo armonizado. '
    },
    {
        id: '25',
        name: 'Diadema Gamer Inalámbrica + Bluetooth Logitech G435 Pc Ps4 Azul',
        link: 'Diadema-Gamer-Inalámbrica-+-Bluetooth-Logitech-G435-Pc-Ps4-Azul',
        image: images.diademas3,
        price: 499900 ,
        discount: 10,
        category: 'diademas',
        marca: 'Logitech ',
        units: 76,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description:<>
            Diadema Gamer Inalámbrica para Logitech G435Pc, PS4, PS5
            <br/>
            Para tus juegos individuales, para el juego con amigos, para música. Los auriculares con micrófono G435 para gaming se conectan a tu PC, tu móvil y otros dispositivos mediante tecnología inalámbrica LIGHTSPEED para gaming y Bluetooth®. Ofrecen un sonido nítido y potente, y los micrófonos con formación de haces reducen el ruido de fondo. Además están hechos con un mínimo de 22% de plástico reciclado posconsumo. Con los G435 la diversión es constante.
            <br/>
            Desde el diseño a la producción y la entrega, utilizamos plástico reciclado siempre que fue posible, creamos embalaje responsable y logramos la certificación CarbonNeutral® para los G435.
            <br/>
            -HECHOS CON PLÁSTICO RECICLADO
            <br/>
            Las piezas de plástico de los G435 se componen de al menos un 22% de plástico reciclado posconsumo por peso.
            <br/>
            -NEUTROS EN CARBONO
            <br/>
            Los G435 tienen la certificación CarbonNeutral. Eso significa que la huella de carbono del producto y el embalaje se ha reducido a cero gracias a la inversión que Logitech ha realizado en proyectos de compensación de las emisiones.
            <br/>
            -TECNOLOGÍA INALÁMBRICA LIGHTSPEED
            <br/>
            LIGHTSPEED es tecnología inalámbrica para gaming que te permite jugar con audio de alto rendimiento, una conectividad robusta y una duración prolongada de la batería. Y todo eso en un radio de acción de hasta 10 metros. LIGHTSPEED se puede usar en PC, Mac, PlayStation® 4 y PlayStation 5
            <br/>
            -TECNOLOGÍA INALÁMBRICA BLUETOOTH
            <br/>
            Cuando quieras conectar los G435 a otro dispositivo, puedes hacerlo sin dejar de jugar a tu ritmo, con Bluetooth de baja latencia. Y, por supuesto, también puedes escuchar música y charlar con tus amigos.
        </>
    },
    {
        id: '26',
        name: 'Diadema Gamer Profesional X-Kim TH330 ThunderX para PC PS4 Xbox Switch',
        link: 'Diadema-Gamer-Profesional-X-Kim-TH330-ThunderX-para-PC-PS4-Xbox-Switch',
        image: images.diademas4,
        price: 159900,
        discount: null,
        category: 'diademas',
        marca: 'X Kim ',
        units: 88,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Diadema X-Kim ThunderX USB/3.5mm, PC/PS4/Xbox One/N. Switch La diadema ThunderX ha sido diseñada para adaptarse de manera versátil a exigentes formatos de alta calidad de audio, gracias a su conexión con puerto USB obtiene un sonido digital adaptable a distintos tipos de uso, y su puerto 3.5mm permite conectarse casi que a cualquier dispositivo.'
    },
    {
        id: '27',
        name: 'Tarjeta Gráfica Gigabyte Geforce RTX 3060 Gaming OC 12GB',
        link: 'Tarjeta-Gráfica-Gigabyte-Geforce-RTX-3060-Gaming-OC-12GB',
        image: images.grafica1,
        price: 2989900,
        discount: 45,
        category: 'grafica',
        marca: 'Gigabyte',
        units: 10,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'DIRECTX 12 ULTIMATE Los desarrolladores ahora pueden agregar efectos gráficos aún más sorprendentes a los juegos de PC basados en Microsoft Windows. Las tarjetas gráficas GeForce RTX ofrecen funciones DX12 avanzadas, como trazado de rayos y sombreado de velocidad variable, que dan vida a los juegos con efectos visuales ultrarrealistas y velocidades de cuadro más rápidas. ELEVA TU JUEGO CREATIVO'
    },
    {
        id: '28',
        name: 'Tarjeta Grafica Gigabyte Nvidia Geforce Rtx 3050 Eagle Oc 8gb Gddr6',
        link: 'Tarjeta-Grafica-Gigabyte-Nvidia-Geforce-Rtx-3050-Eagle-Oc-8gb-Gddr6',
        image: images.grafica2,
        price: 2249900,
        discount: 30,
        category: 'grafica',
        marca: 'Gigabyte',
        units: 67,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'SERIE: EAGLE OC.MODELO: GV-N3050 EAGLE OC-8GDINTERFAZ: PCI EXPRESS 4.0SERIE GPU: SERIE NVIDIA GEFORCE RTX 30.GPU: GEFORCE RTX 3050.ARQUITECTURA: AMPERIO.NUCLEOS CUDA: 2560RELOJ DE MEMORIA EFECTIVO: 14000 MHZ.TAMAÑO DE LA MEMORIA: 8 GB.INTERFAZ DE MEMORIA: 128 BITS.TIPO DE MEMORIA: GDDR6.COMPATIBILIDAD CON VARIOS MONITORES: 4.HDMI: 2xHDMI 2.1.DISPLAYPORT: 2 PUERTOS DISPLAYPORT 1.4A.ENFRIADOR: FUERZA DE VIENTO 2X.VENTILADORES DE ASPAS UNICAS DE 90 MMSISTEMA DE REFRIGERACION WINDFORCE 2X CON VENTILADORES GIRATORIOS ALTERNATIVOS.POTENCIA DE FUENTE DE ALIMENTACION RECOMENDADA: 450W.CONECTOR DE ALIMENTACION: 8 PINES.FACTOR DE FORMA: ATX.ANCHO DE LA RANURA: RANURA DOBLE.PLACA TRASERA PROTECTORA.'
    },
    {
        id: '29',
        name: 'Tarjeta Grafica Nvidia Evga Geforce Gt 730 2gb Vga Dvi Hdmi',
        link: 'Tarjeta-Grafica-Nvidia-Evga-Geforce-Gt-730-2gb-Vga-Dvi-Hdmi',
        image: images.grafica3,
        price: 329900,
        discount: null,
        category: 'grafica',
        marca: 'Evga',
        units: 85,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Tarjeta Grafica EVGA GeForce GT 730 2GB (perfil bajo) Acelere su experiencia con la PC cuando actualice desde gráficos integrados a la nueva tarjeta dedicada NVIDIA GeForce GT 730. Disfrute de todos sus videos e imágenes en resoluciones HD, con una edición de video más rápida, una edición de fotografías más rápida y una navegación web más rápida en comparación con los gráficos integrados. Descubra un rendimiento de juego más rápido que los gráficos integrados, haciendo que todo su juego sea más rico y fluido. Incluso puedes obtener los controladores más recientes y optimizar la configuración del juego con un solo clic usando GeForce Experience. La GeForce GT 730 es todo lo que necesitas para una experiencia de PC mejor y más rápida.'
    },
    {
        id: '30',
        name: 'Monitor Gamer Samsung 32 Odyssey G3 Pivot FreeSync Premium 165hz 1ms - Negro',
        link: 'Monitor-Gamer-Samsung-32-Odyssey-G3-Pivot-FreeSync-Premium-165hz-1ms---Negro',
        image: images.monitor1,
        price: 1299900,
        discount: null,
        category: 'monitor',
        marca: 'Samsung',
        units: 3,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: <>
            Reacciona en tiempo real
            <br/>
            Frecuencia de actualización de 165 Hz
            <br/>
            Derrota a todos los enemigos, incluso a altas velocidades. La frecuencia de actualización de 165 Hz elimina el retraso y el desenfoque de movimiento para que disfrutes de un juego emocionante con una acción ultrafluida.
            <br/>
            Mide las reacciones en milisegundos
        </>
    },
    {
        id: '31',
        name: 'Monitor Gamer Curvo Samsung 49 Odyssey G9 Qled 240Hz 1ms C49G95T - Blanco',
        link: 'Monitor-Gamer-Curvo-Samsung-49-Odyssey-G9-Qled-240Hz-1ms-C49G95T---Blanco',
        image: images.monitor2,
        price: 6299900,
        discount: 70,
        category: 'monitor',
        marca: 'Samsung',
        units: 77,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: <>
            Las 4 mejores características
            <br/>
            1. La revolución de las curvas: 1000R, la nueva cúspide de la tecnología de pantallas curvas, se ajusta a los contornos del ojo humano para lograr un realismo inimaginable.
            <br/>
            2. Una resolución asombrosa: QLED, HDR1000 y la resolución DQH se unen para conseguir colores espectaculares con total profundidad y detalle.
            <br/>
            3. Diseño de iluminación de núcleo infinito: Los exteriores blancos brillantes se unen al Infinity Core Lighting Desing. Los dos se unen para crear un efecto futurista que te inspira a brillar mañana.
            <br/>
            4. Diseñado para la victoria: RapidCurve de 240 Hz, tiempo de respuesta de 1 ms y compatibilidad con G-Sync te llevan a la cima del juego.
        </>
    },
    {
        id: '32',
        name: 'Mouse Gamer Logitech G203 Negro RGB',
        link: 'Mouse-Gamer-Logitech-G203-Negro-RGB',
        image: images.mouse1,
        price: 159999,
        discount: null,
        category: 'mouse',
        marca: 'Logitech',
        units: 86,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Aprovecha al máximo tu tiempo de juego con el mouse G203 para juegos disponible en una variedad de vibrantes colores. Con la tecnología LIGHTSYNC, un sensor para juegos y un diseño clásico de 6 botones, animarás tu acción y tu espacio.'
    },
    {
        id: '33',
        name: 'MOUSE GAMING MAXELL TRON',
        link: 'MOUSE-GAMING-MAXELL-TRON',
        image: images.mouse2,
        price: 99900,
        discount: null,
        category: 'mouse',
        marca: 'Maxell',
        units: 11,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: <>
            MOUSE MAXELL TRON PARA TRABAJO O PARA GAMING
            <br/>
            - un agarre muy fuerte material basado en caucho con un agarre fuerte y cómodo muy cómodo para trabajar para actividades diarias o actividades de gaming como jugar competitivo o juegos de mucho FPS buena movilidad y buena agarre.
        </>
    },
    {
        id: '34',
        name: 'Mouse Gamer Inalámbrico Recargable Delux M629 Rgb | 10000dpi',
        link: 'Mouse-Gamer-Inalámbrico-Recargable-Delux-M629-Rgb-10000dpi',
        image: images.mouse3,
        price: 209900,
        discount: 15,
        category: 'mouse',
        marca: 'Delux',
        units: 91,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'MOUSE ÓPTICO DELUX M629 RGB PARA JUEGOS INALÁMBRICOVelocidad DPI de 400/800/1600/3200/5000 y Máximo 10.000 con Software, DIY alas laterales ergonómicas, mouse para jugador de computadora.'
    },
    {
        id: '35',
        name: 'Procesador AMD Ryzen 9 7900X3D AM5',
        link: 'Procesador-AMD-Ryzen-9-7900X3D-AM5',
        image: images.procesador1,
        price: 3599000,
        discount: null,
        category: 'procesador',
        marca: 'AMD',
        units: 10,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Todos de pie para recibir al rey indiscutido de los juegos. Tres nuevos procesadores AMD Ryzen serie 7000 con tecnología AMD 3D V-Cache, para recibir una inyección de rendimiento de juego masiva. Con el lanzamiento de los nuevos Ryzen 9 7950X3D y Ryzen 9 7900X3D, AMD combina sus procesadores tope de gama con hasta 144 MB de memoria en el chip. Esto significa que los usuarios avanzados pueden explotar su magnífica potencia de juego y creación en un solo chip.  No hay una sola carga de trabajo que se resista al encanto de la serie AMD Ryzen 7000 y la tecnología 3D V-Cache.'
    },
    {
        id: '1',
        name: 'Mouse Pad Logitech Studio Antisalpicaduras 30 x 70 cm Gris',
        link: 'Mouse-Pad-Logitech-Studio-Antisalpicaduras-30-x-70-cm-Gris',
        image: images.mousepad1,
        price: (120000),
        discount: 45,
        category: 'accesorios',
        marca: 'Logitech',
        units: 180,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Ésta es la suave alfombrilla mejora tu espacio de trabajo. Hecha con materiales de alta calidad, la alfombrilla de mouse Logitech te ofrece la facilidad de deslizamiento y el confort que necesitas para tu mouse Logitech favorito. la base antideslizante de goma la mantiene firmemente en su posición sobre el escritorio, pase lo que pase.'
    },
    {
        id: '2',
        name: 'Tableta Gráfica De Dibujo Huion Inspiroy H640p Con Lápiz Sensibilidad',
        link: 'Tableta-Gráfica-De-Dibujo-Huion-Inspiroy-H640p-Con-Lápiz-Sensibilidad',
        image: images.tabletaGrafica,
        price: 309990,
        discount: null,
        category: 'accesorios',
        marca: 'Huion',
        units: 20,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'TABLETA DIGITALIZADORA GRÁFICA HUION H640P PARA DIBUJO, DISEÑO GRAFICO Y CLASES VIRTUALES ***REQUIERE UN COMPUTADOR O CELULAR ANDROID PARA FUNCIONAR'
    },
    {
        id: '3',
        name: 'Ups Apc Bvx1200l-lm 1200va Interactiva 6 Tomas Avr 650 Watts',
        link: 'Ups-Apc-Bvx1200l-lm-1200va-Interactiva-6-Tomas-Avr-650-Watts',
        image: images.upsAps,
        price: 750000,
        discount: null,
        category: 'accesorios',
        marca: 'Apc',
        units: 24,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Fuente de alimentación refinadaAyuda a proteger la computadora y los dispositivos conectados de caídas y picos de luz causados por rayos Energía instantáneaEnergía instantánea para tus equipos en el momento exacto en que se corta la energía'
    },
    {
        id: '4',
        name: 'Mesa De Cama Para Computador Multifuncional Plegable Ajustable',
        link: 'Mesa-De-Cama-Para-Computador-Multifuncional-Plegable-Ajustable',
        image: images.mesaCama,
        price: 169900,
        discount: 20,
        category: 'accesorios',
        marca: 'Generico',
        units: 76,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Ajuste perfecto para pc de diferentes tamaños.· Borde curvo para mesa, capa protectora alrededor de la mesa, para que pueda sentirse cómodo al usarlo.· pc y preensamblado: no requiere'
    },
    {
        id: '5',
        name: 'Xiaomi Kit Destornillador Eléctrico De Precisión + 24 Puntas',
        link: 'Xiaomi-Kit-Destornillador-Eléctrico-De-Precisión-+-24-Puntas',
        image: images.xiaomiKit,
        price: 299900,
        discount: 15,
        category: 'accesorios',
        marca: 'Xiaomi',
        units: 61,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'PRECISO DEL PAR DE TORSIÓN DE DOS VELOCIDADES, CON POSIBILIDADES ILIMITADAS'
    },
    {
        id: '6',
        name: 'Creative Pebble Plus - Parlantes 2.1- Minimalistas - Potentes',
        link: 'Creative-Pebble-Plus---Parlantes-2.1--Minimalistas---Potentes',
        image: images.creativePebble,
        price: 300000,
        discount: null,
        category: 'accesorios',
        marca: 'Creative Labs',
        units: 110,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: <>
            Modernos Parlantes 2.1 Desktop con Subwoofer
            <br/>
            • Potentes drivers de rango medio de 2” con un subwoofer orientado hacia abajo de 4” para un impresionante rendimiento de sonido
            <br/>
            • Úselo en modo Alta Ganancia para obtener hasta 8W de potenci
            <br/>
            • Drivers elevados 45º que se orientan hacia usted para una experiencia más personal
        </>
    },
    {
        id: '7',
        name: 'CAMARA WEB LOGITECH BRIO 4K ULTRA HD 90FPS COLOR NEGRO',
        link: 'CAMARA-WEB-LOGITECH-BRIO-4K-ULTRA-HD-90FPS-COLOR-NEGRO',
        image: images.CamaraWebLogitech,
        price: 1639800,
        discount: 55,
        category: 'accesorios',
        marca: 'LOGITECH',
        units: 81,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: <>
            Resolución máxima de video: 4096px x 2160px.
            <br/>
            Imagen con resolución de 13Mpx.
            <br/>
            Interfaces: USB-C, USB-A 3.0.
            <br/>
            Funciona con Windows 7, Chrome OS, macOS 10.7, Google Chromebook 29.0.1547.70.
            <br/>
            Adecuada para pc de escritorio, notebook.
            <br/>
            Compatible con Microsoft DirectShow, Skype for Business, Microsoft Teams, Cortana, Windows Hello, Cisco Webex, Fuze, BlueJeans, Google Meet, Pexip, RingCentral Video, Vidyo, Zoom, GoToMeeting, Lifesize.
            <br/>
            Sensor de imagen 4K.
        </>
    },
    {
        id: '8',
        name: 'Brazo Ergonomus Doble Para Portatil y Monitor ECO',
        link: 'Brazo-Ergonomus-Doble-Para-Portatil-y-Monitor-ECO',
        image: images.BrazoErgonomus,
        price: 280000,
        discount: 10,
        category: 'accesorios',
        marca: 'Ergonomus',
        units: 10,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Nuestro Brazo Ergonomus Doble Para Portátil y Monitor ECO, está diseñado para 1 portátil de hasta 15,6 pulgadas y 1 monitor entre 10″ y 27″. Soporta 1 monitor de hasta 7 kg y 1 portátil de hasta 4.5 kg. Además, cuenta con un clip lateral retráctil que se ajusta para adaptarse a cualquier computadora portátil con un ancho de hasta 42 centímetros.'
    },
    {
        id: '9',
        name: 'Morral Targus Groove Backpack CVR617 | Portátil hasta 17" - Negro',
        link: 'Morral-Targus-Groove-Backpack-CVR617-Portátil-hasta-17"-Negro',
        image: images.MorralTargus,
        price: 219900,
        discount: null,
        category: 'accesorios',
        marca: 'Targus',
        units: 15,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Lleve una computadora portátil de 17 "y todo lo esencial en una mochila elegante y estilizada diseñada para una mayor durabilidad y comodidad.'
    },
    {
        id: '36',
        name: 'reloj smartwach T500 digital serie 6',
        link: 'reloj-smartwach-T500-digital-serie-6',
        image: images.smartwach1,
        price: 149900,
        discount: 15,
        category: 'smarwach',
        marca: 'Generico ',
        units: 14,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Con nueva actualización Serie 6 Reloj inteligente T500 + Pantalla de 1,75 pulgadas, monitor de presión arterial de frecuencia cardíaca'
    },
    {
        id: '37',
        name: 'Reloj inteligente Smartwatch T500 + PRO Serie 6 Color Negro',
        link: 'Reloj-inteligente-Smartwatch-T500-+-PRO-Serie-6-Color-Negro',
        image: images.smartwach2,
        price: 109900,
        discount: 10,
        category: 'smarwach',
        marca: 'Generico ',
        units: 300,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Con nueva actualización Serie 6 Reloj inteligente T500 + Pantalla de 1,75 pulgadas, monitor de presión arterial de frecuencia cardíaca'
    },
    {
        id: '38',
        name: 'Reloj inteligente Smartwatch T500 + PRO Serie 6 Color Rosado',
        link: 'Reloj-inteligente-Smartwatch-T500-+-PRO-Serie-6-Color-Rosado',
        image: images.smartwach3,
        price: 105900,
        discount: 10,
        category: 'Generico ',
        marca: 'amd',
        units: 310,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'Con nueva actualización Serie 6 Reloj inteligente T500 + Pantalla de 1,75 pulgadas, monitor de presión arterial de frecuencia cardíaca'
    },
    {
        id: '39',
        name: 'Smartwatch Mujer Llamadas 1.8 Reloj Inteligente Hombre Ip68',
        link: 'Smartwatch-Mujer-Llamadas-1.8-Reloj-Inteligente-Hombre-Ip68',
        image: images.smartwach4,
        price: 230000,
        discount: 35,
        category: 'smarwach',
        marca: 'Generico ',
        units: 200,
        shippingPrice: 0,
        numberOfOrderUnits: 1,
        get discountedPrice() {
            const discountFactor = 1 - this.discount / 100;
            return this.price * discountFactor;
        },
        description: 'recuerda preguntar por disponibilidad de colores, antes de realizar tu compra, ya que estamos sujetos a disponibilidad de inventario y en caso de no confirmar color, haremos el envío según disponibilidad de inventario el'
    },
]