var FarePrice = Class.create();
FarePrice.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

    getFare: function() {

        var source = this.getParameter('sysparm_source');
        var destination = this.getParameter('sysparm_destination');

        if (source == destination) {
            return '0';
        }

        return '50'; 
    }
});
