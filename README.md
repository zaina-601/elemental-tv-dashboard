# ElementalTV Sales Research Dashboard

A responsive dashboard implementation based on the ElementalTV Sales Research design. This project demonstrates modern frontend development practices, focusing on component reusability, scalability, and clean UI architecture.

**Live Demo:** [(https://elemental-tv-dashboard.vercel.app/)]

## Tech Stack

*   **Framework:** React 18 (via Vite)
*   **Styling:** Tailwind CSS (v4)
*   **Icons:** Lucide React
*   **Deployment:** Vercel

## Key Features

*   **Component-Driven Architecture:** The UI is broken down into reusable components (`StatCard`, `MetricRow`, `PlatformBar`) to ensure the codebase is **extendable** and easy to maintain.
*   **Fully Responsive:** Built with a mobile-first approach using Tailwind's grid system. It adapts seamlessly from mobile screens to large desktop monitors.
*   **Data Separation:** Data is separated from the UI logic, making it easy to integrate with a backend API in the future.
*   **Modern Design:** Includes backdrop blurs, clean typography, and pixel-perfect spacing matching the provided mockups.

## How to Run Locally

1.  **Clone the repository**
    ```bash
    git clone https://github.com/zaina-601/elemental-tv-dashboard.git
    cd elemental-tv-dashboard
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  Open your browser to localhost.

## Project Structure

src/
├── assets/ # Images and static assets
├── components/ # (Optional) Reusable UI components
├── App.jsx # Main Dashboard Layout & Logic
├── main.jsx # Entry point
└── index.css # Tailwind imports

---
