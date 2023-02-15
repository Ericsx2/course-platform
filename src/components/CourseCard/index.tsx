import { CardContainer, CardImage, CardInfo, CardWrapper } from "./styles";

import cardImage from "../../assets/thumb-1920-812010.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

interface CourseCardProps {
  available: boolean;
  courseId: string;
}

export default function CourseCard({ available, courseId }: CourseCardProps) {
  const [showInfo, setShowInfo] = useState(false);

  function toggleHovered() {
    setShowInfo((prevState) => !prevState);
  }

  return (
    <CardContainer>
      <Link to={available ? `courses/${courseId}` : `checkout/${courseId}`}>
        <CardWrapper>
          <CardImage available={available} src={cardImage} alt="" />
          <CardInfo
            onMouseOver={toggleHovered}
            onMouseOut={toggleHovered}
            className={showInfo ? "show" : "close"}
          >
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores cum exercitationem distinctio vitae maxime cumque modi
              ipsa sapiente omnis deleniti repellat
            </span>
          </CardInfo>
        </CardWrapper>
      </Link>
    </CardContainer>
  );
}
