import React from 'react';
import PropTypes from 'prop-types';
import css from './filter.module.css';
const Filter = ({ onFilter }) => {
  return (
    <label className={css.label}>
      <span className={css.span}>Find contacts by name</span>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onFilter}
      />
    </label>
  );
};
export default Filter;
Filter.propTypes = { onFilter: PropTypes.func };
