import { ValidationErrorItem } from "@hapi/joi";

export const formatErrorData = (
  items: ValidationErrorItem[]
): { [key: string]: string } =>
  Object.fromEntries(
    items.map((item: ValidationErrorItem) => {
      if (item.context) return [item.context.key, item.message];
      return [item.type, item.message];
    })
  );
