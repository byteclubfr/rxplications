export enum Status {
  hidden,
  visible,
  highlighted
}
export interface Line {
  codeline: string;
  status: Status;
}
