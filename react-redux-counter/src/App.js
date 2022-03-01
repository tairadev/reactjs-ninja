import Counters from './components/counters';

function App({ store }) {
  return (
    <div className='App'>
      <Counters counters={store} />
    </div>
  );
}

export default App;
