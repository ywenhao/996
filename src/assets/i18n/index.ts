export default (lang: string) => new Promise(async resolve => {
  const md:any = {};
  const path = require('./md/' + lang + '.md');
  const res = await fetch(path);
  const text = await res.text()
  md[lang] = text;
  resolve(md);
})
