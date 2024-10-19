# This file is to keep track of the setup steps that is needed to get started with a REACT NODE project

## *PLEASE NOTE*: **THESE ARE INSTRUCTIONS FOR AN EMPTY DIRECTORY WITH NO FILES**

## 1. Installing Node JS

Installation Link: https://nodejs.org/en/ (stable version recommended. As of writing, version installed on MacOS: node-v20.18.0)

Once installed, verify installation by opening terminal and running:
```
node -v
```
It should look like:
```
(base) reuelsam@Reuels-MacBook-Pro ResumeWebsite2024 % node -v
v20.18.0
(base) reuelsam@Reuels-MacBook-Pro ResumeWebsite2024 % 
```

## 2. Installing React JS (Using Vite - modern replacement for Create-React-App)

In the terminal, run the following: 
```
npm create vite@latest react-frontend
```
**NOTE**: 'react-frontend' is the name of the project I've picked. Any name can be used here

Select a framework > React
Select a variant > JavaScript (you could also take SWC but not really needed. For the purposes of this project, it's not going to be used)

```
(base) reuelsam@Reuels-MacBook-Pro ResumeWebsite2024 % npm create vite@latest react-frontend
Need to install the following packages:
create-vite@5.5.3
Ok to proceed? (y) y


> npx
> create-vite react-frontend

✔ Select a framework: › React
✔ Select a variant: › JavaScript

Scaffolding project in /Users/reuelsam/Documents/ComputerScience/ResumeWebsite/ResumeWebsite2024/react-frontend...

Done. Now run:

  cd react-frontend
  npm install
  npm run dev

npm notice
npm notice New minor version of npm available! 10.8.2 -> 10.9.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.9.0
npm notice To update run: npm install -g npm@10.9.0
npm notice
(base) reuelsam@Reuels-MacBook-Pro ResumeWebsite2024 % 
```

To complete the setup, `cd` into the new project folder (react-frontend) and install the node modules (this takes time):
```
(base) reuelsam@Reuels-MacBook-Pro ResumeWebsite2024 % cd react-frontend 
(base) reuelsam@Reuels-MacBook-Pro react-frontend % npm install

added 258 packages, and audited 259 packages in 10s

100 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
(base) reuelsam@Reuels-MacBook-Pro react-frontend % 
```

## 3. Running project to verify if things work:

To run your project and see the result on a webpage:
```
(base) reuelsam@Reuels-MacBook-Pro react-frontend % npm run dev

> react-frontend@0.0.0 dev
> vite


  VITE v5.4.9  ready in 250 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

The page should be up and running on: http://localhost:5173/

## Additional installations:

### 1. react-router-dom
```
npm install react-router-dom@6
```

### 2. react-bootstrap (OBSELETE, I am no longer using this)
```
npm install react-bootstrap bootstrap
```

### 3. react-icons
```
npm install react-icons
```

### 4. Install grommet
```
npm install grommet grommet-icons styled-components
```