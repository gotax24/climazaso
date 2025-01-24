import "../css/Header.css"

const Header = () => {
  return (
    <>
      <header>
        <div className="header-logo">
          <img className="logo" src="/logo.svg" alt="Logo de la pagina" />
          <h1 className="title">Climazaso</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
