import Image from "next/image";
import { useSelector } from "react-redux";

const CharacterDetails = () => {
  const { name, image, status, species, type, gender, origin, created } =
    useSelector((state) => state.characters.singleCharacter);

  return (
    name && (
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 text-align-center">
            <Image src={image} alt={name} width={400} height={400} />
          </div>
          <div className="col-12 col-md-4 col-lg-6">
            <ul className="list-group list-group-flush">
              <li className="list-group-item text-capitalize">
                <span className="fw-bold">name:</span> {name}
              </li>
              <li className="list-group-item text-capitalize">
                <span className="fw-bold">species:</span> {species}
              </li>
              <li className="list-group-item text-capitalize">
                <span className="fw-bold">status:</span> {status}
              </li>
              {type && (
                <li className="list-group-item text-capitalize">
                  <span className="fw-bold">type:</span> {type}
                </li>
              )}
              <li className="list-group-item text-capitalize">
                <span className="fw-bold">gender:</span> {gender}
              </li>
              <li className="list-group-item text-capitalize">
                <span className="fw-bold">origin:</span> {origin?.name}
              </li>
              <li className="list-group-item text-capitalize">
                <span className="fw-bold">created:</span>{" "}
                {new Date(created).toLocaleDateString("us", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default CharacterDetails;
