import seeds from "../data/seeds";
import SeedCard from "./SeedPlantCard";

function SeedList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {seeds.map((seed) => (
        <SeedCard key={seed.id} seed={seed} />
      ))}
    </div>
  );
}

export default SeedList;
