import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovieCredits } from '../../../services/tvApi';
import CastStyled from './StyledCast';

const Cast = () => {
  const [state, setState] = useState({});
  const location = useLocation();

  const getMovitCast = async id => {
    const res = await fetchMovieCredits(id);
    console.log(res);
    setState({ ...res });
  };

  useEffect(() => {
    getMovitCast(location.state.movieId);
  }, [location]);

  const { cast } = state;

  return (
    <CastStyled>
      <ul className="castList">
        {cast &&
          cast.map(item => (
            <li className="castListItem" key={item.id}>
              <img
                className="castImg"
                src={
                  item.profile_path
                    ? `https://www.themoviedb.org/t/p/w138_and_h175_face/${item.profile_path}`
                    : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
                }
                alt={item.name}
                width="138"
                height="175"
              />
              <h3 className="castTitle">{item.name}</h3>
              <p className="castText">Character: {item.character}</p>
            </li>
          ))}
      </ul>
    </CastStyled>
  );
};

export default Cast;
