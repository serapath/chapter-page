# chapter-page
make a theme-able community chapter page

# demo
https://serapath.github.io/chapter-page

# example
`npm install chapter-page`

```js
const chapterpage = require('chapter-page')

const colors = {
  color0: '#43409a', // darkBlue,
  color1: '#3022bb', // blue,
  color2: '#6f68ae', // lightBlue,
  color3: '#f989ff', // lightPink,
  color4: '#730d61', // darkPink,
  color5: '#080707', // black,
  color6: '#2e3f41', // grey,
  color7: '#f7da8b', // skinYellow,
  color8: '#ffffff', // white,
  color9: 'rgba(255, 255, 255, .0)',
}
const data = {
  title: 'Nashville',
  logo: 'assets/wizard3.png',
  home: 'http://wizardamigos.com/',
  tabs: [{
    title: 'workshop',
    url: 'https://slides.com/ninabreznik/deck-11-12-16/embed'
  }],
  chat: 'https://gitter.im/wizardamigosinstitute/program/~embed',
  chapters: [],
  place: 'Nashville - Schermerhorn Symphony Center',
  event: 'https://health.distributed.com/code-camp', // link to event page
  time: '2018.11.07-08:30am-04:30pm'
}

const { head, body } = chapterpage({ data, theme: { colors } })

document.head.innerHTML = head
document.body.innerHTML = body
```
