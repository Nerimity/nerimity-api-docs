# Ban a server member

Ban a member from a server. You must be a server owner/have permission to ban.

#### Endpoint

```
POST https://nerimity.com/api/servers/${SERVER_ID}/bans/${USER_ID}
```

| Query                      | Description                               |
| -------------------------- | ----------------------------------------- |
| shouldDeleteRecentMessages | Delete Messages sent in the last 7 hours. |

| Header        | Description          |
| ------------- | -------------------- |
| Authorization | Your User/Bot token. |

#### Response:

```json
{ "status": true }
```
