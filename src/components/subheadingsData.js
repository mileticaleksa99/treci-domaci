import React from "react";
import hero from "../assets/hero.mp3";
import defeated from "../assets/defeated.mp3";
import whySoSerious from "../assets/whySoSerious.mp3";


const subheadingsData = {
    1: [
        {
            title: "Save Gotham From The Joker",
            audio: whySoSerious,
            content: (
                <>
                    <p>
                        In a high-stakes mission to rescue Gotham City from the Joker's sinister grip, Batman employs his unparalleled detective skills to unravel the clown prince of crime's elaborate scheme.
                    </p>
                    <p>
                        Racing against time, Batman navigates a treacherous maze of psychological traps and deadly challenges set by the Joker, determined to thwart his chaotic plans and bring stability back to the city.
                    </p>
                </>
            ),
        },
    ],
    2: [
        {
            title: "Save Gotham From Bane",
            audio: defeated,
            content: (
                <>
                    <p>
                        Tasked with a formidable mission to halt Bane's reign of terror, Batman delves into the shadows of Gotham to dismantle the villain's intricate network of power and influence.
                    </p>
                    <p>
                        As the city's guardian, Batman must confront Bane's immense strength and cunning intellect in a high-stakes showdown that tests not only his physical prowess but also his strategic brilliance.
                    </p>
                </>
            ),
        },

    ],
    3: [
        {
            title: "Save Gotham From Two Face",
            audio: hero,
            content: (
                <>
                    <p>
                        In a critical mission to halt Two-Face's rampage, Batman navigates the dual nature of the criminal's unpredictable actions, employing his expertise in psychology to anticipate and counteract his every move.
                    </p>
                    <p>
                        As Gotham's protector, Batman faces a moral dilemma in his pursuit to save Harvey Dent from the grip of his alter ego, all while striving to bring an end to Two-Face's reign of chaos and restore balance to the city.
                    </p>
                </>
            ),
        }
    ],
};

export default subheadingsData;