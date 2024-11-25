/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ScopesType = {
  Team: "team",
} as const;
export type ScopesType = ClosedEnum<typeof ScopesType>;

export const AuthTokenScopesOrigin = {
  Saml: "saml",
  Github: "github",
  Gitlab: "gitlab",
  Bitbucket: "bitbucket",
  Email: "email",
  Manual: "manual",
  Passkey: "passkey",
  Otp: "otp",
  Sms: "sms",
} as const;
export type AuthTokenScopesOrigin = ClosedEnum<typeof AuthTokenScopesOrigin>;

/**
 * The access scopes granted to the token.
 */
export type Scopes2 = {
  type: ScopesType;
  teamId: string;
  origin: AuthTokenScopesOrigin;
  createdAt: number;
  expiresAt?: number | undefined;
};

export const AuthTokenScopesType = {
  User: "user",
} as const;
export type AuthTokenScopesType = ClosedEnum<typeof AuthTokenScopesType>;

export const ScopesOrigin = {
  Saml: "saml",
  Github: "github",
  Gitlab: "gitlab",
  Bitbucket: "bitbucket",
  Email: "email",
  Manual: "manual",
  Passkey: "passkey",
  Otp: "otp",
  Sms: "sms",
} as const;
export type ScopesOrigin = ClosedEnum<typeof ScopesOrigin>;

/**
 * The access scopes granted to the token.
 */
export type Scopes1 = {
  type: AuthTokenScopesType;
  origin: ScopesOrigin;
  createdAt: number;
  expiresAt?: number | undefined;
};

export type Scopes = Scopes1 | Scopes2;

/**
 * Authentication token metadata.
 */
export type AuthToken = {
  /**
   * The unique identifier of the token.
   */
  id: string;
  /**
   * The human-readable name of the token.
   */
  name: string;
  /**
   * The type of the token.
   */
  type: string;
  /**
   * The origin of how the token was created.
   */
  origin?: string | undefined;
  /**
   * The access scopes granted to the token.
   */
  scopes?: Array<Scopes1 | Scopes2> | undefined;
  /**
   * Timestamp (in milliseconds) of when the token expires.
   */
  expiresAt?: number | undefined;
  /**
   * Timestamp (in milliseconds) of when the token was most recently used.
   */
  activeAt: number;
  /**
   * Timestamp (in milliseconds) of when the token was created.
   */
  createdAt: number;
};

/** @internal */
export const ScopesType$inboundSchema: z.ZodNativeEnum<typeof ScopesType> = z
  .nativeEnum(ScopesType);

/** @internal */
export const ScopesType$outboundSchema: z.ZodNativeEnum<typeof ScopesType> =
  ScopesType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScopesType$ {
  /** @deprecated use `ScopesType$inboundSchema` instead. */
  export const inboundSchema = ScopesType$inboundSchema;
  /** @deprecated use `ScopesType$outboundSchema` instead. */
  export const outboundSchema = ScopesType$outboundSchema;
}

/** @internal */
export const AuthTokenScopesOrigin$inboundSchema: z.ZodNativeEnum<
  typeof AuthTokenScopesOrigin
> = z.nativeEnum(AuthTokenScopesOrigin);

/** @internal */
export const AuthTokenScopesOrigin$outboundSchema: z.ZodNativeEnum<
  typeof AuthTokenScopesOrigin
> = AuthTokenScopesOrigin$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthTokenScopesOrigin$ {
  /** @deprecated use `AuthTokenScopesOrigin$inboundSchema` instead. */
  export const inboundSchema = AuthTokenScopesOrigin$inboundSchema;
  /** @deprecated use `AuthTokenScopesOrigin$outboundSchema` instead. */
  export const outboundSchema = AuthTokenScopesOrigin$outboundSchema;
}

/** @internal */
export const Scopes2$inboundSchema: z.ZodType<Scopes2, z.ZodTypeDef, unknown> =
  z.object({
    type: ScopesType$inboundSchema,
    teamId: z.string(),
    origin: AuthTokenScopesOrigin$inboundSchema,
    createdAt: z.number(),
    expiresAt: z.number().optional(),
  });

/** @internal */
export type Scopes2$Outbound = {
  type: string;
  teamId: string;
  origin: string;
  createdAt: number;
  expiresAt?: number | undefined;
};

/** @internal */
export const Scopes2$outboundSchema: z.ZodType<
  Scopes2$Outbound,
  z.ZodTypeDef,
  Scopes2
> = z.object({
  type: ScopesType$outboundSchema,
  teamId: z.string(),
  origin: AuthTokenScopesOrigin$outboundSchema,
  createdAt: z.number(),
  expiresAt: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Scopes2$ {
  /** @deprecated use `Scopes2$inboundSchema` instead. */
  export const inboundSchema = Scopes2$inboundSchema;
  /** @deprecated use `Scopes2$outboundSchema` instead. */
  export const outboundSchema = Scopes2$outboundSchema;
  /** @deprecated use `Scopes2$Outbound` instead. */
  export type Outbound = Scopes2$Outbound;
}

export function scopes2ToJSON(scopes2: Scopes2): string {
  return JSON.stringify(Scopes2$outboundSchema.parse(scopes2));
}

export function scopes2FromJSON(
  jsonString: string,
): SafeParseResult<Scopes2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Scopes2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Scopes2' from JSON`,
  );
}

/** @internal */
export const AuthTokenScopesType$inboundSchema: z.ZodNativeEnum<
  typeof AuthTokenScopesType
> = z.nativeEnum(AuthTokenScopesType);

/** @internal */
export const AuthTokenScopesType$outboundSchema: z.ZodNativeEnum<
  typeof AuthTokenScopesType
