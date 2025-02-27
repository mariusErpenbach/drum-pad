"use client";
import { useEffect } from "react";
export default function DrumMachine() {

    const handleKeyPress = (event) => {
      
        const key = event.key.toUpperCase();  // always work with capitals
        const audioElement = document.getElementById(`pad-${key}-Audio`);
        if (audioElement) {
          audioElement.play();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        // clean up before leaving.
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, []);

    return (
    <div id="drum-machine">
      <div id="display"></div>
      <div
        id="pad-Q"
        className="drum-pad"
        onClick={() => document.getElementById("pad-Q-Audio").play()}
      >
        Q<audio id="pad-Q-Audio" className="clip" src="Cev_H2.mp3"></audio>
      </div>
      <div
        id="pad-W"
        className="drum-pad"
        onClick={() => document.getElementById("pad-W-Audio").play()}
      >
        W<audio id="pad-W-Audio" className="clip" src="Dsc_Oh.mp3"></audio>
      </div>
      <div
        id="pad-E"
        className="drum-pad"
        onClick={() => document.getElementById("pad-E-Audio").play()}
      >
        E<audio id="pad-E-Audio" className="clip" src="Heater-1.mp3"></audio>
      </div>
      <div
        id="pad-A"
        className="drum-pad"
        onClick={() => document.getElementById("pad-A-Audio").play()}
      >
        A<audio id="pad-A-Audio" className="clip" src="Heater-2.mp3"></audio>
      </div>
      <div
        id="pad-S"
        className="drum-pad"
        onClick={() => document.getElementById("pad-S-Audio").play()}
      >
        S<audio id="pad-S-Audio" className="clip" src="Heater-3.mp3"></audio>
      </div>
      <div
        id="pad-D"
        className="drum-pad"
        onClick={() => document.getElementById("pad-D-Audio").play()}
      >
        D<audio id="pad-D-Audio" className="clip" src="Heater-4_1.mp3"></audio>
      </div>
      <div
        id="pad-Z"
        className="drum-pad"
        onClick={() => document.getElementById("pad-Z-Audio").play()}
      >
        Z<audio id="pad-Z-Audio" className="clip" src="Heater-6.mp3"></audio>
      </div>
      <div
        id="pad-X"
        className="drum-pad"
        onClick={() => document.getElementById("pad-X-Audio").play()}
      >
        X<audio id="pad-X-Audio" className="clip" src="Kick_n_Hat.mp3"></audio>
      </div>
      <div
        id="pad-C"
        className="drum-pad"
        onClick={() => document.getElementById("pad-C-Audio").play()}
      >
        C<audio id="pad-C-Audio" className="clip" src="RP4_KICK_1.mp3"></audio>
      </div>
    </div>
  );
}
