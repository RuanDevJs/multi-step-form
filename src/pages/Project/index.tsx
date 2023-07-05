import { useContext } from "react";
import { FormContext } from "../../context/Form";
import { useForm } from "react-hook-form";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

import * as Styled from "./styles";
import "react-toastify/dist/ReactToastify.css";
import GoBackButton from "../../components/GoBackButton";

const ProjectScheema = zod.object({
  subject: zod
    .string()
    .min(10, "Por favor, não esqueça de colocar os objetivos do projeto."),
});

type ProjectScheema = zod.infer<typeof ProjectScheema>;

export default function Project() {
  const { addSubjectValuesInForm, subject } = useContext(FormContext);
  const { register, formState, handleSubmit } = useForm<ProjectScheema>({
    resolver: zodResolver(ProjectScheema),
    defaultValues: {
      subject: subject ? subject : "",
    },
    mode: "onChange",
    delayError: 0,
  });

  function handleForm({ subject }: ProjectScheema) {
    addSubjectValuesInForm(subject);
    toast.success("Formulário enviado com sucesso!");
  }

  function activeToast() {
    if (formState.errors.subject) {
      toast.error(formState.errors.subject.message);
    }
  }

  return (
    <Styled.Container onSubmit={handleSubmit(handleForm)}>
      <Styled.Wrap>
        <Styled.Label htmlFor="about">Sobre seu negócio</Styled.Label>
        <Styled.TextArea
          id="about"
          placeholder={
            subject ? subject : "Fale um pouco sobre seus produtos ou serviços"
          }
          {...register("subject")}
          onBlur={() => activeToast()}
        />
      </Styled.Wrap>
      <Styled.Row>
        <GoBackButton title="Voltar" backTo="/company" />
        <Styled.Button disabled={!formState.isValid}>continuar</Styled.Button>
      </Styled.Row>
      <ToastContainer />
    </Styled.Container>
  );
}
