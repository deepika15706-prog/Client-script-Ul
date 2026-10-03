/*
 * Client Script: Prevent save if Assigned To missing
 * Table: Incident
 * Type: onSubmit
 * Active: true
 */
function onSubmit() {
    var impact = g_form.getValue('impact');
    var assignedTo = g_form.getValue('assigned_to');

    if (impact == '1' && !assignedTo) {
        g_form.addErrorMessage('Assigned To is required for High Impact incidents.');
        return false;
    }

    return true;
}
