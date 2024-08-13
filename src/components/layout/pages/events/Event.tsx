import { useGetEventsQuery } from "../../../../redux/api"
import scss from "./Event.module.scss"
import gemGrabIcon from "../../../../assets/icons/gem_grab.png"
import questIcon from "../../../../assets/icons/quest.webp"

const Event = () => {
  const { data } = useGetEventsQuery("")
  console.log(data);
  
  
  return (
    <section className={scss.events}>
      <div className={scss.container}>
        <div className={scss.bg}>
          <div className={scss.content}>
            <img className={scss.quest_img} src={questIcon} alt="QuestIcon" />
            <h1>Events</h1>
            <p>Get event rotation for ongoing events.</p>
            <img className={scss.gem_img} src={gemGrabIcon} alt="GemGrabIcon" />

            <div className={scss.events_div}>
              {data?.map((e, index) => (
                <div className={scss.map} key={index}>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Event