import { useContext, useEffect } from "react";
import { FormContext } from "../../context/Form";
import { useForm } from "react-hook-form";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

import * as Styled from "./styles";
import "react-toastify/dist/ReactToastify.css";

const ContactFormSchema = zod.object({
  name: zod.string().min(4, "Não esqueça de escrever seu nome!"),
  phone: zod
    .string()
    .min(10, "Por favor, coloque o telefone da sua companhia.")
    .max(10),
  email: zod
    .string()
    .min(5, "Verifique se seu e-mail foi digitado corretamente.")
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Verifique se seu e-mail foi digitado corretamente."
    ),
});

type ContactFormProps = zod.infer<typeof ContactFormSchema>;

export default function Contact() {
  const { contact, addContactValuesInForm } = useContext(FormContext);
  const { register, watch, handleSubmit, formState, setValue } =
    useForm<ContactFormProps>({
      resolver: zodResolver(ContactFormSchema),
      defaultValues: {
        name: contact ? contact.name : "",
        phone: contact ? contact.phones_number : "",
        email: contact ? contact.email : "",
      },
      mode: "onChange",
    });
  const navigate = useNavigate();

  function handleForm({ name, phone, email }: ContactFormProps) {
    addContactValuesInForm({ name, email, phones_number: phone });
    toast.success("Formulário preenchido com sucesso!");

    navigate("/company");
  }

  const phoneInputValue = watch("phone");

  if (phoneInputValue.length === 5) {
    setValue("phone", `${phoneInputValue}-`);
  }

  function activeToast(type: "name" | "phone" | "email") {
    if (type === "name" && formState.errors.name) {
      toast.error(formState.errors.name.message);
    }

    if (type === "phone" && formState.errors.phone) {
      toast.error(formState.errors.phone.message);
    }

    if (type === "email" && formState.errors.phone) {
      toast.error(formState.errors.phone.message);
    }
  }

  return (
    <Styled.Container onSubmit={handleSubmit(handleForm)} key="contact">
      <Styled.Wrap>
        <Styled.Label htmlFor="name">Nome</Styled.Label>
        <Styled.Input
          type="text"
          id="name"
          placeholder={contact ? contact.name : "Como prefere ser chamado"}
          {...register("name", {
            onBlur: () => activeToast("name"),
          })}
        />
      </Styled.Wrap>
      <Styled.Wrap>
        <Styled.Label htmlFor="phone">Telefone</Styled.Label>
        <Styled.Input
          type="text"
          id="phone"
          placeholder={
            contact ? contact.phones_number : "Digite seu número de WhatsApp"
          }
          maxLength={10}
          {...register("phone", {
            required: true,
          })}
          onBlur={() => activeToast("phone")}
        />
      </Styled.Wrap>
      <Styled.Wrap>
        <Styled.Label htmlFor="email">E-mail</Styled.Label>
        <Styled.Input
          type="email"
          id="email"
          placeholder={contact ? contact.email : "Digite seu e-mail"}
          {...register("email")}
          onBlur={() => activeToast("email")}
        />
      </Styled.Wrap>
      <ToastContainer />
      <Styled.Button disabled={!formState.isValid}>continuar</Styled.Button>
    </Styled.Container>
  );
}
