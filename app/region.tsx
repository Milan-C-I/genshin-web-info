import '@/styles/region.css';  
import { SourGummy } from 'next/font/google'; 
import CharCard from './charCard';
import { getCharactersByRegion } from '@/backend/mongodb';
import Image from 'next/image';
const fontName = SourGummy({
    weight: '400',
    subsets: ['latin'],   
})
const headerFont = SourGummy({
    weight: '400',
    subsets: ['latin'],
})

export default  async function Region({region}:{region?:any}) {
    const characters = await getCharactersByRegion(region?.name.toString());
    return (
        <div className="region" id={`region-${region?.id}`}>
            <h1 className={headerFont.className}>{region?.name}→<hr></hr></h1>
            <div className="regionContent" style={{backgroundImage: `url(${region?.bgImage})`}}>
                <p className={fontName.className}>
                    {region?.heading}<br/>
                    {region?.description}
                </p>
                <div className='regionCharSection'>
                   {characters.length > 0 ? characters?.map((c:any) => <CharCard key={c._id} char={c} btncolor={region?.color}/>) : <h1 className={headerFont.className}>Coming Soon ...</h1> }
                </div>
                {region?.emblem ? 
                <div className='emblem'><Image src={region?.emblem} alt="emblem" fill/></div> : null}
            </div>
        </div>
    );
}
