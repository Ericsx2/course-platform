import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { api } from "../../api";
import { signIn } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import {
  Checkbox,
  CheckboxWrapper,
  Container,
  Error,
  Form,
  FormContainer,
  FormSection,
  Image,
  ImageSection,
  LoginButton,
} from "./styles";

import sectionImage from "../../assets/section_image.png";
import Input from "../../components/Input";
import { useAppSelector } from "../../hooks/useAppSelector";
import { toast } from "react-toastify";

const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email Obrigatório" })
    .email("Email precisa ser válido"),
  password: z.string().min(1, { message: "Senha Obrigatória" }),
  remember: z.boolean(),
});

type LoginData = z.infer<typeof LoginSchema>;

export default function Login() {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
    mode: "onBlur",
  });

  useEffect(() => {
    if (id) {
      navigate("/", { replace: true });
    }
  }, [id]);

  async function formSubmit(data: LoginData) {
    const { email, password } = LoginSchema.parse(data);

    try {
      const response = await toast.promise(
        api.post("/auth/login", { email, password }),
        {
          pending: "Aguarde, Carregando...",
          success: "Login efetuado com sucesso",
          error: "Ops... Algo deu Errado",
        }
      );
      dispatch(signIn(response.data));
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <FormSection>
        <h1>Logo</h1>
        <FormContainer>
          <h1>Faça seu Login</h1>
          <Form onSubmit={handleSubmit(formSubmit)}>
            {loginError ? <Error>{loginError}</Error> : null}
            <Input
              name="email"
              label="Email"
              placeholder="email@example.com"
              register={register}
              options={{ required: true }}
              error={errors.email}
            />
            <Input
              name="password"
              label="Senha"
              type="password"
              placeholder="*********"
              register={register}
              options={{ required: true }}
              error={errors.password}
            />
            <CheckboxWrapper>
              <Checkbox>
                <input
                  type="checkbox"
                  {...register("remember", { value: false })}
                />
                <label htmlFor="">Lembrar-me</label>
              </Checkbox>
              <Link to="/recovery_password">Esqueceu sua senha</Link>
            </CheckboxWrapper>
            <LoginButton>Entrar</LoginButton>
            <span>
              Não possui conta <Link to="/register">Cadastre -se</Link>
            </span>
          </Form>
        </FormContainer>
      </FormSection>
      <ImageSection>
        <Image src={sectionImage} />
      </ImageSection>
    </Container>
  );
}
