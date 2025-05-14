# Delete a message

Delete a message in a DM/Server Channel.

#### Endpoint

```
DELETE https://nerimity.com/api/channels/${CHANNEL_ID}/messages/${MESSAGE_ID}
```

| Header        | Description          |
| ------------- | -------------------- |
| Authorization | Your User/Bot token. |

#### Response:

```json
{ "message": "Message deleted!" }
```
