/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  const parsedfromTime = new Date(fromTime.replaceAll('*', '-').replace('@', ' ').replaceAll('|', ':').replace(' NP', ''));
  const parsedtakeOffTime=new Date(takeOffTime.replaceAll('*', '-').replace('@', ' ').replaceAll('|', ':').replace(' NP', ''));
  const diffTime = (parsedtakeOffTime - parsedfromTime)/1000;

  return diffTime
}