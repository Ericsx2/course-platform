import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.main};
  border-radius: 10px;
  position: relative;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  position: absolute;
  padding: 0 0.3rem;
  top: -0.5rem;
  left: 1rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.secondary};
`;

export const InputField = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding-left: 0.5rem;
  flex: 1;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
`;

export const Error = styled.span`
  font-size: 0.8rem;
  color: red;
  position: absolute;
  bottom: -1.3rem;
  right: 1rem;
`;
