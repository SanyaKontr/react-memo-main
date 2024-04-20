import styles from "./EndGameModal.module.css";
import { Button } from "../Button/Button";
import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { postUserScore } from "../../api";
import { useSelector } from "react-redux";

export function EndGameModal({
  isLeader,
  isWon,
  gameDurationSeconds,
  gameDurationMinutes,
  onClick,
  withoutSuperpowers,
}) {
  const [userName, setUserName] = useState("");

  const handleNameChange = event => {
    setUserName(event.target.value);
  };

  const isEasyMode = useSelector(state => state.game.isEasyMode);

  function achievements() {
    const achievementsArray = [];
    if (isEasyMode === false && withoutSuperpowers === true) {
      achievementsArray.push(1, 2);
    } else if (isEasyMode === false && withoutSuperpowers === false) {
      achievementsArray.push(1);
    } else if (isEasyMode === true && withoutSuperpowers === true) {
      achievementsArray.push(2);
    }
    return achievementsArray;
  }

  const handleAddLeader = () => {
    const nameToSend = userName.trim() !== "" ? userName : "Пользователь";
    const achievementsToSend = achievements();
    postUserScore({ name: nameToSend, time: gameDurationSeconds, achievements: achievementsToSend });
    onClick();
  };

  const title = isWon ? (isLeader === true ? "Вы попали на Лидерборд!" : "Вы победили!") : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {isLeader ? (
        <input
          className={styles.inputName}
          placeholder="Пользователь"
          value={userName}
          onChange={handleNameChange}
        ></input>
      ) : (
        ""
      )}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={handleAddLeader}>Начать сначала</Button>
      {isLeader ? (
        <Link className={styles.leaderboardLink} to="/leaderboard" onClick={handleAddLeader}>
          Перейти к лидерборду
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
