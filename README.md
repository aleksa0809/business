# Project Anna-Veronica shop

This is online-shop concept with showcase, catalogue and basket. The project is realized as single page application. It uses the React API. Components of page are made
as jsx modules. The database is orginized as static structure(array) on client side.

[x]  The code should consist of at least 8 React components that you have written yourself using JSX.
This application consists of components: 
* Showcase - collection of selling items;
* Card - describes an item from showcase; 
* Leftmenu - left side part of page;
* Navbar - top menu of page;
* Loader - indicator of page loading;
* Welcome - greeting of site;
* Basket - user's basket;
* ColorChooser - tool for choosing color of item.


[x] At least three of your components should use State.
The component BasketCounter has state that can be changed with function setState. For this component  technonogy 
react context is applied. The module BasetContentProvider exposes its state (counter, updateCounter).
The component BasketCounter is wrapped by component BasketContentConsumer. The textContent of BasketCounter can be changed dynamically.

[x] At least one of your components should use conditional rendering.
Component ShowCase has conditional rendering: it changes its title depending on route. If route contains
paramethers segment and size there is text "Segment: ..., size: ...". If route equals to "/toplist", there is
text "Our best goods". If data sourse for ShowCase contains no data there is text "Not found".
 
[x] Choose yourself and install a ready-made javascript package in your project.
The application uses external library "react-toastify". 

[x] The code should contain at least one use of the javascript library.
It helps to show messanges: "Added to cart", "Removed from cart" and so on. 

[x]  One of your components should handle and update their State in conjunction with an event in a component further down the tree.
Component card saves item into local storage with key "basket". Basket value is json string that can be 
parsed into array with identificators of items.
