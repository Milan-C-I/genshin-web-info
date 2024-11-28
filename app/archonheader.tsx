import "@/styles/archonheader.css"
import { Trade_Winds } from "next/font/google";

const rubik_glitch_font = Trade_Winds({
  weight: "400",
  subsets: ["latin"],
})
const elemental_image = ["Pyro","Hydro","Anemo","Electro","Dendro","Cryo","Geo"];
export default function ArchonHeader() {
    return (
        <div className="archonheader">
            <h1 className={`${rubik_glitch_font.className} archonhead`}>The Archons→</h1>
            <div className="elementalImages">
                {elemental_image.map((e)=><div key={e} className="ele" style={{backgroundImage: `url(${`/elements/Element_${e}.webp`})`}}></div>)} 
            </div>
        </div>
    )
}