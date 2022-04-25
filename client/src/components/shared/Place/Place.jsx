import styles from "./Place.module.scss";
import show from "../../../assets/images/Place/show.jpg";
import star from "../../../assets/images/Place/star-solid.svg";
import useClickedOutside from "../../../hooks/useClickedOutside";
const Place = () => {
  return (
    
      
        <div className={styles.container}>
        <div className={styles.imgpresentation}></div>
        <div className={styles.presentation}>
          <span className={styles.title}>Palais des Beaux-Arts</span>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
              ex massa. Etiam condimentum aliquam nisl, eu tincidunt arcu
              condimentum vitae. Phasellus ut dolor sit amet augue egestas
              ornare. Donec tincidunt maximus augue, vel iaculis nisi eleifend
              id. Nulla dapibus odio dolor. Integer auctor et nibh nec
              ultricies. Morbi tristique, orci nec condimentum vestibulum, neque
              nisi elementum massa, sit amet egestas lorem libero at mi. Morbi a
              mauris nec eros tincidunt gravida. Curabitur iaculis pretium
              neque, ac luctus lacus dictum quis. Suspendisse eget massa nec
              tellus molestie molestie. Proin sed ipsum nulla. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Aliquam nunc
              massa, aliquam non mattis et, suscipit ut nibh. Pellentesque et
              sem pellentesque, bibendum mi at, sollicitudin ligula. Curabitur
              sit amet elit sed lacus consectetur fringilla. Nullam malesuada
              elit eu lectus rhoncus, a porttitor orci tempus. Duis eget est sit
              amet risus rhoncus suscipit. Nam ac sodales libero, id semper
              mauris. Etiam et ipsum non erat accumsan ultricies. Aliquam
              scelerisque tincidunt ante quis rhoncus. Sed viverra purus sit
              amet vulputate hendrerit. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Mauris sit amet
              gravida velit. Aliquam nibh mi, vulputate a aliquet et, dignissim
              eget magna. Pellentesque lacinia sapien ut tortor hendrerit, eget
              dictum orci vehicula. Etiam tincidunt orci risus, eget porta dui
              ullamcorper vel. Nunc vehicula tempor porta. Nunc egestas
              porttitor velit, eu auctor tellus tempus sed. Pellentesque aliquam
              scelerisque odio ut gravida. Mauris semper dolor massa, et aliquam
              augue eleifend eu. Mauris sagittis dictum placerat. Quisque
              vulputate cursus mauris quis ornare. Donec pulvinar pharetra
              justo. Nam arcu justo, mattis et metus vitae, pellentesque ornare
              lorem. Duis ultricies quis lacus ut malesuada. Sed vitae nibh nec
              tortor egestas mattis in et ex. Fusce eleifend nec lacus pharetra
              pellentesque.
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
