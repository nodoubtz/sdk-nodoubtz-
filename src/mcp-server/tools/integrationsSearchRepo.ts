/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { integrationsSearchRepo } from "../../funcs/integrationsSearchRepo.js";
import { SearchRepoRequest$inboundSchema } from "../../models/searchrepoop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: SearchRepoRequest$inboundSchema,
};

export const tool$integrationsSearchRepo: ToolDefinition<typeof args> = {
  name: "integrations-search-repo",
  description: `List git repositories linked to namespace by provider

Lists git repositories linked to a namespace \`id\` for a supported provider. A specific namespace \`id\` can be obtained via the \`git-namespaces\`  endpoint. Supported providers are \`github\`, \`gitlab\` and \`bitbucket\`. If the provider or namespace is not provided, it will try to obtain it from the user that authenticated the request.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await integrationsSearchRepo(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
