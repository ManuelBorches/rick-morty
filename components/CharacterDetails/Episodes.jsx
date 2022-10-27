import React, { useState } from "react";
import { useSelector } from "react-redux";
import EpisodeInfo from "./EpisodeInfo";

const Episodes = () => {
  const [currentEpisodeId, setCurrentEpisodeId] = useState();
  const { episode: episodes } = useSelector(
    (state) => state.characters.singleCharacter
  );

  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {episodes?.map((episode, index) => {
          const episodeId = episode.split("/").slice(-1).join();
          const handleClick = () => {
            setCurrentEpisodeId(episodeId);
          };

          return (
            <li key={episodeId} className="nav-item" role="presentation">
              <button
                className={`nav-link ${!index && "active"}`}
                onClick={handleClick}
                id={`episode-${episodeId}-tab`}
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected={!index && true}
              >
                {`Episode ${episodeId}`}
              </button>
            </li>
          );
        })}
      </ul>

      {episodes && (
        <EpisodeInfo
          currentEpisodeId={
            currentEpisodeId || episodes[0].split("/").slice(-1).join()
          }
        />
      )}
    </>
  );
};

export default Episodes;
