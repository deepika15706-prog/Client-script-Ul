# Test Cases — Incident Client Scripts & UI Policy

## TC01 — High Impact Mandatory Enforcement
1. Open an Incident.
2. Set Impact to High.
3. Verify Assignment group becomes mandatory.
4. Verify Urgency becomes read-only.

**Expected result:** both UI Policy actions are applied.

## TC02 — Auto-set Urgency
1. Open an Incident.
2. Change Impact to High.
3. Verify Urgency is automatically set to High.

**Expected result:** an information message is displayed.

## TC03 — Assigned To Validation
1. Set Impact to High.
2. Leave Assigned To empty.
3. Attempt to save.

**Expected result:** save is prevented and an error message is displayed.

## TC04 — Successful Save with Assigned To
1. Set Impact to High.
2. Populate Assigned To and Assignment group.
3. Save the Incident.

**Expected result:** the Incident saves successfully.

## TC05 — Reverse Condition
1. Set Impact to High.
2. Change Impact to Medium.
3. Verify the UI Policy reverses its actions.

**Expected result:** fields return to their normal behavior.

## TC06 — Block State List Editing
1. Open the Incident list.
2. Attempt to change State directly using list editing.

**Expected result:** the change is blocked and the user is instructed to open the Incident record.

## TC07 — Form State Change
1. Open an Incident record.
2. Change State from the Incident form.

**Expected result:** normal form editing remains available.
