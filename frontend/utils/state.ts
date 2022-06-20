type UseStateGetValue<T> = () => T;

type UseStateSetValue<T> = (newState: T) => void;

export const useState = <T>(
  defaultValue: T
): [UseStateGetValue<T>, UseStateSetValue<T>] => {
  let value = defaultValue;

  const setValue = (newValue: T) => {
    value = newValue;
  };
  const getValue = (): T => {
    return value as T;
  };

  return [getValue, setValue];
};