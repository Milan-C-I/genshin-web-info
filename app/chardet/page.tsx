import { getAllDetailsCharacterByName, getAllDetailsCharactersByRegion } from "@/backend/mongodb";
import CharDetails from "./charDetails";


export default async function characterDetails( { searchParams } : any ) {
  const searchParamsObject = await searchParams;
  // console.log(searchParams);

  const char = searchParamsObject.char;

  const character = await getAllDetailsCharacterByName(char);
  const region = await getAllDetailsCharactersByRegion(character?.region);
  const index = region?.findIndex((c: any) => c.name === char);

  return (
    <div>
      <CharDetails region={region} ind={index} />
    </div>
  );
}