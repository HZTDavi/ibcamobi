import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const MembershipSection = () => {
  const [loading, setLoading] = useState(false);
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      type: "",
      message: ""
    }
  });
  
  const onSubmit = (data: any) => {
    setLoading(true);
    
    // Format the WhatsApp message with line breaks
    const membershipType = {
      member: "Membro",
      congregate: "Congregado",
      info: "Mais Informações"
    }[data.type] || "Interesse não especificado";
    
    const whatsappMessage = encodeURIComponent(
      `Solicitação para ser membro:\n\n` +
      `Nome: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Telefone: ${data.phone}\n` +
      `Endereço: ${data.address}\n` +
      `Interesse: ${membershipType}\n\n` +
      `Mensagem: ${data.message || "Não informada"}`
    );
    
    const whatsappUrl = `https://wa.me/5555997046505?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Reset the form and show success message
    form.reset();
    setLoading(false);
    toast.success("Redirecionando para WhatsApp...");
  };
  
  return <section id="seja-membro" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <UserPlus className="h-8 w-8 text-church-secondary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-church-primary">
              Seja Membro
            </h2>
          </div>
          <div className="h-1 w-24 bg-church-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Faça parte da família Igreja Batista em Camobi
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-md">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-church-primary mb-4">Membro</h3>
                  <p className="mb-4">
                    Tornar-se membro é fazer um compromisso formal com a igreja, 
                    participando ativamente de sua vida e missão, com direito a 
                    voz e voto nas assembleias.
                  </p>
                </div>
                
                <div>
                  
                  
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-church-primary mb-6 text-center">
                Formulário de Interesse
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="name" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Digite seu nome" {...field} required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="email" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="phone" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Telefone</FormLabel>
                          <FormControl>
                            <Input placeholder="(xx) xxxxx-xxxx" {...field} required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="type" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Interesse</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value} required>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione uma opção" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="member">Ser Membro</SelectItem>
                              <SelectItem value="congregate">Ser Congregado</SelectItem>
                              <SelectItem value="info">Mais Informações</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />
                  </div>
                  
                  <FormField control={form.control} name="address" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Endereço</FormLabel>
                        <FormControl>
                          <Input placeholder="Rua, número, bairro" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={form.control} name="message" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Mensagem (opcional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Compartilhe mais sobre você e sua caminhada cristã" className="min-h-[100px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <div className="pt-4 text-center">
                    <Button type="submit" className="bg-church-secondary hover:bg-church-accent text-white px-8 py-3 text-lg" disabled={loading}>
                      {loading ? "Enviando..." : "Enviar Solicitação"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};

export default MembershipSection;
