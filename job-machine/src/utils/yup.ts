import { EMAIL_REGEX } from '@/constants/constants';
import * as yup from 'yup';

export const schemaRegister = yup.object().shape({
  name: yup.string().min(8).max(32).required(),
  email: yup
    .string()
    .required('Email is required')
    .matches(EMAIL_REGEX, 'Email invalid '),

  password: yup.string().min(8).max(32).required(),
});

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(EMAIL_REGEX, 'Email invalid '),

  password: yup.string().min(8).max(32).required(),
});
