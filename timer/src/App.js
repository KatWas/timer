import Timer from './components/Timer/Timer.js';
import Button from './components/Button/Button.js';
import Container from '../src/components/Container/Container';

// const Stoper= () => {
// const [actualTimer, setTime ] = useState(0, null);

const App = () => {
  return (
    <Container>
      <div>
        <h1>To jest Timer</h1>
        <Timer />
      </div>
    </Container>
  );
};

export default App;