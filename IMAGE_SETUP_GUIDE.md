# Vroomize - Image Setup & Backend Guide

## ✅ Latest Updates Applied

### 1. **Copyright Updated**
- Changed from 2022 → **2026** ✓

### 2. **Phone Number Format**
- Updated placeholder to: `eg: 86240703866` ✓
- Applied in both Bill Booking and Contact forms

### 3. **CSS Improvements**
- Modern gradient background (Purple-Violet theme)
- Enhanced form styling with focus effects
- Responsive design for mobile devices
- Smooth animations and transitions
- Better typography and spacing

### 4. **Form Validation**
- All required fields now have `required` attribute
- Better placeholder text for all inputs
- Professional styling for inputs and buttons

---

## 🚗 How to Setup Images for Vehicles

### **Step 1: Prepare Car Images**
1. Gather your car images (JPG, PNG, or WebP format)
2. Place images in the folder: `media/car/images/`

### **Step 2: Add Cars to Database**
1. Go to Admin Panel: `http://127.0.0.1:5000/admin/`
2. Login with admin credentials
3. Click "Cars" section
4. Click "Add Car"
5. Fill in the form:
   - **Car Name**: (e.g., "Honda City")
   - **Car Description**: (e.g., "Reliable sedan with great mileage")
   - **Price**: (e.g., 50 for Rs 50/day)
   - **Image**: Upload image from `media/car/images/`
   - **Car ID**: (e.g., 1, 2, 3)

### **Step 3: Verify in Vehicles Page**
1. Visit: `http://127.0.0.1:5000/vehicles`
2. Images should display in card format
3. Users can click "RENT" to book

---

## 📝 How to Use the Booking System

### **User Booking Flow:**
1. **Register** → `http://127.0.0.1:5000/register`
   - Create account with username, email, password

2. **Login** → `http://127.0.0.1:5000/signin`
   - Login with credentials

3. **View Vehicles** → `http://127.0.0.1:5000/vehicles`
   - See all available cars with images
   - Click "RENT" button

4. **Fill Booking Details** → `/bill`
   - **Customer Info**: Name, Email, Phone (86240703866)
   - **Address**: Full address
   - **City**: Select from dropdown
   - **Car Details**: 
     - Car name (e.g., "Renault")
     - Color preference
     - Number of days (1-30)
     - Pickup date
     - From location & To location
   
5. **Display Bill** 
   - Click "Display Bill" button
   - Modal shows receipt with total amount
   - Download receipt as PDF

6. **View Contact** → `http://127.0.0.1:5000/contact`
   - Phone format: `8624035783`
   - Message will be saved to database

---

## 🗄️ Database Models

### **Car Model**
```python
- car_id: Integer ID
- car_name: Car name
- car_desc: Description
- price: Daily rent price
- image: Car image (stored in media/car/images/)
```

### **Order Model (Booking)**
```python
- order_id: Auto-generated
- name: Customer name
- email: Customer email
- phone: Phone number
- address: Delivery address
- city: City
- cars: Car name selected
- days_for_rent: Number of days
- date: Pickup date
- loc_from: From location
- loc_to: To location
```

### **Contact Model**
```python
- message: Primary key
- name: Contact name
- email: Contact email
- phone_number: Contact number
- message: Message text
```

---

## 🔧 Media File Configuration

The app is configured to serve media files from:
- **Upload Location**: `media/` folder
- **Access URL**: `http://127.0.0.1:5000/media/`
- **Image Path**: `media/car/images/`

### **Folder Structure:**
```
Car-Rental-System/
├── media/
│   └── car/
│       └── images/
│           ├── car1.jpg
│           ├── car2.jpg
│           ├── car3.jpg
│           └── ...
└── ...
```

---

## 📱 Responsive Design

✅ CSS now includes:
- Mobile-friendly layout
- Responsive forms
- Touch-friendly buttons
- Better spacing on small screens
- Gradient backgrounds
- Smooth animations

---

## 🎨 UI/UX Improvements

1. **Color Scheme**
   - Primary: Purple-to-Violet gradient
   - Accent: Cyan blue (#00d4ff)
   - Dark navbar with gradient

2. **Components**
   - Card-based vehicle display
   - Smooth hover animations
   - Professional buttons with shadows
   - Enhanced form fields with focus states
   - Responsive modal dialogs

3. **Typography**
   - Clear, readable fonts
   - Proper font weights and sizes
   - Better contrast ratios
   - Consistent spacing

---

## ✅ Checklist for Full Setup

- [ ] Images placed in `media/car/images/`
- [ ] Admin account created and logged in
- [ ] Cars added to database with images
- [ ] Test booking flow (Register → Login → Book → View Bill)
- [ ] Contact form working
- [ ] Verify phone number format in forms
- [ ] Check copyright shows 2026
- [ ] Test responsive design on mobile

---

## 🚀 Server Running

**URL**: `http://127.0.0.1:5000/`
**Status**: ✅ Running
**Database**: SQLite3 (`db.sqlite3`)

---

## 📞 Support

For any issues:
1. Check Django console for error messages
2. Verify media folder permissions
3. Ensure images are in correct format (JPG, PNG, WebP)
4. Clear browser cache (Ctrl+Shift+Delete)
5. Restart server if needed

