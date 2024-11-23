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

export default  async function Region({region}:{region?:any}) {
    const characters = await getCharacters(region?.name.toString());
    return (
        <div className="region">
            <h1 className={headerFont.className}>{region?.name}→<hr></hr></h1>
            <div className="regionContent">
                <p className={fontName.className}>
                    {region?.heading}<br/>
                    {region?.description}
                </p>
                <div className='regionCharSection'>
                   {characters.length > 0 ? characters?.map((c:any) => <CharCard key={c._id} char={c}/>) : <h1 className={headerFont.className}>Coming Soon ...</h1> }
                </div>
            </div>
        </div>
    );
}