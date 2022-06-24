import styles from './app.module.scss';
import { MainScreen } from './screens/mainScreen';

function App() {
  return (
    <div className={styles.App}>
      <MainScreen />
    </div>
  );
}

export default App;
