const chapterpage = require('../')

const {
  head,
  body,
} = chapterpage()

document.head.innerHTML = head
document.body.innerHTML = body
