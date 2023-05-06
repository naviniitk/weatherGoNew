/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_MAP_API_KEY: string;
  readonly PUBLIC_WEATHER_API_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}