import { Container } from './components/Container.tsx'
import { MainForm } from './components/MainForm.tsx';
import { DefaultInput } from './components/DefaultInput.tsx';
import { DefaultButton } from './components/DefaultButton.tsx';

import { Mail, Lock } from 'lucide-react';

import './styles/global.css';
import './styles/theme.css';

function App() {
  return (
    <Container>
      <MainForm>
        <h2 style={{ textAlign: 'center' }}>Login</h2>

        <DefaultInput
          type="email"
          placeholder="Email"
          icon={<Mail size={20} />}
        />

        <DefaultInput
          type="password"
          placeholder="Senha"
          icon={<Lock size={20} />}
        />

        <DefaultButton type="submit">
          Entrar
        </DefaultButton>
      </MainForm>
    </Container>
  );
}

export default App;