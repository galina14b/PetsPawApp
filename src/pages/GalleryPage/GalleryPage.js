import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import css from './GalleryPage.module.css';
import axios from "axios";

import { TopLinksBlock } from 'components/TopLinksBlock/TopLinksBlock';
import { GridTemplate } from 'components/GridTemplate/GridTemplate';
import {Modal} from 'components/Modal/Modal';


const GalleryPage = () => {

  axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
  const API_KEY = "live_7Rzkwjrh3OQ8HzQ07RaEAqL8UQr3UfdtzTp9O9T9vVaFIktzDSMnFjrOtFmrW5R8";
  axios.defaults.headers.common['x-api-key'] = API_KEY;

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");

  const [showModal, setShowModal] = useState(false);
  const [selectOptions, setSelectOptions] = useState();
  const [images, setImages] = useState();
  const [order, setOrder] = useState('RAND');
  const [type, setType] = useState('jpg,png');
  const [breed, setBreed] = useState('');
  const [page, setPage] = useState(5);

  useEffect(() => {
    async function getSelectOptions() {
      try {
          const response = await axios('/breeds')
          setSelectOptions(response.data);
      } catch (error) {
          console.error(error)
      }
    }
    getSelectOptions();

    const getFirstImages = async () => {
      try {
          let response = await axios.get('/images/search',
        {
          params: { limit: 5, order: 'RAND', page: 5, mime_types: 'jpg,png,gif'}
        });
        setImages(response.data);
        } catch (error) {
          console.error(error)
        }
    
  }
    
    getFirstImages();

  }, []);

  const getImages = async (selectedValue, orderValue, pageValue, mime_typesValue) => {
    if (selectedValue === '') {
      try {
          let response = await axios.get('/images/search',
        {
          params: { limit: page, order: orderValue, page: pageValue, mime_types: mime_typesValue}
        });
        setImages(response.data);
        } catch (error) {
          console.error(error)
        }
    } else {
      let response = await axios.get('/images/search',
        {
          params:
          {
            limit: page, breed_ids: selectedValue, order: orderValue, page: pageValue, mime_types: mime_typesValue
          }
        });
      setImages(response.data);
    }
  }

  const updatingImages = async (event) => {
    event.preventDefault();
    await getImages(breed, order, page, type);
  }

  return (
    <div className={css.galleryPage}>
      <TopLinksBlock/>
      <div className={css.galleryPage__wrapper}>

        <div className={css.galleryPage__navigationBlock}>
          <div className={css.galleryPage__backLinkBlock}>
            <Link to={backLinkHref.current} className={css.galleryPage__backLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#clip0_1_1332)">
                  <path d="M4.70999 10.9901L13.3097 19.5896C13.8567 20.1369 14.7437 20.1369 15.2905 19.5896C15.8373 19.0427 15.8373 18.1558 15.2905 17.6091L7.68104 9.99988L15.2902 2.39096C15.8371 1.84391 15.8371 0.957107 15.2902 0.410284C14.7434 -0.136761 13.8565 -0.136761 13.3095 0.410284L4.70977 9.00985C4.43635 9.28339 4.2998 9.64153 4.2998 9.99983C4.2998 10.3583 4.43662 10.7167 4.70999 10.9901Z" fill=""/>
                </g>
                <defs>
                  <clipPath id="clip0_1_1332">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>

          <div className={css.galleryPage__nameOfPage}>
            GALLERY
          </div>

          <div className={css.upload} onClick={() => setShowModal(true)}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z" fill=""/>
            </svg>
            UPLOAD
          </div>

        </div>

        {showModal && <Modal onClick={() => setShowModal(false)}/>}

        <form onSubmit={updatingImages}>
          <div className={css.selectBlock}>

          <div className={css.selectBlock__item}>
            <div className={css.selectBlock__wrapper}>
                
              <h6>Order</h6>
              <select className={css.selectOrder} onChange={(e) => setOrder(e.target.value)}>
                <option value="RAND">Random</option>
                <option value="DESC">Desc</option>
                <option value="ASC">Asc</option>
              </select>
            </div>

            <div className={css.selectBlock__wrapper}>
              <h6>Type</h6>
              <select className={css.selectType} onChange={(e) => setType(e.target.value)}>
                <option value="jpg,png,gif">All</option>
                <option value="jpg,png">Static</option>
                <option value="gif">Animated</option>
              </select>
            </div>
          </div>
            
          <div className={css.selectBlock__item}>

              {selectOptions && <div className={css.selectBlock__wrapper}>
                <h6>Breed</h6>
                <select className={css.selectBreed} onChange={(e) => setBreed(e.target.value)} id="breeds">
                  <option value="all">None</option>
                  {selectOptions.map(item => {
                    return (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    )})}
                </select>
              </div>}
            

              <div className={css.selectBlock__wrapper}>
                <h6>Limit</h6>
                <select className={css.selectLimit} onChange={(e) => setPage(e.target.value)}>              
                <option value="5">5 items per page</option>
                <option value="10">10 items per page</option>
                <option value="15">15 items per page</option>
                <option value="20">20 items per page</option>
                </select>
              </div>

            <button type='submit' className={css.loadBtn}>
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.48189 2.49989L6.93396 0.953004L7.88633 0L11.0577 3.16928L7.88634 6.33873L6.93395 5.38576L8.47232 3.84832C4.51244 3.99813 1.3473 7.25498 1.3473 11.2478C1.3473 15.3361 4.66547 18.6527 8.75744 18.6527C12.8494 18.6527 16.1676 15.3361 16.1676 11.2478V10.5742H17.5149V11.2478C17.5149 16.081 13.5927 20 8.75744 20C3.92221 20 0 16.081 0 11.2478C0 6.50682 3.77407 2.64542 8.48189 2.49989Z" fill=""/>
              </svg>
            </button>
          </div>
        </div>
        </form>

        {images && <GridTemplate list={images} isGallery={true} isAction={false} limit={page} />}

      </div>
    </div>
  )
}

export default GalleryPage;