import logo from './logo.svg';
import './App.css';
import { S3Uploader} from './components/S3Uploader';
import { S3Viewer } from './components/S3Viewer';
import { useState } from 'react';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <S3Uploader></S3Uploader>
        <S3Viewer></S3Viewer>
      </header>
    </div>
  );
}

export default App;
