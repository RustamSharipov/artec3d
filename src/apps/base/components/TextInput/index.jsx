import React from 'react';

import styles from './style.css';


const TextInput = ({ value, onChange, label, name, isRequired }) => {
  const textInputClassNames = [
    styles.textInput,
    isRequired && 'isRequired',
  ].join(' ');
  
  return (
    <div className={textInputClassNames}>
      {label && (
        <label
          className={styles.label}
          htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={styles.input}
        name={name}
        id={name}
        type="text"
        value={value}
        onChange={event => onChange(event.target.value)} />
    </div>
  );
};

export default TextInput;