import React, { useState } from 'react';
import style from './syle.module.css'
const Evening = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReference, setShowReference] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleReferenceClick = () => {
    setShowReference(!showReference);
  };

  const handleTranslationClick = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className={style.block}>
      <h1 onClick={handleExpandClick} style={{ cursor: 'pointer' }}>
        വൈകുന്നേരം പതിവാക്കേണ്ട ദുആകളും ദിക്റുകളും
      </h1>
      {isExpanded && (
        <div>
          <p>Text 1</p>
          <button onClick={handleTranslationClick}>
            {showTranslation ? 'Hide Translation' : 'Show Translation'}
          </button>
          {showTranslation && <p>Translation for Text 1</p>}
          <button onClick={handleReferenceClick}>
            {showReference ? 'Hide Reference' : 'Show Reference'}
          </button>
          {showReference && <p>Reference for Text 1</p>}
          
          <p>Text 2</p>
          <button onClick={handleTranslationClick}>
            {showTranslation ? 'Hide Translation' : 'Show Translation'}
          </button>
          {showTranslation && <p>Translation for Text 2</p>}
          <button onClick={handleReferenceClick}>
            {showReference ? 'Hide Reference' : 'Show Reference'}
          </button>
          {showReference && <p>Reference for Text 2</p>}
          
        </div>
      )}
    </div>
  );
};

export default Evening;

