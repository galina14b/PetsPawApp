import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <div className={css.homePage__wrapper}>
        <div className={css.homePage__image}></div>
      </div>
    </div>
  )
}

export default HomePage;