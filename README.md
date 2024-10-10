# Disney+ Clone Project

This is a Disney+ clone built with **React**, utilizing **Firebase Authentication**, **Firestore**, and **Redux** for state management. The project is styled using **Tailwind CSS** for a modern, responsive design.

## Getting Started

To get this project running on your local machine, follow the steps below.

### Prerequisites

1. Make sure you have **Node.js** and **npm** installed. You can download them [here](https://nodejs.org/).
2. You will need a **Firebase account**. Set up your Firebase project for authentication and Firestore usage.

### Installation
#### Clone this repository:

   ```bash
   
   git clone https://github.com/yourusername/disney-plus-clone.git
   cd disney-plus-clone
   
  ```
   
#### Install the required dependencies:

   ``` bash
npm install 
```

#### Firebase Configuration:

Navigate to the src/firebase.js file.
Replace the Firebase configuration with your own Firebase credentials, which you can obtain from your Firebase console.

```js
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

```
#### Setting up images and videos:

In the public folder, create two folders: images and videos.
You can download the required images and videos from this Google Drive link. [This Link](https://drive.google.com/drive/folders/13SvUkXPh7ZC1FRtp62VKFi572elZyxi8)
Place the downloaded images into the public/images folder and videos into the public/videos folder.

### Running the Project

```bash
npm start

```
