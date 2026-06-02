const cassetteTapes = document.querySelectorAll(".cassette-tape");
cassetteTapes.forEach(cassetteTape => {
    const audio = cassetteTape.querySelector('audio');
    const playBtn = cassetteTape.querySelector('.play');
    const pauseBtn = cassetteTape.querySelector('.pause');
    const progressEl = cassetteTape.querySelector('.progress');
    const elapsedEl = cassetteTape.querySelector('.elapsed');
    const handleEl = cassetteTape.querySelector('.handle');
    const remainingEl = cassetteTape.querySelector('.remaining');
    const currentTimeEl = cassetteTape.querySelector('.current-time');
    const durationEl = cassetteTape.querySelector('.duration');

    const BAR_WIDTH = window.innerWidth < 640 ? 28 : 38;

    let handleVisible = true;
    handleEl.style.color = 'white';
    setInterval(function () {
        if (audio.paused) {
            handleEl.style.color = 'white';
            handleVisible = true;
        } else {
            handleVisible = !handleVisible;
            handleEl.style.color = handleVisible ? 'white' : '#030303';
        }
    }, 500);

    function formatTime(s) {
        const m = Math.floor(s / 60);
        return m + ':' + String(Math.floor(s % 60)).padStart(2, '0');
    }

    function updateProgress() {
        const duration = isFinite(audio.duration) ? audio.duration : 0;
        const current = audio.currentTime || 0;
        const ratio = duration > 0 ? current / duration : 0;
        const pos = Math.min(Math.round(ratio * (BAR_WIDTH - 1)), BAR_WIDTH - 1);
        elapsedEl.textContent = '+'.repeat(pos);
        remainingEl.textContent = '-'.repeat(BAR_WIDTH - 1 - pos);
        currentTimeEl.textContent = formatTime(current);
        durationEl.textContent = duration ? formatTime(duration) : '0:00';
    }

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateProgress);

    progressEl.addEventListener('click', function (e) {
        if (!audio.duration) return;
        const rect = progressEl.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        audio.currentTime = ratio * audio.duration;
    });

    playBtn.addEventListener('click', function () { audio.play(); });
    pauseBtn.addEventListener('click', function () { audio.pause(); });

    updateProgress();
});