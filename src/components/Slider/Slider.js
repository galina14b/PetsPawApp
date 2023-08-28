// import Glide from '@glidejs/glide';
import css from './Slider.module.css';

const Slider = ({ list }) => {
  
//   new Glide('.glide', {
//   type: 'carousel',
//   focusAt: 'center',
//   perView: 1,
  
//   autoplay: 4000,
//   }).mount();
  
  return (
      <div className={css.glide__track} data-glide-el="track">
        <ul className={css.glide__slides + ' ' + css.slider}>
          {list.map(item => {
            return (
              <li key={item.id} className={css.glide__slide + ' ' + css.slider__item}>
                <img src={item.url} alt=""></img>
              </li>
            )})}
        </ul>
      </div>
  
  )
}

export { Slider };