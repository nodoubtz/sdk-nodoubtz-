# DeleteDeploymentRequest

## Example Usage

```typescript
import { DeleteDeploymentRequest } from "@vercel/sdk/models/deletedeploymentop.js";

let value: DeleteDeploymentRequest = {
  id: "dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd",
  url: "https://files-orcin-xi.vercel.app/",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | The ID of the deployment to be deleted                                  | dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd                         |
| `url`                                                                   | *string*                                                                | :heavy_minus_sign:                                                      | A Deployment or Alias URL. In case it is passed, the ID will be ignored | https://files-orcin-xi.vercel.app/                                      |
| `teamId`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | The Team identifier to perform the request on behalf of.                | team_1a2b3c4d5e6f7g8h9i0j1k2l                                           |
| `slug`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | The Team slug to perform the request on behalf of.                      | my-team-url-slug                                                        |