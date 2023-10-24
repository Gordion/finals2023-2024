import menu from "../images/menu.png";
export default function Touroute() {
  return (
    <section className="touroute">
      <div className="drag-title">
        Для визначення кращого місця або маршруту, виберіть ваші пріоритети в
        списку нижче
      </div>
      <div className="drag-list">
        <div className="draggable">
          <img className="drag-icon" src={menu} />
          Ліси
        </div>
        <div className="draggable">
          <img className="drag-icon" src={menu} /> Гори
        </div>
        <div className="draggable">
          <img className="drag-icon" src={menu} />
          Озера
        </div>
        <div className="draggable">
          <img className="drag-icon" src={menu} />
          Тварини
        </div>
        {/* <p className="drag-result">
          Вам найбільше підходить маршрут <span>"Музей Природи Розточчя"</span>
        </p> */}
      </div>
      <div className="drag-priority">
        <div>
          <div className="number">1</div>
          <div className="highest priority">
            {/* <div className="draggable">
              <img className="drag-icon" src={menu} />
              Тварини
            </div> */}
          </div>
        </div>
        <div>
          <div className="number">2</div>
          <div className="high priority">
            {/* <div className="draggable">
              <img className="drag-icon" src={menu} />
              Ліси
            </div> */}
          </div>
        </div>
        <div>
          <div className="number">3</div>
          <div className="medium priority">
            {/* <div className="draggable">
              <img className="drag-icon" src={menu} />
              Гори
            </div> */}
          </div>
        </div>
        <div>
          <div className="number">4</div>
          <div className="low priority">
            {/* <div className="draggable">
              <img className="drag-icon" src={menu} />
              Озера
            </div> */}
          </div>
        </div>
        <div>
          <div className="number">5</div>
          <div className="zero priority"></div>
        </div>
      </div>
      <div className="drag-button">Визначити</div>
    </section>
  );
}
