function TreeModal({ tree, onClose }) {
  if (!tree) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white max-w-md w-full rounded-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <img src={tree.image} alt={tree.name} className="w-full h-40 object-cover rounded-md mb-3" />

        <h2 className="text-2xl font-bold text-green-700">
          {tree.name_en} ({tree.name_sw})
        </h2>

        <p className="mt-2 text-gray-600">
          {tree.description}
        </p>

        <div className="mt-4 space-y-2 text-sm">
          <p><strong>Category:</strong> {tree.category}</p>
          <p><strong>Region:</strong> {tree.region}</p>
          <p><strong>Uses:</strong> {tree.uses}</p>
        </div>
      </div>
    </div>
  );
}

export default TreeModal;