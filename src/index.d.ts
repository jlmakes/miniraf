export as namespace miniraf;

export = miniraf;

type Callback = (time: number) => any;

declare function miniraf(callback: Callback): void;
