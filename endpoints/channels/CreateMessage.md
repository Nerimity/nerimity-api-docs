# Create Message
Create a message in a DM/Server Channel.
#### Endpoint
```
POST https://nerimity.com/api/channels/{CHANNEL_ID}/messages
```

| Header        | Description                    |
| ------------- | ------------------------------ |
| Authorization | Your User/Bot token.           |


| Body (JSON)   | Type              | Description                                                             |
| ------------- | ----------------- | ----------------------------------------------------------------------- |
| content       | String            | Your Message content                                                    |
| socketId      | String?           | Enter your socket id to exclude the message created event for yourself. |

#### Response: [Message](/types/Message.md)
