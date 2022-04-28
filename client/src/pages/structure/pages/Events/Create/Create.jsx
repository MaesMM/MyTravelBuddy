import styles from "./Create.module.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import api from "../../../../../services/api";

const Create = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.location_id = 1;
    data.category = "test category";
    console.log(data);
    api.post('events/create', data);
  }

  return (
    <div>
      <h2 className={styles.pageTitle}>Créer un événement</h2>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

        <label className="form-group">
          Titre :
          <input className="input" type="text" {...register('name', { required: true })} />
        </label>

        <label className="form-group">
          Description :
          <textarea className={`input ${styles.textarea}`} type="textarea" {...register('description')} />
        </label>

        <div className={`row ${styles.buttons}`}>
          <div className={`form-group ${styles.section}`}>
            <label className="label">Début :</label>
            <input className="input" type="datetime-local" {...register('start_datetime', { required: true })} />
          </div>
          <div className={`form-group ${styles.section}`}>
            <label className="label">Fin :</label>
            <input className="input" type="datetime-local" {...register('end_datetime')} />
          </div>
          <div className={`form-group ${styles.sectionSmall}`}>
            <label className="label">Permanent</label>
            <input className={styles.checkBox} type="checkbox" {...register('permanent')} />
          </div>
        </div>

        <label className="form-group">
          Adresse :
          <input className="input" type="text" {...register('address', { required: true })} />
        </label>

        <div className={`row ${styles.buttons}`}>
          <input className="primary-btn" type="submit"/>
          <Link className={`secondary-btn ${styles.secondary}`} to="/structures/events">
            <span>Annuler</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Create;
