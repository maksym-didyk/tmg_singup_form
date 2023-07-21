/* eslint-disable max-len */
import React, {
  FormEvent,
  useState,
} from 'react';
import listCountry from '../api/countries.json';
import { ErrorsType } from '../types/typedefs';
import { CustomInput } from './CustomInput';
import { CustomSelect } from './CustomSelect';
import { Footer } from './Footer';
import { Header } from './Header';
import { CheckboxMUI } from './CheckboxMUI';
// import { CustomCheckbox } from './CustomCheckbox';

export const SingUpForm = () => {
  const [firstname, setFirstname] = useState('');
  const [secondname, setSecondname] = useState('');
  const [countryId, setCountryId] = useState(0);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<ErrorsType[]>([]);
  const [checked, setChecked] = useState(false);

  const getCountryCode = (id: number) => {
    const countryIndex = listCountry.find(country => country.id === id);

    if (typeof (countryIndex) !== 'undefined') {
      setPhone(() => countryIndex.code);
    }
  };

  const clearForm = () => {
    setFirstname('');
    setSecondname('');
    setCountryId(0);
    setPhone('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
    setChecked(false);
  };

  const isValidPassword = (pass: string) => /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(pass);
  const isValidEmail = (mail: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);

  const handleCheckedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(() => event.target.checked);

    if (!!event.target.checked === false) {
      setErrors(error => [...error, ErrorsType.checkbox]);
    }

    if (!!event.target.checked === true) {
      setErrors(error => error.filter(val => val !== ErrorsType.checkbox));
    }
  };

  const handleFirstnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(event.target.value);

    if (event.target.value.length < 3) {
      setErrors(error => [...error, ErrorsType.firstname]);
    }

    if (event.target.value.length > 2) {
      setErrors(error => error.filter(val => val !== ErrorsType.firstname));
    }
  };

  const handleSecondnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecondname(event.target.value);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryId(() => +event.target.value);

    getCountryCode(+event.target.value);

    if (+event.target.value !== 0) {
      setErrors(error => error.filter(val => val !== ErrorsType.countryId));
    }
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);

    if (event.target.value.length < 8) {
      setErrors(error => [...error, ErrorsType.phone]);
    }

    if (event.target.value.length > 7) {
      setErrors(error => error.filter(val => val !== ErrorsType.phone));
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (!isValidPassword(event.target.value)) {
      setErrors(error => [...error, ErrorsType.password]);
    }

    if (isValidPassword(event.target.value)) {
      setErrors(error => error.filter(val => val !== ErrorsType.password));
    }
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);

    if (password !== event.target.value) {
      setErrors(error => [...error, ErrorsType.confirmPassword]);
    }

    if (password === event.target.value) {
      setErrors(error => error.filter(val => val !== ErrorsType.confirmPassword));
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (!isValidEmail(event.target.value)) {
      setErrors(error => [...error, ErrorsType.email]);
    }

    if (isValidEmail(event.target.value)) {
      setErrors(error => error.filter(val => val !== ErrorsType.email));
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (firstname.length < 3) {
      setErrors(error => [...error, ErrorsType.firstname]);
    }

    if (countryId === 0) {
      setErrors(error => [...error, ErrorsType.countryId]);
    }

    if (phone.length < 8) {
      setErrors(error => [...error, ErrorsType.phone]);
    }

    if (!isValidPassword(password)) {
      setErrors(error => [...error, ErrorsType.password]);
    }

    if (password !== confirmPassword) {
      setErrors(error => [...error, ErrorsType.confirmPassword]);
    }

    if (!isValidEmail(email)) {
      setErrors(error => [...error, ErrorsType.email]);
    }

    if (checked === false) {
      setErrors(error => [...error, ErrorsType.checkbox]);
    }

    if (errors.length === 0) {
      clearForm();
    }
  };

  return (
    <>
      <div className="singupform">
        <Header />

        <form onSubmit={handleSubmit} className="singupform__form">
          <CustomInput
            type="text"
            name="firstname"
            value={firstname}
            placeholder="First Name"
            errors={errors}
            errorstype={ErrorsType.firstname}
            onChange={handleFirstnameChange}
          />

          <CustomInput
            type="text"
            name="secondname"
            value={secondname}
            placeholder="Second Name"
            errors={errors}
            onChange={handleSecondnameChange}
          />

          <CustomSelect
            id="country"
            value={countryId}
            errors={errors}
            errorstype={ErrorsType.countryId}
            onChange={handleCountryChange}
          />

          <CustomInput
            type="tel"
            name="phone"
            value={phone}
            placeholder="Phone"
            errors={errors}
            errorstype={ErrorsType.phone}
            onChange={handlePhoneChange}
          />

          <CustomInput
            type="password"
            value={password}
            placeholder="Password"
            errors={errors}
            errorstype={ErrorsType.password}
            onChange={handlePasswordChange}
          />

          <CustomInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm password"
            errors={errors}
            errorstype={ErrorsType.confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          <CustomInput
            type="email"
            value={email}
            placeholder="E-mail"
            errors={errors}
            errorstype={ErrorsType.email}
            onChange={handleEmailChange}
          />

          <div
            className="field"
            style={{
              display: 'flex', alignSelf: 'start', alignItems: 'center', flexDirection: 'row', flexWrap: 'nowrap', gap: '0px', justifyContent: 'start',
            }}
          >
            <CheckboxMUI cheked={checked} errors={errors} onChange={handleCheckedChange} />

            <span>
              I agree to the
              {' '}
              <a href="/#" className="singupform__link">Terms & Conditions</a>

            </span>
          </div>

          <div className="field">
            <button
              type="submit"
              className="singupform__button"
            >
              Sing Up
            </button>
          </div>
        </form>

        <Footer />
      </div>
    </>
  );
};
