import Image from "next/image";
import styles from "./page.module.css";
import LongCard from "./longCard";
import Region from "./region";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
