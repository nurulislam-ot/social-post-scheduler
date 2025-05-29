import { z } from "zod"
import {
  FACEBOOK_POST_AS_CONSTANT,
  POST_ON_CONSTANT,
  POST_STATUS_CONSTANT,
  POST_TYPE_CONSTANT,
  POST_VISIBILITY_CONSTANT,
  YOUTUBE_POST_AS_CONSTANT,
} from "../types/post"

const DefaultPostSchema = z.object({
  uid: z.string().optional(),
  channel_uid: z.string().optional(),
  content: z
    .string({
      required_error: "Content is required",
    })
    .min(20, {
      message: "Content must be at least 20 characters long",
    }),
  post_on: z.nativeEnum(POST_ON_CONSTANT),
  type: z.nativeEnum(POST_TYPE_CONSTANT),
  status: z.nativeEnum(POST_STATUS_CONSTANT),
})

const MediaUrlSchema = z.object({
  path: z.string(),
  type: z.string(),
})

export type MediaUrlType = z.infer<typeof MediaUrlSchema>

export const PostSchema = z.discriminatedUnion("post_on", [
  DefaultPostSchema.extend({
    post_on: z.literal(POST_ON_CONSTANT.FACEBOOK),
    settings: z.object({
      post_as: z
        .nativeEnum(FACEBOOK_POST_AS_CONSTANT)
        .default(FACEBOOK_POST_AS_CONSTANT.POST),
    }),
    media_urls: z.array(MediaUrlSchema).nullable(),
  }),
  DefaultPostSchema.extend({
    post_on: z.literal(POST_ON_CONSTANT.INSTAGRAM),
    settings: z.object({}).nullable(),
    media_urls: z.array(MediaUrlSchema).min(1, {
      message: "At least one media file is required for Instagram",
    }),
  }),
  DefaultPostSchema.extend({
    post_on: z.literal(POST_ON_CONSTANT.TIKTOK),
    settings: z
      .object({
        visibility: z
          .nativeEnum(POST_VISIBILITY_CONSTANT)
          .default(POST_VISIBILITY_CONSTANT.PUBLIC),
        disclose_content: z.boolean().default(false).optional(),
      })
      .nullable(),
    media_urls: z.array(MediaUrlSchema).min(1, {
      message: "At least one media file is required for TikTok",
    }),
  }),
  DefaultPostSchema.extend({
    post_on: z.literal(POST_ON_CONSTANT.YOUTUBE),
    settings: z.object({
      title: z.string({ required_error: "Video title is required" }).min(8),
      post_as: z
        .nativeEnum(YOUTUBE_POST_AS_CONSTANT)
        .default(YOUTUBE_POST_AS_CONSTANT.VIDEO),
      allow_embedding: z.boolean().default(false).optional(),
      made_for_kids: z.boolean().default(false).optional(),
      privacy_status: z
        .nativeEnum(POST_VISIBILITY_CONSTANT)
        .default(POST_VISIBILITY_CONSTANT.PUBLIC),
    }),
    media_urls: z.array(MediaUrlSchema).min(1, {
      message: "At least one media file is required for YouTube",
    }),
  }),
  DefaultPostSchema.extend({
    post_on: z.literal(POST_ON_CONSTANT.LINKEDIN),
    settings: z.object({}).nullable(),
    media_urls: z.array(MediaUrlSchema).nullable(),
  }),
  DefaultPostSchema.extend({
    post_on: z.literal(POST_ON_CONSTANT.TWITTER),
    settings: z.object({}).nullable(),
    media_urls: z.array(MediaUrlSchema).nullable(),
  }),
  DefaultPostSchema.extend({
    post_on: z.literal(POST_ON_CONSTANT.PINTEREST),
    settings: z.object({}).nullable(),
    media_urls: z.array(MediaUrlSchema).min(1, {
      message: "At least one media file is required for Pinterest",
    }),
  }),
  DefaultPostSchema.extend({
    post_on: z.literal(POST_ON_CONSTANT.GMB),
    settings: z.object({}).nullable(),
    media_urls: z.array(MediaUrlSchema).nullable(),
  }),
  DefaultPostSchema.extend({
    post_on: z.literal(POST_ON_CONSTANT.TUMBLR),
    settings: z.object({}).nullable(),
    media_urls: z.array(MediaUrlSchema).nullable(),
  }),
])
