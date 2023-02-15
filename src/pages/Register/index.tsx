import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import { ArrowLeft } from "phosphor-react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { api } from "../../api";

import {
  Checkbox,
  CheckboxWrapper,
  Container,
  Form,
  FormContainer,
  FormContainerHeader,
  FormSection,
  Image,
  ImageSection,
  InputGroup,
  LoginLink,
  RegisterButton,
} from "./styles";

import sectionImage from "../../assets/section_image.png";
import Input from "../../components/Input";

const RegisterSchema = z
  .object({
    name: z.string().min(1, "Nome Obrigatório"),
    last_name: z.string().min(1, "Sobrenome Obrigatório"),
    email: z.string().email("Email Obrigatório"),
    password: z.string().min(1, "Senha Obrigatória"),
    confirm: z.string().min(1, "Confirme Sua Senha"),
    cpf: z.string().min(1, "CPF Obrigatório"),
    birth_date: z.string().min(1, "Data de Nascimento Obrigatória"),
    cel_number: z.string(),
    zip_code: z.string().min(1, "CEP Obrigatório"),
    city: z.string().min(1, "Cidade Obrigatório"),
    state: z.string().min(1, "Estado Obrigatório"),
    neighborhood: z.string().min(1, "Bairro Obrigatório"),
    street: z.string().min(1, "Rua Obrigatório"),
    number: z.string().min(1, "Número Obrigatório"),
    complement: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Senhas não Coincidem",
    path: ["confirm"],
  });

type RegisterData = z.infer<typeof RegisterSchema>;

export default function Register() {
  const [page, setPage] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
    mode: "onBlur",
  });
  const navigate = useNavigate();
  const { id } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (id) {
      navigate("/", { replace: true });
    }
  }, [id]);

  async function onSubmit(data: RegisterData) {
    const parsedData = RegisterSchema.parse(data);
    try {
      await toast.promise(api.post("/users", parsedData), {
        pending: "Aguarde, Carregando...",
        success: "CAdastro efetuado com sucesso",
        error: "Ops... Algo deu Errado",
      });
      navigate("/login", { replace: true });
    } catch (err) {
      console.log(err);
    }
  }

  function isAbleToContinue() {
    const { name, last_name, email, password, confirm, cpf, birth_date } =
      touchedFields;

    return (
      !name ||
      !last_name ||
      !email ||
      !password ||
      !confirm ||
      !cpf ||
      !birth_date
    );
  }

  return (
    <Container>
      <ImageSection>
        <Image src={sectionImage} />
      </ImageSection>
      <FormSection>
        <FormContainer>
          <FormContainerHeader>
            {page === 2 ? (
              <button onClick={() => setPage(1)}>
                <ArrowLeft size={22} />
              </button>
            ) : null}
            <h1>Dados Pessoais</h1>
          </FormContainerHeader>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {page === 1 ? (
              <>
                <InputGroup>
                  <Input
                    name="name"
                    label="Nome"
                    placeholder="John"
                    register={register}
                    error={errors.name}
                    options={{ required: true }}
                  />
                  <Input
                    name="last_name"
                    label="Sobrenome"
                    placeholder="Doe"
                    register={register}
                    error={errors.last_name}
                    options={{ required: true }}
                  />
                </InputGroup>
                <Input
                  name="email"
                  label="Email"
                  placeholder="email@domain.com"
                  register={register}
                  error={errors.email}
                  options={{ required: true }}
                />
                <InputGroup>
                  <Input
                    name="password"
                    label="Senha"
                    placeholder="********"
                    type="password"
                    register={register}
                    error={errors.password}
                    options={{ required: true }}
                  />
                  <Input
                    name="confirm"
                    label="Confirme sua senha"
                    placeholder="********"
                    type="password"
                    register={register}
                    error={errors.confirm}
                    options={{ required: true }}
                  />
                </InputGroup>
                <InputGroup>
                  <Input
                    name="cpf"
                    label="CPF"
                    placeholder="Apenas números"
                    register={register}
                    error={errors.cpf}
                    options={{ required: true }}
                  />
                  <Input
                    name="birth_date"
                    label="Data de Nascimento"
                    type="date"
                    register={register}
                    error={errors.birth_date}
                    options={{ required: true }}
                  />
                </InputGroup>
                <Input
                  name="cel_number"
                  label="Telefone"
                  placeholder="Apenas Números"
                  register={register}
                  error={errors.cel_number}
                />
                <RegisterButton
                  onClick={() => setPage(2)}
                  disabled={isAbleToContinue()}
                >
                  Próximo
                </RegisterButton>
                <LoginLink>
                  Já possui Cadastro <Link to="/login">Faça Login</Link>
                </LoginLink>
              </>
            ) : null}
            {page === 2 ? (
              <>
                <Input
                  name="zip_code"
                  label="CEP"
                  placeholder="45780000"
                  register={register}
                  error={errors.zip_code}
                  options={{ required: true }}
                />
                <InputGroup>
                  <Input
                    name="city"
                    label="Cidade"
                    placeholder="Salvador"
                    register={register}
                    error={errors.city}
                    options={{ required: true }}
                  />
                  <Input
                    name="state"
                    label="Estado"
                    placeholder="Bahia"
                    register={register}
                    error={errors.state}
                    options={{ required: true }}
                  />
                </InputGroup>
                <Input
                  name="street"
                  label="Rua"
                  placeholder="Rua Santa Helena"
                  register={register}
                  error={errors.street}
                  options={{ required: true }}
                />
                <InputGroup>
                  <Input
                    name="neighborhood"
                    label="Bairro"
                    placeholder="Alphaville"
                    register={register}
                    error={errors.neighborhood}
                    options={{ required: true }}
                  />
                  <Input
                    name="number"
                    label="Número"
                    placeholder="79"
                    register={register}
                    error={errors.number}
                    options={{ required: true }}
                  />
                </InputGroup>
                <Input
                  name="complement"
                  label="Complemento"
                  placeholder="Casa, Apto, ..."
                  register={register}
                  error={errors.complement}
                />
                <CheckboxWrapper>
                  <Checkbox type="checkbox" id="newsletter" />
                  <label htmlFor="newsletter">
                    Quero Receber Dicas e conteúdos
                  </label>
                </CheckboxWrapper>
                <RegisterButton>Finalizar Cadastro</RegisterButton>
              </>
            ) : null}
          </Form>
        </FormContainer>
      </FormSection>
    </Container>
  );
}
