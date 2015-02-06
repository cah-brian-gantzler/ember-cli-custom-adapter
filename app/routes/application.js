import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        // Although not supported, this DOES work which was confusing when converting from ember to ember-cli.
        // The customer adapter is found and used.
//        this.store.find("distributorType");
        /**
         * Look at network traffic, you will find that this works as expected by generating the network request below.
         * This is because the customer adapter (contains a namespace) is found and used.
         *
         *
         * http://localhost:4200/services/masterdata/distributorTypes
         */
        return this.store.find("distributor-type");
    }
});
