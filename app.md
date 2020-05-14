# Client server application with React 

Server side of application is on server directory. The database is represnted by
 data.json file. It contains an array of objects that describe separate items (goods).
 Each item contains name, price, toplist, description, size, color, sector properties.
 Server consists of single function. It responses on requests according with url. Json server supports CORS requests. It works on port 3001. To start it: 
 ```
 cd ./server
 node index
 ```

 Web API: 

* /api/toplist - get top of goods;
* /api/:sector/:size - get goods according with sector (casual, lux) and size (regular, large); 
* /api/:sector/:size/:color - get goods by color (will be realized in next versions).

Each route of web API has representation within HashRouter: 

`/api/toplist  -> #/api/toplist` and so on.

HashRouter and ShowCase components transform hash routers into requests to json server
according with web api. Requests are  called from AppContextProvider component. There is an  additional route - /api/basket. It gets data not from server but from local storage.  
