import LongCard from "./longCard";
import Region from "./region";
import Header from "./Header";
import Carousel from "./Carousel";
import regionData from "@/data/regionData.json";
export default async function Home() {
  return (
    <div>
      <Header/>
      <Carousel/>
      <LongCard/>
      <LongCard side="right"/>
      <LongCard/>
      <LongCard side="right"/>
      <LongCard/>
      <LongCard side="right"/>
      <LongCard/>
      <LongCard side="right"/>
      {regionData.map((r) => <Region key={r.id} region={r}/>)}
    </div>
  );
}
