import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";

const EspacePro = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className={styles.structurePage}>
      <h2 className={styles.pageTitle}>Profil Public</h2>
      <div className={styles.content}>
        <h3>Nom : </h3>
        <input className={styles.input} type="text"></input>
        <h3>Photo : </h3>
        <div className={styles.photo}>
          <div className={styles.dropzone}>
            <label for="file" className={styles.labelfile}>
              Choisir une image
            </label>
            <input
              id="file"
              class={styles.inputfile}
              type="file"
              onChange={onSelectFile}
            ></input>
          </div>
          <div className={styles.preview}>
            {selectedFile && <img src={preview} />}
          </div>
        </div>
        <h3>Description :</h3>
        <textarea className={styles.inputDesc} type="text"></textarea>
        <h3>Evenements : </h3>
        <input className={styles.input} type="text"></input>
        <h3>Ouvertures : </h3>
        <div className={styles.dates}>
          <h4>Lundi</h4>
          <input className={styles.inputdate} type="text"></input>
          <span>à</span>
          <input className={styles.inputdate} type="text"></input>
          <h4>Mardi</h4>
          <input className={styles.inputdate} type="text"></input>
          <span>à</span>
          <input className={styles.inputdate} type="text"></input>
          <h4>Mercredi</h4>
          <input className={styles.inputdate} type="text"></input>
          <span>à</span>
          <input className={styles.inputdate} type="text"></input>
          <h4>Jeudi</h4>
          <input className={styles.inputdate} type="text"></input>
          <span>à</span>
          <input className={styles.inputdate} type="text"></input>
          <h4>Vendredi</h4>
          <input className={styles.inputdate} type="text"></input>
          <span>à</span>
          <input className={styles.inputdate} type="text"></input>
          <h4>Samedi</h4>
          <input className={styles.inputdate} type="text"></input>
          <span>à</span>
          <input className={styles.inputdate} type="text"></input>
          <h4>Dimanche</h4>
          <input className={styles.inputdate} type="text"></input>
          <span>à</span>
          <input className={styles.inputdate} type="text"></input>
        </div>

        <h3>Liens : </h3>
        <div className={styles.dates}>
          <h4>YouTube</h4>
          <input className={styles.inputlink} type="text"></input>
          <h4>LinkedIn</h4>
          <input className={styles.inputlink} type="text"></input>
          <h4>Twitter</h4>
          <input className={styles.inputlink} type="text"></input>
          <h4>Facebook</h4>
          <input className={styles.inputlink} type="text"></input>
          <h4>Instagram</h4>
          <input className={styles.inputlink} type="text"></input>
        </div>
      </div>
    </div>
  );
};
export default EspacePro;
