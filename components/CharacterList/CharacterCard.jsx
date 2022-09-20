import Image from "next/image";
import Link from "next/link";

const CharacterCard = ({ character }) => {
  const { id, name, image, species, status } = character;

  return (
    <div className="card h-100 text-dark shadow">
      <Image
        className="card-img-top"
        src={image}
        alt={name}
        width={100}
        height={200}
      />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-capitalize">
          <span className="fw-bold">specie:</span> {species}
        </p>
        <p className="card-text text-capitalize">
          <span className="fw-bold">status:</span> {status}
        </p>
      </div>

      <Link href={`/character/${id}`}>
        <a className="card-footer btn btn-secondary">Details</a>
      </Link>
    </div>
  );
};

export default CharacterCard;
