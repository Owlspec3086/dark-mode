import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  //set state prop
  //capture the values
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      //stored locally

      return JSON.parse(window.localStorage.getItem(key));
    }
    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
