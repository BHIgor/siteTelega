
import './App.css';
import logo from '../src/images/logo.jpg'
import shag from '../src/images/1shag.png'
import shag2 from '../src/images/shag2.png'
import shag3 from '../src/images/shag3.png'
import shag4 from '../src/images/shag4.png'
import shag5 from '../src/images/shag5.png'
import shag6 from '../src/images/shag6.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div  className="title">
          <img className="logo" src={logo}></img>
        </div>
        <a className="itemTitle" href="#watch">Просмотры</a>
        <a className="itemTitle"href="#pdp">Подписчики</a>
        <a className="itemTitle"href="#price">Цена</a>
        <a className="itemTitleBot" href="http://t.me/glazaTelega_bot?start=site">Перейти в бота</a>
      </header>
      <body>
        <div className='one'>
          <div  className='oneTitle'>
          Бот для накрутки просмотров и подписчиков в телеграмме
          </div>
          <div className='subtitle'>
          Сделай актив своими руками
          </div>
          <a className="proba" href="http://t.me/glazaTelega_bot?start=site">Запустить бота в телеграмме</a>
        </div>
          <div className='two'>
            <div className='flexcolumn'>
              <div className='titletwo' id="watch">Накрутка просмотров</div>
              <div className='subtwo'>Для того чтобы накрутить просмотры на пост нужно сделать несколько шагов:</div>
            </div>
            <div className='flexrow'>
              <div className='flexcolumn'><div className='sss'>1. Перейти в раздел "👀 Накрутка просмотров" и сделать репост</div><img className='imgwatch' src={shag}></img></div>
              <div className='flexcolumn'><div className='sss'>2. Ввести количество просмотров </div><img className='imgwatch' src={shag2}></img></div>
              <div className='flexcolumn'><div className='sss'>3. Ввести время растягивания</div><img className='imgwatch' src={shag3}></img></div>
            </div>
          </div>
          <div className='three'>
            <div className='flexcolumn'>
              <div className='titletwo'  id="pdp">Накрутка Подписчиков</div>
              <div className='subtwo'>Для того чтобы накрутить подписчиков в канал нужно нужно сделать несколько шагов:</div>
            </div>
            <div className='flexrow'>
              <div className='flexcolumn'><div>1. Перейти в раздел "👥 Подписчики"</div><img className='imgwatch1' src={shag4}></img></div>
              <div className='flexcolumn'><div>2. Выбрать тип подписчиков </div><img className='imgwatch1' src={shag5}></img></div>
              <div className='flexcolumn'><div>3. Ввести ссылку на канал</div><img className='imgwatch1' src={shag6}></img></div>
            </div>
          </div>
          <div className='three'>
            <div className='flexcolumn'>
              <div className='titletwo price' id="price">Цена</div>
            </div>
            <div className='flexrow pricerow'>
              <div className='flexcolumn '><div className='subtitliPrice'>👀 Просмотры </div>
               
                <div className='subPrice'>▪️ 1 день - 100р</div>
                <div className='subPrice'>▪️ 3 дня - 250р</div>
                <div className='subPrice'>▪️ 7 дней - 500р</div>
                <div className='subPrice'>▪️ 30 дней - 1500р</div>
                <div className='subPrice'>▪️ Автопросмотры 20р/день</div>
                <div className='subPrice2'><i>Во время тарифа можно накручивать неограниченное количество постов</i></div> 
              </div>
              <div className='flexcolumn '><div className='subtitliPrice'>👥 Подписчики </div>
                <div  className='subPrice'>▪️ Быстрые 0.5р за бота</div>
                <div  className='subPrice'>▪️ Медленные 0.05р за бота</div>

              </div>
            
            </div>
          </div>
          <div className='five'>
            <div className='podarok'>🎁 Есть пробный период</div>
            <a className='goBot'href="http://t.me/glazaTelega_bot?start=site">Перейти в бота</a>
          </div>
          <div className='six'>
            <div className='podarok linok'>Ссылка на бот:<a href="http://t.me/glazaTelega_bot?start=site" > t.me/glazaTelega_bot</a></div>
         
          </div>
      </body>
    </div>
  );
}

export default App;
