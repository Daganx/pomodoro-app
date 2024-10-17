Pomodoro Timer App
==================

Description
-----------

This is a **Pomodoro Timer** application built with **React**. The Pomodoro Technique is a time management method where work is divided into intervals, traditionally 25 minutes of work followed by 5 minutes of break. After 4 cycles of work and short breaks, a longer break (15 minutes) is taken. This app automates the process by allowing users to track their Pomodoro sessions and breaks efficiently.

### Features

-   **25-minute work sessions**: Automatically starts with a countdown of 25 minutes for work.
-   **5-minute break**: After each work session, a 5-minute break countdown starts.
-   **4-session cycles**: After 4 work sessions, a longer 15-minute break begins.
-   **Cycle automation**: Automatically transitions between work sessions and breaks.
-   **Modals**: Displays a modal to indicate when a session or break is complete, with options to start the next phase.

* * * * *

Installation
------------

### Prerequisites

Make sure you have the following installed:

-   [Node.js](https://nodejs.org/) (v12+ recommended)
-   [npm](https://www.npmjs.com/) (Node Package Manager) or [yarn](https://yarnpkg.com/)

### Setup

1.  **Clone the repository**:

    bash

    `git clone https://github.com/daganx/pomodoro-app.git
    cd pomodoro-app`

2.  **Install dependencies**:

    If you use `npm`:

    bash

    `npm install`

    Or if you use `yarn`:

    bash

    `yarn install`

3.  **Start the app**:

    If you use `npm`:

    bash

    `npm start`

    Or if you use `yarn`:

    bash

    `yarn start`

    The app should now be running on http://localhost:3000.

* * * * *

Usage
-----

1.  **Start the Timer**: Click on the "Démarrer" button to start the 25-minute work session.
2.  **Pause the Timer**: You can pause the timer anytime by clicking on the "Pause" button.
3.  **Reset the Timer**: To reset the timer to its initial state, click the "Réinitialiser" button.
4.  **Switch Sessions**: When the session (either work or break) ends, a modal will appear allowing you to move to the next session.

The Pomodoro cycle follows this pattern:

1.  **Work** (25 minutes)
2.  **Break** (5 minutes)
3.  **Repeat** for 4 cycles
4.  **Long Break** (15 minutes) after every 4 work sessions.

* * * * *

Future Improvements
-------------------

-   **Custom Timer Settings**: Allow users to customize work/break durations.
-   **Session History**: Track and display previous Pomodoro sessions.
-   **Sound Notifications**: Play a sound when a session ends.
-   **Dark Mode**: Add a dark mode for better accessibility.

* * * * *

Contributing
------------

Feel free to contribute to this project by submitting issues or pull requests. Contributions, suggestions, and improvements are welcome!

* * * * *

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.

* * * * *

Author
------

**Dagan Letot**

-   GitHub: [daganx](https://github.com/daganx)

* * * * *

Acknowledgments
---------------

-   The Pomodoro Technique was developed by **Francesco Cirillo**.
-   Special thanks to the **React** communities for their amazing tools and documentation.

* * * * *