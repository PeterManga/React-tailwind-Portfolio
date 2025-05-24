import {
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
} from "lucide-react";
import emailjs from '@emailjs/browser'
import { cn } from "@/lib/utils";
import { useToast } from "./hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Verificar que las variables de entorno existen
        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error('Faltan variables de entorno de EmailJS');
            toast({
                title: "Error de configuración",
                description: "Por favor contacta al administrador.",
                variant: "destructive",
                
            });
            setIsSubmitting(false);
            return;
        }

        // Datos del template
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Pedro',
        };

        try {
            const result = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                {
                    publicKey: publicKey,
                }
            );

            console.log('Email enviado exitosamente:', result);
            toast({
                title: "¡Mensaje enviado!",
                description: "Gracias por tu mensaje. Te responderé pronto.",
                variant: "success",
                className: "border-blue-500/50 bg-blue-50 text-blue-900 dark:bg-blue-950 dark:text-blue-100",


            });
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error('Error al enviar email:', error);
            toast({
                title: "Error al enviar",
                description: "Algo salió mal. Por favor intenta de nuevo.",
                variant: "destructive",
                className: "border-red-500/50 bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-100 dark:border-red-500/50"

            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Ponte en <span className="text-primary"> Contacto</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    ¿Tienes un proyecto en el que necesites ayuda?, Cuenta conmigo.
                    Siempre estoy listo para darle un plus a tus ideas.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Información de contacto
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email </h4>
                                    <a
                                        href="mailto:man.pedrom@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        man.pedrom@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Teléfono </h4>
                                    <a
                                        href="tel:+34612483562"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +34-612-483-562
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Localización</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Gandia, Valencia, España
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Contacta conmigo </h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/pedro-francisco-m-154481252" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Enviar mensaje</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Tu nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="The best recruiter :)"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Tu correo electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="talento@gmail.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Tu mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hola, me gustaría hablarte de una iniciativa..."
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                    isSubmitting && "opacity-50 cursor-not-allowed"
                                )}
                            >
                                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};