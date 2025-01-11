declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      config?: Record<string, any> | undefined
    ) => void;
    dataLayer: any[];
  }
}

export {};
