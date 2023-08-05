# Online Queuing System for Doctors in the Hospital

_The Online Queuing System is a web application that allows patients to book appointments with doctors in the hospital and manage their queues efficiently. This project is built using Node.js with Express framework, MongoDB as the database, and provides a user-friendly interface for patients and doctors._

**Features**
_Patients can view the list of available doctors and their specializations.
Patients can book appointments with doctors based on their availability.
Doctors can view and manage their appointment queue.
Real-time updates for patients and doctors about the queue status.
Simple and intuitive UI for easy navigation and interaction._

***Installation***

*Clone the repository:*

`git clone https://github.com/KamoliddinSaparaliyev/online-queue-api`

*Install dependencies:*

`cd online-queuing`

`npm install`

*Set up environment variables:*
*Create a `.env` file in the root directory.*
*Add the following environment variables:*

`PORT=3000`

`MONGODB_URI=mongodb://localhost:27017/queuing_system_db`

*Start the application:*

`npm start`

The application will be running at **`http://localhost:3000/`**.

## Database Structure

*The MongoDB database will have two collections: **`doctors`** and **`patients`**.*


***doctors collection:***


_**name**: Doctor's name *(String)*_

_**specialization**: Doctor's specialization *(String)*_

_**availability**: Array of available time slots *(Array of Strings)*_

_**queue**: Array of patients in the queue *(Array of Objects)*_


***patients collection:***


**name**: _Patient's name_ *(String)*

**email**: _Patient's email_ *(String)*

**phone_number**: _Patient's phone number_ *(String)*

**appointmen_time**: _Appointment time_ *(Date)*

**doctor_id**:_Reference to the doctor the patient has an appointment with_ *(ObjectID)*

**status**: _Appointment status_ `('pending', 'confirmed', 'cancelled')`


## API Endpoints

`GET /api/doctors:` *Get the list of available doctors and their specializations.*

`GET /api/doctors/:id:` *Get details of a specific doctor by ID.*

`POST /api/doctors/:id/book:` *Book an appointment with a doctor.*

`GET /api/doctors/:id/queue:` *Get the current queue of a specific doctor.*

`PUT /api/doctors/:id/queue:` *Update the queue (for doctors to manage appointments).*

`GET /api/patients:` *Get the list of all patients and their appointments.*

`GET /api/patients/:id:` *Get details of a specific patient by ID.*
