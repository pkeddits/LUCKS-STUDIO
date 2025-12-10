/*
  # Create bookings table

  1. New Tables
    - `bookings`
      - `id` (text, primary key) - Unique identifier for the booking
      - `service` (text) - Name of the service booked
      - `date` (text) - Date of the booking
      - `time` (text) - Time of the booking
      - `name` (text) - Customer's full name
      - `phone` (text) - Customer's phone number
      - `paymentMethod` (text) - Payment method selected
      - `status` (text) - Booking status (e.g., confirmed)
      - `price` (numeric) - Price of the service
      - `createdAt` (timestamptz) - Timestamp when booking was created

  2. Security
    - Enable RLS on `bookings` table
    - Add policy for public to read all bookings (needed for checking availability)
    - Add policy for public to insert bookings (no auth required for booking)
*/

CREATE TABLE IF NOT EXISTS bookings (
  id text PRIMARY KEY,
  service text NOT NULL,
  date text NOT NULL,
  time text NOT NULL,
  name text NOT NULL,
  phone text NOT NULL,
  paymentMethod text NOT NULL,
  status text NOT NULL DEFAULT 'confirmed',
  price numeric NOT NULL,
  createdAt timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view bookings"
  ON bookings
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create bookings"
  ON bookings
  FOR INSERT
  WITH CHECK (true);