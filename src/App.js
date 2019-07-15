import React, { useState } from "react";
import "./App.css";
import TopRow from "./TopRow.js";
import BottomRow from "./BottomRow.js";
import Buttons from "./Buttons.js";

function App() {
    const [home, homeScore] = useState(0);
    const [away, awayScore] = useState(0);

    return ( 
        <div className = "container">
            <section className = "scoreboard">
                <TopRow home={home} away={away} />
                <BottomRow />
            </section>
            <Buttons
                home={home}
                away={away}
                homeScore={homeScore}
                awayScore={awayScore}
            />
        </div>
    );
}

export default App;
