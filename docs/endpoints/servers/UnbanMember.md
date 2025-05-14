# Un-ban a server member

Unban a server member. You must be a server owner/have permission to unban.

#### Endpoint

```
DELETE https://nerimity.com/api/servers/${SERVER_ID}/bans/${USER_ID}
```

| Header        | Description          |
| ------------- | -------------------- |
| Authorization | Your User/Bot token. |

#### Response:

```json
{ "status": true }
```
