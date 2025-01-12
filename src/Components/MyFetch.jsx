

import React, { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import SearchBar from "./SearchBar";

function MyFetch({ searchWord }) {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(searchWord);

  const fetchData = (number) => {
    const api = `https://rickandmortyapi.com/api/character/?page=${number}`;
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setTotalPages(data.info.pages);
        const dataApi = data.results;
        setApiData(dataApi);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleModal = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="cards-container">
        {apiData.map((character) => {
          if (character.name.includes(searchWord)) {
            return (
                <Card key={character.id} character={character} callback={handleModal} />
            )
          }
})}
      </div>

      {isModalOpen && <Modal character={selectedCharacter} callback={handleModal} />}

      <div>
        <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </>
  );
}

export default MyFetch;

