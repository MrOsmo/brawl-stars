import scss from "./Header.module.scss"
import languageIcon from "../../../assets/svgs/language.svg"
import logoBS from "../../../assets/logo.png"

const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.logo}>
          {/* <img className={scss.logo_img} src={logo} alt="BrawlStars-Icon" />
          <img className={scss.logo_name} src={logoName} alt="BrawlStars-Logo" /> */}
          <img src={logoBS} alt="" />
          </div>

          <div className={scss.col_2}>
            <div className={scss.nav}>
              <p>Home</p>
              <p>Brawlers</p>
              <p>Events</p>
              <p>Players</p>
              <p>Clubs</p>
            </div>
            <img src={languageIcon} alt="LanguageSwitcherIcon" />
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header