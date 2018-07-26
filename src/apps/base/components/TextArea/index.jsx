import React from 'react';

import styles from './style.css';


const TextArea = ({ value, rows, onChange, label, name, isRequired }) => {
  const textAreaClassNames = [
    styles.textArea,
    isRequired && 'isRequired',
  ].join(' ');

  return (
    <div className={textAreaClassNames}>
      <label
        className={styles.label}
        htmlFor={name}>
        {label}
      </label>
      <textarea
        className={styles.input}
        name={name}
        id={name}
        value={value}
        rows={rows}
        onChange={event => onChange(event.target.value)} />
    </div>
  );
};

export default TextArea;