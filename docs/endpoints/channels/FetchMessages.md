# Fetch Messages
Fetch all messages in a DM/Server Channel.

#### Endpoint
```
GET https://nerimity.com/api/channels/${CHANNEL_ID}/messages
```

| Header        | Description                    |
| ------------- | ------------------------------ |
| Authorization | Your User/Bot token.           |


| Query         | Description                                              | Default      |
| ------------- | -------------------------------------------------------- | ------------ |
| limit?        | How many messages to fetch                               | 50           |
| before?       | skip and fetch messages before snowflake id of a message |              |
| after?        | skip and fetch messages after snowflake id of a message  |              |

> [!NOTE]
> • `limit` is limited to 100.   
> • Messages are ordered by date ascending.  
> • You can only specify `before` or `after` at once.  
> • If neither `before` or `after` are specified, last 50 (or `limit`) messages are are returned. 
#### Response: [Message[]](/types/Message.md)
