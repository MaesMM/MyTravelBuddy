import styles from "./Place.module.scss";
import show from "../../../assets/images/Place/show.jpg";
import star from "../../../assets/images/Place/star-solid.svg";
import useClickedOutside from "../../../hooks/useClickedOutside";
const Place = ({ data }) => {
  return (
    
      
        <div className={styles.container}>
        <div className={styles.imgpresentation} 
        style={{ backgroundImage:`url(${data.image})`,backgroundRepeat:"no-repeat", backgroundPosition:"center" }}>
        </div>
        <div className={styles.presentation}>
          <span className={styles.title}>{data.name}</span>
          <div className={styles.noteetoile}>
            <img className={styles.star} src={star} />
            <img className={styles.star} src={star} />
            <img className={styles.star}src={star} />
            <img className={styles.star}src={star} />
            <img className={styles.star}src={star} />
            <span className={styles.nbnote}>12 notes</span>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.exposition}>
            <span className={styles.destitle}>Expositions</span>
            <div className={styles.shows}>
              <img className={styles.show} src={show} />
              <img className={styles.show} src={show} />
              <img className={styles.show} src={show} />
            </div>
          </div>
          <div className={styles.horaire}>
            <span className={styles.destitle}>Horaires</span>
            <div className={styles.week}>
              <div className={styles.monday}>Lundi</div>
              <div className={styles.horairemonday}>10:00 20:00</div>
              <div className={styles.tuesday}>Mardi</div>
              <div className={styles.horairetuesday}>10:00 20:00</div>
              <div className={styles.wednesday}>Mercredi</div>
              <div className={styles.horairewednesday}>10:00 20:00</div>
              <div className={styles.thursday}>Jeudi</div>
              <div className={styles.horairethursday}>10:00 20:00</div>
              <div className={styles.friday}>Vendredi</div>
              <div className={styles.horairefriday}>10:00 20:00</div>
              <div className={styles.saturday}>Samedi</div>
              <div className={styles.horairesaturday}>10:00 20:00</div>
              <div className={styles.sunday}>Dimanche</div>
              <div className={styles.horairewednesday}>10:00 20:00</div>
            </div>
          </div>
        </div>

        <div className={styles.social}>
          <span className={styles.destitle}>Nous suivre</span>
        </div>
        <div className={styles.describe}>
          <span className={styles.destitle}>Description du lieu</span>
          <div className={styles.paragraphcontainer}>
            <span className={styles.paragraph}>
                {data.description}
            </span>
          </div>
        </div>
        <div className={styles.comment}>
          <span className={styles.destitle}>Avis</span>
          <div className={styles.button}>
            <button>
              <span className={styles.buttontitle}> Laisser un avis</span>
            </button>
          </div>
        </div>
    
          
        </div>

  );
};

export default Place;
