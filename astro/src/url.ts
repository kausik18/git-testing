/**
 * With `build.format: 'file'` Astro reports pathnames such as `/about.html` or `/index.html`
 * during the build; normalise them to the clean URLs that are actually served.
 */
export function pagePath(url: URL): string {
	const clean = url.pathname.replace(/\.html$/, '').replace(/\/index$/, '/');
	return clean === '' ? '/' : clean;
}
