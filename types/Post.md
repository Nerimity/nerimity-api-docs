# Post

| Key              | Type                                         | Description                                                                 |
| ---------------- | -------------------------------------------- | --------------------------------------------------------------------------- |
| id               | String                                       | Snowflake ID of the post.                                                   |
| createdById      | String                                       | Snowflake ID of the user who created the post.                              |
| content          | String                                       | Content of the post.                                                        |
| createdAt        | Number                                       | Timestamp when the post was created.                                        |
| editedAt         | Number?                                      | Timestamp when the post was last edited, if applicable.                     |
| quotedPostId     | String?                                      | Snowflake ID of the quoted post, if applicable.                             |
| estimateLikes    | Number                                       | Estimated number of likes for the post.                                     |
| views            | Number                                       | Number of views the post has received.                                      |
| estimateReposts  | Number                                       | Estimated number of reposts for the post.                                   |
| repostId         | String?                                      | Snowflake ID of the repost, if applicable.                                  |
| commentToId      | String?                                      | Snowflake ID of the post this post is a comment to, if applicable.          |
| deleted          | Boolean?                                     | Indicates whether the post has been deleted.                                |
| embed            | Object?                                      | Embedded content in the post, if applicable.                                |
| poll             | Object?                                      | Poll data associated with the post, if applicable.                          |
| mentions         | String                                       | List of user IDs mentioned in the post.                                     |
| commentTo        | Object?                                      | The post object this post is a comment to, if applicable.                   |
| createdBy        | [User](/types/User.md)                       | The user object of the post creator.                                        |
| _count           | Object                                       | Count-related metadata for the post.                                        |
| _count.likedBy   | Number                                       | Number of users who liked the post.                                         |
| _count.comments  | Number                                       | Number of comments on the post.                                             |
| _count.reposts   | Number                                       | Number of reposts of the post.                                              |
| likedBy          | Object[]                                     | List of users who liked the post.                                           |
| likedBy[].id     | String                                       | Snowflake ID of a user who liked the post.                                  |
| attachments      | Object[]                                     | List of attachments associated with the post.                               |
| reposts          | Object[]                                     | List of reposts of the post.                                                |
| repost           | Object?                                      | The repost object, if the post is a repost.                                 |