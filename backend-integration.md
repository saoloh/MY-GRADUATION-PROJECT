# HASAD Ecosystem: Backend & Database Integration Guide

This document outlines the technical requirements for connecting the HASAD React frontend to a Node.js/Express backend and a PostgreSQL/MongoDB database.

## 1. Database Schema & Data Models

### **Users Table**
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | UUID | Primary Key |
| `name` | String | Full name of the user/entity |
| `email` | String | Unique email address (indexed) |
| `password` | Hash | BCrypt hashed password |
| `role` | Enum | `farmer`, `factory`, `admin`, `driver` |
| `status` | Enum | `pending`, `verified`, `rejected` |
| `credentials` | Object | National ID, License Number, or Business Registration |
| `created_at` | Timestamp | Registration date |

### **Waste Listings Table**
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | String | Format: `HSD-XXXXX` |
| `farmer_id` | UUID | Foreign Key (Users) |
| `category` | String | `rice_husk`, `wheat_stalks`, `corn_cobs`, etc. |
| `weight_kg` | Number | Quantity in Kilograms |
| `description`| Text | Quality notes or processing state |
| `image_url` | String | Hosted URL (S3/Cloudinary) |
| `location` | JSON | `{ lat: float, lng: float, address: string }` |
| `pricing_type`| Enum | `bidding`, `fixed` |
| `base_price` | Decimal | Starting price or fixed price |
| `status` | Enum | `available`, `bidding`, `sold`, `in_transit`, `delivered` |

### **Bids Table**
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | UUID | Primary Key |
| `listing_id` | String | Foreign Key (Listings) |
| `factory_id` | UUID | Foreign Key (Users) |
| `amount` | Decimal | Bid value |
| `timestamp` | Timestamp | When the bid was placed |

### **Shipments/Orders Table**
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | String | Format: `ORD-XXXXX` |
| `listing_id` | String | Foreign Key (Listings) |
| `buyer_id` | UUID | Foreign Key (Users) |
| `driver_id` | UUID | Foreign Key (Users/Drivers) |
| `status_steps`| JSONB | Array of objects with timestamp and status |
| `total_price` | Decimal | Final agreed price |
| `eta` | Timestamp | Estimated arrival time |

---

## 2. API Endpoints Reference

### **Authentication & Profile**
*   `POST /api/auth/signup`: Create a new account.
*   `POST /api/auth/signin`: Authenticate and return JWT.
*   `GET /api/profile`: Retrieve profile data based on JWT.
*   `PATCH /api/profile`: Update contact info or security settings.

### **Farmer Operations**
*   `GET /api/farmer/dashboard`: Summary of earnings, active listings, and CO2 offset.
*   `POST /api/farmer/listings`: Create a new waste intake entry.
*   `GET /api/farmer/listings`: List all entries created by the user.

### **Factory & Marketplace**
*   `GET /api/marketplace`: Search and filter available waste (Radius, Price, Category).
*   `POST /api/marketplace/bid`: Submit a bid for a listing.
*   `POST /api/marketplace/purchase`: Direct purchase of a fixed-price listing.
*   `GET /api/factory/ledger`: History of all purchases and download links for invoices.

### **Logistics & Fleet Management**
*   `GET /api/logistics/shipments`: List active shipments for the logged-in user (Factory/Admin).
*   `GET /api/logistics/tracking/:id`: Real-time GPS coordinates and milestone status.
*   `PATCH /api/logistics/update-status`: Used by drivers to trigger "Pickup" or "Delivered".

### **Admin Command**
*   `GET /api/admin/analytics`: Aggregated platform growth and carbon impact data.
*   `GET /api/admin/users/pending`: List users requiring ID/License verification.
*   `POST /api/admin/users/verify/:id`: Approve or reject a user.
*   `GET /api/admin/fleet/status`: Overview of all active trucks and their loads.

---

## 3. Infrastructure & Third-Party Requirements

### **File Storage**
*   **Service:** Cloudinary or AWS S3.
*   **Purpose:** Store high-resolution images of agricultural waste and user credentials.

### **Maps & Geolocation**
*   **Service:** Google Maps Platform or Mapbox.
*   **Purpose:** Calculate distance between Farmers and Factories; Render live routing in the Logistics Dashboard.

### **Real-time Notifications**
*   **Service:** Socket.io or Pusher.
*   **Purpose:** Live bidding updates, shipment status alerts, and arrival notifications.

### **Document Generation**
*   **Library:** PDFKit or Puppeteer.
*   **Purpose:** Automatically generate VAT-compliant invoices for the Procurement Ledger.
