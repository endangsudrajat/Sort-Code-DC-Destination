const dataDC = [
    { no: 1, name: "Cakung 2 DC", codes: ["AC","AD","AH","AN","BK","BY","BZ","M","O"] },
    { no: 2, name: "Cakung DC", codes: ["A","IDA"] },
    { no: 3, name: "Cikarang Barat RDC - Rungkut", codes: ["N"] },
    { no: 4, name: "Depok DC", codes: ["AJ", "BQ"] },
    { no: 5, name: "Sunter DC", codes: ["F"] },
    { no: 6, name: "Tapos DC", codes: ["AB","AL","AM","BW","CH","L"] },
    { no: 7, name: "Cakung 4 DC", codes: ["CE"] },
    { no: 8, name: "Bekasi DC", codes: ["AP","BD","BN","BV","CD","EXP-WH-01","H","I","J","P","Q","X","Y"] },
    { no: 9, name: "Bekasi DC - Lampung", codes: ["G"] },
    { no: 10, name: "Cakung RDC", codes: ["CL"] },
    { no: 11, name: "Cikarang Barat RDC", codes: ["AT","AU","CG","V","W","AE","AG","AK","AV","CI","AY"] },
    { no: 12, name: "Cikarang Barat - Benowo", codes: ["AF"] },
    { no: 13, name: "Kosambi DC (ECO)", codes: ["AO","AQ","AR","AS","AW","AX","AZ","BA","BB","BC","BE","BF","BH","BI","BR","BU","CA","CB","CF","K","R","S","T","U","Z","BG"] },
    { no: 14, name: "Kosambi DC (STD)", codes: ["I","Q","W","AA","AO","AP","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BC","BD","BE","BF","BG","BR","BU","BV","CA","CB","CF","CG","K","R","S","T","U","Z","Y","BB","BH","BI","BS"] }
];

const input = document.getElementById("userInput");
const resultBox = document.getElementById("resultBox");

input.addEventListener("input", function () {
    const value = this.value.toUpperCase().trim();
    resultBox.innerHTML = "";

    if (!value) {
        resultBox.innerHTML = "<div class='empty-text'>Hasil akan tampil di sini</div>";
        return;
    }

    let results = dataDC.filter(dc => dc.name.toUpperCase() === value);

    if (results.length === 0) {
        results = dataDC.filter(dc => dc.codes.includes(value));
    }

    if (results.length === 0) {
        results = dataDC.filter(dc => dc.name.toUpperCase().includes(value));
    }

    if (results.length === 0) {
        resultBox.innerHTML = "<div class='empty-text'>Data tidak ditemukan</div>";
        return;
    }

    results.forEach((dc, index) => {
        const container = document.createElement("div");

        container.innerHTML = `
            <div class="dc-name">${dc.name}</div>
            <div class="badge">Station Number: ${dc.no}</div>
            <div class="codes-wrapper">
                ${dc.codes.map(code => `<div class="code-chip">${code}</div>`).join("")}
            </div>
        `;

        resultBox.appendChild(container);

        if (index < results.length - 1) {
            resultBox.appendChild(document.createElement("hr"));
        }
    });
});

function hapusData() {
    input.value = "";
    resultBox.innerHTML = "<div class='empty-text'>Hasil akan tampil di sini</div>";
}
