import { data } from "../utils/constants.js";
import "../components/App.css"; // Ensure the correct path

function Animal({ selectedAnimal }) {
  let animal = data.find((item) => {
    return item.name === selectedAnimal;
  });

  animal = animal?.image
    ? animal
    : data.find((item) => {
        return item.name == "default";
      });

  return <img className="animal-image" src={animal.image} alt={animal.name} />;
}

export default Animal;
