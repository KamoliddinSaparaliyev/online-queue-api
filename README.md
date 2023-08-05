# Online Queuing System for Doctors in the Hospital

_The Online Queuing System is a web application that allows patients to book appointments with doctors in the hospital and manage their queues efficiently. This project is built using Node.js with Express framework, MongoDB as the database, and provides a user-friendly interface for patients and doctors._

## **Features**

_-Patients can view the list of available doctors and their specializations._

_-Patients can book appointments with doctors based on their availability._

_-Doctors can view and manage their appointment queue._

_-Real-time updates for patients and doctors about the queue status._

_-Simple and intuitive UI for easy navigation and interaction._

## ***Installation***

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

`npm run dev`

The application will be running at **`http://localhost:3000/`**.


## API Endpoints


## 1. Region API:

`GET /api/regions`: _Get the list of all regions._

`POST /api/regions`: _Create a new region in a specific country._

`GET /api/regions/:id`: _Get details of a specific region by ID._

`PUT /api/regions/:id`: _Update information for a specific region._

`DELETE /api/regions/:id`: _Delete a specific region._

## 2. District API:

`GET /api/districts`: _Get the list of all districts in a specific region._

`POST /api/districts`: _Create a new district in a specific region._

`GET /api/districts/:id`: _Get details of a specific district by ID._

`PUT /api/districts/:id`: _Update information for a specific district._

`DELETE /api/districts/:id`: _Delete a specific district._

## 3. City API:

`GET /api/cities`: _Get the list of all cities in a specific district._

`POST /api/cities`: _Create a new city in a specific district._

`GET /api/cities/:id`: _Get details of a specific city by ID._

`PUT /api/cities/:id`: _Update information for a specific city._

`DELETE /api/cities/:id`: _Delete a specific city._

## 4. MedicalCenter API:

`GET /api/medicalcenters`: _Get the list of all medical centers in a specific city._

`POST /api/medicalcenters`: _Create a new medical center in a specific city._

`GET /api/medicalcenters/:id`: _Get details of a specific medical center by ID._

`PUT /api/medicalcenters/:id`: _Update information for a specific medical center._

`DELETE /api/medicalcenters/:id`: _Delete a specific medical center._

## 5. Department API:

`GET /api/departments`: _Get the list of all departments in a specific medical center._

`POST /api/departments`: _Create a new department in a specific medical center._

`GET /api/departments/:id`: _Get details of a specific department by ID._

`PUT /api/departments/:id`: _Update information for a specific department._

`DELETE /api/departments/:id`: _Delete a specific department._

## 6. Specialist API:

`GET /api/specialists`: _Get the list of all specialists in a specific department._

`POST /api/specialists`: _Create a new specialist in a specific department._

`GET /api/specialists/:id`: _Get details of a specific specialist by ID._

`POST /api/specialists/login`: _Specialist login. The specialist provides their email and password to authenticate._

`PUT /api/specialists/:id`: _Update information for a specific specialist._

`DELETE /api/specialists/:id`: _Delete a specific specialist._

`GET /api/specialists/session`: _Get the current specialist's session information, such as login time and last active time._

`GET /api/specialists/interactions`: _Get a list of all interactions for the current specialist. This endpoint will show the clients the specialist has accepted._

`GET /api/specialists/interactions/:id`: _Get details of a specific interaction with a client by ID. This endpoint can provide additional information about the interaction, such as visit date, diagnosis, treatment, etc._

## 7. Queue API:

`GET /api/queues`: _Get the queue status for a specific department in a medical center._

`POST /api/queues`: _Add a new patient to the queue of a specific department in a medical center._

`PUT /api/queues/:id`: _Update the status or details of a patient in the queue._

`DELETE /api/queues/:id`: _Remove a patient from the queue._

`GET /api/queues/:medicalCenterId/:departmentId/status`: _Get the current status of the queue for a specific department in a medical center. This endpoint can return the number of patients in the queue, the estimated wait time, or any other relevant status information._

## 8. Notification API:

`POST /api/notifications/appointment/:id`: _Send a notification to a patient with appointment details or changes in the queue status._

`POST /api/notifications/waittime`: _Send notifications to subscribed patients about changes in the wait times for their selected departments._

## 9. User API:

`GET /api/users`: _Get a list of all users._

`GET /api/users/qu`: _Get a list of all users._

`POST /api/users/register`: _Create a new user._

`POST /api/users/login`: _Login a user._

`GET /api/users/:id`: _Get details of a specific user by ID._

`PUT /api/users/:id`: _Update information for a specific user._

`DELETE /api/users/:id`: _Delete a specific user._

`GET /api/users/session`: _Get the current user's session information, such as login time and last active time._

`GET /api/users/interactions`: _Get a list of all interactions for the current user. This endpoint will show the specialists the user has visited._

`GET /api/users/interactions/:id`: _Get details of a specific interaction with a specialist by ID. This endpoint can provide additional information about the interaction, such as visit date, diagnosis, treatment, etc._

## 10. Appointment API:

`GET /api/appointments`: _Get a list of all appointments for a specific medical center or department._

`POST /api/appointments`: _Create a new appointment for a patient with a specific specialist in a department. This endpoint can also be used to book appointments with available time slots._

`PUT /api/appointments/:id`: _Update the details or status of a specific appointment._

`DELETE /api/appointments/:id`: _Cancel a specific appointment._
