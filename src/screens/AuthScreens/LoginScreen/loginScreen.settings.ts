import { object, string } from 'yup';

import { EMAIL_REGEX } from 'constants/regExp';

import { AuthFieldNames } from '../auth.types';

export const loginSchema = object({
  [AuthFieldNames.email]: string()
    .required('Email is required')
    .matches(EMAIL_REGEX, 'Please provide a valid email address'),
  [AuthFieldNames.password]: string()
    .required('Password is required')
    .min(6, 'Password should be at least 6 characters long'),
});
