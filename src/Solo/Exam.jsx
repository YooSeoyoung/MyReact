import Octagon from './Octagon';

import React from 'react';
import PopUp from './PopUp';

function Exam() {
  return (
    <>
      <Octagon
        width="450px"
        cardwidth="400px"
        cardheight="500px"
        cardbackground="#e0f7fa"
        imgwidth="120px"
        imgheight="120px"
        buttoncolor="#bfe4fb"
      />
      <PopUp
        width="450px"
        cardwidth="400px"
        cardheight="500px"
        topbackground="#3333"
      />
    </>
  );
}

export default Exam;
