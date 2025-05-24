import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary"> Mi</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Programador apasionado y especialista en IA
                        </h3>

                        <p className="text-muted-foreground">
                            Como desarrollador web, me enfoco en crear soluciones digitales personalizadas y de alto rendimiento. 
                            Mi experiencia va más allá de la creación de sitios web atractivos: 
                            también ofrezco integración con herramientas de automatización de procesos, como Make.com, y el desarrollo de aplicaciones 
                            que incorporan inteligencia artificial para optimizar flujos de trabajo. 
                        </p>

                        <p className="text-muted-foreground">
                            Si buscas potenciar tu presencia online con tecnologías emergentes, soy la persona indicada para llevar tu proyecto a un nivel más eficiente y automatizado.

                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Ponerse en contacto
                            </a>

                            <a
                                href="https://www.canva.com/design/DAGfxlINwuk/mewY2dqvbHfJOYHwIDzG-g/edit?utm_content=DAGfxlINwuk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Descargar CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> full stack Development</h4>
                                    <p className="text-muted-foreground">
                                        Creación de sitios y aplicaciones utilizando frameworks modernos.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Agentes IA / Automatizaciones IA</h4>
                                    <p className="text-muted-foreground">
                                        Implementando los agentes IA y herramientas que hacen uso de la inteligencia artificail en entornos corporativos.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Análisis de datos e inteligencia artifical</h4>
                                    <p className="text-muted-foreground">
                                        Utilización de datos para optimizar la toma de decisiones.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Administración de sistemas informáticos y redes</h4>
                                    <p className="text-muted-foreground">
                                        Dar soporte técnico
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}