export class ErrorConstructor extends Error {
  constructor(public message: string, public status: number) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.status = status || 500;
  }
}
