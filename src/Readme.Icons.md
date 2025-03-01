# Icons management

### Where to get the icons from?

We are using the heroicons library which can be found at the following URL https://heroicons.com/solid. These icons come in SVG file format so we are not limited to their use, any other icon that best fits the needs can be used, of course if the license allows us to. 

### How to use icons?

1. Find the SVG icon that you consider suitable for your component, this can be done browsing the heroicons website or any other SVG icons library.
2. After finding the icon, create a class that extends the CustomElement abstract class
3. Copy the content of the SVG icon and paste it in the return function of the template method that you need to implement in your icon's class
4. Make sure to add the newly created icon element to a container that exists in the DOM
5. Nonetheless, make sure to style the icon accordingly

FYI: You can follow the implementation of the hamburger icon in the hamburger menu module. 