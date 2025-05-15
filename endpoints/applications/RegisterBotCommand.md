# Register bot commands

Register a command for a bot to show in the slash-command list.

#### Endpoint

```
POST https://nerimity.com/api/applications/bot/commands
```

| Header        | Description     |
| ------------- | --------------- |
| Authorization | Your Bot token. |

# Body

| Body(JSON) | Type                                 | Description              |
| ---------- | ------------------------------------ | ------------------------ |
| commands   | [BotCommand[]](/types/BotCommand.md) | The commands to register |

#### Response

```json
{
  "status": true
}
```
