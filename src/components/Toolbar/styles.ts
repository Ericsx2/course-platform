import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem 0;
`;

export const ButtonsContainer = styled.div`
  height: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ToolbarButton = styled.button`
  border: none;
  background: none;
  border-radius: 50%;
  padding: 0.5rem;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.textSecondary};
  }
`;
