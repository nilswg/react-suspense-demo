import { Suspense } from 'react';
import { SculpturesList } from './components/SculpturesList';
import './App.css';

export default function App() {
  return (
    <Suspense fallback={<h1>Page Loading...</h1>}>
      <SculpturesList />
    </Suspense>
  );
}
