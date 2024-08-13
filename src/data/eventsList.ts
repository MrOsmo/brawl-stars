/!* Icons *!/
import gemGrabIcon from "../assets/icons/gem_grab.png"
import brawlBallIcon from "../assets/icons/brawlball.png"
import heistIcon from "../assets/icons/heist.png"
import hotzoneIcon from "../assets/icons/hotzone.png"
import showdownIcon from "../assets/icons/solo.png"
import wipeoutIcon from "../assets/icons/wipeout.png"
import knockoutIcon from "../assets/icons/knockout.png"
import paintBrawlIcon from "../assets/icons/paintbrawl.png"
import bountyIcon from "../assets/icons/bounty.png"
import duelsIcon from "../assets/icons/duels.png"

/!* MAPS *!/
import gemMap from "../assets/maps/gemgrab_map.webp"
import brawlMap from "../assets/maps/brawlball_map.webp"
import heistKnockBountyMap from "../assets/maps/heist_knockout_bounty_map.webp"
import showDownMap from "../assets/maps/showdown_map.webp"
import paintBrawlMap from "../assets/maps/paintbrawl.jpg"
import hotWipeDuelsMap from "../assets/maps/hotzone_wipeout_duels.webp"


export const eventsList = [
  {
    event: "brawlBall",
    img: brawlMap,
    logo: brawlBallIcon,
    mode: "BRAWL BALL"

  },
  {
    event: "soloShowdown",
    img: showDownMap,
    logo: showdownIcon,
    mode: "SOLO SHOWDOWN"
  },
  {
    event: "duoShowdown",
    img: showDownMap,
    logo: showdownIcon,
    mode: "DUO SHOWDOWN"
  },
  {
    event: "knockout",
    img: heistKnockBountyMap,
    logo: knockoutIcon,
    mode: "KNOCKOUT"
  },
  {
    event: "paintBrawl",
    img: paintBrawlMap,
    logo: paintBrawlIcon,
    mode: "PAINTBRAWL"
  },
  {
    event: "DUELS",
    img: hotWipeDuelsMap,
    logo: duelsIcon,
    mode: "duels"
  },
  {
    event: "heist",
    img: heistKnockBountyMap,
    logo: heistIcon,
    mode: "HEIST"
  },
  {
    event: "gemGrab",
    img: gemMap,
    logo: gemGrabIcon,
    mode: "GEM GRAB"
  },
  {
    event: "bounty",
    img: heistKnockBountyMap,
    logo: bountyIcon,
    mode: "BOUNTY"
  },
  {
    event: "wipeout",
    img: hotWipeDuelsMap,
    logo: wipeoutIcon,
    mode: "WIPEOUT"
  },
  {
    event: "",
    img: hotWipeDuelsMap,
    logo: hotzoneIcon,
    mode: "HOT ZONE"
  },
  
]