import { Mail, Linkedin, Phone, PhoneCall, PhoneCallIcon, PhoneForwarded, PhoneIncoming, PhoneMissed, PhoneOff, MapPin, Instagram, Twitter, Send } from "lucide-react"
import { cn } from "../lib/utils";
import emailjs from "emailjs-com"
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

export const ContactSection = () => {

    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [isSubmiting, setIsSubmiting] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmiting(true);
      
        emailjs
          .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            event.target,
            import.meta.env.VITE_PUBLIC_KEY
          )
          .then(() => {
            setFormData({ name: "", email: "", message: "" });
      
            toast({
              title: "Message Sent!",
              description: "Thank you for your message. I'll get back to you soon.",
            });
          })
          .catch(() => {
            toast({
              title: "Oops! Something went wrong.",
              description: "Please try again later.",
              variant: "destructive",
            });
          })
          .finally(() => {
            setIsSubmiting(false);
          });
      };
      


    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
                    Get In <span className="text-primary text-glow">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new oppurtinities.
                </p>
                <div className="grid gridco1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">

                            {/* Mail */}

                            <div className="flex items-center space-x-4 bg-card rounded-full p-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <a href="mailtolikosertugrul128@gmail.com" target="_blank"
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300">likosertugrul128@gmail.com</a>
                                </div>
                            </div>

                            {/* Phone */}

                            <div className="flex items-center space-x-4 bg-card rounded-full p-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <PhoneCall className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <a href="tel:+905312351381" target="_blank"
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300">+ 90 531 235 13 81 </a>
                                </div>
                            </div>

                            {/* Location */}

                            <div className="flex items-center space-x-4 bg-card rounded-full p-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <a className="text-muted-foreground hover:text-primary transition-colors duration-300">Istanbul, Turkey</a>
                                </div>
                            </div>

                            {/* Linkedin */}

                            {/* <div className="flex items-center space-x-4 bg-card rounded-full p-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Linkedin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/likosertugrul/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300">Linkedin</a>
                                </div>
                            </div> */}
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/likosertugrul/" target="_blank"><Linkedin /></a>
                                <a href="https://www.linkedin.com/in/likosertugrul/" target="_blank"><Instagram /></a>
                                <a href="https://www.linkedin.com/in/likosertugrul/" target="_blank"><Twitter /></a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-2xl">
                        <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>

                            {/* Name */}

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text"
                                       id="name"
                                       value={formData.name}
                                       name="name"
                                       required
                                       className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                       placeholder="John Doe..."
                                       onChange={(event) => setFormData({...formData, name:event.target.value})}
                                       />
                            </div>

                            {/* Email */}

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input type="email"
                                       id="email"
                                       value={formData.email}
                                       name="email"
                                       required
                                       className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                       placeholder="johndoe@example.com"
                                       onChange={(event) => setFormData({...formData, email:event.target.value})}
                                       />
                            </div>

                            {/* Message */}

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                       id="message"
                                       name="message"
                                       value={formData.message}
                                       required
                                       className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                       placeholder="How you doin?"
                                       onChange={(event) => setFormData({...formData, message:event.target.value})}
                                       />
                            </div>

                            <button type="submit"
                                    disabled={isSubmiting}
                                    className={cn("cosmic-button w-full flex items-center justify-center gap-2" )}>
                                        {isSubmiting ? "Sending..." : "Send Message"}
                                        <Send size={16}/>
                                    </button>

                        </form>
                    </div>
                </div>
            </div >
        </section>
    )
}