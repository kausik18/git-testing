// Cross-platform launcher for the adapter-node build: defaults PORT to 3007.
process.env.PORT ??= '3007';
await import('./build/index.js');
