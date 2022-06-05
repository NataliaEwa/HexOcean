import createCache, { EmotionCache } from "@emotion/cache";

export default function emotionCache(): EmotionCache {
  return createCache({ key: "css", prepend: true });
}
