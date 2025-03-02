document.getElementById('theme').addEventListener('click', function() {
    function getRandomColor() {
        const hexCode = '0123456789ABCDEF';
        let colorCode = '#';
        for (let i = 0; i < 6; i++) {
            let number = Math.random();
            let code = number * 16;
            let floor = Math.floor(code);
            colorCode += hexCode[floor];
        }
        return colorCode;
    }

    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});

