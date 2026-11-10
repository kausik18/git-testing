// Starts the built Nitro server on port 3006 unless PORT is already set.
process.env.PORT ||= '3006';
await import('./.output/server/index.mjs');
