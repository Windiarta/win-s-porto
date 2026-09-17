// ponytail: one-shot WebGL probe; ogl-based backgrounds crash without a
// context, so canvas backgrounds unmount and CSS fallbacks show instead.
let cached: boolean | null = null;

export function webglSupported(): boolean {
  if (cached === null) {
    try {
      const c = document.createElement('canvas');
      cached = !!(c.getContext('webgl2') || c.getContext('webgl'));
    } catch {
      cached = false;
    }
  }
  return cached;
}
