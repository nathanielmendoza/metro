import { PlayModes } from "./PlayModes"
import { PlaybackModes } from "./PlaybackModes"
import { Instruments } from "./Instruments";

export const PresetsLib = [
    { "isHeader": true, title: "Basic" },
    { title: "Metronome 2/4", "bpmStep": 20, "bpmRange": [100, 200], "currentBpm": 300, "playbackMode": "stop", "playMode": "by_time", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 60, "byBarInterval": 2, "constantBpmSlider": 300, "interval": 300, "track": [[2], [1]], "instrumentKey": "metronome" },

    {
        title: "Metronome 4/4",
        instrumentKey: Instruments.METRONOME.key,
        playMode: PlayModes.BY_TIME,
        byTimeInterval: 60,
        bpmStep: 20,
        bpmRange: [100, 200],
        track: [[2], [1], [1], [1]]
    },
    {
        title: "Metronome 3/4",
        instrumentKey: Instruments.METRONOME.key,
        playMode: PlayModes.BY_TIME,
        byTimeInterval: 60,
        bpmStep: 20,
        bpmRange: [100, 200],
        track: [[2], [1], [1]]
    },
    { "isHeader": true, title: "Drum Patterns" },
    {
        title: "Levee Break",
        instrumentKey: 'electrokit',
        bpmRange: [300, 400],
        track: [[0, 2], [0], [2], [], [1, 2], [], [2], [0], [2], [], [0, 2], [0], [1, 2], [], [2], []],
        playMode: PlayModes.BY_BAR,
        playbackMode: PlaybackModes.STOP,
        byTimeInterval: 5,
        byBarInterval: 10,
        stepsNum: 10,
        bpmStep: 10,
        isHidden: true
    },
    { "bpmStep": 10, "bpmRange": [300, 400], "currentBpm": 300, "playbackMode": "stop", "playMode": "by_bar", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 5, "byBarInterval": 10, "constantBpmSlider": 300, "track": [[0, 2], [], [0, 2], [], [2, 1], [], [0, 2], [], [2, 0], [], [2, 0], [], [1, 2], [], [2, 0], []], "instrumentKey": "electrokit", "title": "Basic Rock" },
    { "bpmStep": 10, "bpmRange": [300, 400], "currentBpm": 300, "playbackMode": "stop", "playMode": "by_bar", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 5, "byBarInterval": 10, "constantBpmSlider": 300, "track": [[0, 2], [], [2], [], [2, 1], [], [2], [0, 2], [2, 0], [], [0, 2], [], [1, 2], [], [2, 0], []], "instrumentKey": "electrokit", "title": "Impeach the President" },
    { "bpmStep": 10, "bpmRange": [350, 600], "currentBpm": 300, "playbackMode": "stop", "playMode": "by_time", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 60, "byBarInterval": 10, "constantBpmSlider": 300, "track": [[0, 2], [2], [0, 2], [2], [2, 1], [2], [0, 2], [3, 1], [2], [2, 1], [0, 2], [2, 1], [2, 1], [0, 3], [2], [2, 1]], "instrumentKey": "basicdrumkit", "title": "Funky Drummer" },
    { "bpmStep": 10, "bpmRange": [300, 400], "currentBpm": 300, "playbackMode": "stop", "playMode": "by_bar", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 5, "byBarInterval": 10, "constantBpmSlider": 300, "track": [[0, 2], [], [2], [], [1, 2], [], [2], [0], [2, 0], [], [0, 2], [], [1, 2], [], [2], []], "instrumentKey": "electrokit", "title": "Walk This Way" },
    { "bpmStep": 10, "bpmRange": [300, 400], "currentBpm": 300, "playbackMode": "stop", "playMode": "by_bar", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 5, "byBarInterval": 10, "constantBpmSlider": 300, "track": [[0, 2], [], [2, 0], [], [1, 2], [], [2], [], [2], [], [0, 2], [0], [1, 2], [], [2], [0]], "instrumentKey": "electrokit", "title": "It's a New Day" },
    { "bpmStep": 10, "bpmRange": [300, 400], "currentBpm": 300, "playbackMode": "stop", "playMode": "by_bar", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 5, "byBarInterval": 10, "constantBpmSlider": 300, "track": [[0], [], [], [0], [1, 2], [], [0], [], [0], [], [], [], [1, 2], [], [], []], "instrumentKey": "electrokit", "title": "The Big Beat" },
    { "bpmStep": 20, "bpmRange": [300, 500], "currentBpm": 300, "playbackMode": "stop", "playMode": "by_time", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 120, "byBarInterval": 50, "constantBpmSlider": 300, "interval": 120, "track": [[0, 2], [], [0, 2], [], [1, 2], [], [0, 2], [], [0, 2], [], [0, 2], [], [1, 2], [], [0, 2], []], "instrumentKey": "basicdrumkit", "title": "Rock" },
    { "bpmStep": 20, "bpmRange": [528, 600], "currentBpm": 300, "playbackMode": "stop", "playMode": "constant", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 120, "byBarInterval": 50, "constantBpmSlider": 600, "interval": 120, "track": [[0], [], [3], [], [1, 0], [], [3], [], [0], [2], [3], [], [1, 0], [], [0, 3], []], "instrumentKey": "basicdrumkit", "title": "Techno" },
    { "bpmStep": 20, "bpmRange": [528, 600], "currentBpm": 300, "playbackMode": "stop", "playMode": "constant", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 120, "byBarInterval": 50, "constantBpmSlider": 400, "interval": 120, "track": [[0, 2], [], [2], [], [1, 2], [], [2], [0], [2], [], [0, 2], [], [1, 2], [0], [2], [0]], "instrumentKey": "basicdrumkit", "title": "Hip Hop" },

    // Afro-Cuban
    { "isHeader": true, title: "Afro-Cuban" },
    { "bpmStep": 20, "bpmRange": [400, 600], "currentBpm": 300, "playbackMode": "stop", "playMode": "by_time", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 120, "byBarInterval": 2, "constantBpmSlider": 300, "interval": 120, "track": [[0, 1, 2], [2], [2], [0, 1, 2], [2, 0], [2], [1, 2], [0, 2], [0, 2], [2], [1, 2], [0, 2], [1, 2, 0], [2], [2], [0, 2]], "instrumentKey": "yamaha_rx5", "title": "Son Clave" },
    { "bpmStep": 20, "bpmRange": [400, 600], "currentBpm": 300, "playbackMode": "stop", "playMode": "by_time", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 120, "byBarInterval": 2, "constantBpmSlider": 300, "track": [[0, 1, 2], [2], [2], [0, 1, 2], [2, 0], [2], [2], [0, 2, 1], [0, 2], [2], [2, 1], [0, 2], [2, 0, 1], [2], [2], [0, 2]], "instrumentKey": "yamaha_rx5", "title": "Rumba" },
    { "bpmStep": 20, "bpmRange": [400, 600], "currentBpm": 300, "playbackMode": "stop", "playMode": "by_time", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 120, "byBarInterval": 2, "constantBpmSlider": 300, "track": [[0, 1, 2], [2], [2], [0, 1, 2], [2, 0], [2], [2, 1], [0, 2], [0, 2], [2], [2, 1], [0, 2], [2, 0], [2, 1], [2], [0, 2]], "instrumentKey": "yamaha_rx5", "title": "Bossa Nova" },
    { "bpmStep": 20, "bpmRange": [400, 600], "currentBpm": 300, "playbackMode": "stop", "playMode": "by_time", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 120, "byBarInterval": 2, "constantBpmSlider": 300, "track": [[0, 1, 3], [], [], [1, 3], [0], [], [1, 3], [], [0, 1], [3], [3], [1], [0], [], [0, 1], []], "instrumentKey": "yamaha_rx5", "title": "Soukous" },
    { "bpmStep": 20, "bpmRange": [400, 600], "currentBpm": 300, "playbackMode": "stop", "playMode": "by_time", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 120, "byBarInterval": 2, "constantBpmSlider": 300, "track": [[0, 3], [], [1], [1, 3], [0], [], [1, 3], [1], [0], [], [3, 1], [1], [0], [], [0, 1, 3], [1]], "instrumentKey": "yamaha_rx5", "title": "Gahu" },
    { "bpmStep": 20, "bpmRange": [400, 600], "currentBpm": 300, "playbackMode": "stop", "playMode": "by_time", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 120, "byBarInterval": 2, "constantBpmSlider": 300, "track": [[0, 3], [], [1], [1], [0, 3], [], [1, 3, 0], [1], [0], [], [3, 1], [1], [0, 3], [], [0, 1], [1]], "instrumentKey": "yamaha_rx5", "title": "Shiko" },

    // Polyrhythms
    { "isHeader": true, title: "Polyrhythms" },
    { "title": "3 over 4", "bpmStep": 20, "bpmRange": [100, 200], "currentBpm": 100, "playbackMode": "stop", "playMode": "by_time", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 60, "constantBpmSlider": 300, "track": [[1, 0, 0, 0], [0, 1, 1], [1, 1, 1, 1], [0, 0, 0, 0]], "timeSignature": 4, "instrumentKey": "basicdrumkit" },
    { "bpmStep": 20, "bpmRange": [100, 200], "currentBpm": 300, "playbackMode": "stop", "playMode": "by_time", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 60, "byBarInterval": 2, "constantBpmSlider": 300, "track": [[1, 1, 0], [0, 0, 1], [1, 1, 1, 1], [0, 0, 0]], "timeSignature": 3, "instrumentKey": "basicdrumkit", "title": "4 over 3" },
    { "bpmStep": 20, "bpmRange": [121, 359], "currentBpm": 300, "playbackMode": "stop", "playMode": "set_time", "stepsNum": 10, "exerciseTime": 1800, "bpmStepDropdownOpen": false, "byTimeInterval": 60, "byBarInterval": 2, "constantBpmSlider": 122, "track": [[1, 0, 1, 0, 1, 0], [1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0]], "timeSignature": 6, "instrumentKey": "basicdrumkit", "title": "2 over 3" },

    // ancient ones, but leave them for compaitibility
    { "isHeader": true, title: "Other" },
    { title: "Balkan 1", "bpmRange": [241, 400], "accents": [0, 2, 1, 0, 2, 1, 2], "instrument": Instruments.ELECTRO_KIT, "playMode": "by_bar", "interval": 20, "bpmStep": 30 },
    { title: "Balkan 2", "bpmRange": [293, 400], "accents": [0, 1, 2, 0, 1, 2, 1], "instrument": Instruments.TABLA, "playMode": "by_bar", "interval": 300, "bpmStep": 30 },
    { title: "Groove 1", "bpmRange": [222, 262], "accents": [0, 1, 2, 1, 2, 0, 2, 2], "instrument": Instruments.ELECTRO_KIT, "playMode": "by_time", "interval": 600, "bpmStep": 30 },
    { title: "Groove 2", "bpmRange": [222, 400], "accents": [0, 1, 0, 1, 1, 1, 0, 2], "instrument": Instruments.ELECTRO_KIT, "playMode": "by_bar", "interval": 20, "bpmStep": 30 },

];



