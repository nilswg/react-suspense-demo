import { useState, useCallback } from 'react';
import { useSculptureList } from '../apis/fetchSculptures';


export const SculpturesList = () => {
  const [index, setIndex] = useState(0);
  const sculptures = useSculptureList();
  const sculpture = sculptures[index];

  const handleClick = useCallback(() => {
    setIndex((index) => Math.min(index + 1, sculptures.length - 1));
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptures.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </div>
  );
};
