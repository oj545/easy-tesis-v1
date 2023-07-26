import React, { useState, useEffect } from 'react';
import Chapter from './Chapter';
import useFetch from '../../hooks/useFetch';
import Loading from '../UI/Loading';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Section() {
  const { section } = useParams();
  const [chapter, setChapter] = useState(section);

  useEffect(() => {
    setChapter(section);
  }, [section]);

  const { token, userDetails } = useSelector((state) => state.user);
  const { project } = useSelector((state) => state.project);

  const { data, loading, error } = useFetch(
    chapter,
    token,
    project[chapter].chapterIsloaded,
    userDetails.id
  );

  return (
    <>
      {loading && <Loading />}
      <div>
        {(data || project[chapter].instructions) && (
          <Chapter
            instructions={data?.instructions || project[chapter].instructions}
            answers={data?.answers || project[chapter].answers}
            title={chapter}
            isLoaded={project[chapter].chapterIsloaded}
            id={project[chapter].id}
            error={error}
          />
        )}
      </div>
    </>
  );
}

export default Section;
