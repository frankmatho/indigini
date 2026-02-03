function SeedCard({ seed }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold">
        {seed.name} ({seed.swahili})
      </h3>
      <p className="text-sm text-gray-600">{seed.category}</p>
      <p className="mt-2">{seed.description}</p>
      <p className="text-xs mt-2 text-gray-500">
        Region: {seed.region}
      </p>
    </div>
  );
}

export default SeedCard;
