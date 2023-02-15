import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 90%;
  gap: 2rem;
  color: ${({ theme }) => theme.text};
`;

export const SupportForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SupportSubjectField = styled.input`
  border: none;
  padding: 1rem;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  transition: 0.3s;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.main};
  }
`;

export const SupportMessageField = styled.textarea`
  height: 10rem;
  border: none;
  padding: 1rem;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  resize: none;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.main};
  }
`;

export const SubmitButton = styled.button`
  border: none;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
`;
