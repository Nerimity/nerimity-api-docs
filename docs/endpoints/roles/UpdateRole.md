# Update a role

Update a role's properties.

#### Endpoint

```
POST https://nerimity.com/api/servers/{SERVER_ID}/roles/{ROLE_ID}
```

| Header        | Description          |
| ------------- | -------------------- |
| Authorization | Your User/Bot token. |
| Content-Type  | application/json     |

| Body        | Type     | Description                          |
| ----------- | -------- | ------------------------------------ |
| name        | String?  | The role's name                      |
| hexColor    | String?  | The role's color in hex format       |
| hideRole    | Boolean? | Whether the role should be hidden    |
| permissions | Number?  | The role's permissions in bit format |

#### Response: [Role](/types/Role.md)
