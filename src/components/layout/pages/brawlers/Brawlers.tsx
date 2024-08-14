import scss from "./Brawlers.module.scss"
import bsMenu from "../../../../assets/menu.webp"
import { useGetBrawlersQuery } from "../../../../redux/api"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { brawlersData } from "../../../../data/brawlersList"
import nitaImg from "../../../../assets/nita.png"
import bookImg from "../../../../assets/book.png"
import starPowerImg from "../../../../assets/starpower.png"
import skinsImg from "../../../../assets/skins.png"
import spikePng from "../../../../assets/spike.png"

const Brawlers = () => {
  const { data, isLoading, isError } = useGetBrawlersQuery("")

  console.log(data);

  const animation = { duration: 55000, easing: (t: any) => t }


  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 6,
      spacing: 25,
    },
    loop: true,
    renderMode: "performance",
    drag: true,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })

  return (
    <section className={scss.brawlers}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.bg}><img src={bsMenu} alt="" /></div>
          <div className={scss.information}>
            <h1>Brawlers</h1>
            <p>List of all Brawlers in Brawl Stars. Check their stats and learn more about them.</p>
            {isError ? (
              <div className={scss.loading}>Error 403</div>
            ) : (
              <div>
                {isLoading ? (
                  <div className={scss.loading}>Loading...</div>
                ) : (
                  <div ref={sliderRef} className="keen-slider">
                    {data?.[0]?.items?.map((e, index) => (
                      <div key={index} className="keen-slider__slide number-slide1">
                        {brawlersData.map((br, brIndex) => (
                          <div className={scss.cards} key={brIndex}>
                            {e?.name === br.name ? (
                              e?.name === "8-BIT" ? (
                                <img className={scss.bit_8} src="https://media.brawltime.ninja/brawlers/8-bit/model.webp?size=400" alt="" />
                              ) : e?.name === "R-T" ? (
                                <img className={scss.R_T} src="https://media.brawltime.ninja/brawlers/r-t/model.webp?size=400" alt="" />
                              ) : e?.name === "MR. P" ? (
                                <img className={scss.MR_P} src="https://media.brawltime.ninja/brawlers/mr__p/model.webp?size=400" alt="" />
                              ) : (
                                <img className={scss[e.name]} src={br.img} alt="" />
                              )
                            ) : null}
                          </div>
    
                        ))}
                      </div>
                    ))}
                  </div>
                )}

              </div>
            )}

          </div>
          <div className={scss.brawlers_bottom}>
            <div className={scss.bottom_brawler_information}>
              <img src={nitaImg} alt="Nita & The Bear" />

              <div className={scss.bottom_information}>
                <div className={scss.bt_1}>
                  <img src={bookImg} alt="BookImg" />
                  <p>Total 82 Brawlers</p>
                </div>
                <div className={scss.bt_2}>
                  <img src={starPowerImg} alt="StarPowerImg" />
                  <p>Unique Starpowers</p>
                </div>
                <div className={scss.bt_3}>
                  <img src={skinsImg} alt="SkinsImg" />
                  <p>Unlock new Skins</p>
                </div>
              </div>

              <img className={scss.spike_png} src={spikePng} alt="Spike" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brawlers