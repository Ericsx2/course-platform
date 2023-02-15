import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: auto;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary};
`;
