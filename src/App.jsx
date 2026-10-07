import "./App.css";

// Header Component
function Header() {
  return <h1 className="header">Student Management System</h1>;
}

// Reusable StudentProfile Component
function StudentProfile(props) {
  return (
    <div className="student-profile">
      <h2>Student Profile</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Department:</strong> {props.department}</p>
      <p><strong>Year:</strong> {props.year}</p>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      © 2026 Student Management System
    </footer>
  );
}

// Main App Component
function App() {

  // Student details
  const student1Name = "Anu";
  const student1Department = "CSE";
  const student1Year = "3rd Year";

  const student2Name = "Bala";
  const student2Department = "Computer Science";
  const student2Year = "3rd Year";

  return (
    <div className="app">

      <Header />

      <h2>Student 1</h2>

      <StudentProfile
        name={student1Name}
        department={student1Department}
        year={student1Year}
      />

      <h2>Student 2</h2>

      <StudentProfile
        name={student2Name}
        department={student2Department}
        year={student2Year}
      />

      <Footer />

    </div>
  );
}

export default App;