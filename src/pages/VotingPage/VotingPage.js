import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import axios from "axios";
import css from './VotingPage.module.css';
import { UserActionList } from "components/UserActionsList/UserActionList";
import { Options } from "components/Options/Options";

const VotingPage = () => {

  const [cat, setCat] = useState();
  const [votes, setVotes] = useState();
  const [sub_id] = useState('user_175');

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");
  
  const API_KEY = "live_7Rzkwjrh3OQ8HzQ07RaEAqL8UQr3UfdtzTp9O9T9vVaFIktzDSMnFjrOtFmrW5R8";

  useEffect(() => {
    getRandomImage();
    getVotesResult();
  }, []);

  const getRandomImage = async () => {
    try {
      axios.defaults.headers.common['x-api-key'] = API_KEY;
      
      let response = await axios.get('https://api.thecatapi.com/v1/images/search',
        {
          params: { limit: 1, size: "full" }
        });
      
      setCat(response.data[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const getVotesResult = async () => {
    let response = await axios.get('https://api.thecatapi.com/v1/votes',
      {
        params: { order: "DESC", limit: 4 }
      });
    
    response.data.forEach(element => {
      element.created_at = new Date(element.created_at).toString();
    });

    setVotes(response.data);
  }; 

  const voteLike = async () => {
    let body = {
      image_id: cat.id,
      sub_id: sub_id,
      value: 1 
    }

    await axios.post('https://api.thecatapi.com/v1/votes', body) 
    getRandomImage();
    getVotesResult();
  }

  const voteDislike = async () => {
    let body = {
      image_id: cat.id,
      sub_id: sub_id,
      value: 0 
    }
    
    await axios.post('https://api.thecatapi.com/v1/votes', body )
    getRandomImage();
    getVotesResult();
  }
  
  const addToFavourites = async () => {
    try{
      let post_body = {
        image_id: cat.id,
        sub_id: sub_id
      }
      await axios.post('https://api.thecatapi.com/v1/favourites', post_body);
      getRandomImage();
      getVotesResult();
    }catch(error){
      console.log(error)
    }
  }

  // const getFavourites = async () => {
  //   try{   
  //     let query_params = {
  //       limit: 3,
  //       order: 'DESC',
  //       page:  page-1,
  //     }
  //     let response = await axios.get('https://api.thecatapi.com/v1/favourites', { params: query_params }) 
  //     this.favourites = response.data 
  //     this.pagination_count = response.headers['pagination-count'];
  //     this.clearError();
  //   }catch(err){
  //       console.log(err)
  //   }
  // }
  

  return (
    <div className={css.votingPage}>
      <div className={css.votingPage__wrapper}>

        <div className={css.votingPage__navigationBlock}>
          <div className={css.votingPage__backLinkBlock}>
            <Link to={backLinkHref.current} className={css.votingPage__backLink}>
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

          <div className={css.votingPage__nameOfPage}>
            VOTING
          </div>

        </div>

        {cat && <img className={css.votingPage__imageBlock} src={cat.url} alt="cat" />}

        <div className={css.votingPage__options}>
          <Options voteLike={voteLike} voteDislike={voteDislike} addToFavourites={addToFavourites} />
        </div>

        {votes && <div className={css.votingPage__userActions}>
          <UserActionList actions={votes}/> </div>}
        
      </div>
    </div>
  )
}

export default VotingPage;