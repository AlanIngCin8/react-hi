import React, { useState } from 'react';

function ExpandableComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1 onClick={toggleOpen}>Heading {isOpen ? '(Click to Collapse)' : '(Click to Expand)'}</h1>
      {isOpen && <p>This is some content under the heading. Click the heading to collapse it.</p>}
    </div>
  );
}

export default ExpandableComponent;