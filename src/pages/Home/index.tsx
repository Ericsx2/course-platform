import CourseCard from "../../components/CourseCard";
import { Container, CoursesContainer } from "./styles";

export default function Home() {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <Container>
      <h1>Cursos</h1>
      <CoursesContainer>
        {cards.map((card, index) => {
          return (
            <CourseCard
              key={index}
              available={card === 1}
              courseId={`${index}`}
            />
          );
        })}
      </CoursesContainer>
    </Container>
  );
}
