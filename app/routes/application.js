import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        /**
         * Look at network traffic, you will find that both work as expected, both generated the network requests below
         *
         *
         * http://localhost:4200/services/masterdata/distributorTypes
         */
//        debugger;
        this.store.find("distributorType");
        this.store.find("distributor-type");
    }
});
