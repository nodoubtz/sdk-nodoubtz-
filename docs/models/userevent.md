# UserEvent

Array of events generated by the User.

## Example Usage

```typescript
import { UserEvent } from "@vercel/sdk/models/userevent.js";

let value: UserEvent = {
  id: "uev_bfmMjiMnXfnPbT97dGdpJbCN",
  text: "You logged in via GitHub",
  entities: [
    {
      type: "author",
      start: 0,
      end: 3,
    },
  ],
  createdAt: 1632859321020,
  userId: "zTuNVUXEAvvnNN3IaqinkyMw",
  payload: {},
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The unique identifier of the Event.                                                                                      | uev_bfmMjiMnXfnPbT97dGdpJbCN                                                                                             |
| `text`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The human-readable text of the Event.                                                                                    | You logged in via GitHub                                                                                                 |
| `entities`                                                                                                               | [models.Entities](../models/entities.md)[]                                                                               | :heavy_check_mark:                                                                                                       | A list of "entities" within the event `text`. Useful for enhancing the displayed text with additional styling and links. |                                                                                                                          |
| `createdAt`                                                                                                              | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | Timestamp (in milliseconds) of when the event was generated.                                                             | 1632859321020                                                                                                            |
| `user`                                                                                                                   | [models.User](../models/user.md)                                                                                         | :heavy_minus_sign:                                                                                                       | Metadata for the User who generated the event.                                                                           |                                                                                                                          |
| `userId`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The unique identifier of the User who generated the event.                                                               | zTuNVUXEAvvnNN3IaqinkyMw                                                                                                 |
| `payload`                                                                                                                | *models.Payload*                                                                                                         | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |