export let onLog = ({ type, message }) => {};
export const setLog = onLogHandler => (onLog = onLogHandler);
