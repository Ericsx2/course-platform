import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.7rem 0;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageSection = styled.section`
  background-color: ${({ theme }) => theme.primary};
  display: grid;
  place-items: center;
  border-radius: 0 10px 10px 0;
  overflow-y: auto;
  scroll-behavior: smooth;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 60%;
  aspect-ratio: 2/2;
  object-fit: cover;
`;

export const FormSection = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

export const FormContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const FormContainerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  button {
    background: none;
    border: none;
    border-radius: 50%;
    padding: 0.5rem;
    display: grid;
    place-items: center;
    transition: 0.3s;
    cursor: pointer;
    position: absolute;
    left: 0;

    :hover {
      background-color: lightgray;
    }
  }

  h1 {
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid black;
  border-radius: 30px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  padding-left: 0.5rem;
  flex: 1;
  font-size: 1.1rem;

  ::placeholder {
    color: rgb(50, 50, 50);
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  label {
    font-size: 1.1rem;
  }
`;

export const Checkbox = styled.input`
  accent-color: ${({ theme }) => theme.main};
  margin-right: 0.5rem;
  scale: 1.5;
`;

export const RegisterButton = styled.button`
  padding: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.main};
  border: none;
  cursor: pointer;
  transition: 0.2s;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: bold;
  font-size: 1.2rem;

  :disabled {
    background-color: darkgray;
  }
`;

export const LoginLink = styled.span`
  width: 100%;
  text-align: center;
  margin-top: 1rem;

  a {
    color: ${({ theme }) => theme.main};
    text-decoration: underline;
  }
`;
