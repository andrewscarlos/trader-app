/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

export {};

declare global {
  interface Window {
    Notyf: new (...args: any[]) => any;
  }
}