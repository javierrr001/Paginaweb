import {Injectable} from '@angular/core';
import { Producto } from '../models/producto.models';
@Injectable ({providedIn: 'root'})
export class ProductosService{
    constructor(){
        console.log("Servicio listo para usar!!!");
    }
    private productos: Producto[] = [
        { 
            nombre: "PC Gamer Fire Green Plus Core I7 12700F 12th", 
            img: "https://mipclista.com/6539-home_default/pc-gamer-draco-green-plus-core-i5-12400f-12th.jpg",
            precio: 9500,
            descripcion: "Procesador: Intel Core i7 12700F, 2.1GHz/4.9GHz, 12 núcleos, 20 hilos, 25MB SmartCaché, Disco Sólido SSD: M.2 1TB NVMe PCIe, Memoria RAM: 32GB DDR5 5200MHz, Tarjeta Madre: B760, Tarjeta de Video: RTX3060 12GB, Monitor: Curvo FHD 24'' 100Hz, Fuente de Poder: 700W 80PLUS BRONZE, Incluye KIT GAMER HALION: Teclado + Mouse, Enfriamiento: Líquido 240 (2 radiadores)"
        },
        { 
            nombre: "PC Gamer Hero RGB Plus Core I9 12900KF 12th", 
            img: "https://mipclista.com/6510-home_default/pc-gamer-hero-rgb-plus-core-i9-12900f-12th.jpg",
            precio: 9999,
            descripcion: "Procesador: Intel Core i9 12900KF 3.2GHz/5.10GHz, 24 núcleos, 32 hilos, 36MB SmartCaché, Disco Sólido SSD: M.2 2TB NVMe PCIe, Memoria RAM: 128GB DDR5 5200MHz, Tarjeta Madre: B760 DDR5, Tarjeta de Video: RTX4070 12GB GDDR6X, Monitor: Samsung ODYSSEY Curvo 27'' 144Hz, Fuente de Poder: 850W GOLD GAMME MAX, Incluye: Teclado Mecánico + Mouse Logitech G203 6000DPI, Enfriamiento: Líquido 360 (3 radiadores)"
        },
        { 
            nombre: "PC Gamer View 51 Glass RGB Plus Core I9 14900K 14th", 
            img: "https://mipclista.com/6456-home_default/pc-gamer-firex8-rgb-plus-core-i9-13900k-13th.jpg",
            precio: 11500,
            descripcion: "Procesador: Intel Core i9-14900K 3.20/6.0GHz, 24 núcleos, 32 hilos, 36MB SmartCaché, Disco Sólido SSD: M.2 2TB NVMe PCIe, Memoria RAM: 64GB DDR5 5200MHz, Tarjeta Madre: Z790, Tarjeta de Video: RTX4090 24GB, Monitor: Samsung ODYSSEY Curvo 27'' 144Hz, Fuente de Poder: 1050W 80PLUS SILVER, Incluye: Teclado Mecánico + Mouse Logitech G203 6000DPI, Enfriamiento: Líquido 360 (3 radiadores)"
        },
        { 
            nombre: "Mouse", 
            img: "https://maxxicomp.com/5491-large_default/mouse-xtrike-me-gm-520-rgb-usb-gaming-programable.jpg",
            precio: 150,
            descripcion: "Mouse Xtrike Me GM-520 RGB USB gaming programable, perfecto para jugadores exigentes."
        },
        { 
            nombre: "Mouse Gamer Logitech G502 Hero", 
            img: "https://mipclista.com/6326-home_default/mouse-halion-cartoon-ha-m853-usb.jpg",
            precio: 350,
            descripcion: "Resolución: 100-25600 dpi, Tasa de USB: 1000 Hz (1ms), Microprocesador: 32-bit ARM, Cantidad de botones: 11, Sistemas operativos compatibles: ChromeOS, Windows 10, Windows 7, macOS 10.11"
        },
        { 
            nombre: "Mouse Gamer Logitech G203 Lightsync", 
            img: "https://mipclista.com/2276-home_default/mouse-gamer-logitech-g203-lightsync.jpg",
            precio: 250,
            descripcion: "Resolución del sensor: 8000 dpi, Cantidad de botones: 6, Interfaces: USB, Alcance máximo: 2.1 m"
        },
        { 
            nombre: "Monitor MSI Optix G242P 23.8 144Hz FHD", 
            img: "https://mipclista.com/3468-home_default/monitor-msi-optix-g242p-238-144hz.jpg",
            precio: 150,
            descripcion: "Monitor de juegos IPS, Tamaño: 23.8\", Tipo de panel: LCD de tipo IPS, Resolución: 1920 x 1080, Relación de aspecto: 16:9, Píxeles por pulgada (PPI): 92 PPI, Terminar: Anti-Glare / Matte, Brillo máximo: 250 CD / m2, Frecuencia de actualización: 144 Hz, Soporte de profundidad / color de bits: 6 bit+FRC (16,7 millones de colores), Compatibid HDR: Ninguna, Gama de colores: 94.6% DCI-P3, 127.7% sRGB, Tiempo de respuesta: 1 ms, Ángulo de visión (H x V): 178 x 178 °, Entradas: 2 x HDMI, 1 x DisplayPort 1.2, 1 x 3.5 mm, Consumo de energía: 25 W (típico), Ajuste de rotación: 180 ° (-90 a 90 °), Ajuste giratorio: 90 ° (-45 a 45 °), Ajuste de inclinación: -5 a 20 °"
        },
        { 
            nombre: "Monitor Samsung C27G55T 27 144HZ FHD", 
            img: "https://mipclista.com/2278-home_default/monitor-aoc-c2761-27.jpg",
            precio: 150,
            descripcion: "Laptop Intel Core i7 13700H 3.7GHz (Turbo 5.0GHz) 14 núcleos, 20 hilos, Disco Sólido SSD M.2 2TB, Memoria RAM 32GB DDR5 (4800MHz), Pantalla FHD 16.1'' (1920x1080) 144Hz, Tarjeta Video GeForce RTX 4070 8GB GDDR6, Teclado iluminado inglés, Webcam HD 720p, Windows 11 Home, 1x HDMI 2.1, 3x USB Tipo A 3.1 Gen 1, 1x USB Tipo C 3.1 Gen 1, 1x RJ45, Wifi 6E AX211 (Gig+), Bluetooth 5.3, Batería 6 celdas, Pantalla: Plana, Tamaño: 23.8'', Tipo de panel: IPS, Resolución de pantalla: FHD (1920x1080), Tasa de refresco: 144 Hz, Tiempo de respuesta: 1ms, Brillo: 240 cd/m2, Contraste: 1000:1, Puertos: HDMI y Display Port, Pantalla: 2k WQHD 2560x1440 Curvo, Proporción: WIDE (16:9), Curvatura de pantalla: 1500 R, Contraste: 80000000:1, Ángulo de visión: 178º / 178º, Freesync para disfrutar toda la acción sin parpadeos, Tecnología AMD FlickerFree, Tiempo de respuesta: 1MS(MPRT), Frecuencia: 144HZ, Puertos: VGA y HDMI"
        },
        { 
            nombre: "Monitor LG 24GN65R-B Ultragear IPS 24'' 144Hz FHD", 
            img: "https://mipclista.com/5336-home_default/monitor-lg-24gn65r-b-ultragear-ips-24-144hz.jpg",
            precio: 150,
            descripcion: "Laptop Intel Core i7 13700H 3.7GHz (Turbo 5.0GHz) 14 núcleos, 20 hilos, Disco Sólido SSD M.2 2TB, Memoria RAM 32GB DDR5 (4800MHz), Pantalla FHD 16.1'' (1920x1080) 144Hz, Tarjeta Video GeForce RTX 4070 8GB GDDR6, Teclado iluminado inglés, Webcam HD 720p, Windows 11 Home, 1x HDMI 2.1, 3x USB Tipo A 3.1 Gen 1, 1x USB Tipo C 3.1 Gen 1, 1x RJ45, Wifi 6E AX211 (Gig+), Bluetooth 5.3, Batería 6 celdas, Pantalla: Plana, Tamaño: 23.8'', Tipo de panel: IPS, Resolución de pantalla: FHD (1920x1080), Tasa de refresco: 144 Hz, Tiempo de respuesta: 1ms, Brillo: 240 cd/m2, Contraste: 1000:1, Puertos: HDMI y Display Port"
        },
        { 
            nombre: "Laptops Asus TUF Gaming F15 FX507Z 15.6” Core I5 12500H", 
            img: "https://mipclista.com/6585-home_default/laptop-hp-250-g9-156-core-i5-12th.jpg",
            precio: 3895,
            descripcion: "Procesador: Intel Core i5 12500H 2.5 GHz hasta 4.5 GHz, 12 Núcleos, 16 Hilos, Caché 18 MB, Discos Sólidos SSD: M.2 de 512GB NVMe y 1TB NVMe, RAM: 32GB DDR4 3200 MHz, Tarjeta de video: GeForce RTX 3050 (4GB GDDR6), Pantalla: 15.6\" FHD (1920 x 1080) 144Hz, Conectividad: Wifi 6 - Bluetooth® 5.2, Webcam: HD 720p, Puertos: 1 x HDMI 2.0b, 2 x USB 3.2 Gen 1, 2 x USB 3.2 Gen 2, 1 x RJ-45, Teclado: Retroiluminado - español, Batería: 4 celdas"
        },
        { 
            nombre: "Laptops HP 15-Fc0012iA 15.6’’ RYZEN 7 7730U", 
            img: "https://mipclista.com/6338-home_default/laptop-hp-250-g9-156-core-i7-1255u.jpg",
            precio: 150,
            descripcion: "Procesador: AMD Ryzen 7 7730U 2.xGHz/4.5GHz, 8 núcleos, 16 hilos, Smartcaché 16MB, Disco sólido SSD: M.2 1TB, Memoria RAM: 32GB DDR4, Pantalla: 15.6\" FHD, Gráficos: AMD Radeon Graphics, Puertos: 2 USB 3.0, HDMI, Tipo C, Teclado: español, Conector combinado con auriculares/micrófono, Bluetooth 5.0, Webcam, Batería: Iones de litio de 3 celdas y 41 Wh"
        },
        { 
            nombre: "Laptops HP Victus 16.1", 
            img: "https://mipclista.com/5346-home_default/laptop-hp-victus-156-core-i5-13th.jpg",
            precio:3500,
             descripcion: "Laptop Intel Core i7 13700H 3.7GHz (Turbo 5.0GHz) 14 núcleos, 20 hilos, Disco Sólido SSD M.2 2TB, Memoria RAM 32GB DDR5 (4800MHz), Pantalla FHD 16.1'' (1920x1080) 144Hz, Tarjeta Video GeForce RTX 4070 8GB GDDR6, Teclado iluminado inglés, Webcam HD 720p, Windows 11 Home, 1x HDMI 2.1, 3x USB Tipo A 3.1 Gen 1, 1x USB Tipo C 3.1 Gen 1, 1x RJ45, Wifi 6E AX211 (Gig+), Bluetooth 5.3, Batería 6 celdas"
        },
        { 
            nombre: "Laptops Acer Nitro 5 17.3 Core I7 12th Gen", 
            img: "https://mipclista.com/5619-large_default/laptop-acer-nitro-5-173-core-i7-12th-gen.jpg",
            precio: 5999,
            descripcion: "Procesador: Intel Core i7-12650H 2.7GHz/4.7GHz, 10 núcleos, 16 hilos, 24MB SmartCaché, Disco Sólido SSD: M.2 2TB NVMe, Memoria RAM: 32GB DDR5, Pantalla: 17.3'' FHD 144Hz IPS, Tarjeta de video: RTX 4050 6GB GDDR6, Conectividad: IEEE 802.11ax Wireless LAN / Ethernet (RJ45), Webcam: 1280 x 720 / Bluetooth 5.1, Puertos: 3x USB-A 3.2, 1x puerto USB Type-C, 1x puerto HDMI 2.0, Audio jack (3.5 mm), Sistema Operativo: Windows 11 Home, Teclado: Backlit Chiclet Keyboard Per-Key RGB español, Batería: Li-ion 90Wh"
        },
        { 
            nombre: "Laptops ASUS TUF Gaming FA506NF-HN004 15.6'' Ryzen 5", 
            img: "https://mipclista.com/6187-large_default/laptop-lenovo-ideapad-gaming-3-156-core-i5-12th.jpg",
            precio: 150,
            descripcion: "Procesador: AMD Ryzen 5 7535HS 3.30 / 4.55 GHz, 6 núcleos, 12 hilos, 19MB caché, Disco SSD: M.2 NVMe 512GB, Memoria RAM: 16GB DDR5, Pantalla: 15.6\" FHD (1920 x 1080), Tarjeta de video: RTX2050 4GB GDDR6, Conectividad: Wifi 6, Bluetooth 5.3, Puertos: 3x USB 3.2 Tipo-A Gen 1, 1x USB 3.2 Gen 2 Tipo-C (soporta DisplayPort), 1x RJ45, 1x HDMI, 1x Conector Micrófono/Audífono jack 3.5, Teclado: español, Batería: 3 Celdas 48Wh, Cámara web: Sí con micrófono incorporado"
        },
        { 
            nombre: "Laptops HP 255 G10 15.6'' Ryzen 3 7330U", 
            img: "https://mipclista.com/4473-large_default/laptop-hp-15ef2522la-156-ryzen-3.jpg",
            precio: 150,
            descripcion: "Procesador: AMD Ryzen™ 3 7330U 2.3GHz/4.3GHz, 4 núcleos, 8 hilos, 8MB caché L3, Disco Sólido SSD: M.2 1TB NVMe, Memoria RAM: 32GB DDR4, Pantalla: 15.6'' HD, Gráficos: AMD Radeon, Puertos: 2 USB SuperSpeed Type-A (5GB/s), 1 USB SuperSpeed Type-C (5GB/s), 1 RJ-45, 1 Combinación de auriculares y micrófono, 1 HDMI 1.4b, Webcam: HD 720p, Teclado: completo en español, Batería: Iones de litio de 3 celdas, 41Wh de larga duración HP"
        },
        { 
            nombre: "Camara Web HD Microsoft Lifecam Studio", 
            img: "https://mipclista.com/2282-home_default/camara-web-hd-microsoft-lifecam-studio.jpg",
            precio: 150,
            descripcion: "Dispositivo: Cámara Web, Resolución del sensor: 1080p HD, Captura de vídeo hasta 720p, Micrófono integrado, Plataformas de trabajo: Windows XP, Windows Vista SP1, Windows 7"
        },
        { 
            nombre: "Camara Web Logitech BRIO 105", 
            img: "https://mipclista.com/6322-home_default/camara-web-logitech-brio-4k-pro-ultra-hd-usb-30.jpg",
            precio: 150,
            descripcion: "Sensor de imagen: 2MP CMOS, Micrófono omnidireccional incorporado con alcance de hasta 1 m, Conectividad: Plug and Play USB-A, Campo visual diagonal (dFOV): 58°, Enfoque fijo, Lente especial de plástico de 4 elementos con revestimiento antirreflectante, Tapa de privacidad integrada, Opciones de montaje: Clip de montaje adjunto para monitores, pantallas LCD y portátiles"
        },
        { 
            nombre: "Camara Web 4K", 
            img: "https://mipclista.com/3760-home_default/camara-web-4k-.jpg",
            precio: 150,
            descripcion: "Material: ABS, Funciones: Built-in Microphone, Full HD camera, Tipo de conexión: USB, Sensor: CMOS, Formatos de video: AVI, Formatos de foto: BMP, JPG, Resolución: 3840 x 2560P, Longitud del cable: 1.5m, Formato de salida: M-JPEG, Control de parpadeo: 50Hz, Sistemas compatibles: Windows 2000/XP, Vista, Win7/Win8/Win10, Mac OS, Linux"
        },
    ];
    
    getProductos(): Producto[]
    {return this.productos;}

    getProducto(id:number) 
    {return this.productos[id];}
    
    buscarProductos (termino: string): Producto[]{
        let productosArr: Producto[]= [];
        termino = termino.toLocaleLowerCase();
        for(let i= 0;i < this.productos.length; i++){
            let producto = this.productos[i];
            let nombre = producto.nombre.toLocaleLowerCase();
            if(nombre.indexOf(termino)>=0){
                productosArr.push(producto)
            }
        }
        return productosArr;
    }
}