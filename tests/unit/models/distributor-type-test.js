import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('distributor-type', 'DistributorType', {
  // Specify the other units that are required for this test.
  needs: ["model:distributor-type", "serializer:distributor-type", "adapter:distributor-type", "adapter:application"]
});

test('it exists', function() {
    var store = this.store();

    /**
     * This store request will generate the below network request

           http://localhost:4200/distributorTypes

       This indicates that the custom adapter was not resolved and then fell back to the application adapter.
       Note that this is only a problem with multi word custom adapters. Custom adapters of a single word (not
       containing dashes I'm assuming work as expected)

     */
//    debugger;
    store.find("distributor-type").then(
        function(result) {
            // This should retrieve records
            ok(result);
        },
        function(error) {
//            debugger;
            // we reached here because the custom adapter was not correctly resolved
            ok(false, "Error:" + error.status + " " + error.statusText);
        }
    );


    /**
     * My guess at the cause

     Eventually the following function on the container is called
     normalize: function(fullName) {
                return this.normalizeCache[fullName] || (
                  this.normalizeCache[fullName] = this.normalizeFullName(fullName)
                );
              },

     this.normalizeFullName is the following function in test.
     function (fullName) {
                return fullName;
              }

     however if you step through this repos route/application model (when not in test) and reach the same point
     this.normalizeFullName is the following function. This is why it works non test code. But doesn't work in test.

     function (fullName) {
                if (resolver.normalize) {
                  return resolver.normalize(fullName);
                } else {
                  Ember.deprecate('The Resolver should now provide a \'normalize\' function', false);
                  return fullName;
                }
              }


     */
});
