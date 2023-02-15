import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

export const CoursesList = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: ${({ theme }) => theme.text};
`;

export const CourseItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
`;

export const CourseItemInfo = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CourseItemButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CourseItemButton = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  border-radius: 50%;
  padding: 0.3rem;
  display: grid;
  place-items: center;
  transition: 0.2s;

  :hover {
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.textSecondary};
  }
`;
