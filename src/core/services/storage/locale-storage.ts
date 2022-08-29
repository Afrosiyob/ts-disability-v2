/* eslint-disable @typescript-eslint/no-explicit-any */
export const setStorage = (key: string, value: any): void => {
  localStorage.setItem(key, value);
};

export const getStorage = (key: string): unknown => {
  return localStorage.getItem(key);
};

export const removeStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const clearStorage = (): void => {
  localStorage.clear();
};
