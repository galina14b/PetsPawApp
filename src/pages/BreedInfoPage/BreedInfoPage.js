import { useState, useRef, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import css from './BreedInfoPage.module.css';
import axios from "axios";

import { Carousel } from "components/Carousel/Carousel";
import { DescriptionBlock } from "components/DescriptionsBlock/DescriptionBlock";
import { TopLinksBlock } from "components/TopLinksBlock/TopLinksBlock";


const BreedInfoPage = () => {

  axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
  const API_KEY = "live_7Rzkwjrh3OQ8HzQ07RaEAqL8UQr3UfdtzTp9O9T9vVaFIktzDSMnFjrOtFmrW5R8";
  axios.defaults.headers.common['x-api-key'] = API_KEY;

  const { breedID } = useParams();
  const [breedInfo, setBreedInfo] = useState();
  const [breedImages, setBreedImages] = useState([]);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/breeds");

  useEffect(() => {
    const getBreedInfo = async () => {
      try {
        let response = await axios.get('/images/search',
          {
            params: { limit: 100, breed_ids: breedID }
          });
      
        setBreedImages(response.data);
        setBreedInfo(response.data[0].breeds[0]);

      } catch (error) {
        console.log(error)
      }
    }

    getBreedInfo();

  }, [breedID])

  return (
  
      
    <div className={css.breedsInfoPage}>
        
      <TopLinksBlock/>

      <div className={css.breedsInfoPage__wrapper}>

        <div className={css.breedsInfoPage__navigationBlock}>
          <div className={css.breedsInfoPage__backLinkBlock}>
            <Link to={backLinkHref.current} className={css.breedsInfoPage__backLink}>
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

          <div className={css.breedsInfoPage__nameOfPage}>
            BREEDS
          </div>

          <div className={css.breedsInfoPage__breedID}>
            {breedID}
          </div>  
        </div>

        <div className={css.breedsInfoPage__imageBlock}>
          <div className={css.glide}>
            {breedImages && <Carousel list={breedImages} />}
          </div>
        </div>

        {breedInfo && <div className={css.breedsInfoPage__info}>
          <DescriptionBlock breedInfo={breedInfo}/>    
        </div>}
        
      </div>
    </div>
    
  )
}

export default BreedInfoPage;