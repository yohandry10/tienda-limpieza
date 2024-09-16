import React, { useState } from 'react';
import { Button } from "./components/ui/button";

// Navbar con fuente "Poppins"
const Navbar = () => (
    <nav className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-800 shadow-lg fixed w-full z-50 transition-all duration-300 ease-in-out font-poppins">
        <div className="flex items-center space-x-3">
            <img src="/images/logo1.webp" alt="InkaWash Logo" className="h-12 w-auto mr-2 transition-transform transform hover:scale-110 animate-pulse" />
            <h1 className="text-5xl font-bold text-indigo-600 dark:text-indigo-300 tracking-tight hover:text-indigo-800 transition-all duration-300 ease-in-out">
                InkaWash
            </h1>
        </div>
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline transition-all duration-300 ease-in-out flex items-center">
                Nosotros
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline transition-all duration-300 ease-in-out flex items-center">
                Preguntas
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline transition-all duration-300 ease-in-out flex items-center">
                Servicios
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline transition-all duration-300 ease-in-out flex items-center">
                Beneficios
            </a>
        </div>
        <button className="hidden md:inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600">
            Iniciar sesión
        </button>
    </nav>
);

// HeroBanner con fuente "Poppins", palabras clave resaltadas y botones modernos
const HeroBanner = () => {
    const handleScrollToPricing = () => {
        document.getElementById('pricing-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative bg-gray-100 dark:bg-gray-900 overflow-hidden h-screen font-poppins">
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="/images/hero3.jpg"
                    alt="Hero Background"
                />
            </div>
            <div className="relative z-10 flex items-center justify-center h-full text-center">
                <div className="px-4 sm:px-6 lg:px-8">
                    <h1 className="text-7xl font-extrabold text-white leading-tight animate__animated animate__fadeInDown">
                        <span className="text-purple-600">Conect</span><span className="text-white">a con trabajadoras</span> <span className="text-purple-600">independ</span><span className="text-white">ientes en limpieza cerca de ti</span>
                    </h1>
                    <p className="mt-8 text-2xl text-white animate__animated animate__fadeInUp">
                        Contrata YA el mejor servicio que se adapta a tus necesidades
                    </p>
                    <div className="mt-10 flex justify-center space-x-8 animate__animated animate__fadeInUp">
                        <button
                            onClick={handleScrollToPricing}
                            className="bg-transparent border-2 border-purple-600 text-purple-600 py-4 px-8 rounded-full hover:bg-purple-600 hover:text-white transition-transform transform hover:scale-105"
                        >
                            Saber más
                        </button>
                        <button
                            className="bg-white border-2 border-purple-600 text-purple-600 py-4 px-8 rounded-full hover:bg-purple-600 hover:text-white transition-transform transform hover:scale-105"
                        >
                            Regis<span className="text-gray-900">trate</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Sección de precios con ID "pricing-section" para el scroll
const PricingSection = () => (
    <div id="pricing-section" className="bg-white dark:bg-gray-800 py-20 font-poppins">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-center text-5xl leading-10 font-extrabold text-purple-600 dark:text-purple-400 mb-16">
                Elige el servicio a tu medida
            </h2>
            <div className="mt-16 flex justify-center space-x-10">
                <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-10 text-center transform transition duration-300 hover:scale-105 w-80 h-96">
                    <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">5 horas</h3>
                    <p className="text-gray-600 dark:text-gray-300">El que se adapta a ti y a tus horarios</p>
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-6">S/ 89</p>
                    <Button className="mt-8 w-full bg-purple-600 dark:bg-purple-500 text-white hover:bg-purple-700 dark:hover:bg-purple-600 transition-transform transform hover:scale-105">
                        Reservar
                    </Button>
                </div>
                <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-10 text-center border-2 border-green-500 transform transition duration-300 hover:scale-105 w-80 h-96">
                    <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">6 horas <span className="text-green-500">Popular</span></h3>
                    <p className="text-gray-600 dark:text-gray-300">El más popular por los clientes</p>
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-6">S/ 99</p>
                    <Button className="mt-8 w-full bg-purple-600 dark:bg-purple-500 text-white hover:bg-purple-700 dark:hover:bg-purple-600 transition-transform transform hover:scale-105">
                        Reservar
                    </Button>
                </div>
                <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-10 text-center transform transition duration-300 hover:scale-105 w-80 h-96">
                    <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">7 horas</h3>
                    <p className="text-gray-600 dark:text-gray-300">Para los amantes de la limpieza</p>
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-6">S/ 114</p>
                    <Button className="mt-8 w-full bg-purple-600 dark:bg-purple-500 text-white hover:bg-purple-700 dark:hover:bg-purple-600 transition-transform transform hover:scale-105">
                        Reservar
                    </Button>
                </div>
            </div>
        </div>
    </div>
);

// Nueva Sección: Ahorra 10% suscribiéndote
const DiscountSection = () => (
    <div className="relative bg-gray-100 py-32 font-poppins">
        <div className="absolute inset-0">
            <img
                className="w-full h-full object-cover opacity-30" // Imagen como fondo con transparencia
                src="/images/hero2.jpg"
                alt="Discount Background"
            />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div>
                <h2 className="text-5xl font-extrabold text-purple-600 mb-6">
                    Ahorra 10% suscribiéndote gratis a un plan de limpieza
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                    Contrata la ayuda de una Hadita en las siguientes frecuencias:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>1 vez a la semana</li>
                    <li>2 veces a la semana</li>
                    <li>Cada 2 semanas</li>
                </ul>
                <p className="text-lg text-gray-600 mb-6">
                    No te preocupes, puedes cancelar cuando quieras.
                </p>
                <button className="bg-purple-600 text-white px-6 py-3 hover:bg-purple-700 rounded-full">
                    Suscríbete
                </button>
            </div>
        </div>
    </div>
);


// Sección del Carrusel para seleccionar horas
const CarouselSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            title: "5 horas",
            description: "Poca cantidad de áreas, departamento pequeño donde realizan limpieza 1 vez a la semana.",
            image: "/images/5-hours.jpg",
        },
        {
            title: "6 horas",
            description: "Áreas más grandes, mayor número de ambientes, departamento donde realizan limpieza 2 veces en la semana.",
            image: "/images/6-hours.jpg",
        },
        {
            title: "7 horas",
            description: "Ideal para grandes áreas con mayor cantidad de ambientes o casas con mucho movimiento.",
            image: "/images/7-hours.jpg",
        },
    ];

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="bg-white dark:bg-gray-800 py-24 font-poppins">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-5xl font-extrabold text-purple-600 dark:text-purple-400 mb-12">
                    ¿Cuántas horas debo seleccionar?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-16 font-light leading-relaxed max-w-3xl mx-auto">
                    Revisa esta guía rápida e identifica tu hogar. <strong>Es una referencia, no una recomendación.</strong> Recuerda que el tiempo varía de acuerdo a las dimensiones de cada ambiente, tiempo que se dejó de limpiar, grado de suciedad acumulada, cantidad de muebles y productos idóneos para la limpieza.
                </p>
                <div className="flex justify-center items-center space-x-10 mb-12">
                    <button onClick={handlePrevious} className="text-purple-600 text-4xl hover:scale-110 transition">
                        &#8592;
                    </button>
                    <div className="w-96 h-auto p-10 bg-gray-100 rounded-lg shadow-lg" style={{ height: "550px" }}>
                        <img src={items[currentIndex].image} alt={items[currentIndex].title} className="w-full h-64 object-cover rounded" />
                        <h3 className="mt-4 text-2xl font-bold text-purple-600">{items[currentIndex].title}</h3>
                        <p className="mt-2 text-gray-600">{items[currentIndex].description}</p>
                    </div>
                    <button onClick={handleNext} className="text-purple-600 text-4xl hover:scale-110 transition">
                        &#8594;
                    </button>
                </div>

                <div className="flex justify-center mt-8">
                    {items.map((_, index) => (
                        <span
                            key={index}
                            className={`h-4 w-4 mx-3 rounded-full ${currentIndex === index ? 'bg-purple-600' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>

                <div className="mt-16">
                    <button className="bg-transparent border-2 border-purple-600 text-purple-600 py-3 px-8 rounded-full hover:bg-purple-600 hover:text-white transition">
                        ¿Qué incluye el servicio?
                    </button>
                </div>
            </div>
        </div>
    );
};

// Sección "La mejor opción para tu hogar"
const BenefitsSection = () => (
    <div className="bg-white py-20 font-poppins">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-extrabold text-purple-600 mb-12">
                La mejor opción para tu hogar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <div>
                    <img src="/images/icon-easy.png" alt="Fácil" className="mx-auto mb-6 w-16 h-16" />
                    <h3 className="text-2xl font-bold text-gray-700">Fácil</h3>
                    <p className="text-lg text-gray-600">
                        Conecta con una hadita en solo unos clicks.
                    </p>
                </div>
                <div>
                    <img src="/images/icon-trust.png" alt="Confiable" className="mx-auto mb-6 w-16 h-16" />
                    <h3 className="text-2xl font-bold text-gray-700">Confiable</h3>
                    <p className="text-lg text-gray-600">
                        Las trabajadoras independientes pasan por una estricta evaluación.
                    </p>
                </div>
                <div>
                    <img src="/images/icon-expert.png" alt="Experto" className="mx-auto mb-6 w-16 h-16" />
                    <h3 className="text-2xl font-bold text-gray-700">Experto</h3>
                    <p className="text-lg text-gray-600">
                        +30,000 servicios realizados a través de la plataforma Hadas.
                    </p>
                </div>
                <div>
                    <img src="/images/icon-secure.png" alt="Seguro" className="mx-auto mb-6 w-16 h-16" />
                    <h3 className="text-2xl font-bold text-gray-700">Seguro</h3>
                    <p className="text-lg text-gray-600">
                        Contamos con nuestro canal de WhatsApp para atender incidencias.
                    </p>
                </div>
            </div>
            <div className="mt-16">
                <button className="bg-transparent border-2 border-purple-600 text-purple-600 py-3 px-8 rounded-full hover:bg-purple-600 hover:text-white transition">
                    ¿Qué incluye el servicio?
                </button>
            </div>
        </div>
    </div>
);



const SafeCleaningServiceSection = () => (
    <div className="bg-gray-100 py-20 font-poppins">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-extrabold text-purple-600 mb-12">
                Servicio de limpieza seguro
            </h2>
            <h3 className="text-3xl font-semibold text-gray-600 mb-8">Protocolos</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                    <p className="text-lg text-gray-600">Medidas de limpieza de manos constante.</p>
                </div>
                <div className="text-center">
                    <p className="text-lg text-gray-600">Test sintomatológico diario.</p>
                </div>
                <div className="text-center">
                    <p className="text-lg text-gray-600">Medidas de llegada y salida del inmueble.</p>
                </div>
                <div className="text-center">
                    <p className="text-lg text-gray-600">Distanciamiento de 2 metros.</p>
                </div>
            </div>
            <h3 className="text-3xl font-semibold text-gray-600 mb-8">Implementos</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <p className="text-lg text-gray-600">Mascarilla de tela</p>
                </div>
                <div className="text-center">
                    <p className="text-lg text-gray-600">Gorro de tela</p>
                </div>
                <div className="text-center">
                    <p className="text-lg text-gray-600">Cubre zapatos</p>
                </div>
                <div className="text-center">
                    <p className="text-lg text-gray-600">Alcohol</p>
                </div>
            </div>
        </div>
    </div>
);

// Sección "Lo que dicen nuestros clientes"
const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            name: "Luis Bejar",
            text: "Muy atenta y cuidadosa con cada elemento que ha limpiado en mi hogar. Adicional a ello, nos brindó recomendaciones de lugares de la casa que debemos prestarle atención para que se mantengan limpia más tiempo. Muy amable y súper recomendada.",
        },
        {
            name: "Laura Zaninotto",
            text: "Excelente desempeño y predisposición con las tareas!",
        },
        {
            name: "Jaime Mendiola",
            text: "Super puntual, amable y dispuesta a escuchar algún consejo o idea. Los felicito por la buena capacitación a su personal.",
        },
    ];

    const handlePrevious = () => {
        setCurrentTestimonial(
            (prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1)
        );
    };

    const handleNext = () => {
        setCurrentTestimonial(
            (prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1)
        );
    };

    return (
        <div className="bg-gray-100 py-20 font-poppins">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <h2 className="text-5xl font-extrabold text-purple-600 mb-12">
                    Lo que dicen nuestros clientes
                </h2>
                <div className="flex justify-center items-center space-x-10 mb-12">
                    <button
                        onClick={handlePrevious}
                        className="text-purple-600 text-4xl hover:scale-110 transition"
                    >
                        &#8592;
                    </button>
                    <div className="w-96 p-10 bg-white rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-purple-600">{testimonials[currentTestimonial].name}</h3>
                        <p className="mt-4 text-gray-600">{testimonials[currentTestimonial].text}</p>
                    </div>
                    <button
                        onClick={handleNext}
                        className="text-purple-600 text-4xl hover:scale-110 transition"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </div>
    );
};

// Sección "Nuestras alianzas en la limpieza"
const PartnershipsSection = () => (
    <div className="bg-white py-20 font-poppins">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-extrabold text-purple-600 mb-12">
                Nuestras alianzas en la limpieza
            </h2>
            <div className="flex justify-center space-x-12">
                <img src="/images/logo-bbva.png" alt="BBVA" className="h-12" />
                <img src="/images/logo-interbank.png" alt="Interbank" className="h-12" />
                <img src="/images/logo-banbif.png" alt="BanBif" className="h-12" />
            </div>
        </div>
    </div>
);

// Sección "Sigue a Hadas en redes sociales"
const SocialMediaSection = () => (
    <div className="bg-gradient-to-r from-purple-100 to-white py-20 font-poppins">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div>
                <h2 className="text-5xl font-extrabold text-purple-600 mb-6">
                    ¿Deseas ver a las Haditas en acción? Sigue a Hadas en redes sociales
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    Encuentra a Hadas en facebook, instagram, tiktok, etc. Entérate de nuevas actualizaciones y promociones vigentes.
                </p>
                <button className="bg-purple-600 text-white px-6 py-3 hover:bg-purple-700 rounded-full">
                    Síguenos
                </button>
            </div>
            <div>
                <img src="/images/social-media-phone.png" alt="Redes sociales Hadas" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
        </div>
    </div>
);
const Footer = () => (
    <footer className="bg-gradient-to-r from-purple-700 to-indigo-900 text-white py-12 font-poppins">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo y descripción */}
            <div>
                <img src="/images/logo-footer.png" alt="InkaWash Logo" className="h-12 mb-4" />
                <p className="text-gray-300 mb-6">
                    InkaWash te conecta con las mejores trabajadoras independientes para limpiar tu hogar de manera fácil y rápida.
                </p>
            </div>

            {/* Mapa del sitio */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Mapa del sitio</h3>
                <ul>
                    <li className="mb-2"><a href="#" className="hover:text-purple-300 transition">Inicio</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-purple-300 transition">Servicios</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-purple-300 transition">Nosotros</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-purple-300 transition">Beneficios</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-purple-300 transition">Preguntas frecuentes</a></li>
                </ul>
            </div>

            {/* Contacto */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Contacto</h3>
                <p className="mb-2">Atención al cliente:</p>
                <p className="text-gray-300 mb-4">+51 998 402 706</p>
                <p className="mb-2">Correo electrónico:</p>
                <p className="text-gray-300">reservas@inkawash.com</p>
            </div>

            {/* Redes Sociales */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
                <div className="flex space-x-6">
                    <a href="#" className="text-white hover:text-purple-300 transition">
                        <i className="fab fa-facebook-f text-2xl"></i>
                    </a>
                    <a href="#" className="text-white hover:text-purple-300 transition">
                        <i className="fab fa-instagram text-2xl"></i>
                    </a>
                    <a href="#" className="text-white hover:text-purple-300 transition">
                        <i className="fab fa-twitter text-2xl"></i>
                    </a>
                    <a href="#" className="text-white hover:text-purple-300 transition">
                        <i className="fab fa-linkedin-in text-2xl"></i>
                    </a>
                </div>
            </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
                <p className="text-gray-400">&copy; 2024 InkaWash. Todos los derechos reservados.</p>
                <div className="space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition">Política de privacidad</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Términos y condiciones</a>
                </div>
            </div>
        </div>
    </footer>
);


// Página completa con todas las secciones
export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar />
            <HeroBanner />
            <PricingSection />
            <CarouselSection />
            <DiscountSection />
            <BenefitsSection />
            <SafeCleaningServiceSection />
            <TestimonialsSection />
            <PartnershipsSection />
            <SocialMediaSection />
            <Footer/>
        </div>
    );
}
