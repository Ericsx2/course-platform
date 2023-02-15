import styled from "styled-components";

interface HeaderButtonProps {
  active?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.primary};
`;

export const ProfileContainer = styled.div`
  width: 90%;
  height: 95%;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
`;

export const ProfileHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderButton = styled.button<HeaderButtonProps>`
  border: none;
  background: none;
  text-align: center;
  padding: 1rem;
  margin: 0 0.5rem;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  border-bottom: 1px solid
    ${({ active, theme }) => (active ? theme.main : "transparent")};

  transition: 0.3s;
  cursor: pointer;

  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.main};
  }
`;

export const ProfileForm = styled.form`
  width: 100%;
  height: inherit;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const FormFieldset = styled.fieldset`
  border: none;
  flex: 1;
`;

export const SubmitButton = styled.button`
  width: 40%;
  border: none;
  padding: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.main};
  font-size: 1rem;
  justify-self: flex-end;
  align-self: flex-end;
  cursor: pointer;
  margin-bottom: 1rem;
`;
