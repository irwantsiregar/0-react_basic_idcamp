import DicodingLogo from './dicoding-logo.png';

function App() {
  return (
    <div>
      <h1>Biodata Perusahaan</h1>
      <ul>
        <li>Nama : Dicoding Indonesia</li>
        <li>Bidang : Education</li>
        <li>Tagline: Decode Ideas, Discover Potential</li>
        <img src={DicodingLogo} alt="Dicoding logo" />
      </ul>
    </div>
  );
}

export default App;
