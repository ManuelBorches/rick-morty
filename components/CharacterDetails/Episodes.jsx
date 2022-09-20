import React, { useState } from "react";
import { useSelector } from "react-redux";
import EpisodeInfo from "./EpisodeInfo";

const Episodes = () => {
  const { episode: episodes } = useSelector(
    (state) => state.characters.singleCharacter
  );
  const [currentEpisodeId, setCurrentEpisodeId] = useState();

  if (!episodes) return;
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {episodes.map((episode, index) => {
          const episodeId = episode.split("/").slice(-1).join();
          const handleClick = () => {
            setCurrentEpisodeId(episodeId);
          };

          return (
            <li key={episodeId} className="nav-item" role="presentation">
              <button
                className={`nav-link ${!index && "active"}`} // "nav-link active" // class=`nav-link ${episode[0] && active}`
                onClick={handleClick}
                id={`episode-${episodeId}-tab`} // id={`episode-${episode.id}-tab`}
                data-bs-toggle="tab"
                // data-bs-target={`#${episodeId}`} // data-bs-target={`#${episodeId}`}
                type="button"
                role="tab"
                // aria-controls={episodeId} // aria-controls={`${episode.number}`}
                aria-selected={!index && true} // aria-selected={episode[0] && true} // solo al primero
              >
                {`Episode ${episodeId}`}
              </button>
            </li>
          );
        })}
      </ul>

      <EpisodeInfo
        currentEpisodeId={
          currentEpisodeId || episodes[0].split("/").slice(-1).join()
        }
      />
    </>
  );
};

export default Episodes;
