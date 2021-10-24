import React, { useEffect, useState } from 'react';

import filterIcon from '../assets/images/filter.svg';
import arrowIcon from '../assets/images/arrow.svg';

import FilterTeacherForm from './FilterTeacherForm';

const FilterTeacher = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    if (window.matchMedia('(min-width: 1100px)').matches) setShowForm(true);
  }, [])

  return (
    <div className="filter-container">
      <button className="toggle-form" onClick={() => setShowForm(!showForm)}>
        <img src={ filterIcon } alt="filtro" />
        <span>Filtrar por dia, hora e matéria</span>
        <img src={ arrowIcon } alt="seta" className={ showForm ? '' : 'toggle-arrow' } />
      </button>
      <FilterTeacherForm showForm={ showForm } />
    </div>
  );
}

export default FilterTeacher;
