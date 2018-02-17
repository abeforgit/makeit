import { required, matchPW, validEmail } from '../routes/Register/modules/InputValidation';

test('Checks if undefined when value is present', () => {
  expect(required('someval')).toBeUndefined();
});

test('Checks if error when no value is present', () => {
  expect(required()).toBe('Required');
});

test('Undefined when passwords match', () => {
  expect(
    matchPW('somepassXC78()', { createPass: 'somepassXC78()' }),
  ).toBeUndefined();
});

test('Error when passwords do not match', () => {
  expect(matchPW('somepassXC78()', { createPass: 'somepassXC79()' })).toBe(
    'Passwords must match!',
  );
});

test('Undefined when valid email', () => {
  expect(validEmail('myemail@gmail.com')).toBeUndefined();
});

test('Error when email is not valid', () => {
  let errorstr = 'Invalid email address';
  expect(validEmail('adsfasdf')).toBe(errorstr);
  expect(validEmail('almostcorrect.gmail.com')).toBe(errorstr);
});
