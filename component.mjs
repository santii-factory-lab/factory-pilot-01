export function isScannable(component) {
  return typeof component?.name === 'string' && component.name.length > 0;
}