export const InitPreset_debug = {
    "bpmStep": 50,
    "bpmRange": [
        300,
        400
    ],
    // "currentBpm": 100,
    "playbackMode": "stop",
    "playMode": PlayModes.CONSTANT,

    "exerciseTime": 60 * 30,    // 30 minutes
    "stepsNum": 30,             // 1 minutes per step
    "byTimeInterval": 5,
    "byBarInterval": 2,
    "constantBpmSlider": 300,
    "track": [[1, 1, 0, 1], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]],
    "samples": [{ instrumentKey: 'tabla', file: 'dha-slide.wav' }, { instrumentKey: 'electrokit', file: 'Kick.wav' }, { instrumentKey: 'metronome', file: 'tap.wav' }],
    "timeSignature": 4,
    "instrumentKey": Instruments.ELECTRO_KIT.key
}


export const InitPreset = {
    "bpmStep": 50,
    "bpmRange": [
        300,
        400
    ],
    "playbackMode": "stop",
    "playMode": "constant",
    "stepsNum": 10,
    "exerciseTime": 600,
    "bpmStepDropdownOpen": false,
    "byTimeInterval": 5,
    "byBarInterval": 2,
    "constantBpmSlider": 300,
    "track": [
        [
            1,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            1,
            1,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0
        ],
        [
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    ],
    "timeSignature": 16,
    "samples": [
        {
            "file": "Kick.wav",
            "instrumentKey": "basicdrumkit"
        },
        {
            "file": "Snare.wav",
            "instrumentKey": "basicdrumkit"
        },
        {
            "file": "ClosedHat.wav",
            "instrumentKey": "basicdrumkit"
        },
        {
            "file": "OpenHat.wav",
            "instrumentKey": "basicdrumkit"
        }
    ]
}
