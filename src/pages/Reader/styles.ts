import styled from "styled-components";

interface PDFDraggerProps {
  isDragging: boolean;
  top?: number;
  left?: number;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.primary};
`;

export const ReaderWrapper = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  outline: 2px solid ${({ theme }) => theme.main};
  border-radius: 10px;
  overflow: hidden;
`;

export const PDFWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  position: relative;
  overflow: auto;
  scroll-behavior: smooth;
`;

export const PDFDragger = styled.div<PDFDraggerProps>`
  position: absolute;
  top: 0;
  cursor: ${({ isDragging }) => (isDragging ? "grabbing" : "grab")};
`;

export const PageButton = styled.button`
  border: 1px solid ${({ theme }) => theme.main};
  background-color: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.secondary};
  padding: 0.5rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: absolute;
  cursor: pointer;

  &.prev {
    left: 0.8rem;
  }

  &.next {
    right: 0.8rem;
  }

  :disabled {
    filter: grayscale();
    cursor: not-allowed;
  }
`;

export const PageIndicator = styled.div`
  position: absolute;
  padding: 0.5rem;
  bottom: 0.8rem;
  background-color: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.textSecondary};
  border-radius: 10px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const ZoomIndicator = styled.div`
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const ZoomButton = styled.button`
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.textSecondary};
  border: none;
  background-color: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
`;
