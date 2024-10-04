# VanJS x NestJS POC

This is a bit unorthodox, but think still has a place.

This is a very lean stack that uses a normal [NestJS](https://nestjs.com) API to render a single Handlebars template. This template dynamically loads [VanJS](https://vanjs.org/) components from the API which the browser then renders on the page. State is injected directly into a VanX state object which can then be injested by the page. Client to server communication is done with HTML forms which are then processed as normal server side.

Idk, this may be slightly cursed but also seems like a nice simple solution in an ever confusing JS landscape. Alternatively, I've just created a worse, poorly documented, janky ass framework.

## To note

Seeing as there is no bundler, NPM packages can't be loaded as you'd expect in other reasonable solutions. Instead you have to use load them via [jsdelivr](https://www.jsdelivr.com/esm). That's done in the root.js component.

Also the Root component calls a Shell Van component, so make sure you call the parent component Shell! Why control this I hear you ask? Cos I need to wait for all the scripts to load (even on slow connections) before runing Van.

Using gulp to copy the client files into correct locaiton and minify them in the process. Need to also add a Tailwind build script into gulp to happen on build but I forgot about that until just now!

## Concluding Thoughts

Despite how this looks (trust me, I know), it somehow feels refreshingly simple. Feels very low overhead... just return some data and render with an uber fast reactive UI framework. And submit HTML forms and handle them in the same beautiful monolith.

Do I recommend you use this... probs not. But give it a look anyway! If you do use it, hopefully it's simple enough that you can modify it to suit your needs!
