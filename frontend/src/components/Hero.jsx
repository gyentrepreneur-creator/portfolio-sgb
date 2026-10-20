// Bloc d'accueil : qui je suis, en une phrase
export default function Hero({ profil }) {
  const { nom, titre, accroche, github, disponibilite } = profil;
  return (
    <section className="hero">
      <p className="dispo">{disponibilite}</p>
      <h1>{nom}</h1>
      <p className="titre">{titre}</p>
      <p className="accroche">{accroche}</p>
      <a className="bouton" href={github} target="_blank" rel="noreferrer">
        Voir mon GitHub
      </a>
    </section>
  );
}
