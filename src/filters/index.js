import marked from 'marked';
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

export var asHtml = (markdown)=>{
  return marked(markdown);
}

export var asTitle = (fileName)=>{
  return fileName.substring(0, fileName.lastIndexOf('.md'));
}
