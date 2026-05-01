# Implementation Steps:

This section explains how the Metro Ticket Booking System is implemented step-by-step in ServiceNow. Each step builds on the previous one to create a complete working application.

---

## Step 1: Create Table

First, a custom table is created to store all ticket-related information.

* A **Ticket table** is created in ServiceNow
* The following fields are added:

  * **Source** → to store starting station
  * **Destination** → to store ending station
  * **Fare** → to store ticket price
  * **Payment Status** → to track whether payment is done or not
  * **QR Code** → to store generated QR value or image

👉 This table acts as the **main storage for all ticket data**

---

## Step 2: Create Record Producer

The Record Producer is used to create a user-friendly form.

* Variables are added for:

  * Source station
  * Destination station
* A field is added to display the **fare**

👉 This allows users to **enter details and book tickets easily**

---

## Step 3: Add Script Include

A Script Include is created to handle backend logic.

* A class named **FarePrice** is created
* It contains a method to calculate fare
* It is marked as **Client Callable** so it can be accessed from client scripts

👉 This component performs the **fare calculation on the server side**

---

## Step 4: Add Client Script

A Catalog Client Script is added to make the form interactive.

* It triggers when the user changes source or destination
* It sends data to Script Include using **GlideAjax**
* It receives the calculated fare and displays it instantly

👉 This ensures **real-time fare calculation without page reload**

---

## Step 5: Add UI Policy

A UI Policy is used to control the visibility of the QR code field.

* Condition:

  * If **payment_status = Not Paid**
* Action:

  * Hide the QR code field

👉 This ensures that the QR code is **only visible after payment**

---

## Step 6: Add UI Action

A UI Action is created to simulate payment.

* A button named **Pay Now** is added to the form
* When clicked:

  * Payment status is updated to **Paid**
  * A QR code is generated using an external API
* A success message is shown to the user

👉 This step completes the **payment and ticket generation process**

---

## Step 7: Testing

Finally, the system is tested to ensure everything works correctly.

* Open the booking form
* Select source and destination
* Verify that fare is calculated automatically
* Click the **Pay Now** button
* Check that:

  * Payment status changes to Paid
  * QR code is generated and displayed

👉 This confirms that the **entire workflow is functioning properly**

---

## Summary

By following these steps:

* A complete ticket booking system is created
* User input, processing, and output are connected properly
* The system behaves like a real-world metro ticket application

---
