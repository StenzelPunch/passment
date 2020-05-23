abstract class AppResponse {
  message?: string;

  data?: unknown;

  constructor(message?: string, data?: unknown) {
    this.message = message;
    this.data = data;
  }
}

export class SuccessResponse extends AppResponse {
  readonly success: true;

  constructor(message?: string, data?: unknown) {
    super(message, data);

    this.success = true;
  }
}

export class FailureResponse extends AppResponse {
  readonly success: false;

  constructor(message?: string, data?: unknown) {
    super(message, data);

    this.success = false;
  }
}

export const ErrorResponse = new FailureResponse("Server error");
