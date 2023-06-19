import './App.css';
import go from './images/go.png';
import banana from './images/banana.png';
import bananaSmoothie from './images/bananaSmoothie.png';
import bananaMilk from './images/bananaMilk.png';
import ItemCard from './components/ItemCard';

function wheelSelect(e) {
  if (e.deltaY < 0) {
    window.scrollBy(0, -window.innerHeight)
  }
}

function App() {
  return (
    <div className="App">
      <section className="intro">
        <h1 className='title'>바나나 우유 사주세요</h1>
        <img src={go} width="180px" alt="" onClick={() => window.scrollBy(0, window.innerHeight * 2)} />
      </section>
      <div className='flex'>
      <section className="select" onWheel={wheelSelect}>
        <h1 className='title'>종류를 선택하세요</h1>
        <div className='type-container'>
          <ItemCard image={bananaMilk}>
            바나나 우유
          </ItemCard>
          <ItemCard image={banana}>
            신선한 바나나
          </ItemCard>
          <ItemCard image={bananaSmoothie}>
            망고 바나나 스무디
          </ItemCard>
        </div>
        {/* <div className="next" onClick={() => window.scrollBy(window.innerWidth,0)}>다음</div> */}
      </section>
      </div>
    </div>
  );
}

export default App;
