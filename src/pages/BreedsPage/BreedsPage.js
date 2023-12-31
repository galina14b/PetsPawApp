import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";
import css from "./BreedsPage.module.css";

import { TopLinksBlock } from "components/TopLinksBlock/TopLinksBlock";
import { GridTemplate } from "components/GridTemplate/GridTemplate";


const BreedsPage = () => {

  axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
  const API_KEY = "live_7Rzkwjrh3OQ8HzQ07RaEAqL8UQr3UfdtzTp9O9T9vVaFIktzDSMnFjrOtFmrW5R8";
  axios.defaults.headers.common['x-api-key'] = API_KEY;

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");

  const [selectedId, setSelectedId] = useState('');
  const [images, setImages] = useState();
  const [selectOptions, setSelectOptions] = useState();
  const [limit, setLimit] = useState(10);
  const [sorted, setSorted] = useState();

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
    getImages('', 10);

  }, []);

  useEffect(() => {

    setImages(sorted);
  }, [sorted]);

  const getImages = async (selectedValue, limitValue) => {
    if (selectedValue === '') {
      try {
          let response = await axios.get('/images/search',
        {
          params: { limit: limitValue, has_breeds: 1 }
        });
        
        setImages(response.data);
        } catch (error) {
          console.error(error)
        }
    } else {
      let response = await axios.get('/images/search',
        {
          params: { limit: limitValue, breed_ids: selectedValue }
        });
      setImages(response.data);
    }
  }

  const handleBreedSelection = async (event) => {
    let select = event.target.value;
    setSelectedId(select);
    if (select === 'all') {
      await getImages('', limit)
    } else {
      await getImages(select, limit);
    }
  }

  const handleLimitSelection = async (event) => {
    let select = event.target.value;
    setLimit(select);
    if (selectedId === '') {
      await getImages('', select)
    } else {
      await getImages(selectedId, select)
    }
  }

  const sorting = async (array) => {
    let result = await array.slice().sort(byField('breeds[0].name'));
    setSorted(result);
  }

  function byField(fieldName){
  return (a, b) => a[fieldName] - b[fieldName] ? 1 : -1;
  }

  return (
    <>
      <div className={css.breedsPage}>
        <TopLinksBlock/>

        <div className={css.breedsPage__wrapper}>

          <div className={css.breedsPage__navigationBlock}>
            <div className={css.breedsPage__backLinkBlock}>
              <Link to={backLinkHref.current} className={css.breedsPage__backLink}>
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

            <div className={css.breedsPage__nameOfPage}>
              BREEDS
            </div>

            {selectOptions && <div className={css.breedsPage__selectBreed}>
              <select className={css.selectBreed} onChange={handleBreedSelection} id="breeds">
                <option value="all">All breeds</option>
                {selectOptions.map(item => {
                  return (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  )
                })}
              </select>
            </div>}

            <div className={css.breedsPage__selectLimit}>
              <select className={css.selectLimit} defaultValue={"10"} id="limit" onChange={handleLimitSelection}>
                <option value="5">Limit: 5</option>
                <option value="10">Limit: 10</option>
                <option value="15">Limit: 15</option>
                <option value="20">Limit: 20</option>
              </select>
            </div>

            <div className={css.sortIcon} onClick={() => sorting(images)}>
              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.80474 17.7239V0H5.13807V17.7239L8 14.8619L8.94281 15.8047L4.94281 19.8047C4.81778 19.9298 4.64822 20 4.4714 20C4.29459 20 4.12502 19.9298 4 19.8047L0 15.8047L0.942809 14.8619L3.80474 17.7239ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 0 15.1381 0C13.2971 0 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z" fill=""/>
              </svg>
            </div>
          </div>
              
          {images && <GridTemplate list={images} isGallery={false} isAction={false} limit={limit} />} 
              
        </div>
      </div>
    </>
  )
}

export default BreedsPage;