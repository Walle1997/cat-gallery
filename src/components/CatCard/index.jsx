import React from 'react';
import { Card, CatImage, CatInfo } from './styles';

const getRandomCatTitle = () => {
  const titles = [
    "Мурзик особой национальности",
    "Дворовый аристократ",
    "Просто хороший котик",
    "Без паспорта, но с харизмой",
    "Мистер Вселенная",
    "Тайный агент Мяу",
    "Кот без границ",
    "Местный лежебока",
    "Серьёзный мурлыка",
    "Пушистый философ",
    "Диванный захватчик",
    "Хвостатый сфинкс",
    "Усатый триумфатор",
    "Кот-невидимка",
    "Великий мышелов"
  ];
  return titles[Math.floor(Math.random() * titles.length)];
};

const getRandomOrigin = () => {
  const origins = [
    "Происхождение: тайна",
    "Родина: диван",
    "Вывезен из подвала",
    "Местный уроженец",
    "Гражданин мира",
    "Из глубин интернета",
    "Прибыл на метеорите"
  ];
  return origins[Math.floor(Math.random() * origins.length)];
};

export default function CatCard({ cat }) {
  return (
    <Card>
      <CatImage src={cat.url} alt="Котик" />
      <CatInfo>
        {cat.breeds?.[0] ? (
          <>
            <h3>{cat.breeds[0].name}</h3>
            <p>{cat.breeds[0].origin || "Происхождение неизвестно"}</p>
          </>
        ) : (
          <>
            <h3>{getRandomCatTitle()}</h3>
            <p>{getRandomOrigin()}</p>
          </>
        )}
      </CatInfo>
    </Card>
  );
}