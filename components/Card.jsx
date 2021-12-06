import { Character } from '../types';

import Image from 'next/image';

const Card = ({ character }) => {
  // return <h1>{character.name}</h1>;
  return (
    <div className="card-container">
      <Image
        src={character.image}
        alt={character.name}
        width="150px"
        height="150px"
      />
      <strong>{character.name}</strong>
    </div>
  );
};

export default Card;
