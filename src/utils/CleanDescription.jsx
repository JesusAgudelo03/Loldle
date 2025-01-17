const cleanDescription = (description) => {
  return description
    .replace(/\\u003C/g, "<")
    .replace(/\\u003E/g, ">")
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"');
};

export default cleanDescription
