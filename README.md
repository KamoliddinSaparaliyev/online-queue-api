# Online Queuing System for Doctors in the Hospital

*The Online Queuing System is a web application that allows patients to book appointments with doctors in the hospital and manage their queues efficiently. This project is built using Node.js with Express framework, MongoDB as the database, and provides a user-friendly interface for patients and doctors.*

## Features

*-Patients can view the list of available doctors and their specializations.
-Patients can book appointments with doctors based on their availability.
-Doctors can view and manage their appointment queue.
-Real-time updates for patients and doctors about the queue status.
-Simple and intuitive UI for easy navigation and interaction.*

## Installation

1.**Clone the repository:**

`git clone https://github.com/your-username/online-queuing-system.git`

2.**Install dependencies:**

`cd online-queuing-system
npm install`

3.**Set up environment variables:
Create a `.env` file in the root directory.
Add the following environment variables:**

`PORT=3000
MONGODB_URI=mongodb://localhost:27017/queuing_system_db`

4.**Start the application:**

`npm start`

_**Database Structure**_

_The MongoDB database will have two collections:_ **doctors** _and_ **patients**

***doctors collection:***

**name**: Doctor's name (String)
**specialization**: Doctor's specialization (String)
**availability**: Array of available time slots (Array of Strings)
**queue**: Array of patients in the queue (Array of Objects)

***patients collection:***

**name**: Patient's name (String)
**email**: Patient's email (String)
**phone_number**: Patient's phone number (String)
**appointmen_time**: Appointment time (Date)
**doctor_id**: Reference to the doctor the patient has an appointment with (ObjectID)
**status**: Appointment status ('pending', 'confirmed', 'cancelled')

***API Endpoints***

**`GET /api/doctors`**: Get the list of available doctors and their specializations.

**`GET /api/doctors/:id`**: Get details of a specific doctor by ID.

**`POST /api/doctors/:id/book`**: Book an appointment with a doctor.

**`GET /api/doctors/:id/queue`:** Get the current queue of a specific doctor.

**`PUT /api/doctors/:id/queue`**: Update the queue (for doctors to manage appointments).

**`GET /api/patients`**: Get the list of all patients and their appointments.

**`GET /api/patients/:id`**: Get details of a specific patient by ID.





