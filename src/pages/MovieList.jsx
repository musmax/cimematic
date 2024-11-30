import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

const MovieList = ({apiPath}) => {
  const {data:movies} = useFetch(apiPath);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap others:justify-evenly">
          {
            movies.map((movie, index) => (
              <Card key={index} movie={movie} />
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default MovieList;
