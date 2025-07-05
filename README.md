# 🏜️ Falling Sand: A JavaScript Physics Playground

Welcome to Falling Sand, a lightweight and oddly satisfying digital zen garden built from the ground up. This project is a minimalist sand physics simulation that runs entirely in your browser with no external libraries or frameworks. Click your mouse to create falling sand particles and watch as they stack and form unique landscapes.

![A GIF showing sand particles falling and stacking in the grid.](./sand-demo.gif)

---

## ✨ Core Features

* **Simple Physics Engine**: A straightforward algorithm handles gravity and particle stacking.
* **Grid-Based Simulation**: All logic is managed in a 2D array, representing the state of every "pixel" on the canvas.
* **Zero Dependencies**: This project is intentionally built with only vanilla HTML, and JavaScript.

---

## 🛠️ The "No-Framework" Philosophy

In an ecosystem dominated by complex frameworks and libraries, Falling Sand is a deliberate exercise in fundamentals. The goal was to demonstrate a strong grasp of core web technologies without any "magic" from outside tools.

This project showcases a solid understanding of:

* **HTML5**: Structuring the application and utilizing the `<canvas>` element as the foundation for the simulation's visuals.
* **Vanilla JavaScript (ES6+)**:
    * **State Management**: Using a 2D array as the single source of truth for the entire grid's state.
    * **Rendering Loop**: Employing `requestAnimationFrame()` for efficient, non-blocking animations that work in harmony with the browser.
    * **DOM Manipulation & Events**: Capturing user mouse input to make the simulation interactive.
    * **Canvas API**: Directly drawing pixels and shapes onto the canvas to visually represent the state of the simulation data.

By focusing on these foundational skills, this project proves the ability to build dynamic and interactive web applications from first principles.

---

## ⚙️ How to Run Locally

The beauty of a zero-dependency project is its simplicity.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
2.  **Navigate to the directory:**
    ```bash
    cd your-repo-name
    ```
3.  **Open the `index.html` file** in your favorite web browser.

That's it! No `npm install`, build steps, or local servers are required.

---

## 🔮 Future Goals

* **New Particle Types**: Introduce elements like water, stone, or fire with unique behaviors.
* **Enhanced Physics**: Allow sand particles to slide and form more natural looking piles.
* **Performance Optimization**: Refactor the rendering logic to handle much larger grid sizes efficiently.
* **Color Palettes**: Add UI controls to change the colors of the sand and background.
