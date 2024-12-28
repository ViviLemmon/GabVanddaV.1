import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const accessLevels = [
  {
    value: "adm_major",
    label: "Administrador Major (Vereador)",
    description: "Acesso total ao sistema",
  },
  {
    value: "adm_senior",
    label: "Administrador Senior",
    description: "Poderes delegados pelo vereador",
  },
  {
    value: "operador_legislativo",
    label: "Operador Legislativo",
    description: "Acesso às funcionalidades legislativas",
  },
  {
    value: "operador_parlamentar",
    label: "Operador Parlamentar",
    description: "Acesso às funcionalidades parlamentares",
  },
  {
    value: "operador_terceirosetor",
    label: "Operador Terceiro Setor",
    description: "Acesso às parcerias e projetos sociais",
  },
  {
    value: "equipe_comunicacao",
    label: "Equipe de Comunicação",
    description: "Gestão de comunicação e mídias",
  },
  {
    value: "lideranca_campanha",
    label: "Liderança de Campanha",
    description: "Gestão de atividades de campanha",
  },
  {
    value: "lideranca_poscampanha",
    label: "Liderança Pós-Campanha",
    description: "Gestão de relacionamento pós-campanha",
  },
  {
    value: "instituicao",
    label: "Instituição",
    description: "Acesso institucional limitado",
  },
];

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  document: z.string().min(11, "CPF/CNPJ inválido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  accessLevel: z.string({
    required_error: "Selecione um nível de acesso",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function TeamRegistrationForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      document: "",
      email: "",
      phone: "",
      accessLevel: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    // Aqui você implementaria a lógica de salvamento
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Cadastro de Equipe</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Nome do membro da equipe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="document"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CPF/CNPJ</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o CPF ou CNPJ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="email@exemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="(00) 00000-0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="accessLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nível de Acesso</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um nível de acesso" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {accessLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Cadastrar Membro
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default TeamRegistrationForm;
