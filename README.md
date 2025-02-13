# Veebirakendus - Registration Form

This is a simple web application that includes a registration form with validation, dynamic UI changes using jQuery, and localStorage support.

## Features
- Form with **name**, **email**, and **message** fields.
- JavaScript and jQuery-based **validation** (checks if fields are filled, email format is correct).
- Displays a **confirmation message** (`#teade`) upon successful form submission.
- Changes an **image (`<img>`) source** dynamically on successful validation.
- Saves **name and email in localStorage** for autofill on next visit.
- Uses **console.log** to debug submitted data and server responses.
- Simple **CSS styling** in `style.css`.

## Installation & Usage
### 1. Prerequisites
- A modern web browser (Chrome, Firefox, Edge, etc.)
- A local web server (optional but recommended for testing, e.g., VS Code Live Server extension)

### 2. Running the Application
1. **Download the project files**
2. Open `index.html` in your browser.
3. Fill in the form and click "Saada".
4. If the inputs are valid, a confirmation message appears, and the image changes.


## Troubleshooting
- If the image doesn't load, check the **image URL** in `script.js`.
- Open **Developer Console** (`F12` > Console) to check for errors.
- If localStorage data isn't saving, ensure your **browser allows storage access**.

