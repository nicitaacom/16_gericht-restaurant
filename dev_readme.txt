Tasks:https://www.notion.so/16_gericht-restaurant-03d656e9a4c44f10b9375a3c63bca7f6

-------------------------------------------------------------------------


RULES:
Don't write tailwind in components - use .css for it (in all other stuff you should use tailwind)



-------------------------------------------------------------------------


INFO:
React + vite + TS + tailwind + css
use <Component className='flex flex-col'/> only with tailwind (className in props)
use .css for something that hard wirte with tailwind (it's fine - but not use .css for everything cause
it can be contains similar .class and it will be hard to coordinate across .css)