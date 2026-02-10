function Navbar({ searchTerm, setSearchTerm, category, setCategory, region, setRegion, regions }) {
  return (
    <nav className="sticky top-0 bg-green-700 text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <h2 className="text-2xl font-bold">
        Indigenous Seeds 🌱
      </h2>

      <div className="flex flex-col md:flex-row gap-3 w-full md:auto">
      <input
        type="text"
        placeholder="Search seeds..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 rounded-lg text-black w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-green-300"
      />

       <select
         value={category}
         onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 rounded-lg text-black "
       >
        <option value="All">All</option>
        <option value="Vegetable">Vegetable</option>
        <option value="Plant">Plant</option>
        <option value="Tree">Trees</option>
       </select>

       <select
         value={region}
         onChange={(e) => setRegion(e.target.value)}
            className="px-3 py-2 rounded-lg text-black"
      >
        {regions.map((r) => (
        <option key={r} value={r}>
        {r}
        </option>
      ))}
        </select>
 
      </div>
    </nav>
  );
}

export default Navbar;
