'use client';

import FormInput from '~/components/Interactive/FormInput';
import MultilineInput from '~/components/Interactive/MultilineInput';
import SubmitButton from '~/components/Interactive/SubmitButton';
import { i18n } from '~/i18n';

import { useState } from 'react';

export default function ContactForm(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form className="py-16" method="POST" action={i18n.t('contact.link')}>
      <FormInput
        type="text"
        placeholder={i18n.t('contact.name.placeholder')}
        value={name}
        onChange={(value) => setName(value)}
      >
        {i18n.t('contact.name.title')}
      </FormInput>
      <FormInput
        type="email"
        placeholder={i18n.t('contact.email.placeholder')}
        value={email}
        onChange={(value) => setEmail(value)}
      >
        {i18n.t('contact.email.title')}
      </FormInput>
      <MultilineInput
        type="message"
        placeholder={i18n.t('contact.message.placeholder')}
        value={message}
        onChange={(value) => setMessage(value)}
      >
        {i18n.t('contact.message.title')}
      </MultilineInput>
      <SubmitButton>{i18n.t('contact.submit')}</SubmitButton>
    </form>
  );
}
