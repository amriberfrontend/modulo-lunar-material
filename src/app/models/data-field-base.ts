import { Option } from "./option";

export class DataFieldBase<T> {
  value: T | undefined;
  key: string;
  controlType: string;
  type: string;
  label: string;
  options: Option[];
  required: boolean;
  pattern: RegExp | undefined;
  min: number | undefined;
  max: number | undefined;
  maxLength: number | undefined;

  constructor(
    options: {
      value?: T;
      key?: string;
      controlType?: string;
      type?: string;
      label?: string;
      options?: Option[];
      required?: boolean;
      pattern?: RegExp;
      min?: number;
      max?: number;
      maxLength?: number;
    } = {},
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.label = options.label || '';
    this.options = options.options || [];
    this.required = !!options.required;
    this.pattern = options.pattern;
    this.min = options.min;
    this.max = options.max;
    this.maxLength = options.maxLength;
  }
}
