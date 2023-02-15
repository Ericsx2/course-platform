import { Link } from "react-router-dom";
import styled from "styled-components";

interface CardProps {
  available?: boolean;
}

export const CardContainer = styled.div`
  width: min(25%, 300px);
  max-height: 300px;
  overflow: hidden;
`;

export const CardWrapper = styled.div`
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: white;
  position: relative;
`;

export const CardImage = styled.img<CardProps>`
  width: 100%;
  aspect-ratio: 2/2;
  object-fit: cover;
  ${({ available }) => (!available ? "filter: grayscale(0.9);" : "")}
`;

export const CardInfo = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  overflow: hidden;
  transition: 0.3s;

  span {
    width: 100%;
    padding: 0.4rem;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.6) 95%,
      transparent
    );
    position: absolute;
    bottom: -100%;
  }

  &.show {
    span {
      animation: show ease 0.5s normal;
      bottom: 0%;
    }
  }

  &.close {
    span {
      animation: close ease 0.5s normal;
      bottom: -100%;
    }
  }

  @keyframes show {
    from {
      bottom: -100%;
    }
    to {
      bottom: 0;
    }
  }

  @keyframes close {
    from {
      bottom: 0;
    }
    to {
      bottom: -100%;
    }
  }
`;
