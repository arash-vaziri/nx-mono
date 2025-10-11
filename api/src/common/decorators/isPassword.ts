import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";



export function IsPassword(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isPassword',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          
            if (typeof value !== 'string') 
                return false;
          
          return (
            /[a-z]/.test(value) && 
            /[A-Z]/.test(value) && 
            /[0-9]/.test(value) && 
            /[^A-Za-z0-9]/.test(value) && 
            value.length >= 8 
          );
        },
        defaultMessage(args: ValidationArguments) {
          return 'Password must be at least 8 characters long, include uppercase, lowercase, number, and special character';
        },
      },
    });
  };
}