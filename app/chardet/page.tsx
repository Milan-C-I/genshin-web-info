import { getCharacterByName, getCharactersByRegion } from "@/backend/mongodb";
import CharDetails from "./charDetails";

export default async function characterDetails({ searchParams }: { searchParams: { char: string } }) {
  const char = await getCharacterByName(searchParams.char);
  const region = await getCharactersByRegion(char?.region);
  let index = region?.findIndex((c:any) => c.name === char?.name);
    return (
      <div>
        <CharDetails region={region} ind={index}/>  
      </div>
    );
  }