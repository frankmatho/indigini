import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import seeds from './data/seeds';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const filteredSeeds = seeds.filter((seed) => {
    const matchesSearch =
      seed.swahili.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seed.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || seed.category === category;

    return matchesSearch && matchesCategory;
});

  return (
    <>
      <Navbar 
      searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm}
      category={category}
      setCategory={setCategory} 
      />
      <main className='p-6'>
        <seedList seeds={filteredSeeds} />
        {filteredSeeds.length === 0 && (
          <div className="mt-10 text-center text-gray-500">
              <p className="text-lg">No seeds found 🌱</p>
              <p className="text-sm mt-1">
              Try a different name or category
              </p>
          </div>
        )}
      </main>
      <Home />
    </>
  )
}

export default App
