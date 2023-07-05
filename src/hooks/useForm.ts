import { useState } from "react";

export type Form = {
  contact: Contact;
  company: Company;
  subject: string;
};

export interface Contact {
  name: string;
  phones_number: string;
  email: string;
}

export interface Company {
  name: string;
  employes: number;
  about: string;
}

export interface useFormProps {
  contact: Contact;
  company: Company;
  subject: string;
  addContactValuesInForm: (values: Contact) => void;
  addCompanyValuesInForm: (values: Company) => void;
  addSubjectValuesInForm: (values: string) => void;
}

export function useForm(): useFormProps {
  const [form, setForm] = useState<Form>({} as Form);

  function addContactValuesInForm(values: Contact): void {
    setForm((oldValue) => ({ ...oldValue, contact: values }));
  }

  function addCompanyValuesInForm(values: Company): void {
    setForm((oldValue) => ({ ...oldValue, company: values }));
  }

  function addSubjectValuesInForm(value: string): void {
    setForm((oldValue) => ({ ...oldValue, subject: value }));
  }

  return {
    ...form,
    addContactValuesInForm,
    addCompanyValuesInForm,
    addSubjectValuesInForm,
  };
}
