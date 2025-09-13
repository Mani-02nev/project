import vecteezyLogo from "../assets/img/vecteezy_73th-years-anniversary-logo-with-golden-ring-isolated-on_17489884-1.jpg";
import scoreImg from "../assets/img/scor.jpg";
import sportImg from "../assets/img/sport.png";
import disciplineImg from "../assets/img/discipline.png";
import exportImg from "../assets/img/EXPORT.png";
import placementImg from "../assets/img/plasment.png";

function Home() {
     return (
          <section className="my-5">
               <h2 className="text-center text-primary mb-4">Why Us?</h2>
               <div className="cards">
                    <div className="card-custom"><img src={vecteezyLogo} alt="" /><h3>73 Years of Experience</h3></div>
                    <div className="card-custom"><img src={scoreImg} alt="" /><h3>Scholarships</h3></div>
                    <div className="card-custom"><img src={sportImg} alt="" /><h3>Sports</h3></div>
                    <div className="card-custom"><img src={disciplineImg} alt="" /><h3>Discipline</h3></div>
                    <div className="card-custom"><img src={exportImg} alt="" /><h3>Highly Qualified Faculties</h3></div>
                    <div className="card-custom"><img src={placementImg} alt="" /><h3>Best Placement Record</h3></div>
               </div>
          </section>
     );
}
export default Home;
