function onChange(control, oldValue, newValue, isLoading) {

    if (isLoading) return;

    var source = g_form.getValue('source_station');
    var destination = g_form.getValue('destination_station');

    if (!source || !destination) {
        g_form.setValue('fare', '');
        return;
    }

    var ga = new GlideAjax('FarePrice');
    ga.addParam('sysparm_name', 'getFare');
    ga.addParam('sysparm_source', source);
    ga.addParam('sysparm_destination', destination);

    ga.getXMLAnswer(function(response) {
        g_form.setValue('fare', response);
    });
}
