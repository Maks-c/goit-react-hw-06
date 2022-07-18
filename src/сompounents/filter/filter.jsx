import React from 'react';

import { FilterDiv } from './filter.styled';
import { addFilter} from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const stateFilter = useSelector(state => state.filter);
  const getFilters = e => {
    dispatch(addFilter(e.target.value));
  };
  return (

    <FilterDiv>
      <input type='text'
             name='filter'
             onChange={getFilters}
             value={stateFilter} // значение = вводимые символы в инпуте
      />
    </FilterDiv>
  );
};


export default Filter;
