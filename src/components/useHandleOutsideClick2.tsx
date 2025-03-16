import { RefObject, useEffect } from 'react';

const useOutsideClick2 = (
  dropdownRef: RefObject<HTMLElement>,
  buttonRef: RefObject<HTMLElement>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent | TouchEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(evt.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(evt.target as Node)
      ) {
        console.log('outside click');
        callback(evt); // Call callback if click is outside both button and dropdown
      }
    else {
        console.log('inside click');
        }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [buttonRef, dropdownRef, callback]);
};

export default useOutsideClick2;
