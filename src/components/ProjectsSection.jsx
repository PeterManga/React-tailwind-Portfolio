import { ArrowRight, ExternalLink, Github } from "lucide-react";
// Seccion de proyectos
const projects = [
    {
        id: 1,
        title: "API Sistema de cartelería digital",
        description: "REST API diseñada para darle soporte a la parte frontend del mismo proyecto.",
        image: "/projects/restAPI.png",
        tags: ["Node.js", "Express", "MongoDB", "Mongoose","JWT","Cloudinary"],
        demoUrl: "#",
        githubUrl: "https://github.com/PeterManga/Api-Insyde.git",
    },
    {
        id: 2,
        title: "Sistema de carteleria digital",
        description:
            "Dashboard interactivo de cartelería digital con capacidades de visualización de datos y filtrado.",
        image: "./projects/login insyde.png",
        tags: ["tanstack", "Bootstrap", "React.js", "Axios", "redux","vercel"],
        demoUrl: "#",
        githubUrl: "https://github.com/PeterManga/CRUD-API-INSYDE.git",
    },
    {
        id: 3,
        title: "Automatizacion: Web scraping",
        description:
            "Automatización en la plataforma make.com que permite obtener datos de un archivo con urls, comprobar que tienen los descuentos solicitados y enviar un correo electrónico con el resultado.",
        image: "./projects/Buscardescuentos.png",
        tags: ["Make.com", "request", "Google apis"],
        demoUrl: "#",
        githubUrl: "https://github.com/PeterManga/Automatizaciones/blob/master/Buscar%20descuentos.png",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Algunos <span className="text-primary"> Proyectos </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Aqui están algunos de mis proyectos, se subirán más en los próximos días
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.src = "/projects/placeholder.png";
                                        e.target.alt = "Imagen no disponible";
                                    }}
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span 
                                            key={`${project.id}-${tag}-${tagIndex}`}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/PeterManga"
                    >
                        Comprueba mi Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};