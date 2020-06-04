import React, { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(wimdow.localStorage.getItem(key));
    }
    window.localStorage.setIem(key,JSON.stringify(initialValue));
    return initialValue;
  });
};
