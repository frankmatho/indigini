function SeedCard({ seed, onSelect }) {
  return (
    <div onClick={() => onSelect(seed)} className="bg-white p-4 rounded-xl shadow-sm cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <img src={seed.image} alt={seed.name} className="w-full h-40 object-cover rounded-md mb-3" />
      <h3 className="text-xl font-semibold text-green-700">
        {seed.name} ({seed.swahili})
      </h3>
      <p className="text-sm text-gray-600 mt-1">
        {seed.description}
      </p>
      <p className="text-sm text-gray-600">
        <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded" >
          {seed.category}
        </span>
      </p>
      <p className="text-xs mt-2 text-gray-500">
        Region: {seed.region}
      </p>
    </div>
  );
}

export default SeedCard;
