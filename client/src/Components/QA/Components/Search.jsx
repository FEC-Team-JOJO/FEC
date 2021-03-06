import React, { useState } from 'react';
import Input from './Styles/Search';

function Search({ allQuestions, setMatching, setSearching }) {
  const [searching, updateSearching] = useState('');

  function updateSearch(e) {
    updateSearching(e.target.value);
    if (e.target.value.length >= 3) {
      setMatching(allQuestions.filter(
        (question) => question.question_body.toLowerCase().includes(e.target.value.toLowerCase()),
      ));
      setSearching(true);
    } else {
      setMatching([]);
      setSearching(false);
    }
  }

  return (
    <Input
      type="text"
      value={searching}
      placeholder="Have a question? Search for answers..."
      // eslint-disable-next-line react/jsx-no-bind
      onChange={updateSearch}
    />
  );
}

export default Search;
