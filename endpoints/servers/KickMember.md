# Kick a server member

Kick a member from a server. They can still re-join. You must be a server owner/have permission to kick.

#### Endpoint

```
DELETE https://nerimity.com/api/servers/${SERVER_ID}/members/${USER_ID}/kick
```

| Header        | Description          |
| ------------- | -------------------- |
| Authorization | Your User/Bot token. |

#### Response:

```json
{ "status": true }
```
