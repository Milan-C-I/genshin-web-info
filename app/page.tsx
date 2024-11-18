import LongCard from "./longCard";
import Region from "./region";
import Header from "./Header";
import  {getCharacters} from "@/backend/mongodb";

export default async function Home() {
  const char = await getCharacters();
  return (
    <div>
      <Header></Header>
      <LongCard/>
      <LongCard side="right"/>
      <LongCard/>
      <LongCard side="right"/>
      <LongCard/>
      <LongCard side="right"/>
      <LongCard/>
      <LongCard side="right"/>
      <Region/>
      <Region/>
      <Region/>
      <Region/>
      {char?.map((c) => <h1>{`${c?.name}, ${c?.description}`}</h1>)}
    </div>
  );
}
