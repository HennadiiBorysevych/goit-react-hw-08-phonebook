import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterSlice } from '../../redux/Filter/FilterSlice';
import { FilterTitle, FilterInput, FilterContainer } from './Filter.styled';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  return (
    <FilterContainer>
      <FilterTitle>Find contacts by name</FilterTitle>
      <TextField
        required
        type="text"
        name="name"
        label="Type name to filter contacts"
        variant="filled"
      />
    </FilterContainer>
  );
};

export default Filter;

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onFilterChange: PropTypes.func.isRequired,
//   filterContacts: PropTypes.func.isRequired,
// };
