import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import css from "./SearchPage.module.css";
import axios from "axios";

import { NavBlock } from "components/NavBlock/NavBlock";
import { GridTemplate } from "components/GridTemplate/GridTemplate";


const SearchPage = () => {

  axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
  const API_KEY = "live_7Rzkwjrh3OQ8HzQ07RaEAqL8UQr3UfdtzTp9O9T9vVaFIktzDSMnFjrOtFmrW5R8";
  axios.defaults.headers.common['x-api-key'] = API_KEY;

  const [images, setImages] = useState();
  const { value } = useParams();

  useEffect(() => {
    async function getBreeds() {
      try {
        const response = await axios('/breeds')
        console.log(response.data);
        filter(response.data);
      
      } catch (error) {
        console.error(error)
      }
    }

    getBreeds();

    async function filter(data) {
      let searchingValue = value;
      let result = await data.filter((breed) => breed.name.toLowerCase().includes(searchingValue))
      let id = result[0].id ? result[0].id : '';
      if (!id) {
        return
      } else {
        getImages(id, 10)
      }
    }
   
  }, [value]);
  

  const getImages = async (selectedValue) => {
    try {
       const response = await axios.get('/images/search',
       {
         params: { limit: 10, breed_ids: selectedValue }
        });
      
       setImages(response.data);
     
     } catch (error) {
       console.error(error)
     }  
  }
  
  return (
    <div className={css.searchPage}>

      <NavBlock />
      
      <div className={css.searchPage__wrapper}>
      
        <div className={css.searchPage__navigationBlock}>
          <div className={css.searchPage__backLinkBlock}>
            <Link to={'/breeds'} className={css.searchPage__backLink}>
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

          <div className={css.searchPage__nameOfPage}>
            SEARCH
          </div>         
        </div>

        <h6 className={css.searchPage__title}>Search results for: <span>{ value}</span></h6>

          {images && <GridTemplate list={images} isGallery={false} isAction={false} />}

      </div>
    </div>
  )
}

export default SearchPage;