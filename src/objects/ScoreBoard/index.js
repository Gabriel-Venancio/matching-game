import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import "./styles.css";

function ScoreBoard() {
    return `
        <header class="score-board">
            ${PlayerName("Player 1")}
            ${VsPlayer("vs")}
            ${PlayerName("Player 2")}
        </header>
    `;
}

export default ScoreBoard;