import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const About = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const { Engine, World, Bodies, Mouse, MouseConstraint } = Matter;

        const engine = Engine.create();
        const world = engine.world;

        // Create a canvas context
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Add walls to the world
        const ground = Bodies.rectangle(canvas.width / 2, canvas.height, canvas.width, 60, { isStatic: true });
        const leftWall = Bodies.rectangle(0, canvas.height / 2, 10, canvas.height, { isStatic: true });
        const rightWall = Bodies.rectangle(canvas.width, canvas.height / 2, 10, canvas.height, { isStatic: true });

        World.add(world, [ground, leftWall, rightWall]);

        // Create a falling object
        const fallingObject = Bodies.rectangle(canvas.width / 2, 0, 80, 80);
        World.add(world, fallingObject);

        // Create draggable titles
        const titles = [

            Bodies.rectangle(canvas.width / 2, 100, 200, 40, { isStatic: false }),
            Bodies.rectangle(canvas.width / 3, 300, 200, 40, { isStatic: false }),
            Bodies.rectangle(canvas.width / 4, 300, 200, 40, { isStatic: false }),
            Bodies.rectangle(canvas.width / 5, 300, 200, 40, { isStatic: false }),
            Bodies.rectangle(canvas.width / 5, 300, 200, 40, { isStatic: false }),
            Bodies.rectangle(canvas.width / 6, 300, 200, 40, { isStatic: false }),
        ];

        // Add titles to the world
        World.add(world, titles);

        // Mouse interaction
        const mouse = Mouse.create(canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        World.add(world, mouseConstraint);

        Matter.Engine.run(engine);

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.textAlign = 'center';
            titles.forEach(title => {
                var text = 'Hello, World!';
                var fontSize = 24;
                var fontFamily = 'Arial';
                var textColor = 'white';
                var bgColor = '#455DFF';

                    ctx.font = 24 + 'px ' + 'Syne' + 700;

                var textWidth = ctx.measureText(text).width;
                var textHeight = fontSize;

                var rectWidth = textWidth + 20;
                var rectHeight = textHeight + 10;

                let a = title.position.x - 80;
                let b = title.position.y - 25;

                ctx.fillStyle = bgColor;
                roundRect(ctx, a, b, rectWidth, rectHeight, 10);
                ctx.fill();

                ctx.fillStyle = textColor;

                ctx.fillText(text, title.position.x, title.position.y); // Adjusted text position

            });

            requestAnimationFrame(render);
        };

        render();

        function roundRect(ctx, x, y, width, height, radius) {
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.arcTo(x + width, y, x + width, y + height, radius);
            ctx.arcTo(x + width, y + height, x, y + height, radius);
            ctx.arcTo(x, y + height, x, y, radius);
            ctx.arcTo(x, y, x + width, y, radius);
            ctx.closePath();
        }

        // Cleanup
        return () => {
            Matter.World.clear(world);
            Matter.Engine.clear(engine);
        };
    }, []);

    return <canvas ref={canvasRef} width={1920} height={600} />;
};

export default About;