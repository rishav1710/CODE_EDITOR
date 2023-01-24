import React from 'react';

const PREFIX = 'CODE_EDITOR_';

export default function useLocalStorage(key, intialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = React.useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof intialValue === 'function') {
      return intialValue();
    } else {
      return intialValue;
    }
  });

  React.useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
