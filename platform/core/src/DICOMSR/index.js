import { retrieveMeasurements, storeMeasurements } from './dataExchange';
import isToolSupported from './utils/isToolSupported';
import { setLog } from './utils/log';

const init = ({ onLog }) => {
  if (onLog) {
    setLog(onLog);
  }
};

const DICOMSR = {
  retrieveMeasurements,
  storeMeasurements,
  isToolSupported,
  init,
};

export default DICOMSR;
