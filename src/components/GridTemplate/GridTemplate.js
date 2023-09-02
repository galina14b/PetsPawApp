import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import axios from "axios";
import css from './GridTemplate.module.css';

const GridTemplate = ({ list, isGallery, isAction, limit }) => {

  const location = useLocation();
  const [sub_id] = useState('user_175');

   const addToFavourites = async (cat_id) => {
    try{
      let post_body = {
        image_id: cat_id,
        sub_id: sub_id
      }
      await axios.post('https://api.thecatapi.com/v1/favourites', post_body);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {!isGallery && !isAction && <div className={css.gridContainer + ' ' + css[`gridCapacity_${limit}`]}>
        {list.map(item => {
          return (
            <div key={item.id} className={css.gridItem} >
              <img src={item.url} alt=""/>
              <Link to={`/breeds/breed/${item.breeds[0].id}`} state={{from: location}} className={css.gridItem__name}>{item.breeds[0].name}</Link>
            </div>)
        })}
      </div>}
      
      {isGallery && <div className={css.gridContainer + ' ' + css[`gridCapacity_${limit}`]}>
        {list.map(item => {
          return (
            <div key={item.id} className={css.gridItem} >
              <img src={item.url} alt=""/>
              <div className={css.gridItem__icon} onClick={() => addToFavourites(item.id)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.38071 2.33333C3.14541 2.33333 1.33333 4.14541 1.33333 6.38071C1.33333 7.45414 1.75975 8.48361 2.51878 9.24264L10 16.7239L17.4812 9.24264C18.2402 8.48361 18.6667 7.45414 18.6667 6.38071C18.6667 4.14541 16.8546 2.33333 14.6193 2.33333C13.5459 2.33333 12.5164 2.75975 11.7574 3.51878L10.4714 4.80474C10.2111 5.06509 9.78895 5.06509 9.5286 4.80474L8.24264 3.51878C7.48361 2.75975 6.45414 2.33333 5.38071 2.33333ZM0 6.38071C0 3.40903 2.40903 1 5.38071 1C6.80777 1 8.17637 1.5669 9.18545 2.57597L10 3.39052L10.8146 2.57597C11.8236 1.56689 13.1922 1 14.6193 1C17.591 1 20 3.40903 20 6.38071C20 7.80777 19.4331 9.17637 18.424 10.1854L10.4714 18.1381C10.2111 18.3984 9.78895 18.3984 9.5286 18.1381L1.57597 10.1854C0.566893 9.17637 0 7.80777 0 6.38071Z" fill=""/>
                </svg>
              </div>
            </div>)
        })
        }
        </div>}
      
      {isAction && !isGallery && <div className={css.gridContainer + ' ' + css[`gridCapacity_${limit}`]}>
        {list.map(item => {
          return (
            <div key={item.id} className={css.gridItem} >
              <img src={item.image.url} alt=""/>
              <div className={css.gridItem__icon}>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.38071 0C2.40903 0 0 2.40903 0 5.38071C0 6.80777 0.566893 8.17637 1.57597 9.18545L9.5286 17.1381C9.78895 17.3984 10.2111 17.3984 10.4714 17.1381L18.424 9.18545C19.4331 8.17637 20 6.80777 20 5.38071C20 2.40903 17.591 0 14.6193 0C13.1922 0 11.8236 0.566894 10.8146 1.57597L10 2.39052L9.18545 1.57597C8.17637 0.566895 6.80777 0 5.38071 0Z" fill="#FF868E"/>
                </svg>
              </div>
            </div>)
          })
        }
      </div>}
    </>
  )
}

export { GridTemplate };