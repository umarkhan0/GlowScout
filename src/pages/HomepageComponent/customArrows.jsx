import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const CustomRightArrow = ({ onClick }) => (
  <button onClick={onClick} className="absolute right-0">
    <ChevronRightIcon style={{ fontSize: '30px', color: '#000' }} />
  </button>
);

const CustomLeftArrow = ({ onClick }) => (
  <button onClick={onClick} className="absolute left-0">
    <ChevronLeftIcon style={{ fontSize: '30px', color: '#000' }} />
  </button>
);

export { CustomRightArrow, CustomLeftArrow };
