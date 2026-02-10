import { useState } from 'react'
import Navbar from './components/Navbar';
//import Home from './components/Home';
import seeds from './data/seeds';
import SeedModal from './components/SeedModal';
import SeedList from './components/SeedPlantList';
import trees from './data/trees'
import TreeList from './components/TreeList';
import TreeModal from './components/TreeModal'
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [region, setRegion] = useState("All");
  const [selectedSeed, setSelectedSeed] = useState(null);
  const [selectedTree, setSelectedTree] = useState(null);

  const regions = [ "All",
    "Coastal",
    "Western",
    "Central",
    "Eastern",
    "North-Eastern",
    "Rift Valley",
    "Nyanza",
  ]

  const filteredSeeds = seeds.filter((seed) => {
    const matchesSearch =
      seed.swahili.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seed.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || seed.category === category;

    const matchesRegion =
      region === "All" || seed.region === region;

    return matchesSearch && matchesCategory && matchesRegion;
});

  const filteredTrees = trees.filter((tree) => {
  const matchesSearch =
    tree.swahili.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tree.name.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesCategory =
    category === "All" || tree.category === category;

  const matchesRegion =
    region === "All" || tree.region === region;

  return matchesSearch && matchesCategory && matchesRegion;
});

  return (
    <>
      <Navbar 
      searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm}
      category={category}
      setCategory={setCategory}
      region={region}
      setRegion={setRegion}
      regions={regions} 
      />
      <main className='p-6'>
        <SeedList 
        seeds={filteredSeeds}
        onSelect ={setSelectedSeed}
        />

        {filteredSeeds.length === 0 && (
          <div className="mt-10 text-center text-gray-500">
              <p className="text-lg">No seeds found 🌱</p>
              <p className="text-sm mt-1">
              Try a different name or category
              </p>
          </div>
        )}
      </main>
      <SeedModal 
      seed={selectedSeed} 
      onClose={() => setSelectedSeed(null)} 
      />
      <main className='p-6'>
        <TreeList 
        trees={filteredTrees}
        onSelect ={setSelectedTree}
        />

        {filteredTrees.length === 0 && (
          <div className="mt-10 text-center text-gray-500">
              <p className="text-lg">No trees found 🌳</p>
              <p className="text-sm mt-1">
              Try a different name or category
              </p>
          </div>
        )}
      </main>
      <TreeModal
      tree={selectedTree} 
      onClose={() => setSelectedTree(null)} 
      />
      <Footer/>
    </>
  )
}

export default App
