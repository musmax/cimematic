import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

const AllRoutes = () => {
  return (
    <div className="dark:bg-darkBg">
      <Routes>
        <Route path="" element={<MovieList apiPath={'now_playing'}/>} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movies/popular" element={<MovieList apiPath={'popular'}/>} />
        <Route path="/movies/top" element={<MovieList apiPath={'top_rated'}/>} />
        <Route path="/movies/upcoming" element={<MovieList apiPath={'upcoming'}/>} />
        <Route path="/search" element={<Search apiPath={'search/movie'}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
