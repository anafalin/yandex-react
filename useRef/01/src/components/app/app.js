import React from 'react';
import PasswordResetForm from '../password-reset-form/password-reset-form'

import appStyles from './app.module.css';

function App() {
  return (
    <main className={appStyles.app}>
      <PasswordResetForm />
    </main>
  );
}

export default App;