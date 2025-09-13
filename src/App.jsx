import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to My College Site 🎓</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Departments</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="content">
        <section>
          <h2>About Us</h2>
          <p>
            This is a demo React + Vite project for a college website.
            You can edit this page and add more details about your institution.
          </p>
        </section>

        <section>
          <h2>Departments</h2>
          <ul>
            <li>Computer Science</li>
            <li>Electronics</li>
            <li>Mechanical</li>
            <li>Civil</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 My College Site | Powered by React + Vite</p>
      </footer>
    </div>
  );
}

export default App;
