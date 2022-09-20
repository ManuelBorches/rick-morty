import { useEffect, useState } from "react";
import { fetchAPIEpisode } from "../../api/episode/fetchAPIEpisode";

const EpisodeInfo = ({ currentEpisodeId }) => {
  const [episodeInfo, setEpisodeInfo] = useState({});
  const { id, name, air_date, episode } = episodeInfo;

  useEffect(() => {
    (async () => {
      const episodeInfo = await fetchAPIEpisode(currentEpisodeId);
      setEpisodeInfo(episodeInfo);
    })();
  }, [currentEpisodeId]);

  return (
    <div className="tab-content my-3" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id={currentEpisodeId}
        role="tabpanel"
        aria-labelledby={`episode-${currentEpisodeId}-tab`}
      >
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-capitalize">
            <span className="fw-bold">id:</span> {id}
          </li>
          <li className="list-group-item text-capitalize">
            <span className="fw-bold">name:</span> {name}
          </li>
          <li className="list-group-item text-capitalize">
            <span className="fw-bold">air date:</span> {air_date}
          </li>

          <li className="list-group-item text-capitalize">
            <span className="fw-bold">episode:</span> {episode}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EpisodeInfo;
