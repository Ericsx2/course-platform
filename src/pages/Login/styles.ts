import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.7rem 0;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const FormSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  position: relative;

  a {
    color: ${({ theme }) => theme.main};
    text-decoration: underline;
  }
`;

export const CheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;

  a {
    color: ${({ theme }) => theme.text};
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    accent-color: ${({ theme }) => theme.main};
    margin-right: 0.3rem;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0;
  background-color: ${({ theme }) => theme.main};
  border: none;
  cursor: pointer;
  transition: 0.2s;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ImageSection = styled.section`
  background-color: ${({ theme }) => theme.primary};
  display: grid;
  place-items: center;
  border-radius: 10px 0 0 10px;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 60%;
  aspect-ratio: 2/2;
`;

export const Error = styled.span`
  font-size: 0.9rem;
  color: red;
  position: absolute;
  top: -10%;
`;
