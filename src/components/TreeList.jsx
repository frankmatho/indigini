import trees from "../data/trees";
import TreeCard from "./TreeCard";

function TreeList({ trees, onSelect }) {

  console.log("TreeList trees:", trees)
  return (
    <div className="grid gap-4 md:grid-cols-2 mt-6">
      {trees.map((tree) => (
        <TreeCard 
        key={tree.id} 
        tree={tree}
        onSelect={onSelect} 
        />
      ))}
    </div>
  );
}

export default TreeList;