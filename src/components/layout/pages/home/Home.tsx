import scss from "./Home.module.scss"
import bsIntro from "../../../../assets/bs-intro.jpg"
import crowImg from "../../../../assets/crow.png"
import shellyPin from "../../../../assets/pins/shelly-pin.png"
import coltPin from "../../../../assets/pins/colt-pin.png"
import bullPin from "../../../../assets/pins/bull-pin.png"
import brockPin from "../../../../assets/pins/brock-pin.png"
import spikePin from "../../../../assets/pins/spike-pin.png"
import elPrimoPin from "../../../../assets/pins/primo-pin.png"

const Home = () => {
  return (
    <section className={scss.home}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.bg}>
            <img src={bsIntro} alt="" />
          </div>
          <div className={scss.information}>
            <div className={scss.information_content}>
              <h1>Let Your Mind Explore the World of <span>Brawl Stars</span>!</h1>
              <p>Welcome to the ultimate Brawl Stars fan site! Dive into the action-packed world of Brawl Stars, the thrilling multiplayer battle game from Supercell. Stay updated with the latest news and exclusive information straight from the Brawl Stars universe. Improve your gameplay with detailed guides, strategies, and tips from experienced players and experts.</p>
              <p className={scss.author}>(Built by S. Osmonaliev)</p>
              <div className={scss.pins_div}>
                <img src={shellyPin} alt="Shelly-Pin" />
                <img src={coltPin} alt="Shelly-Pin" />
                <img src={bullPin} alt="Shelly-Pin" />
                <img src={brockPin} alt="Shelly-Pin" />
                <img src={elPrimoPin} alt="Shelly-Pin" />
                <img src={spikePin} alt="Shelly-Pin" />
              </div>
              <button>EXPLORE</button>
            </div>
            <div className={scss.information_img}>
              <div className={scss.circle}>
                <img src={crowImg} alt="CrowImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home