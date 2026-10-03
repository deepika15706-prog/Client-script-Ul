# UI Policy — High Impact Control

## Configuration

- Table: Incident
- Active: true
- Condition: Impact is 1 - High
- Reverse if false: true

## UI Policy Actions

| Field            | Mandatory | Read-only | Visible              |
|------------------|-----------|-----------|----------------------|
| Assignment group | Yes       | No        | Leave as configured  |
| Urgency          | No        | Yes       | Leave as configured  |

## Expected Behavior

- When Impact is High, Assignment group becomes mandatory and Urgency becomes read-only.
- When the condition becomes false, the UI Policy reverses these changes.
