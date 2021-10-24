import { Header } from "../components";

const TeacherList = () => {
  return (
    <div className="teacher-list-page">
      <Header
        title="Estudar"
        subtitle="Estes são os proffys disponíveis."
        teacher={ false }
      />
    </div>
  );
}

export default TeacherList;
