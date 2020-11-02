import { helper } from '@ember/component/helper';

export function formatWeight([weight]/*, hash*/) {
  const HECTOGRAMS_TO_POUNDS = 4.536;

  const convertedPounds = (weight / HECTOGRAMS_TO_POUNDS).toFixed(2);
  return `${convertedPounds} pounds`;
}

export default helper(formatWeight);
