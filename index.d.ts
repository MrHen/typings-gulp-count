declare namespace gulpCount {
  export interface Options {
    cwd?: string;
    logger?: (message: string) => any;
    logFiles?: boolean | string;
    message?: string;
  }
}

declare function gulpCount(options?: gulpCount.Options): any;
declare function gulpCount(message: string, options?: gulpCount.Options): any;

export = gulpCount;
