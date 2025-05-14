# Register bot commands

Register a command for a bot to show in the slash-command list.

#### Endpoint

```
POST https://nerimity.com/api/applications/bot/commands
```

| Header        | Description     |
| ------------- | --------------- |
| Authorization | Your Bot token. |

| Body        | Type     | Description                   |
| ----------- | -------- | ----------------------------- |
| name        | String   | The command's name            |
| description | String   | The command's description     |
| args        | String[] | The arguments for the command |

#### Response

```json
{
  "status": true
}
```
