module.exports = {

  /**
   * Capitalise first letter of a string
   * @param {string} string - string that requires capitalisation
   */
  capitalise: string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};
