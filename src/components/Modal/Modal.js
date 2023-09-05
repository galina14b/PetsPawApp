import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import css from './Modal.module.css';
import axios from "axios";

const Modal = ({ onClick }) => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const fileTypes = ["JPG", "PNG", "GIF"];
  
  axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
  const API_KEY = "live_7Rzkwjrh3OQ8HzQ07RaEAqL8UQr3UfdtzTp9O9T9vVaFIktzDSMnFjrOtFmrW5R8";
  axios.defaults.headers.common['x-api-key'] = API_KEY;

  
  const handleChange = (file) => {
    
    setFile(null);
    setIsLoaded(false);
    setError(false);

    const fileToBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
        setUrl(reader.result)
      };
      reader.onerror = error => reject(error);
    });

    const convertFileToBase64 = async (file) => {
      return await fileToBase64(file);
    }

    convertFileToBase64(file);
    setFile(file);
    
  };

  const uploadingFiles = async () => {
    let formData = new FormData();
    formData.append('file', file);
    console.log('formData', formData.getAll('file'))
    
    try{
      let response = await axios.post('/images/upload', formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }) 
      console.log(response.data);
      setFile(null);
      setUrl(null);
      setIsLoaded(true);

    }catch(error){
      console.log(error.response.data.message)
      setError(true)
    }
  }

  let uploaderContentEl = (
    <div className={error ? css.modal__uploader + ' ' + css.modal__uploader_err : css.modal__uploader}>
      
      {/* Initial upload block */}
      {!url && <div className={css.uploader__content}>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M140 40C128.954 40 120 48.9543 120 59.9999C120 71.0456 128.954 79.9999 140 79.9999C151.046 79.9999 160 71.0456 160 59.9999C160 48.9543 151.046 40 140 40Z" fill="#F8F8F7"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M0 20C0 8.9543 8.9543 0 20 0H180C191.046 0 200 8.9543 200 20V180C200 181.38 199.86 182.729 199.594 184.031C199.199 185.958 198.528 187.784 197.623 189.465C194.247 195.737 187.621 200 180 200H20C8.95431 200 0 191.046 0 180V20ZM64.6564 41.8952L60 37.2387L13.3333 83.9054V20C13.3333 16.3181 16.3181 13.3333 20 13.3333H180C183.682 13.3333 186.667 16.3181 186.667 20V133.333H156.095L64.7145 41.9526C64.6953 41.9333 64.6759 41.9142 64.6564 41.8952Z" fill="#F8F8F7"/>
        </svg>
        <p className={css.uploader__text}><span>Drag here</span> your file or <span>Click here</span> to upload</p>
      </div>}

      {/* Upload block with image */}
      {url && <div className={css.uploader__content}>    
        <img className={css.uploader__img} src={url} alt="" />
        <p className={css.comments}>Image File Name: {file.name}</p>  
      </div>}       
    </div>)
  
  
  return (
    <div className={css.modal__background}>
      <div className={css.modal}>
      <div className={css.modal__wrapper}>
        <button className={css.closeBtn} onClick={onClick}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.05716 8.99997L0.528564 1.47137L1.47137 0.528564L8.99997 8.05716L16.5286 0.528564L17.4714 1.47137L9.94278 8.99997L17.4714 16.5286L16.5286 17.4714L8.99997 9.94278L1.47137 17.4714L0.528564 16.5286L8.05716 8.99997Z" fill=""/>
          </svg>
        </button>
        <h1 className={css.modal__title}>Upload a .jpg or .png Cat Image</h1>
        <p className={css.modal__text}>Any uploads must comply with the <span>upload guidelines</span> or face deletion.</p>        
          
        <FileUploader classes={`${css.modal__uploader}`} children={uploaderContentEl}  handleChange={handleChange} name="file" types={fileTypes} />

        {!file && <p className={css.comments}>No file selected</p>}

        {url && !error && <button className={css.uploader__btn} onClick={uploadingFiles}>UPLOAD PHOTO</button>}

        {/* Feedback when image downloaded */}
        {isLoaded && <div className={css.loaded}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM15.1872 7.08313L9.42904 14.2809L4.90654 10.5121L5.76012 9.48785L9.23763 12.3858L14.1461 6.2502L15.1872 7.08313Z" fill="#97EAB9"/>
          </svg>
          <p className={css.comments}>Thanks for the Upload - Cat found!</p>
        </div>}
          
        {/* Feedback when there is error */}
        {error && <div className={css.error}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM9.05719 10L5.5286 6.4714L6.4714 5.5286L10 9.05719L13.5286 5.5286L14.4714 6.4714L10.9428 10L14.4714 13.5286L13.5286 14.4714L10 10.9428L6.4714 14.4714L5.5286 13.5286L9.05719 10Z" fill="#FF868E"/>
          </svg>
          <p className={css.comments}>No Cat found - try a different one</p>
        </div>}

      </div>
    </div>
  </div>
  );
}

export { Modal };