import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import { subject, weekDay, time } from '../helpers/filterFormOptions';

interface FilterTeacherFormProps {
  showForm: boolean;
}

const FilterTeacherForm: React.FC<FilterTeacherFormProps>= ({ showForm }) => {
  const [formHeight, setFormHeight] = useState('10em');

  useEffect(() => {
    if (window.matchMedia('(min-width: 1100px)').matches) setFormHeight('auto');
  }, []);

  const variants = {
    visible: {
      height: formHeight,
      overflow: 'initial',
    },
    hidden: {
      height: 0,
      overflow: 'hidden',
    },
    exit: {
      height: 0,
      overflow: 'hidden',
    },
  };

  return (
    <AnimatePresence>
    '{ showForm &&
      <motion.div
        className="form-filter-wrapper"
        key="animated-form"
        variants={ variants }
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <form>
          <div className="select-wrapper">
            <label htmlFor="subject" />
              Matéria:
            <select name="subject" id="subject">
              <option value="" selected hidden disabled>Selecione</option>
              { subject.map(subItem => (
                <option value={ subItem }>{ subItem }</option>
              )) }
            </select>
          </div>
          <div className="select-wrapper">
            <label htmlFor="week-day" />
              Dia da semana
              <select name="week-day" id="week-day">
              <option value="" selected hidden disabled>Selecione</option>
              { weekDay.map((day, i) => (
                <option value={ i }>{ day }</option>
              )) }
            </select>
          </div>
          <div className="select-wrapper">
            <label htmlFor="time" />
              Horário
            <select name="time" id="time">
              <option value="" selected hidden disabled>Selecione</option>
              { time.map(hour => (
                <option value={ hour }>{ hour }</option>
              )) }
            </select>
          </div>
        </form>
      </motion.div>}
    </AnimatePresence>
  );
}

export default FilterTeacherForm;
