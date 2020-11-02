import { helper } from '@ember/component/helper';

export function formatHeight([height]) {
  const DECIMETERS_TO_INCHES = 3.93701
  const INCHES_IN_ONE_FOOT = 12;

  const heightInInches = height * DECIMETERS_TO_INCHES;
  let convertedFeet = Math.floor(heightInInches / INCHES_IN_ONE_FOOT);
  let convertedRemainingInches = (heightInInches % INCHES_IN_ONE_FOOT).toFixed(0);

  if (convertedRemainingInches >= 11.5) {
    convertedFeet++;
    convertedRemainingInches = 0;
  } 
  
  return `${convertedFeet}' ${convertedRemainingInches}"`;
}

export default helper(formatHeight);
