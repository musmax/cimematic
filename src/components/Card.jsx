import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const { id, poster_path, original_title, overview } = movie;
  const image = poster_path 
    ? `https://image.tmdb.org/t/p/w500/${poster_path}` 
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCkLGD5QILxxv_hoeqqNeAySv0a3_2kg9xw&s';

  return (
    <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={image} alt={original_title} />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
      </div>
    </article>
  );
};

export default Card;
