import { createContext } from "react";
import { useForm, useFormProps } from "../hooks/useForm";

export const FormContext = createContext({} as useFormProps);

export function FormContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const form = useForm();

  return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
}
