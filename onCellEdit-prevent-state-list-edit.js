/*
 * Client Script: Prevent state change via list edit
 * Table: Incident
 * Type: onCellEdit
 * Field: State
 * Active: true
 */
function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
    if (table == 'incident') {
        g_form.addErrorMessage('Open the Incident record to change State.');
        callback(false);
        return;
    }

    callback(true);
}
