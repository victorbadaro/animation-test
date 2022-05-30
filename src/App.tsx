import { Container } from './components/Container';
import { FabButton } from './components/FabButton';
import './styles/global.css';

export function App() {
  return (
    <Container>
      <FabButton>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
      </FabButton>
    </Container>
  );
}