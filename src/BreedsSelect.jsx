// @ts-check

export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed }) => {
  return <>
    <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
        {breeds.map((breed) => (
          <option key={breed}>{breed}</option>
        ))}
    </select>
  </>
}

export default BreedsSelect
