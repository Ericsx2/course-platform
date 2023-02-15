import { Link } from "react-router-dom";
import styled from "styled-components";

interface StateProps {
  open?: boolean;
}

interface LinkProps extends StateProps {
  active?: boolean;
}

export const Container = styled.aside<StateProps>`
  width: ${({ open }) => (open ? "250px" : "80px")};
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  position: relative;
  transition: 0.3s;
`;

export const ToggleButton = styled.button`
  border: none;
  background: none;
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: absolute;
  padding: 0.5rem;
  color: ${({ theme }) => theme.text};
  top: 0.5rem;
  right: -3rem;
  z-index: 1;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const Logo = styled.div<StateProps>`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  color: ${({ theme }) => theme.text};

  strong {
    display: ${({ open }) => (open ? "block" : "none")};
  }

  img {
    width: 3rem;
    aspect-ratio: 2/2;
    object-fit: contain;
    display: grid;
    place-items: center;
    font-size: 2rem;
    border-radius: 50%;
    transition: 0.2s;
  }
`;

export const SidebarLinks = styled.div`
  width: 100%;
  padding: 0.5rem;
  flex: 1;
`;

export const SidebarLink = styled(Link)<LinkProps>`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin: 0.5rem 0;
  justify-content: ${({ open }) => (open ? "flex-start" : "center")};
  gap: ${({ active }) => (active ? "1.5rem" : "0.5rem")};
  padding: 1rem;
  color: ${({ active, theme }) => (active ? theme.textSecondary : theme.text)};
  transition: 0.2s;
  background-color: ${({ active, theme }) => (active ? theme.main : "none")};

  :hover {
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.textSecondary};
    gap: 1.5rem;
  }

  span {
    display: ${({ open }) => (open ? "block" : "none")};
  }
`;
