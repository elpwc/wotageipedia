// Provides a way to share data globally.
export default class Storage<T> {
  constructor(defaultValue: T, functions?: {}) {
    this.value = defaultValue;
    if (functions) {
      this.functions = functions;
    }
  }
  public value!: T;
  public set = (newValue: T) => {
    this.value = newValue;
  };
  public functions = {};
}
