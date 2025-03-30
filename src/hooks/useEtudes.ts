import { useState, useEffect } from 'react';

export const useEtudes = (): boolean => {
  const [isEtudes, setIsEtudes] = useState<boolean>(false); // Par défaut, `isEtudes` est `false`

  useEffect(() => {
    // Je veux que `isEtudes` soit `true` si l'URL contient "e=1" ou que isEtudes est dans le localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const etudesParam = urlParams.get('e');
    const etudesStorage = localStorage.getItem('isEtudes');
    const etudes = etudesParam === '1' || etudesStorage === 'true';
    setIsEtudes(etudes);
    if (etudesParam === '0') {
      setIsEtudes(false);
      localStorage.setItem('isEtudes', 'false');
      return;
    }
    // Si l'URL contient "e=1", je veux que isEtudes soit `true` et que le localStorage soit mis à jour
    if (etudesParam === '1' || etudesStorage === 'true') {
      localStorage.setItem('isEtudes', 'true');
    } else { // Sinon, je veux que isEtudes soit `false` et que le localStorage soit mis à jour
      setIsEtudes(false);
      localStorage.setItem('isEtudes', 'false');
    }
  }, [window.location.search]); // Je veux que l'effet soit exécuté à chaque fois que l'URL change

  return isEtudes;
};