import '@/styles/region.css';  
import { Sour_Gummy } from 'next/font/google'; 
import CharCard from './charCard';
import { getCharacters } from '@/backend/mongodb';
// import { Character } from '@/backend/interface';
const fontName = Sour_Gummy({
    weight: '400',
    subsets: ['latin'],   
})
const headerFont = Sour_Gummy({
    weight: '400',
    subsets: ['latin'],
})

export default  async function Region() {
    const characters = await getCharacters();
    return (
        <div className="region">
            <h1 className={headerFont.className}>Monstad →<hr></hr></h1>
            <div className="regionContent">
                <p className={fontName.className}>A city of freedom that lies in the northeast of Teyvat.
                From amongst mountains and wide-open plains, carefree breezes carry the scent of dandelions — a gift from the Anemo God, Barbatos — across Cider Lake to Mondstadt, which sits on an island in the middle of the lake.
                Mondstadt is one of the seven regions of Teyvat, and the first in which the Traveler starts to look for their lost sibling. It is the nation that worships Lord Barbatos, the Anemo Archon and God of Freedom.</p>
                <div className='regionCharSection'>
                   {/* <CharCard/>
                   <CharCard/>
                   <CharCard/>
                   <CharCard/>
                   <CharCard/>
                   <CharCard/>
                   <CharCard/>
                   <CharCard/>
                   <CharCard/>
                   <CharCard/>
                   <CharCard/>
                   <CharCard/> */}
                   {characters?.map((c) => <CharCard key={c._id} char={c}></CharCard>)}
                </div>
            </div>
        </div>
    );
}