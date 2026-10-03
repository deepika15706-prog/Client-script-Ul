/*
 * Client Script: Auto set urgency for high impact
 * Table: Incident
 * Type: onChange
 * Field: Impact
 * Active: true
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || isTemplate) {
        return;
    }

    if (newValue == '1') {
        g_form.setValue('urgency', '1');
        g_form.addInfoMessage('Urgency has been set to High because Impact is High.');
    }
}
