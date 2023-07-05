import { useContext } from "react";
import { FormContext } from "../../context/Form";
import { useForm, useFormState } from "react-hook-form";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Button from "../../components/GoBackButton";
import * as Styled from "./styles";
import "react-toastify/dist/ReactToastify.css";

const CompanyScheema = zod.object({
  name: zod
    .string()
    .min(
      10,
      "O nome da empresa deve conter pelo menos 4 caracteres. Por favor, insira um nome válido antes de prosseguir."
    ),
  employes: zod
    .number()
    .min(
      5,
      "É necessário ter no mínimo 5 funcionários na empresa. Por favor, insira um número válido de funcionários antes de prosseguir."
    )
    .max(60),
  about: zod
    .string()
    .min(
      5,
      `A descrição deve conter pelo menos 5 caracteres. Por favor, forneça uma descrição adequada antes de prosseguir.`
    ),
});

type CompanyFormProps = zod.infer<typeof CompanyScheema>;

export default function Company() {
  const { addCompanyValuesInForm, company } = useContext(FormContext);
  const { register, formState, handleSubmit } = useForm<CompanyFormProps>({
    resolver: zodResolver(CompanyScheema),
    defaultValues: {
      name: company ? company.name : "",
      employes: company ? company.employes : 0,
      about: company ? company.about : "",
    },
    mode: "onChange",
    delayError: 0,
  });
  const navigate = useNavigate();

  function handleForm({ name, employes, about }: CompanyFormProps) {
    addCompanyValuesInForm({ name, employes, about });
    navigate("/project");
  }

  function activeToast(type: keyof CompanyFormProps) {
    if (type === "name" && formState.errors.name) {
      toast.error(formState.errors.name.message);
    }

    if (type === "employes" && formState.errors.employes) {
      toast.error(
        "É necessário ter no mínimo 5 funcionários na empresa. Por favor, insira um número válido de funcionários antes de prosseguir."
      );
    }

    if (type === "about" && formState.errors.about) {
      toast.error(formState.errors.about.message);
    }
  }

  return (
    <Styled.Container onSubmit={handleSubmit(handleForm)}>
      <Styled.Wrap>
        <Styled.Label htmlFor="name">Nome da empresa</Styled.Label>
        <Styled.Input
          type="text"
          id="name"
          placeholder={company ? company.name : "Qual é o nome da empresa"}
          {...register("name")}
          onBlur={() => activeToast("name")}
        />
      </Styled.Wrap>
      <Styled.Wrap>
        <Styled.Label htmlFor="employees">Número de funcionários</Styled.Label>
        <Styled.Input
          type="number"
          id="employees"
          placeholder={company ? company.employes.toString() : "0"}
          min={5}
          max={60}
          step={5}
          {...register("employes", { valueAsNumber: true })}
          onBlur={() => activeToast("employes")}
        />
      </Styled.Wrap>
      <Styled.Wrap>
        <Styled.Label htmlFor="about">Sobre seu negócio</Styled.Label>
        <Styled.TextArea
          id="about"
          placeholder={
            company
              ? company.about
              : "Fale um pouco sobre seus produtos ou serviços"
          }
          {...register("about")}
          onBlur={() => activeToast("about")}
        />
      </Styled.Wrap>
      <Styled.Row>
        <Button title="Voltar" backTo="/" />
        <Styled.Button disabled={!formState.isValid}>continuar</Styled.Button>
      </Styled.Row>
      <ToastContainer />
    </Styled.Container>
  );
}
