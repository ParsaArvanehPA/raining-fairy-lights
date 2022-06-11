const FAIRY_BALL_COUNT = 80;

for (let i = 0; i < FAIRY_BALL_COUNT; i++) {
    const ball = document.createElement('i');
    ball.style.setProperty('--i', `${Math.round(Math.random() * 30)}`);
    document.body.appendChild(ball);
}
