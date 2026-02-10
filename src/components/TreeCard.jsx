function TreeCard({ tree, onSelect }) {
  return (
    <div onClick={() => onSelect(tree)} className="bg-white p-4 rounded-xl shadow-sm cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <img src={tree.image} alt={tree.name} className="w-full h-40 object-cover rounded-md mb-3" />
      <h3 className="text-xl font-semibold text-green-700">
        {tree.name} ({tree.swahili})
      </h3>
      <p className="text-sm text-gray-600 mt-1">
        {tree.description}
      </p>
      <p className="text-sm text-gray-600">
        <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded" >
          {tree.category}
        </span>
      </p>
      <p className="text-xs mt-2 text-gray-500">
        Region: {tree.region}
      </p>
    </div>
  );
}

export default TreeCard;