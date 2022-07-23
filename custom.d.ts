
declare module '*.mp4' {
  const src: string;
  export default src;
}

declare namespace JSX {
  interface IntrinsicElements {
    "lottie-player": any;
  }
}
