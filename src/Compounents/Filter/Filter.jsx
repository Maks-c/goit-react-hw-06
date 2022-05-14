import React from 'react';

import { FilterDiv } from './FilterStyle';
import { addFilter} from '../../Redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const getFilters = e => {
    dispatch(addFilter(e.target.value));
  };
  return (

    <FilterDiv>
      <input type='text'
             name='filter'
             onChange={getFilters}
             value={filter} // значение = вводимые символы в инпуте
      />
    </FilterDiv>
  );
};


export default Filter;
