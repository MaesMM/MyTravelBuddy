import styles from "./Create.module.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { useRef, useState } from "react";

import api from "../../../../../services/api";

// fonctoin dédiée de post d'image
// import axios from 'axios';
async function postImage(image) {
  const formData = new FormData();
  formData.append("image", image)
  //const result = await axios.post('/images', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
  const result = await api.post('images', formData, { headers: { "Content-Type": "multipart/form-data" } })
  console.log(result)
  return result.data ?? null
}

const Create = () => {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [checkBox, setCheckBox] = useState("")

  const [file, setFile] = useState()
  const [image, setImage] = useState()
  //yop
  //tout vérifier
  //image -> upload et mettre le string dans le JSON

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    // data.location_id = 1;
    data.category = "test category";

    //add latitude and longitude
    data.latitude = 3.17000
    data.longitude = 50.6900

    const result = await postImage(file);
    if (result) {
      console.log("image data: ", result)
      data.image = result;
    }

    // const formData = new FormData();
    // for (let value in data) {
    //   formData.append(value, data[value])
    // }

    // for (let pair of formData.entries()) {
    //   console.log(pair[0]+" : "+pair[1]);
    //   if (pair[0] == "image") {
    //     console.log(Object.entries(pair))
    //   }
    // }


    // setValue('image', file);
    api.post('events/create', data);

    //if success, redirect
  }

  const onImageChanged = (el) => {
    const file = el.target.files[0];
    setFile(file)
    // setValue("image", file)
    setImage(window.URL.createObjectURL(file));
  }

  const onDateChanged = () => {
    setCheckBox(false)
  }

  const onTick = (el) => {
    if (checkBox) {
      setCheckBox(false);
      return;
    }
    setCheckBox(true);

    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    setStartDate(now.toISOString().slice(0, 16));
    setEndDate(now.toISOString().slice(0, 16));
  }

  return (
    <div className="structurePage">
      <h2 className={styles.pageTitle}>Créer un événement</h2>

      <form className={styles.form} encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>

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
            <input className="input" type="datetime-local" onChange={onDateChanged} defaultValue={startDate} {...register('start_datetime')} />
          </div>
          <div className={`form-group ${styles.section}`}>
            <label className="label">Fin :</label>
            <input className="input" type="datetime-local" onChange={onDateChanged} defaultValue={endDate} {...register('end_datetime')} />
          </div>
          <div className={`form-group ${styles.sectionSmall}`}>
            <label className="label">Permanent</label>
            <input className={styles.checkBox} onClick={onTick} type="checkbox" checked={checkBox} {...register('permanent')} />
          </div>

        </div>

        <label className="form-group">
          Adresse :
          <input className="input" type="text" {...register('adresse', { required: true })} />
        </label>

        <label className={styles.ImageInput}>
          <img className="image" src={image} alt="" />
          <input type="file" className="imageInput" onChange={onImageChanged}></input>
        </label>

        <div className={`row ${styles.buttons}`}>
          <input className="primary-btn" type="submit" onSubmit={handleSubmit(onSubmit)} />
          <Link className={`secondary-btn ${styles.secondary}`} to="/structures/events">
            <span>Annuler</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Create;
