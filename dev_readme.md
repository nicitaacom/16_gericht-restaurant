# Docs

---

### Root

---

****styling****

Don't write tailwind in components - use .css for it (in all other stuff you should use tailwind)
(I wrote some sections with .css - leave it as is or rewrite it with tailwind if you want)

Use <Component className='flex flex-col'/> only with tailwind (className in props)
use .css for something that hard wirte with tailwind (it's fine - but not use .css for everything cause
it can be contains similar .class and it makes it hard to coordinate across .css)

Framer motion in deps - that's why some css with transform property requires !important
But it not the best practice because motion.tag will not work with tranlate !important

If you want apply border try do it with !important if it doesn't work without it


---
Figma - https://www.figma.com/file/at7kfXpaRagcwAwkkRVviz/Modern-UI%2FUX%3A-Gericht-(Copy)?type=design&node-id=0%3A1&mode=design&t=qbkbNwCPoXCSdZM4-1

Adaptive+responsive design (adaptive=clamp() - responsive=@media)
