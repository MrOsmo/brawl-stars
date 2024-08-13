import Footer from "./footer/Footer"
import Header from "./header/Header"
import Main from "./main/Main"
import scss from "./Layout.module.scss"

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Layout