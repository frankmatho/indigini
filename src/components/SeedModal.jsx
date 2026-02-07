function SeedModal({ seed, onClose }) {
  if (!seed) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white max-w-md w-full rounded-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-green-700">
          {seed.name_en} ({seed.name_sw})
        </h2>

        <p className="mt-2 text-gray-600">
          {seed.description}
        </p>

        <div className="mt-4 space-y-2 text-sm">
          <p><strong>Category:</strong> {seed.category}</p>
          <p><strong>Region:</strong> {seed.region}</p>
          <p><strong>Uses:</strong> {seed.uses}</p>
        </div>
      </div>
    </div>
  );
}

export default SeedModal;
