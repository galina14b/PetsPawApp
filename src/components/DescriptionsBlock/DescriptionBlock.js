import css from './DescriptionBlock.module.css';

const DescriptionBlock = ({breedInfo}) => {
  return (
    <>
      <div className={css.info__frame}>
        <h3 className={css.info__title}>
          {breedInfo.name}
        </h3>
        <h6 className={css.info__subtitle}>{breedInfo.description}</h6>
        
            
        <div className={css.info__flex}>
          <div className={css.info__item}>
            <span>Temperament:</span>
            <br/>
            <p>{ breedInfo.temperament}</p>
          </div>
              
          <div className={css.info__item}>
            <div className={css.info__origin}>
              <span>Origin: </span>
              <p>{breedInfo.origin}</p>
            </div>

            <div className={css.info__weight}>
              <span>Weight: </span>
              <p>{breedInfo.weight.metric} kgs</p>
            </div>

            <div className={css.info__life}>
              <span>Life span: </span>
              <p>{breedInfo.life_span} years</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { DescriptionBlock };