import { object, string } from 'yup';

import { EMAIL_REGEX } from 'constants/regExp';

import { AuthFieldNames } from '../auth.types';

export const registrationSchema = object({
  [AuthFieldNames.email]: string()
    .required('Email is required')
    .matches(EMAIL_REGEX, 'Please provide a valid email address'),
  [AuthFieldNames.password]: string()
    .required('Password is required')
    .min(6, 'Password should be at least 6 characters long'),
  [AuthFieldNames.confirmPassword]: string()
    .required('Password confirmation is required')
    .test(
      AuthFieldNames.confirmPassword,
      'Passwords must match',
      (value, context) => value === context.parent[AuthFieldNames.password],
    ),
});
