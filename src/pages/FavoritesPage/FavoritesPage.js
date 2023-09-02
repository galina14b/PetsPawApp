import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { TopLinksBlock } from "components/TopLinksBlock/TopLinksBlock";
import { GridTemplate } from "components/GridTemplate/GridTemplate";
import { UserActionList } from 'components/UserActionsList/UserActionList';
import { NoItem } from "components/NoItem/NoItem";

import css from './FavoritesPage.module.css';
import axios from "axios";

const FavoritesPage = () => {

  axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
  const API_KEY = "live_7Rzkwjrh3OQ8HzQ07RaEAqL8UQr3UfdtzTp9O9T9vVaFIktzDSMnFjrOtFmrW5R8";
  axios.defaults.headers.common['x-api-key'] = API_KEY;

  const [images, setImages] = useState([]);

  useEffect(() => {
    getFavourites()
  }, [])

  const getFavourites = async () => {
    try{   
      let query_params = {
        limit: 100,     
      }
      let response = await axios.get('/favourites', { params: query_params }) 
      let result = response.data;
      setImages(result);
      console.log(result)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className={css.favPage}>

      <TopLinksBlock />
      
      <div className={css.favPage__wrapper}>
      
        <div className={css.favPage__navigationBlock}>
          <div className={css.favPage__backLinkBlock}>
            <Link to={'/'} className={css.favPage__backLink}>
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

          <div className={css.favPage__nameOfPage}>
            FAVOURITES 
          </div>
        </div>

        {images.length === 0 && <NoItem/>}

        {images && <GridTemplate list={images.slice(0, 5)} isGallery={false} isAction={true} limit={20} />}

        <div className={css.favPage__historyBlock}>
          {images && <UserActionList actions={images}/>}
        </div>
        
      </div>
    </div>
  )
}

export default FavoritesPage;