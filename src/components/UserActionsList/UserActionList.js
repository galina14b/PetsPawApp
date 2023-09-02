import { useState, useEffect } from "react";
import css from './UserActionList.module.css';

export const UserActionList = ({ actions }) => {
  const [sortedActions, setSortedActions] = useState();

  useEffect(() => {
    let updatedList = actions.sort(compare)
    setSortedActions(updatedList.slice(0, 5));
  }, [actions])

  // Makes time value for the list
  function gettingTime(timeData) {
    let date = new Date(timeData);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes <= 9) {
      minutes = '0' + minutes;
    }

    return `${hours}:${minutes}`;
  }

  // Sorts items according to their time
  function compare(a, b) {
    let dateA = new Date(a.created_at).getTime();
    let dateB = new Date(b.created_at).getTime();
    return dateB - dateA;
  }
  
  return (
    <ul className={css.userActions__list}>
      
      {sortedActions && <>{sortedActions.map(item => {
        if (item.value === 1) {

          // Adds likes to the list
          return (
          <li key={item.id} className={css.userActions__item}>
            <div className={css.userActions__wrapper}>
              <div className={css.userActions__time}>{gettingTime(item.created_at)}</div>
              <p className={css.userActions__text}>Image ID: <b>{item.image_id}</b> was added to Likes</p>
              <div className={css.userActions__likes}></div>
            </div>
          </li>)
        } else if (item.value === 0) {

          // Adds dislikes to the list
          return (
          <li key={item.id} className={css.userActions__item}>
            <div className={css.userActions__wrapper}>
              <div className={css.userActions__time}>{gettingTime(item.created_at)}</div>
              <p className={css.userActions__text}>Image ID: <b>{item.image_id}</b> was added to Dislikes</p>
              <div className={css.userActions__dislikes}></div>
            </div>
          </li>
        )
        } else {

          // Adds favourites to the list
          return (
          <li key={item.id} className={css.userActions__item}>
            <div className={css.userActions__wrapper}>
              <div className={css.userActions__time}>{gettingTime(item.created_at)}</div>
              <p className={css.userActions__text}>Image ID: <b>{item.image_id}</b> was added to Favourites</p>
              <div className={css.userActions__favourite}></div>
            </div>
          </li>)}
      })}  
        
      </>}
    </ul>
  )
}