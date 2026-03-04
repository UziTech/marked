module.exports = {
  markdown: '[](' + '\t\v'.repeat(30000) + '\x00',
  html: `<p>${'[](' + '\t\v'.repeat(30000) + '\x00'}</p>\n`,
};
