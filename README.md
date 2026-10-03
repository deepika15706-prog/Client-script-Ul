# ServiceNow Incident – Client Scripts & UI Policy

A ServiceNow micro-project demonstrating client-side controls for the Incident table.

## Project Overview

This project implements a UI Policy and Client Scripts to improve Incident data quality and enforce conditional business rules.

## Objectives

- Make **Assignment group** mandatory when Impact is High.
- Make **Urgency** read-only when Impact is High.
- Automatically set Urgency to High when Impact changes to High.
- Prevent saving a High Impact Incident when **Assigned To** is empty.
- Prevent direct State changes through list editing.
- Verify that the configured behavior reverses correctly when Impact changes from High to Medium.

## Technologies

- ServiceNow
- Incident Management
- UI Policies
- UI Policy Actions
- Client Scripts
- JavaScript

## Project Structure

```
servicenow-incident-ui-policy/
├── README.md
├── ui-policy/
│   └── high-impact-control.md
├── client-scripts/
│   ├── onChange-auto-set-urgency.js
│   ├── onSubmit-prevent-save-if-assigned-to-missing.js
│   └── onCellEdit-prevent-state-list-edit.js
└── tests/
    └── test-cases.md
```

## Configuration

### 1. UI Policy — High Impact Control

- Table: Incident
- Active: true
- Condition: Impact is 1 - High
- Reverse if false: true
- UI Policy Actions:
  - Assignment group: Mandatory = Yes
  - Urgency: Read-only = Yes

### 2. onChange Client Script — Auto Set Urgency

- Name: Auto set urgency for high impact
- Table: Incident
- Type: onChange
- Field: Impact
- Active: true

### 3. onSubmit Client Script — Assigned To Validation

- Name: Prevent save if Assigned To missing
- Table: Incident
- Type: onSubmit
- Active: true

### 4. onCellEdit Client Script — Block State List Editing

- Name: Prevent state change via list edit
- Table: Incident
- Type: onCellEdit
- Field: State
- Active: true

## Testing

The test plan covers:

- High Impact mandatory enforcement.
- Successful save after Assigned To is populated.
- Reverse condition when Impact changes from High to Medium.
- Blocking State changes through list editing.
- Allowing State changes through the Incident form.

See [`tests/test-cases.md`](tests/test-cases.md).

## How to Use

1. Open a ServiceNow developer/admin instance.
2. Navigate to **System UI → UI Policies**.
3. Create the *High Impact Control* UI Policy on the Incident table.
4. Add the documented UI Policy Actions.
5. Navigate to **System UI → Client Scripts**.
6. Create the three Client Scripts using the JavaScript files in this repository.
7. Execute the test cases in `tests/test-cases.md`.

> **Note:** These files document the configuration and scripts. They are **not** a native ServiceNow Update Set export.
