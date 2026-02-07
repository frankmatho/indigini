import seeds from "../data/seeds";
import SeedCard from "./SeedPlantCard";

function SeedList({ seeds, onSelect }) {

  console.log("SeedList seeds:", seeds)
  return (
    <div className="grid gap-4 md:grid-cols-2 mt-6">
      {seeds.map((seed) => (
        <SeedCard 
        key={seed.id} 
        seed={seed}
        onSelect={onSelect} 
        />
      ))}
    </div>
  );
}

export default SeedList;
