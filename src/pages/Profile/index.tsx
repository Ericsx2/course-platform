import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Container,
  FormFieldset,
  HeaderButton,
  InputGroup,
  ProfileContainer,
  ProfileForm,
  ProfileHeader,
  SubmitButton,
} from "./styles";
import Input from "../../components/Input";

const UserSchema = z.object({
  name: z.string(),
  last_name: z.string(),
  email: z.string(),
  cpf: z.string(),
  birth_date: z.string(),
  cel_number: z.string(),
});

const AddressSchema = z.object({
  zip_code: z.string(),
  city: z.string(),
  state: z.string(),
  neighborhood: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
});

type User = z.infer<typeof UserSchema>;
type Address = z.infer<typeof AddressSchema>;

function Profile() {
  const [page, SetPage] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User & Address>();

  function onSubmit(data: User & Address) {
    const userData = UserSchema.parse(data);
    const addressDara = AddressSchema.parse(data);
    console.log(userData);
    console.log(addressDara);
  }

  return (
    <Container>
      <ProfileContainer>
        <ProfileHeader>
          <HeaderButton onClick={() => SetPage(1)} active={page === 1}>
            Dados Pessoais
          </HeaderButton>
          <HeaderButton onClick={() => SetPage(2)} active={page === 2}>
            Endereço
          </HeaderButton>
        </ProfileHeader>
        <ProfileForm onSubmit={handleSubmit(onSubmit)}>
          {page === 1 ? (
            <FormFieldset>
              <InputGroup>
                <Input
                  name="name"
                  label="Nome"
                  register={register}
                  error={errors.name}
                />
                <Input
                  name="last_name"
                  label="Sobrenome"
                  register={register}
                  error={errors.last_name}
                />
              </InputGroup>
              <Input
                name="email"
                label="Email"
                register={register}
                error={errors.email}
              />
              <Input
                name="cpf"
                label="CPF"
                register={register}
                error={errors.cpf}
              />
              <InputGroup>
                <Input
                  name="birth_date"
                  label="Data De Nascimento"
                  register={register}
                  error={errors.birth_date}
                />
                <Input
                  name="cel_number"
                  label="Telefone"
                  register={register}
                  error={errors.cel_number}
                />
              </InputGroup>
            </FormFieldset>
          ) : null}
          {page === 2 ? (
            <FormFieldset>
              <InputGroup>
                <Input
                  name="zip_code"
                  label="CEP"
                  register={register}
                  error={errors.zip_code}
                />
                <Input
                  name="city"
                  label="Cidade"
                  register={register}
                  error={errors.city}
                />
                <Input
                  name="state"
                  label="Estado"
                  register={register}
                  error={errors.state}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  name="neighborhood"
                  label="Bairro"
                  register={register}
                  error={errors.neighborhood}
                />
                <Input
                  name="street"
                  label="Rua"
                  register={register}
                  error={errors.street}
                />
                <Input
                  name="number"
                  label="Número"
                  register={register}
                  error={errors.number}
                />
              </InputGroup>
              <Input
                name="complement"
                label="Complemento"
                register={register}
                error={errors.complement}
              />
            </FormFieldset>
          ) : null}
          <SubmitButton>Salvar</SubmitButton>
        </ProfileForm>
      </ProfileContainer>
    </Container>
  );
}

export default Profile;
