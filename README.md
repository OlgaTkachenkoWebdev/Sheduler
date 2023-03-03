# Interview Scheduler
**Interview Scheduler** is a simple, single-page project, that allows user to schedule interview with available interviewers. User can choose day, time slot and interviewer. Also, it shows how many available spots are left, allows edit and delete appointments.

## Technical Specifications

The Interview Scheduler project has been tested with `Node v12.22.x (Vagrant & WSL)` and `v15.14.0 (M1)` and may not work with a newer version. Please ensure that you are using this version of node. You can use Node Version Manager (nvm)to switch to `v12.22.x (Vagrant & WSL)` or `v15.14.0 (M1)` of Node.
* React
* Webpack, Babel
* Axios
* Storybook, Webpack Dev Server, Jest, Testing Library

The Scheduler client application created using `Create React App. Express` is the basis for the Scheduler API server application.

Both servers run concurrently; requests are proxied from the Webpack development server to the API server.
### Dependencies
* axios
* @testing-library/react-hooks
* react-test-renderer

## Getting started
1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
4. Running Webpack Development Server `npm start`
5. Running Jest Test Framework `npm test`
6. Running Storybook Visual Testbed `npm run storybook`
## Screenshots
![Main page](https://github.com/woodenonesie/Sheduler/blob/master/Docs/Main%20page.jpg?raw=true)
![Creating appointment](https://github.com/woodenonesie/Sheduler/blob/master/Docs/Creating%20appointment.jpg?raw=true)
![Deleting appointment](https://github.com/woodenonesie/Sheduler/blob/master/Docs/Delete%20confirmation.jpg?raw=true)
![Error message](https://github.com/woodenonesie/Sheduler/blob/master/Docs/Error.jpg?raw=true)
