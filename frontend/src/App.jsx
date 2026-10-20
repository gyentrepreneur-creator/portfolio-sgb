import data from "./data/portfolio.json";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProjetCard from "./components/ProjetCard.jsx";
import CompetenceGroupe from "./components/CompetenceGroupe.jsx";

export default function App() {
  const { profil, projets, competences } = data;
  return (
    <>
      <Navbar nom={profil.nom} />
      <main className="container">
        <Hero profil={profil} />
        <section id="projets">
          <h2 className="section-title">Projets</h2>
          <div className="grid">
            {projets.map((p) => (
              <ProjetCard key={p.slug} projet={p} />
            ))}
          </div>
        </section>

        {/* Slide 16 : les compétences */}
        <section id="competences">
          <h2 className="section-title">Compétences</h2>
          <div className="grid">
            {competences.map((c) => (
              <CompetenceGroupe key={c.groupe} groupe={c.groupe} items={c.items} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
