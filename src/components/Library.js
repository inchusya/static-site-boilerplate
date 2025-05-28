import { Link } from "react-router-dom";
import libraryData from "./javascript/libraryData";

const Library = () => {
  return (
    <div>

    
    <div className="so_manualpage">
      <div className="o_manualpageleft" >
      <h1>Библиотека</h1>
      <p>В этом каталоге представлены научные постеры, которые визуально и наглядно демонстрируют результаты актуальных исследований в различных областях науки. Каждый постер структурирован так, чтобы легко восприниматься аудиторией, сочетая краткий текст с инфографикой, диаграммами и визуальными данными.</p>
      </div>
      </div>

<div className="so_manualhome">


      
      <div className="manual-cards">
        {Object.entries(libraryData).map(([posterId, poster]) => (
          <Link to={`/library/${posterId}`} key={posterId} className="poster-card">
            <img src={poster.image} alt={poster.title} />
            <h3>{poster.title}</h3>
          </Link>
        ))}
      </div>
    </div>
    
    </div>
  );
};

export default Library;
