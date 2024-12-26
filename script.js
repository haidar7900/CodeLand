function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const block = document.getElementById(data);
    event.target.appendChild(block.cloneNode(true));
}

function runCode() {
    const dropzone = document.querySelector(".dropzone");
    const blocks = dropzone.querySelectorAll(".block");
    let output = "النتيجة: ";

    blocks.forEach(block => {
        switch (block.id) {
            case "block1":
                output += "تحرك للأمام ➡️ ";
                break;
            case "block2":
                output += "استدر يميناً 🔄 ";
                break;
            case "block3":
                output += "استدر يساراً 🔄 ";
                break;
        }
    });

    const outputDiv = document.getElementById("output");
    outputDiv.style.display = "block";
    outputDiv.textContent = output || "لم يتم إضافة أي كتل!";
}
