import { Header } from "../components";
import { TeacherCard } from "../components";

const TeacherList = () => {
  return (
    <div className="teacher-list-page">
      <Header
        title="Estudar"
        subtitle="Estes são os proffys disponíveis."
        teacher={ false }
      />

      <div className="teacher-list">
        <TeacherCard />
      </div>
    </div>
  );
}

export default TeacherList;
