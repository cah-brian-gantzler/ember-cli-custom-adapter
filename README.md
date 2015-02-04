# ember-cli-custom-adapter
Demo repo to show that the Tests do not find custom adapters

If you run the application with a straight ember server, there is a couple store.finds in the applicationRoute. 
One camelCase, one dasherized. The expected behaviour is that the network request would be made using the 
custom adapter that has a namespace specified. Both produce the expected result.


If you run application with tests, the test for the model performs the same store.find. The expected behaviour is that
the same network request should be made. If you specifiy a camelCase model on the find, you get a model not found.
If you specify a dasherized model on the find the network request is made, however you will note that it used the application
adapter NOT the custom adapter as expected. (The result of the test doesn't matter, this is to demonstrate that a 
custom adapter is not being resolved.




