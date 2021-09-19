import trajan from './images/trajan.jpg';
import augustus from './images/augustus.jpg';
import hadrian from './images/hadrian.jpg';
import tiberius from './images/tiberius.jpg';
import nero from './images/nero.jpg';
import marcus from './images/marcus.jpg';
import antoninus from './images/antoninus.jpg';
import caracalla from './images/caracalla.jpg';
import severus from './images/severus.jpg';
import commodus from './images/commodus.jpg';
import titus from './images/titus.jpg';
import maximinus from './images/maximinus.jpg';
import './App.css';

/* Note: the source property is for documentation of the original source. It's 
not used in the application */
const images = [
  {
    id: 1,
    name: 'trajan',
    src: trajan,
    description: 'Trajan',
    source:
      'https://upload.wikimedia.org/wikipedia/commons/9/9d/Traianus_Glyptothek_Munich_336.jpg'
  },
  {
    id: 2,
    name: 'augustus',
    src: augustus,
    description: 'Augustus',
    source:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Augustus_Bevilacqua_Glyptothek_Munich_317.jpg/800px-Augustus_Bevilacqua_Glyptothek_Munich_317.jpg'
  },
  {
    id: 3,
    name: 'hadrian',
    src: hadrian,
    description: 'Hadrian',
    source:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Bust_Hadrian_Musei_Capitolini_MC817.jpg/800px-Bust_Hadrian_Musei_Capitolini_MC817.jpg'
  },
  {
    id: 4,
    name: 'tiberius',
    src: tiberius,
    description: 'Tiberius',
    source:
      'https://upload.wikimedia.org/wikipedia/commons/5/53/Bust_Tiberius_Glyptothek_Munich_314.jpg'
  },
  {
    id: 5,
    name: 'nero',
    src: nero,
    description: 'Nero',
    source:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Nero_1.JPG/800px-Nero_1.JPG'
  },
  {
    id: 6,
    name: 'marcus_aurelius',
    src: marcus,
    description: 'Marcus Aurelius',
    source:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Marcus_Aurelius_Glyptothek_Munich.jpg/640px-Marcus_Aurelius_Glyptothek_Munich.jpg'
  },
  {
    id: 7,
    name: 'antoninus_pius',
    src: antoninus,
    description: 'Antoninus Pius',
    source:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Antoninus_Pius_Glyptothek_Munich_337.jpg/640px-Antoninus_Pius_Glyptothek_Munich_337.jpg'
  },
  {
    id: 8,
    name: 'caracalla',
    src: caracalla,
    description: 'Caracalla',
    source:
      'https://upload.wikimedia.org/wikipedia/commons/b/b5/Caracalla_Naples1.jpg'
  },
  {
    id: 9,
    name: 'septimius_severus',
    src: severus,
    description: 'Septimius Severus',
    source:
      'https://upload.wikimedia.org/wikipedia/commons/b/b6/Septimius_Severus_Glyptothek_Munich_357_cropped.jpg'
  },
  {
    id: 10,
    name: 'commodus',
    src: commodus,
    description: 'Commodus',
    source:
      'https://upload.wikimedia.org/wikipedia/commons/7/7f/Commodus_Musei_Capitolini_MC1120.jpg'
  },
  {
    id: 11,
    name: 'titus',
    src: titus,
    description: 'Titus',
    source:
      'https://upload.wikimedia.org/wikipedia/commons/9/95/Head_Titus_Glyptothek_Munich_338.jpg'
  },
  {
    id: 12,
    name: 'maximinus_thrax',
    src: maximinus,
    description: 'Maximinus Thrax',
    source:
      'https://upload.wikimedia.org/wikipedia/commons/4/4f/Maximinus_Thrax_Musei_Capitolini_MC473.jpg'
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {images.map(img => {
          return <img src={img.src} alt={img.description} />;
        })}
      </header>
    </div>
  );
}

export default App;
