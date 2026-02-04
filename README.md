# Car Rental System 🚗

A Django-based web application for managing vehicle rentals, bookings, and billing.

---

## 📋 Project Overview

The **Car Rental System** is a full-stack Django web application designed to simplify vehicle rental operations. It allows users to browse available vehicles, make bookings, manage rental details, and generate bills for their rentals.

### ✨ Key Features

- 🚗 **Vehicle Management** - Browse and manage cars with images and pricing
- 📅 **Booking System** - Easy-to-use booking interface with date selection
- 💰 **Dynamic Billing** - Real-time bill calculation based on vehicle and rental duration
- 👤 **User Authentication** - Secure login/signup for customers
- 📝 **Order Tracking** - Store and manage rental orders
- 📧 **Contact Form** - Customer inquiries and feedback
- 🎨 **Responsive Design** - Mobile-friendly interface with attractive UI

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Django 4.0.4** | Web Framework |
| **Python 3.11.9** | Backend Language |
| **SQLite3** | Database |
| **Bootstrap 5** | Frontend Styling |
| **Pillow** | Image Processing |
| **HTML5/CSS3/JavaScript** | Frontend |

---

## 📦 Installation & Setup

### Prerequisites
- Python 3.11+
- pip (Python Package Manager)
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/devvratwelekar2003/car-rental-system.git
cd Car-Rental-System
```

### Step 2: Create Virtual Environment
```bash
# Windows
python -m venv env
env\Scripts\activate

# macOS/Linux
python3 -m venv env
source env/bin/activate
```

### Step 3: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 4: Configure Environment Variables
Copy `.env.example` to `.env` and update with your values:
```bash
cp .env.example .env
```

### Step 5: Apply Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### Step 6: Create Superuser (Admin)
```bash
python manage.py createsuperuser
```

### Step 7: Run Development Server
```bash
python manage.py runserver
```

Visit: `http://127.0.0.1:8000/` 🎉

---

## 🗂️ Project Structure

```
Car-Rental-System/
├── MyApp/                  # Main Django app
│   ├── models.py          # Car, Order, Contact models
│   ├── views.py           # View functions
│   ├── urls.py            # URL routing
│   └── admin.py           # Admin configuration
├── vehicles/              # Django project settings
│   ├── settings.py        # Configuration (env-based)
│   ├── urls.py            # Main URL config
│   └── wsgi.py            # WSGI application
├── templates/             # HTML templates
├── static/                # CSS, JS, Images
├── manage.py              # Django CLI
├── requirements.txt       # Python dependencies
├── .env.example           # Environment template
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

---

## 🚀 Usage

### For Customers:
1. **Sign Up/Login** - Create an account or login
2. **Browse Vehicles** - View all available cars with details and prices
3. **Select Vehicle** - Click "BOOK NOW" on any car
4. **Fill Booking Details** - Enter rental information and duration
5. **Calculate Bill** - Click "Display Bill" to see pricing
6. **Confirm Booking** - Submit to complete the rental

### For Administrators:
1. **Access Admin Panel** - Go to `/admin/` with superuser credentials
2. **Manage Vehicles** - Add, edit, or delete cars
3. **View Orders** - Track all rental bookings
4. **Manage Users** - Handle customer accounts
5. **Contact Messages** - View customer inquiries

---

## 🔒 Production Deployment

### Pre-Deployment Checklist

Before pushing to GitHub:

✅ **Set Environment Variables** in `.env`:
```env
DJANGO_SECRET_KEY=generate-a-long-random-secret-key
DJANGO_DEBUG=False
DJANGO_ALLOWED_HOSTS=yourdomain.com
SECURE_HSTS_SECONDS=31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS=True
SECURE_HSTS_PRELOAD=True
SECURE_SSL_REDIRECT=True
SESSION_COOKIE_SECURE=True
CSRF_COOKIE_SECURE=True
```

 **Run Deploy Checks**:
```bash
python manage.py check --deploy
```

 **Verify .gitignore** includes:
```
env/
venv/
.env
db.sqlite3
media/
__pycache__/
*.pyc
```

 **Never commit**: `.env`, virtual environment, database, or sensitive credentials

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Devvrat Welekar**

- 📧 Email: [devwelekar@gmail.com](mailto:devwelekar@gmail.com)
- 🔗 GitHub: [github.com/devvratwelekar2003](https://github.com/devvratwelekar2003)
- 💼 LinkedIn: [linkedin.com/in/devvrat-welekar](https://linkedin.com/in/devvrat-welekar)

---

## 📝 License

This project is open source and available under the MIT License.

---

<p align="center">
  Made with ❤️ by Devvrat Welekar
</p>
