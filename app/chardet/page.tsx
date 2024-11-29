import { getCharacters } from "@/backend/mongodb";
import CharDetails from "./charDetails";

export default async function Home() {
  const inazumachar = await getCharacters("Inazuma");
    return (
      <div>
        <CharDetails inazumachar={inazumachar}/>  
      </div>
    );
  }