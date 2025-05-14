# Create an attachment

Upload attachments to Nerimity's CDN

#### Endpoint

```
POST https://cdn.nerimity.com/upload
```

| Body (FormData) | Type   | Description                          |
| --------------- | ------ | ------------------------------------ |
| file            | binary | The binary content of the image file |

#### Response

```json
{ "fileId": "1234.." }
```
