import { ReactComponent as DragHandleIcon } from '../drag_handle-black.svg';
import React from 'react';

const divStyle = {
  DragIconWrapper: {
    display: 'inline-block',
    svg: {
      width: '20px',
      height: '20px',
      verticalAlign: 'middle',
      paddingTight: '1rem',
    },
  },
};

const DragHandle = (props) => {
  return (
    <div style={divStyle} {...props}>
      <DragHandleIcon />
    </div>
  );
};

export default DragHandle;
