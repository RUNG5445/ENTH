let isEnglishMode = false;
const inputTextArea = document.getElementById("inputTextArea");
const outputTextArea = document.getElementById("outputTextArea");
const copyButton = document.getElementById("copyButton");
const toggleButton = document.getElementById("toggleButton");

function main() {
    document.getElementById("inputTextArea").value = "";
    document.getElementById("outputTextArea").value = "";
    toggleInputMode();
}

main();

function toggleInputMode() {
    const inputTextArea = document.getElementById("inputTextArea");
    const outputTextArea = document.getElementById("outputTextArea");

    if (!isEnglishMode) {
        inputTextArea.placeholder = "ป้อนข้อความภาษาอังกฤษที่นี่....";
        outputTextArea.placeholder = "Thai text will appear here...";
        toggleButton.textContent = "เปลี่ยนข้อความเป็นภาษาไทย";
    } else {
        inputTextArea.placeholder = "ป้อนข้อความภาษาไทยที่นี่...";
        outputTextArea.placeholder = "English text will appear here...";
        toggleButton.textContent = "เปลี่ยนข้อความเป็นภาษาอังกฤษ";
    }
    isEnglishMode = !isEnglishMode;
    const temp = inputTextArea.value;
    inputTextArea.value = outputTextArea.value;
    outputTextArea.value = mapEnglishToThai(temp);
}
function clearTextArea() {
    document.getElementById("inputTextArea").value = "";
    document.getElementById("outputTextArea").value = "";
}

function mapEnglishToThai(englishText) {
    const englishToThaiMap = {
        1: "ๅ",
        "!": "+",
        "@": "๑",
        2: "/",
        3: "-",
        "#": "๒",
        4: "ภ",
        $: "๓",
        5: "ถ",
        "%": "๔",
        6: "ุ",
        "^": "ู",
        7: "ึ",
        "&": "฿",
        8: "ค",
        "*": "๕",
        9: "ต",
        "(": "๖",
        0: "จ",
        ")": "๗",
        "-": "ข",
        _: "๘",
        "=": "ช",
        "+": "๙",
        q: "ๆ",
        Q: "๐",
        w: "ไ",
        W: '"',
        e: "ำ",
        E: "ฎ",
        r: "พ",
        R: "ฑ",
        t: "ะ",
        T: "ธ",
        y: "ั",
        Y: "ํ",
        u: "ี",
        U: "๊",
        i: "ร",
        I: "ณ",
        o: "น",
        O: "ฯ",
        p: "ย",
        P: "ญ",
        "[": "บ",
        "{": "ฐ",
        "]": "ล",
        "}": "|",
        "\\": "ฃ",
        "|": "ฅ",
        a: "ฟ",
        A: "ฤ",
        s: "ห",
        S: "ฆ",
        d: "ก",
        D: "ฏ",
        f: "ด",
        F: "โ",
        g: "เ",
        G: "ฌ",
        h: "้",
        H: "็",
        j: "่",
        J: "๋",
        k: "า",
        K: "ษ",
        l: "ส",
        L: "ศ",
        ";": "ว",
        ":": "ซ",
        "'": "ง",
        '"': ".",
        z: "ผ",
        Z: "(",
        x: "ป",
        X: ")",
        c: "แ",
        C: "ฉ",
        v: "อ",
        V: "ฮ",
        b: "ิ",
        B: "ฺ",
        n: "ท",
        N: "์",
        m: "ม",
        M: "?",
        ",": "ฒ",
        "<": "ใ",
        ".": "ฬ",
        ">": "ฝ",
        "/": "ฦ",
        "?": "ฦ",
    };

    const thaiToEnglishMap = {
        ๅ: "1",
        "+": "!",
        "๑": "@",
        "/": "2",
        "-": "3",
        "๒": "#",
        ภ: "4",
        "๓": "$",
        ถ: "5",
        "๔": "%",
        "ุ": "6",
        "ู": "^",
        "ึ": "7",
        "฿": "&",
        ค: "8",
        "๕": "*",
        ต: "9",
        "๖": "(",
        จ: "0",
        "๗": ")",
        ข: "-",
        "๘": "_",
        ช: "=",
        "๙": "+",
        ๆ: "q",
        "๐": "Q",
        ไ: "w",
        '"': "W",
        ำ: "e",
        ฎ: "E",
        พ: "r",
        ฑ: "R",
        ะ: "t",
        ธ: "T",
        "ั": "y",
        "ํ": "Y",
        "ี": "u",
        "๊": "U",
        ร: "i",
        ณ: "I",
        น: "o",
        ฯ: "O",
        ย: "p",
        ญ: "P",
        บ: "[",
        ฐ: "{",
        ล: "]",
        "|": "}",
        ฃ: "\\",
        ฅ: "|",
        ฟ: "a",
        ฤ: "A",
        ห: "s",
        ฆ: "S",
        ก: "d",
        ฏ: "D",
        ด: "f",
        โ: "F",
        เ: "g",
        ฌ: "G",
        "้": "h",
        "็": "H",
        "่": "j",
        "๋": "J",
        า: "k",
        ษ: "K",
        ส: "l",
        ศ: "L",
        ว: ";",
        ซ: ":",
        ง: "'",
        ".": '"',
        ผ: "z",
        "(": "Z",
        ป: "x",
        ")": "X",
        แ: "c",
        ฉ: "C",
        อ: "v",
        ฮ: "V",
        "ิ": "b",
        "ฺ": "B",
        ท: "n",
        "์": "N",
        ม: "m",
        "?": "M",
        ฒ: ",",
        ใ: "<",
        ฬ: ".",
        ฝ: ">",
        ฦ: "/",
        ฦ: "?",
    };

    const map = isEnglishMode ? englishToThaiMap : thaiToEnglishMap;

    return englishText
        .split("")
        .map((char) => map[char] || char)
        .join("");
}

inputTextArea.addEventListener("input", function () {
    const inputText = inputTextArea.value;
    const outputText = mapEnglishToThai(inputText);
    outputTextArea.value = outputText;
});

document.addEventListener("DOMContentLoaded", function () {
    var randomDelay = Math.floor(Math.random() * 1001);

    var styleElement = document.createElement("style");
    styleElement.textContent = `
    :root {
    --animate-duration: ${randomDelay + 500}ms !important;
    --animate-delay: 1s !important;
    }
`;

    document.head.appendChild(styleElement);

    setTimeout(function () {
        $("#loadingMessage").hide();
    }, randomDelay);
});

function copyToClipboard() {
    var textarea = document.getElementById("outputTextArea");
    textarea.select();
    document.execCommand("copy");
}
