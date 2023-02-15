import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Container,
  FormContainer,
  SubmitButton,
  SupportForm,
  SupportMessageField,
  SupportSubjectField,
} from "./styles";

const SupportSchema = z.object({
  subject: z.string().min(1, "Campo Obrigatório"),
  message: z.string().min(1, "Campo Obrigatório"),
});

type SupportData = z.infer<typeof SupportSchema>;

function Support() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SupportData>();

  function onSubmit(data: SupportData) {
    const { subject, message } = SupportSchema.parse(data);

    console.log(subject, message);
  }

  return (
    <Container>
      <FormContainer>
        <h1>Entre em contato</h1>
        <SupportForm onSubmit={handleSubmit(onSubmit)}>
          <SupportSubjectField placeholder="Assunto" {...register("subject")} />
          <SupportMessageField
            placeholder="Mensagem"
            {...register("message")}
          />

          <SubmitButton>Enviar</SubmitButton>
        </SupportForm>
      </FormContainer>
    </Container>
  );
}

export default Support;
