// @ts-check

import { useEffect, useState } from "react";
import BreedsSelect from "./BreedsSelect";
import DogImage from "./DogImage";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [dogImages, setDogImages] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        const breedList = Object.keys(data.message);
        setBreeds(breedList);
      } catch (error) {
        console.error('Error fetching the breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  const fetchDogImage = async (breed) => {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`);
      const data = await response.json();
      setDogImages(data.message);
    } catch (error) {
      console.error('Error fetching the dog image:', error);
    }
  }



  return (
    <div>
      <h1>Dog Breeds</h1>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} />
      <button onClick={() => fetchDogImage(selectedBreed)}>
        表示
      </button>
      {dogImages.map((imageUrl) => (
          <DogImage key={imageUrl} imageUrl={imageUrl} />
      ))}
    </div>
  );
}

export default DogListContainer
