import { getCharacterByName, getCharactersByRegion } from "@/backend/mongodb";
import CharDetails from "./charDetails";

export default async function characterDetails({ searchParams }: { searchParams: { char: string } }) {
  const searchParamsObject = await searchParams;

  const char = searchParamsObject.char;
  const character = await getCharacterByName(char);
  const region = await getCharactersByRegion(character?.region);
  const index = region?.findIndex((c: any) => c.name === char);
  return (
    <div>
      <CharDetails region={region} ind={index} />
    </div>
  );
}