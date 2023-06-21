Tasks:https://www.notion.so/16_gericht-restaurant-03d656e9a4c44f10b9375a3c63bca7f6

-------------------------------------------------------------------------


RULES:
Don't write tailwind in components - use .css for it (in all other stuff you should use tailwind)
(I wrote some sections with .css - leave it as is or rewrite it with tailwind if you want)



-------------------------------------------------------------------------


INFO:
Project on:
React + vite + TS + tailwind + css
Adaptive+responsive design (adaptive=clamp() - responsive=@media)

1)
Use <Component className='flex flex-col'/> only with tailwind (className in props)
use .css for something that hard wirte with tailwind (it's fine - but not use .css for everything cause
it can be contains similar .class and it makes it hard to coordinate across .css)

2)
check out index.css

3)
Framer motion in deps - that's why some css with transform property requires !important

4)
If you want apply border try do it with !important if it doesn't work without it