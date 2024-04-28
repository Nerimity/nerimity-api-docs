
# User

| key           | Type                                         | Description                                   |
| ------------- | -------------------------------------------- | --------------------------------------------- |
| id            | String                                       | Snowflake Id of the user.                     |
| username      | String                                       | Username of the user.                         |
| tag           | String(4)                                    | Alphanumeric user tag.                        |
| hexColor      | String                                       | Randomly generate color for default profile.  |
| avatar        | String?                                      | Partial URL for the avatar                    |
| badge         | [UserBadge](#userbadge)                  | User badges in bit.                              |

# UserBadge
| Bit           | Name                                         | Description                                   |
| ------------- | -------------------------------------------- | --------------------------------------------- |
| 1             | Founder                                      | Creator of Nerimity                           |
| 2             | Admin                                        | Admin of Nerimity                             |
| 4             | Contributor                                  | Helped with this project in some way          |
| 8             | Supporter                                    | Supported this project by donating money      |
