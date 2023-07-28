# Fetch Messages
Fetch all messages in a DM/Server Channel.
#### Endpoint
```
GET https://nerimity.com/api/channels/${CHANNEL_ID}/messages
```

| Header        | Description                    |
| ------------- | ------------------------------ |
| Authorization | Your User/Bot token.           |


| Query         | Description                                              |
| ------------- | -------------------------------------------------------- |
| limit?        | How many messages to fetch                               |
| before?       | skip and fetch messages before snowflake id of a message |
| after?        | skip and fetch messages after snowflake id of a message  |

#### Response: [Message[]](/types/Message.md)
