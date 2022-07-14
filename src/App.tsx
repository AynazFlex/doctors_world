import React, { FC } from "react";
import "./App.css";
import Patient from "./components/Patient";
import kid from "./images/kid.jpg";
import adult from "./images/adult.jpg";
import Info from "./components/Info";
import Symptoms from "./components/symptomsContainer/Symptoms"

const App: FC<{}> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header_title">А вдруг СМА?</h1>
        <h3 className="App-header_subtitle">Выберите, кто Ваш пациент?</h3>
      </header>
      <main className="App-main">
        <div className="App-main_patient-types">
          <Patient type="Взрослый" img={adult} />
          <Patient type="Ребенок" img={kid} />
        </div>
        <div className="App-main_info-container">
          <div className="App-main_info-container-left">
            <Info>
              Менее тяжелые формы СМА могут возникать и диагностироваться в
              зрелом возрасте.
            </Info>
            <Info>
              По сравнению с СМА у детей, СМА у взрослых может иметь более
              легкие симптомы, но без патогенетической терапии пациенты со СМА
              2-3 типа неуклонно теряют двигательные навыки.
            </Info>
            <Info>
              По сравнению с СМА в детстве, течение СМА у взрослых может быть
              более коварным и трудным для распознавания.
            </Info>
          </div>
          <div className="App-main_info-container-right">
            <Info>
              Ребенок, плохо удерживающий голову, когда ему придают сидячее
              положение, с вялыми движениями нижних конечностей или с трудом
              тянущийся к предметам, но при этом с осмысленным и ярким взглядом,
              улыбающийся и социально активный, вызывает настороженность в
              отношении наличия СМА.
            </Info>
            <Info>
              Младенцам со СМА необходимо экстренное направление к специалисту,
              ранняя диагностика и обеспечение терапией, спасающей жизнь,
              поскольку эти мотонейроны очень быстро подвергаются дегенерации
              при прогрессировании заболевания
            </Info>
          </div>
        </div>
        <div className="App-main_title">
          Сообщает ли один из ваших пациентов о следующих симптомах?{" "}
          <span>(нажмите на любую иконку и узнайте больше)</span>
        </div>
        <Symptoms type="Взрослый"/>
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
};

export default App;
