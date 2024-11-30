import React from 'react'
import { useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import useSearchFetch from '../hooks/useSearchFetch';

const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data:movies} = useSearchFetch(apiPath, queryTerm);

  return (
    <main>
      <section className='py-4'>
          <p className='text-3xl text-gray-700 dark:text-white'>
          {
          movies.length === 0 ? `No result found for ${queryTerm} in our database` : `Results found for ${queryTerm}`
        }
          </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
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

export default Search;
