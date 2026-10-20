// Barre du haut : le nom à gauche, les liens vers les sections à droite
export default function Navbar({ nom }) {
  return (
    <header className="navbar">
      <nav className="container navbar-inner">
        <a href="#" className="logo">{nom}</a>
        <ul className="nav-liens">
          <li><a href="#projets">Projets</a></li>
          <li><a href="#competences">Compétences</a></li>
        </ul>
      </nav>
    </header>
  );
}
