Rive({
    locateFile: (file) => 'https://unpkg.com/rive-canvas@0.7.1/' + file,
  }).then((rive) => {
    const req = new Request('/space_camp.riv');
    fetch(req).then((res) => {
    return res.arrayBuffer();
    }).then((buf) => {
    // we've got the raw bytes of the animation,
    // let's load them into a Rive file
        const file = rive.load(new Uint8Array(buf));
        const artboard = file.defaultArtboard();
        const myAnim = artboard.animationByName("loop");
        const myAnimInstance = new rive.LinearAnimationInstance(myAnim);
        const canvas = document.getElementById("riveCanvas");
        const ctx = canvas.getContext('2d');
        const renderer = new rive.CanvasRenderer(ctx);
        canvas.height=window.innerHeight;
        canvas.width = window.innerWidth;
        let lastTime = 0
        function draw(time) {
            if (!lastTime) {
              lastTime = time;
            }
            const elapsedTime = (time - lastTime) / 1000;
            lastTime = time;
          
            myAnimInstance.advance(elapsedTime); 
            myAnimInstance.apply(artboard, 1.0);
            artboard.advance(elapsedTime);
          
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            renderer.align(rive.Fit.contain, rive.Alignment.center, {
              minX: 0,
              minY: 0,
              maxX: canvas.width,
              maxY: canvas.height
            }, artboard.bounds);
            artboard.draw(renderer);
            ctx.restore();
          
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw)
    })
});
