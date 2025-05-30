import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin,  Rss,  Crop, Pencil, Computer, Book, Rocket, Speech,Github,Facebook,Instagram } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/nicolas-morgani/",
    },
    {
        id: 2,
        logo: <Github  size={30} strokeWidth={1} />,
        src: "https://github.com/NicolasMorgani",
    },
    {
        id: 3,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "https://www.facebook.com/nicolas.morgani?mibextid=ZbWKwL",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/niicomorgani/profilecard/?igsh=ZHUzNGJmZnl4OWUw",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Fullstack Developer",
        subtitle: "ConsulTIC",
        description: "Colabora con un equipo dinámico para desarrollar soluciones funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "Nov 2023 ",
    },
    {
        id: 2,
        title: "Creador de Experiencias Digitales",
        subtitle: "LucytaGames",
        description: "Desarrollador gaming y de experiencias interactivas para dispositivos móviles, especializado en crear juegos innovadores y envolventes. Apasionado por la tecnología y el diseño, con enfoque en la calidad y la experiencia del usuario.",
        date: "May 2021",
    },
    {
        id: 3,
        title: "Metodologias Agiles y buenas practicas de Programacion",
        subtitle: "Operacion Rosario",
        description: "Desarrollador de experiencia digital e interactiva para dispositivos moviles con contenido didactico disponible en tienda PlayStore para todos los dispositivos Android .",
        date: "Ago 2019",
    },
    {
        id: 4,
        title: "Trabajo colaborativo",
        subtitle: "Proyectos Personales",
        description: "Programador versátil con conocimientos en varios lenguajes de programación, bases de datos y diversos frameworks. Apasionado por la tecnología, enfocado en soluciones eficientes y de alta calidad para proyectos innovadores",
        date: "Mar 2018",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 5,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "cursos de programacion",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/cod1.png",
        urlGithub: "https://github.com/NicolasMorgani/my-portfolio",
        urlDemo: "https://github.com/NicolasMorgani",
    },
    {
        id: 2,
        title: "Operacion Rosario",
        image: "/cod2.png",
        urlGithub: "https://github.com/NicoMorgani/repo1/tree/main/repo1-nico-next",
        urlDemo: "https://oprosario.vercel.app/",
    },
    {
        id: 3,
        title: "Data-Persistence",
        image: "/cod3.png",
        urlGithub: "https://github.com/NicoMorgani/Data-Persistence-Project",
        urlDemo: "https://github.com/NicolasMorgani",
    },
    {
        id: 4,
        title: "Backend Auth",
        image: "/niqui.png",
        urlGithub: "https://github.com/NicolasMorgani/probando-nest-restapi",
        urlDemo: "https://github.com/NicolasMorgani",
    },
    {
        id: 5,
        title: "Api Gateway",
        image: "/saan.png",
        urlGithub: "https://github.com/NicolasMorgani/Api-Gateway",
        urlDemo: "https://github.com/NicolasMorgani",
    },
    {
        id: 6,
        title: "Microservice-Security",
        image: "/celuu.png",
        urlGithub: "https://github.com/NicolasMorgani/ms-auth",
        urlDemo: "https://github.com/NicolasMorgani",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/sarmar.png",
        urlGithub: "https://github.com/NicolasMorgani/lucydiamondpage",
        urlDemo: "https://san-martin-page.vercel.app/",
    },
    {
        id: 8,
        title: "Simulador-Recolector",
        image: "/simuladorcamion.png",
        urlGithub: "https://github.com/NicolasMorgani/Simulador-Recolector-de-Residuos",
        urlDemo: "https://github.com/NicolasMorgani/Simulador-Recolector-de-Residuos",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];