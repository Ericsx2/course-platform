import { Download, Eye, Notebook } from "phosphor-react";
import {
  Container,
  CourseItem,
  CourseItemButton,
  CourseItemButtonsWrapper,
  CourseItemInfo,
  CoursesList,
} from "./styles";

function Courses() {
  return (
    <Container>
      <CoursesList>
        <h1>Meus Cursos</h1>
        <CourseItem>
          <CourseItemInfo>
            <Notebook size={24} />
            <span>Course Name</span>
          </CourseItemInfo>
          <CourseItemButtonsWrapper>
            <CourseItemButton to="/courses/1">
              <Eye size={24} />
            </CourseItemButton>
            <CourseItemButton to="/">
              <Download size={24} />
            </CourseItemButton>
          </CourseItemButtonsWrapper>
        </CourseItem>
      </CoursesList>
    </Container>
  );
}

export default Courses;
