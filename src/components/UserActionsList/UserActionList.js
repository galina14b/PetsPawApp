import css from './UserActionList.module.css';

export const UserActionList = ({ actions }) => {

  function getTime(timeData) {
    let date = new Date(timeData);
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${hours}:${minutes}`;
  }

  return (
    <ul className={css.userActions__list}>
      {actions.map(item => {
        
        return (
          <li key={item.id} className={css.userActions__item}>
            <div className={css.userActions__wrapper}>
              <div className={css.userActions__time}>{getTime(item.created_at)}</div>
              <p className={css.userActions__text}>Image ID: <b>{item.image_id}</b> was added to Likes</p>
              <div className={css.userActions__favourite}></div>
            </div>
          </li>
        )
      })}
      {/* <li className={css.userActions__item}>
          <div className={css.userActions__wrapper}>
            
          <div className={css.userActions__time}>22:35</div>
          <p className={css.userActions__text}>Image ID: <b>HJd0XecNX</b> was added to Likes</p>
          <div className={css.userActions__favourite}></div>
        </div>
      </li> */}
    </ul>
  )
}