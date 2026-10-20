// Page provisoire : Navbar, Hero et ProjetCard arrivent avec la slide 15.
import data from "./data/portfolio.json";
import CompetenceGroupe from "./components/CompetenceGroupe.jsx";

export default function App() {
  const { profil, projets, competences } = data;
  return (
    <main className="container">
      <h1>{profil.nom}</h1>
      <p>{profil.titre}</p>
      <p>{projets.length} projet(s) dans portfolio.json</p>

      <section id="competences">
        <h2 className="section-title">Compétences</h2>
        <div className="grid">
          {competences.map((c) => (
            <CompetenceGroupe key={c.groupe} groupe={c.groupe} items={c.items} />
          ))}
        </div>
      </section>
    </main>
  );
}
