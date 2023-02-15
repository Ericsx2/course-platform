import React, { useRef, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import {
  CaretLeft,
  CaretRight,
  MagnifyingGlassMinus,
  MagnifyingGlassPlus,
} from "phosphor-react";

import {
  Container,
  PageButton,
  PageIndicator,
  PDFDragger,
  PDFWrapper,
  ReaderWrapper,
  ZoomButton,
  ZoomIndicator,
} from "./styles";

import PDFFile from "../../assets/2.pdf";

export default function Reader() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageScale, setPageScale] = useState(1.8);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOptions, setDragOptions] = useState({
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
  });

  const documentRef = useRef<HTMLDivElement>(null);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  function isFirstPage() {
    return pageNumber === 1;
  }

  function isLastPage() {
    return pageNumber === numPages;
  }

  function previousPage() {
    if (!isFirstPage()) {
      setPageNumber((prevState) => prevState - 1);
    }
  }

  function nextPage() {
    if (!isLastPage()) {
      setPageNumber((prevState) => prevState + 1);
    }
  }

  function scaleUp() {
    setPageScale((prevState) => prevState + 0.2);
  }

  function scaleDown() {
    setPageScale((prevState) => prevState - 0.2);
  }

  function handleMouseDown(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const element = documentRef.current;
    if (!element) return;

    setIsDragging(true);
    setDragOptions({
      startX: event.nativeEvent.clientX,
      startY: event.nativeEvent.clientY,
      offsetX: element.offsetLeft,
      offsetY: element.offsetTop,
    });
  }

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const element = documentRef.current;
    if (!element) return;

    if (isDragging) {
      const { startX, startY, offsetX, offsetY } = dragOptions;
      const { clientX, clientY } = event.nativeEvent;

      const newXValue = Math.round(offsetX + clientX - startX);
      const newYValue = Math.round(offsetY + clientY - startY);

      if (newXValue >= 0) element.style.left = `${newXValue}px`;
      if (newYValue >= 0) element.style.top = `${newYValue}px`;

      console.log(newXValue, newYValue);
    }
  }

  return (
    <Container>
      <ReaderWrapper>
        <PDFWrapper>
          <PDFDragger
            onMouseDown={handleMouseDown}
            onMouseUp={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            isDragging={isDragging}
            ref={documentRef}
          >
            <Document
              file={PDFFile}
              onLoadSuccess={onDocumentLoadSuccess}
              renderMode="svg"
            >
              <Page
                pageNumber={pageNumber}
                renderAnnotationLayer={false}
                renderInteractiveForms={false}
                renderTextLayer={false}
                scale={pageScale}
              />
            </Document>
          </PDFDragger>
        </PDFWrapper>
        <PageButton
          className="prev"
          onClick={previousPage}
          disabled={isFirstPage()}
        >
          <CaretLeft size={22} weight="bold" />
        </PageButton>
        <PageIndicator>
          <span>
            {pageNumber} of {numPages}
          </span>
          <ZoomIndicator>
            <ZoomButton onClick={scaleDown}>
              <MagnifyingGlassMinus size={20} />
            </ZoomButton>
            <span>{Math.round(pageScale * 100)}%</span>
            <ZoomButton onClick={scaleUp}>
              <MagnifyingGlassPlus size={20} />
            </ZoomButton>
          </ZoomIndicator>
        </PageIndicator>
        <PageButton className="next" onClick={nextPage} disabled={isLastPage()}>
          <CaretRight size={22} weight="bold" />
        </PageButton>
      </ReaderWrapper>
    </Container>
  );
}
