const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');
const padding = 50;

function drowStaticGrid () {
    ctx.clearReact(0,0, canvas.width, canvas.height); //ластик
    ctx.strokeStyle = '#ccc'; //цвет сетки
    ctx.fillStyle = 'black'; //цвет текста
    ctx.font = '12px Arial'; //шрифт
    ctx.lineWidth = 1; //размер линии

    // цикл для горизонтальных линий
    for (let y = canvas.height - padding; y > padding; y -= 50){
        //цикл 1.точка старта. ноги циркуля на нижнюю линию минус отступ??
        //     2. работаем до тех пор, пока y>50
        //     3. шаг. после каждой линии подпрыгиваем вверх
    }
}
