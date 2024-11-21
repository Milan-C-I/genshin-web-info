import '@/styles/style.css';
import { Arizonia, Pacifico, Poiret_One,  } from 'next/font/google';
const headerFont = Arizonia({
    weight:'400',
    subsets:['latin'],
});
const heroFont = Poiret_One({
    weight:'400',
    subsets:['latin'],
})
const buttonFont = Pacifico({
    weight:'400',
    subsets:['latin'],
})
export default function Header() {
    return (
        <div className='hero'>
            <div className="header">
                <h1 className={headerFont.className}>Genshin Impact</h1>
                <div className='nav'><button className={buttonFont.className}>Home→</button>
                <button className={buttonFont.className}>Monstad→</button>
                <button className={buttonFont.className}>Liyue→</button>
                <button className={buttonFont.className}>Inazuma→</button>
                <button className={buttonFont.className}>Sumeru→</button>
                <button className={buttonFont.className}>Fontaine→</button>
                <button className={buttonFont.className}>Natlan→</button></div>
            </div>
            <h1 className={heroFont.className}>Embark on an epic journey through the breathtaking world of <span className={headerFont.className}>Genshin Impact—</span></h1>
            <h2 className={headerFont.className}>—where your adventure begins, and destiny awaits.</h2>
        </div>
        

    );
}