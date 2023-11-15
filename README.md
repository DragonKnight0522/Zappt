# Zappt Project

Welcome to the repository for our Zappt project. Here you will find detailed information on how to install, start, and develop this project.

---

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

Firstly, you need to have Node.js and npm (Node Package Manager) installed on your system. If not, download and install [Node.js and npm](https://nodejs.org/en/download/).

### Prerequisites

The first step is to clone this repository into your local system.

Open Terminal.

Change the current working directory to the location where you want the cloned directory to be made.

Now, you can clone the repo using the following command:

```git
git clone https://github.com/godit-ai/Zappt.git
```

### Installation

Navigate to the project directory:

```bash
cd Zappt
```

In case you don't have the required node modules installed, run the following command:

```bash
npm install && npm --prefix frontend install
```

This script will install both frontend and backend packages required by the project.

---

## Running the Project

Once you have set up the project, you can build it and start it with the following command:

```bash
npm run build
```

```bash
npm start
```

This will concurrently run both frontend and backend servers.

### Development Commands

If you are in developer mode, use these commands:

-   For running the whole project (both frontend and backend):

```bash
npm run dev
```

-   For only running the frontend:

```bash
npm run frontend:dev
```

-   For only running the backend:

```bash
npm run backend:dev
```

---

Happy coding!
