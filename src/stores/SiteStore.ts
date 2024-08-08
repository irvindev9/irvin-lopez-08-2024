import { defineStore } from 'pinia';

const delayTime: number = Number(import.meta.env.VITE_DELAY_TIME_LOADER) || 1000;

export const useSiteStore = defineStore('site', {
  state: () => ({
    loader: false,
  }),
  actions: {
    toggleLoader() {
      this.loader = !this.loader;
    },
    setLoader(value: boolean) {
      this.loader = value;
    },
    turnOffLoader() {
      setTimeout(() => {
        this.loader = false;
      }, delayTime);
    }
  },
});