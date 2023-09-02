import css from './NoItem.module.css';

const NoItem = () => {
  return (
    <div className={css.noitem}>
      <p>No item found</p>
    </div>
  )
}

export {NoItem};