import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  background-color: ${({ theme }) => theme.primary};

  h1 {
    margin-left: 4rem;
    padding: 1rem 0;
    color: ${({ theme }) => theme.text};
  }
`;

export const CoursesContainer = styled.div`
  flex-wrap: wrap;
  flex: 1;
  display: flex;
  gap: 3rem;
  justify-content: center;
  padding: 1rem;
`;
