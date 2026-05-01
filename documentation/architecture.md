# System Architecture (Detailed Explanation)

This project is built using different components of ServiceNow that work together to complete the metro ticket booking process. Each component has a specific role, and together they create a smooth workflow from booking to payment and QR generation.

---

## Components Used

### 1. Record Producer

The Record Producer acts as the **user interface (UI)** where the user interacts with the system.

* It allows the user to select **source station** and **destination station**
* It collects all required inputs for booking a ticket
* Once submitted, it creates a record in the ticket table

👉 In simple terms:
It is the **form the user fills to book a ticket**

---

### 2. Catalog Client Script

The Catalog Client Script runs on the **client side (browser)**.

* It gets triggered when the user changes fields like source or destination
* It calls server-side logic using **GlideAjax**
* It updates the fare automatically without refreshing the page

👉 In simple terms:
It makes the form **dynamic and interactive**

---

### 3. Script Include

The Script Include is a **server-side script**.

* It contains the logic to calculate the fare
* It receives input from the client script (source and destination)
* It returns the calculated fare back to the client

👉 In simple terms:
It acts like the **brain that calculates the fare**

---

### 4. UI Action

The UI Action is used to create a **custom button** called **"Pay Now"**.

* It is visible only when payment is not done
* When clicked:

  * It updates payment status to **Paid**
  * It generates a QR code
* It also shows a success message

👉 In simple terms:
It performs the **payment action**

---

### 5. UI Policy

The UI Policy controls **field visibility** based on conditions.

* If payment is **Not Paid** → QR code field is hidden
* If payment is **Paid** → QR code is shown

👉 In simple terms:
It controls **what the user can see**

---

### 6. Database Table

The database table stores all ticket information.

It contains fields like:

* Source station
* Destination station
* Fare
* Payment status
* QR code

👉 In simple terms:
It is the **storage where all ticket data is saved**

---

## Flow Explanation (Step-by-Step)

1. The user opens the Record Producer and selects source and destination
2. The Catalog Client Script detects changes and sends data to Script Include
3. Script Include calculates the fare and sends it back
4. The fare is displayed instantly on the form
5. The user clicks the **Pay Now** button
6. UI Action updates payment status to **Paid** and generates QR code
7. UI Policy makes the QR code visible
8. The final ticket with QR code is shown to the user

---

## Flow Diagram

User → Record Producer → Client Script → Script Include → UI Action → QR Code Display

---

## Summary

This architecture ensures:

* Smooth user interaction
* Automatic fare calculation
* Controlled payment flow
* Secure ticket generation with QR code

All components work together to simulate a **real-world metro ticket booking system**
