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

      <main className="teacher-list">
        <TeacherCard />
      </main>
    </div>
  );
}

export default TeacherList;
