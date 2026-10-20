// Page provisoire : on vérifie que le JSON est bien lu.
// Les composants (Navbar, Hero, ProjetCard...) arrivent à la slide 15.
import data from "./data/portfolio.json";

export default function App() {
  const { profil, projets } = data;
  return (
    <main>
      <h1>{profil.nom}</h1>
      <p>{profil.titre}</p>
      <p>{projets.length} projet(s) dans portfolio.json</p>
    </main>
  );
}
