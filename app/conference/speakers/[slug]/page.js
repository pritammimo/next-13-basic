import { speakerJson } from "../page";
import styles from "../../conference.module.css";

function fetchSpeakerInfo(params) {
  // API call, DB Query, fetch from the app
  console.log("what",params)
  const speakerInfo = speakerJson.speakers?.find(
    (speaker) => speaker.id == params.slug
  );
  console.log("sp2",speakerJson)
  return speakerInfo;
}

export default async function Page({ params }) {
  const speakerInfo = fetchSpeakerInfo(params);
  console.log("sp",speakerInfo)
  return (
  
    <div className={styles.infoContainer}>
      <h3 className={styles.titleText}>{speakerInfo?.name}</h3>
      <h5 className={styles.descText}>About: {speakerInfo?.bio}</h5>
      {speakerInfo?.sessions &&
        speakerInfo?.sessions?.map(({ name, id }) => (
          <div key={id}>
            <h5 className={styles.descText}>Session: {name}</h5>
          </div>
        ))}
    </div>
  );
}