> = AuthTokenScopesType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthTokenScopesType$ {
  /** @deprecated use `AuthTokenScopesType$inboundSchema` instead. */
  export const inboundSchema = AuthTokenScopesType$inboundSchema;
  /** @deprecated use `AuthTokenScopesType$outboundSchema` instead. */
  export const outboundSchema = AuthTokenScopesType$outboundSchema;
}

/** @internal */
export const ScopesOrigin$inboundSchema: z.ZodNativeEnum<typeof ScopesOrigin> =
  z.nativeEnum(ScopesOrigin);

/** @internal */
export const ScopesOrigin$outboundSchema: z.ZodNativeEnum<typeof ScopesOrigin> =
  ScopesOrigin$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScopesOrigin$ {
  /** @deprecated use `ScopesOrigin$inboundSchema` instead. */
  export const inboundSchema = ScopesOrigin$inboundSchema;
  /** @deprecated use `ScopesOrigin$outboundSchema` instead. */
  export const outboundSchema = ScopesOrigin$outboundSchema;
}

/** @internal */
export const Scopes1$inboundSchema: z.ZodType<Scopes1, z.ZodTypeDef, unknown> =
  z.object({
    type: AuthTokenScopesType$inboundSchema,
    origin: ScopesOrigin$inboundSchema,
    createdAt: z.number(),
    expiresAt: z.number().optional(),
  });

/** @internal */
export type Scopes1$Outbound = {
  type: string;
  origin: string;
  createdAt: number;
  expiresAt?: number | undefined;
};

/** @internal */
export const Scopes1$outboundSchema: z.ZodType<
  Scopes1$Outbound,
  z.ZodTypeDef,
  Scopes1
> = z.object({
  type: AuthTokenScopesType$outboundSchema,
  origin: ScopesOrigin$outboundSchema,
  createdAt: z.number(),
  expiresAt: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Scopes1$ {
  /** @deprecated use `Scopes1$inboundSchema` instead. */
  export const inboundSchema = Scopes1$inboundSchema;
  /** @deprecated use `Scopes1$outboundSchema` instead. */
  export const outboundSchema = Scopes1$outboundSchema;
  /** @deprecated use `Scopes1$Outbound` instead. */
  export type Outbound = Scopes1$Outbound;
}

export function scopes1ToJSON(scopes1: Scopes1): string {
  return JSON.stringify(Scopes1$outboundSchema.parse(scopes1));
}

export function scopes1FromJSON(
  jsonString: string,
): SafeParseResult<Scopes1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Scopes1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Scopes1' from JSON`,
  );
}

/** @internal */
export const Scopes$inboundSchema: z.ZodType<Scopes, z.ZodTypeDef, unknown> = z
  .union([
    z.lazy(() => Scopes1$inboundSchema),
    z.lazy(() => Scopes2$inboundSchema),
  ]);

/** @internal */
export type Scopes$Outbound = Scopes1$Outbound | Scopes2$Outbound;

/** @internal */
export const Scopes$outboundSchema: z.ZodType<
  Scopes$Outbound,
  z.ZodTypeDef,
  Scopes
> = z.union([
  z.lazy(() => Scopes1$outboundSchema),
  z.lazy(() => Scopes2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Scopes$ {
  /** @deprecated use `Scopes$inboundSchema` instead. */
  export const inboundSchema = Scopes$inboundSchema;
  /** @deprecated use `Scopes$outboundSchema` instead. */
  export const outboundSchema = Scopes$outboundSchema;
  /** @deprecated use `Scopes$Outbound` instead. */
  export type Outbound = Scopes$Outbound;
}

export function scopesToJSON(scopes: Scopes): string {
  return JSON.stringify(Scopes$outboundSchema.parse(scopes));
}

export function scopesFromJSON(
  jsonString: string,
): SafeParseResult<Scopes, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Scopes$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Scopes' from JSON`,
  );
}

/** @internal */
export const AuthToken$inboundSchema: z.ZodType<
  AuthToken,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  origin: z.string().optional(),
  scopes: z.array(
    z.union([
      z.lazy(() => Scopes1$inboundSchema),
      z.lazy(() => Scopes2$inboundSchema),
    ]),
  ).optional(),
  expiresAt: z.number().optional(),
  activeAt: z.number(),
  createdAt: z.number(),
});

/** @internal */
export type AuthToken$Outbound = {
  id: string;
  name: string;
  type: string;
  origin?: string | undefined;
  scopes?: Array<Scopes1$Outbound | Scopes2$Outbound> | undefined;
  expiresAt?: number | undefined;
  activeAt: number;
  createdAt: number;
};

/** @internal */
export const AuthToken$outboundSchema: z.ZodType<
  AuthToken$Outbound,
  z.ZodTypeDef,
  AuthToken
> = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  origin: z.string().optional(),
  scopes: z.array(
    z.union([
      z.lazy(() => Scopes1$outboundSchema),
      z.lazy(() => Scopes2$outboundSchema),
    ]),
  ).optional(),
  expiresAt: z.number().optional(),
  activeAt: z.number(),
  createdAt: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthToken$ {
  /** @deprecated use `AuthToken$inboundSchema` instead. */
  export const inboundSchema = AuthToken$inboundSchema;
  /** @deprecated use `AuthToken$outboundSchema` instead. */
  export const outboundSchema = AuthToken$outboundSchema;
  /** @deprecated use `AuthToken$Outbound` instead. */
  export type Outbound = AuthToken$Outbound;
}

export function authTokenToJSON(authToken: AuthToken): string {
  return JSON.stringify(AuthToken$outboundSchema.parse(authToken));
}

export function authTokenFromJSON(
  jsonString: string,
): SafeParseResult<AuthToken, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AuthToken$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AuthToken' from JSON`,
  );
}
