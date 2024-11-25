/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UploadCertRequestBody = {
  /**
   * The certificate authority
   */
  ca: string;
  /**
   * The certificate key
   */
  key: string;
  /**
   * The certificate
   */
  cert: string;
  /**
   * Skip validation of the certificate
   */
  skipValidation?: boolean | undefined;
};

export type UploadCertRequest = {
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody?: UploadCertRequestBody | undefined;
};

export type UploadCertResponseBody = {
  id: string;
  createdAt: number;
  expiresAt: number;
  autoRenew: boolean;
  cns: Array<string>;
};

/** @internal */
export const UploadCertRequestBody$inboundSchema: z.ZodType<
  UploadCertRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  ca: z.string(),
  key: z.string(),
  cert: z.string(),
  skipValidation: z.boolean().optional(),
});

/** @internal */
export type UploadCertRequestBody$Outbound = {
  ca: string;
  key: string;
  cert: string;
  skipValidation?: boolean | undefined;
};

/** @internal */
export const UploadCertRequestBody$outboundSchema: z.ZodType<
  UploadCertRequestBody$Outbound,
  z.ZodTypeDef,
  UploadCertRequestBody
> = z.object({
  ca: z.string(),
  key: z.string(),
  cert: z.string(),
  skipValidation: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadCertRequestBody$ {
  /** @deprecated use `UploadCertRequestBody$inboundSchema` instead. */
  export const inboundSchema = UploadCertRequestBody$inboundSchema;
  /** @deprecated use `UploadCertRequestBody$outboundSchema` instead. */
  export const outboundSchema = UploadCertRequestBody$outboundSchema;
  /** @deprecated use `UploadCertRequestBody$Outbound` instead. */
  export type Outbound = UploadCertRequestBody$Outbound;
}

export function uploadCertRequestBodyToJSON(
  uploadCertRequestBody: UploadCertRequestBody,
): string {
  return JSON.stringify(
    UploadCertRequestBody$outboundSchema.parse(uploadCertRequestBody),
  );
}

export function uploadCertRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UploadCertRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadCertRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadCertRequestBody' from JSON`,
  );
}

/** @internal */
export const UploadCertRequest$inboundSchema: z.ZodType<
  UploadCertRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  teamId: z.string().optional(),
  slug: z.string().optional(),
  RequestBody: z.lazy(() => UploadCertRequestBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UploadCertRequest$Outbound = {
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody?: UploadCertRequestBody$Outbound | undefined;
};

/** @internal */
export const UploadCertRequest$outboundSchema: z.ZodType<
  UploadCertRequest$Outbound,
  z.ZodTypeDef,
  UploadCertRequest
> = z.object({
  teamId: z.string().optional(),
  slug: z.string().optional(),
  requestBody: z.lazy(() => UploadCertRequestBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadCertRequest$ {
  /** @deprecated use `UploadCertRequest$inboundSchema` instead. */
  export const inboundSchema = UploadCertRequest$inboundSchema;
  /** @deprecated use `UploadCertRequest$outboundSchema` instead. */
  export const outboundSchema = UploadCertRequest$outboundSchema;
  /** @deprecated use `UploadCertRequest$Outbound` instead. */
  export type Outbound = UploadCertRequest$Outbound;
}

export function uploadCertRequestToJSON(
  uploadCertRequest: UploadCertRequest,
): string {
  return JSON.stringify(
    UploadCertRequest$outboundSchema.parse(uploadCertRequest),
  );
}

export function uploadCertRequestFromJSON(
  jsonString: string,
): SafeParseResult<UploadCertRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadCertRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadCertRequest' from JSON`,
  );
}

/** @internal */
export const UploadCertResponseBody$inboundSchema: z.ZodType<
  UploadCertResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  createdAt: z.number(),
  expiresAt: z.number(),
  autoRenew: z.boolean(),
  cns: z.array(z.string()),
});

/** @internal */
export type UploadCertResponseBody$Outbound = {
  id: string;
  createdAt: number;
  expiresAt: number;
  autoRenew: boolean;
  cns: Array<string>;
};

/** @internal */
export const UploadCertResponseBody$outboundSchema: z.ZodType<
  UploadCertResponseBody$Outbound,
  z.ZodTypeDef,
  UploadCertResponseBody
> = z.object({
  id: z.string(),
  createdAt: z.number(),
  expiresAt: z.number(),
  autoRenew: z.boolean(),
  cns: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadCertResponseBody$ {
  /** @deprecated use `UploadCertResponseBody$inboundSchema` instead. */
  export const inboundSchema = UploadCertResponseBody$inboundSchema;
  /** @deprecated use `UploadCertResponseBody$outboundSchema` instead. */
  export const outboundSchema = UploadCertResponseBody$outboundSchema;
  /** @deprecated use `UploadCertResponseBody$Outbound` instead. */
  export type Outbound = UploadCertResponseBody$Outbound;
}

export function uploadCertResponseBodyToJSON(
  uploadCertResponseBody: UploadCertResponseBody,
): string {
  return JSON.stringify(
    UploadCertResponseBody$outboundSchema.parse(uploadCertResponseBody),
  );
}

export function uploadCertResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UploadCertResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadCertResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadCertResponseBody' from JSON`,
  );
}
