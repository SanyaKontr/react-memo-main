import { useNavigate } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setEasyMode, setCurrentLevel } from "../../store/slices";
import { Button } from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function SelectLevelPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isEasyMode = useSelector(store => store.game.isEasyMode);

  useEffect(() => {
    const savedIsEasyMode = localStorage.getItem("isEasyMode");
    if (savedIsEasyMode !== null && JSON.parse(savedIsEasyMode)) {
      dispatch(setEasyMode(true));
    }
  }, [dispatch]);

  const handleCheckboxChange = event => {
    const newValue = event.target.checked;
    dispatch(setEasyMode(newValue));
    localStorage.setItem("isEasyMode", JSON.stringify(newValue));
    console.log("облегчил");
  };
  const [choosenLevel, setChoosenLevel] = useState(null);

  const handleLevelSelect = level => {
    dispatch(setCurrentLevel(level));
    setChoosenLevel(level);
  };

  function handleStartButton() {
    if (choosenLevel !== null) {
      const linkLevel = choosenLevel * 3;
      navigate(`/game/${linkLevel}`);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={choosenLevel === 1 ? styles.choosenLevel : styles.level} onClick={() => handleLevelSelect(1)}>
            1
          </li>
          <li className={choosenLevel === 2 ? styles.choosenLevel : styles.level} onClick={() => handleLevelSelect(2)}>
            2
          </li>
          <li className={choosenLevel === 3 ? styles.choosenLevel : styles.level} onClick={() => handleLevelSelect(3)}>
            3
          </li>
        </ul>
        <label className={styles.checkboxContainer}>
          <input type="checkbox" name="checkbox-attempt" checked={isEasyMode} onChange={handleCheckboxChange} />
          <span className={styles.checkboxCustom}></span>
          Легкий режим (3 жизни)
        </label>
        <Button disabled={!choosenLevel} children={"Играть"} onClick={handleStartButton} />
        <Link className={styles.leaderboardLink} to="/leaderboard">
          Перейти к лидерборду
        </Link>
      </div>
    </div>
  );
}
