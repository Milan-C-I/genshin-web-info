import Image from "next/image";
import styles from "./page.module.css";
import LongCard from "./longCard";

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
    </div>
  );
}
