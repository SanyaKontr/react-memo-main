import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Leaderboard } from "../../components/Leaderboard/Leaderboard";
import styles from "./LeaderboardPage.module.css";

export function LeaderboardPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Лидерборд</h1>
        <Button children={"Начать игру"} onClick={() => navigate("/")} />
      </div>
      <Leaderboard />
    </>
  );
}
