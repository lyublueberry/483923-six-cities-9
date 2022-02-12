import MainScreen from '../main-screen/main-screen';

type AppScrenProps = {
  placesCount: number;
}

function App({ placesCount }: AppScrenProps): JSX.Element {
  return (
    <MainScreen placesCount={placesCount} />
  );
}
export default App;
