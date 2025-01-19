# Create Attachment
Upload attachments to Nerimity's CDN
#### Endpoint
```
POST https://cdn.nerimity.com/upload
```


| Body (FormData)       | Type      | Description                               |
| --------------------- | --------- | ----------------------------------------- |
| Content-Disposition   | string    | [Idk how to describe it]                     |
| Content-Type          | string    | Content type of the file                  |
| File Content          | binary    | The binary content of the image file      |

### Content-Disposition


#### Response: [FileId](/types/FileId.md)