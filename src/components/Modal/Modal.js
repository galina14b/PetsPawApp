import { useState, useRef } from "react";
import css from './Modal.module.css';
import axios from "axios";

const Modal = ({ onClick }) => {
  
  axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
  const API_KEY = "live_7Rzkwjrh3OQ8HzQ07RaEAqL8UQr3UfdtzTp9O9T9vVaFIktzDSMnFjrOtFmrW5R8";
  axios.defaults.headers.common['x-api-key'] = API_KEY;

  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imageName, setImageName] = useState();
  const [imageFile, setImageFile] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [uploadedImage, setUploadedImage] = useState({});

  // ref
  const inputRef = useRef(null);

  const uploadFile = async() => {
    setUploading(true);
    let formData = new FormData();
    formData.append('file', imageFile);
    
    try{
      let response = await axios.post('/images/upload', formData, {headers: {'Content-Type':'multipart/form-data' }}) 
      console.log(response.data)
      setUploadedImage(response.data);
      setUploading(false);
      setImageFile(null);

    }catch(error){
      console.log(error)
      setUploading(false);
      setImageFile(null);
    }
  }
  
  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    // e.stopPropagation();
    // if (e.type === "dragenter" || e.type === "dragover") {
    //   setDragActive(true);
    // } else if (e.type === "dragleave") {
    //   setDragActive(false);
    // }
  }

    const onFilePicked = async (event) => {
      const files = event.target.files
      if(files[0] !== undefined) {
        setImageName(files[0].name);
          if(imageName.lastIndexOf('.') <= 0) {
              return
          }
          const fr = new FileReader ()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
            setImageUrl(fr.result);
            setImageFile(files[0]);
          })
      } else {
        setImageName('');
        setImageFile('');
        setImageUrl('');
      }
    
  };
  
  // triggers when file is dropped
  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
      onFilePicked();
      uploadFile();
    }
  };
  
  // triggers when file is selected with click
  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
      onFilePicked();
      uploadFile();
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };
  
  
  return (
    <div className={css.modal__background}>
      <div className={css.modal}>
      <div className={css.modal__wrapper}>
        <button className={css.closeBtn} onClick={onClick}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.05716 8.99997L0.528564 1.47137L1.47137 0.528564L8.99997 8.05716L16.5286 0.528564L17.4714 1.47137L9.94278 8.99997L17.4714 16.5286L16.5286 17.4714L8.99997 9.94278L1.47137 17.4714L0.528564 16.5286L8.05716 8.99997Z" fill="#FF868E"/>
          </svg>
        </button>

        <h1 className={css.modal__title}>Upload a .jpg or .png Cat Image</h1>
        <p className={css.modal__text}>Any uploads must comply with the <span>upload guidelines</span> or face deletion.</p>
        
          <form className={css.formUpload} onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            <svg className={css.formSvg} width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M140 40C128.954 40 120 48.9543 120 59.9999C120 71.0456 128.954 79.9999 140 79.9999C151.046 79.9999 160 71.0456 160 59.9999C160 48.9543 151.046 40 140 40Z" fill="#"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 20C0 8.9543 8.9543 0 20 0H180C191.046 0 200 8.9543 200 20V180C200 181.38 199.86 182.729 199.594 184.031C199.199 185.958 198.528 187.784 197.623 189.465C194.247 195.737 187.621 200 180 200H20C8.95431 200 0 191.046 0 180V20ZM64.6564 41.8952L60 37.2387L13.3333 83.9054V20C13.3333 16.3181 16.3181 13.3333 20 13.3333H180C183.682 13.3333 186.667 16.3181 186.667 20V133.333H156.095L64.7145 41.9526C64.6953 41.9333 64.6759 41.9142 64.6564 41.8952Z" fill="#"/>
            </svg>

            <input ref={inputRef} type="file" className={css.inputUpload} multiple={true} onChange={handleChange} />
            <label className={css.labelUpload + ' ' + dragActive ? "drag-active" : "" } htmlFor="input-file-upload">
            <div className={css.dropSpace}>
              <button className={css.uploadButton} onClick={onButtonClick}><span>Drag here</span> your file or <span>Click here</span> to upload</button>
            </div> 
          </label>
          { dragActive && <div className={css.dragFileElement} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
          </form>
          
        {!dragActive && <p className={css.comments}>No file selected</p>}

      </div>
    </div>
    </div>
  );

  // return (
  //   <div className={css.modal}>
  //     <div className={css.modal__wrapper}>
  //       <button className={css.closeBtn}>
  //         <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  //           <path fill-rule="evenodd" clip-rule="evenodd" d="M8.05716 8.99997L0.528564 1.47137L1.47137 0.528564L8.99997 8.05716L16.5286 0.528564L17.4714 1.47137L9.94278 8.99997L17.4714 16.5286L16.5286 17.4714L8.99997 9.94278L1.47137 17.4714L0.528564 16.5286L8.05716 8.99997Z" fill="#FF868E"/>
  //         </svg>
  //       </button>

  //       <h1 className={css.modal__title}>Upload a .jpg or .png Cat Image</h1>
  //       <p className={css.modal__text}>Any uploads must comply with the <span>upload guidelines</span> or face deletion.</p>
      
  //     </div>
  //   </div>
  // )
}

export { Modal };