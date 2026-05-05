"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { useServerInsertedHTML } from "next/navigation";
import { PropsWithChildren, useState } from "react";

function createEmotionCache() {
  const cache = createCache({ key: "chakra", prepend: true });
  cache.compat = true;

  const prevInsert = cache.insert;
  let inserted: string[] = [];

  cache.insert = (...args) => {
    const serialized = args[1];

    if (cache.inserted[serialized.name] === undefined) {
      inserted.push(serialized.name);
    }

    return prevInsert(...args);
  };

  const flush = () => {
    const prevInserted = inserted;
    inserted = [];
    return prevInserted;
  };

  return { cache, flush };
}

export default function Providers({ children }: PropsWithChildren) {
  const [emotionCache] = useState(createEmotionCache);

  useServerInsertedHTML(() => {
    const names = emotionCache.flush();

    if (names.length === 0) {
      return null;
    }

    let styles = "";

    for (const name of names) {
      styles += emotionCache.cache.inserted[name];
    }

    return (
      <style
        data-emotion={`${emotionCache.cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={emotionCache.cache}>
      <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
