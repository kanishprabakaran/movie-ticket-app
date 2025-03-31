### 🎩 Movie Ticket App

A web-based movie ticket booking application that allows users to browse movies, select showtimes, and book tickets seamlessly.

## 🚀 Features
- 🎬 Browse available movies and showtimes  
- 🏷️ Select seats and book tickets  
- 💳 Secure payment integration  
- 🐜 View booking history  
- 👥 User authentication and profile management  

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT  
- **Deployment:** Hosted on GCP/AWS  

## 📌 Installation
1. **Clone the Repository**  
   ```sh
   git clone https://github.com/kanishprabakaran/movie-ticket-app.git
   cd movie-ticket-app
   ```

2. **Install Dependencies**  
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file and add the required configurations like database URI and API keys.

4. **Run the Application**  
   ```sh
   npm start
   ```

5. **Access the App**  
   Open `http://localhost:3000` in your browser.

## 📷 Screenshots
_Add screenshots of the app here if available._

## 📚 API Endpoints
| Method | Endpoint          | Description              |
|--------|------------------|--------------------------|
| GET    | `/movies`        | Fetch all movies         |
| GET    | `/movies/:id`    | Get movie details        |
| POST   | `/bookings`      | Create a booking         |
| GET    | `/bookings/:id`  | View booking details     |

## 🏗️ Future Enhancements
- 🎟️ QR Code-based ticket verification  
- 🌍 Multi-language support  
- 🔔 Email/SMS notifications  

## 🤝 Contributing
Feel free to submit issues or create pull requests to enhance this project!

