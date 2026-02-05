function SearchBar({searchTerm, setSearchTerm}) {
    return(
        <input
            type = "text"
            placeholder = "search by English or Swahili name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
    );
}

export default SearchBar;