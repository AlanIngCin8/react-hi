import React, { useState } from 'react';

function ReverseStringComponent() {
  const [text, setText] = useState('');

  const reverseText = () => {
    setText(text.split('').reverse().join(''));
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={reverseText}>Reverse Text</button>
    </div>
  );
}

export default ReverseStringComponent;
