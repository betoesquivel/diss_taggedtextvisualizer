fs = require('fs');

export function tagsJSON() {
  var contents = fs.readFileSync('../coloured_words.jsonl', 'utf8');
  return JSON.parse(contents)[0];
}

export function tokensJSON() {
  var contents = fs.readFileSync('../raw_tokens.json', 'utf8');
  return JSON.parse(contents)[0];
}
