## Project Overview

This project is a React Native application, likely built with Expo, that helps users browse, like, and organize books. The app uses components for navigation, displaying books, managing favorites, and handling user profiles.

---

## Main Components and Their Roles

### 1. Entry Point (`index.js`)
- Registers the root component (`App`) using Expo’s `registerRootComponent`. This ensures the app can run both in Expo Go and as a native app.

### 2. App Navigation (`App.js`)
- Sets up app navigation using `@react-navigation`:
  - **iOS:** Uses a bottom tab navigator with "Books", "Favorites", and "Profile" screens.
  - **Android:** Uses a drawer navigator for the same screens.
- Imports and connects the main screens: `Home`, `Favorites`, and `Profile`.

### 3. Home Screen (`Home.js`)
- Fetches a reading list from OpenLibrary’s API.
- Displays books in a list, showing title, author, and year.
- Allows users to "like" (favorite) books by toggling the button state with `transferBook(id)`.
- Uses React hooks (`useState`, `useEffect`) for state management and API calls.

### 4. Favorites Screen (`Favorites.js`)
- Displays the user's favorite books (though details are not shown in the code snippet, it provides a template for the Favorites view).

### 5. Profile Screen (`Profile.js`)
- Placeholder for user profile content.

### 6. Custom Button (`MyButton.js`)
- A component for rendering a stylized button, used for actions like "Like"/"Liked" in the book list.

### 7. Styles (`styles.js`)
- Central place for all the app’s styling, using `StyleSheet.create` from React Native.
- Defines styles for containers, titles, book info lines, buttons, etc.

### 8. Babel Config (`babel.config.js`)
- Configures Babel for Expo and React Native Reanimated plugin.

---

## Data Flow & Logic

- **Fetching Data:** On loading the Home screen, the app fetches the reading log from OpenLibrary and stores it in `books`.
- **Liking Books:** The `likedBooks` state keeps track of which books are liked. Tapping the Like/Liked button toggles the state.
- **Navigation:** Depending on the platform (iOS/Android), users navigate between views using tabs or a drawer.

---

## Additional Notes

- The project’s `README.md` is present but empty, so all insights are from the code itself.
- There may be additional features or logic in omitted files or external APIs, but the above explains the main structure.

---
_text generated with AI (Copilot)_
