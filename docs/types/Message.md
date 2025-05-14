
# Message

| key           | Type                                         | Description                                   |
| ------------- | -------------------------------------------- | --------------------------------------------- |
| id            | String                                       | Snowflake Id of the message.                  |
| channelId     | String                                       | Snowflake Id of the channel                   |
| type          | [MessageType](#messagetype)                  | Message type.                                 |
| content       | String                                       | Message content.                              |
| createdBy     | [User](/types/User.md)                       | The creator of the message                    |
| createdAt     | Number                                       | Timestamp for when the message was created.   |
| editedAt      | Number?                                      | Timestamp for when the message was edited .   |
| reactions     | [MessageReaction[]](#messagereaction)        | Message Reactions                             |
| mentions      | [MessageMention[]](#messagemention)          | Messages that are mentioned in this message.  |
| embed         | [MessageEmbed?](#messageembed)               | OG Tag embeds.                                |
| attachments   | [MessageAttachments[]](#messageattachments)  | Attached images.                              |

# MessageType
TODO

# MessageReaction
TODO

# MessageMention
TODO

# MessageEmbed
TODO

# MessageAttachments
TODO
