import LongCard from "./longCard";
import Region from "./region";
import Header from "./Header";
import Carousel from "./Carousel";
import regionData from "@/data/regionData.json";
import archoncolor from "@/data/colorData.json";
import { getArchons } from "@/backend/mongodb";
import ArchonHeader from "./archonheader";

export default async function Home() {
  const archons = await getArchons();
  return (
    <div>
      <Header/>
      <Carousel/>
      <ArchonHeader/>
      {archons?.map((a:any,i:number) => <LongCard key={a._id} archon={a} side={(i % 2) === 0 ? "left" : "right"} textcolor={archoncolor[i]?.color}/>) }
      {regionData?.map((r) => <Region key={r.id} region={r}/>)}
    </div>
  );
}
