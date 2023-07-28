# CarCar

Team:

* Gabe Svetcos - Service Microservice
* Jonathan Ceasar Medina - Sales Microservice

## Design
Project Beta follows the structure of a car dealership with three microservices (Inventory, Sales, and Service) which interacts with one another.
Within each microservice, there are lists reflecting information from the backend for clients. For example, the automobile list view shows all the vehicles
available in the inventory, as well as vehicles sold from the inventory. 

This project utilizes RESTful API in all three microservices and is reflected in both the front-end and back-end.
Front-end is presented through a SPA(single-page application) using React. Back-end uses Python for its programming language and the Django framework. 

## Inventory Microservice
### Inventory Models
### React URL Paths and use descriptions for Inventory Microservice
### Backend URL Paths and use description for Services Microservice
## Service microservice
### Service Models
The models used within the Service microservice are:
* AutomobileVO
    * AutomobileVO is a value object model that retrieves information from the Inventory microservice using a poller. AutomobileVO is used for determining whether a vehicle being serviced was sold from the dealership; if so then that vehicle is considered a VIP.
* Technician
    * Technicians are employees within this dealership that work with the vehicles. Technicians have names and employee IDs
* Appointment
    * Appointments are created to keep track of the vehicles that need a service performed. In order to make an appointment, there must be a reason, the date and time that the appointment is scheduled (optional, customers can do walk-ins), the automobile's VIN, and information about the customer. Once an appointment is assigned, it is defaulted to the "created" status. This status can be manually changed when it meets one of the two conditions: the appointment's service is completed (the status changes to "finished") and the appointment is cancelled (status is changed to "cancelled").

### React URL Paths and use description for Services Microservice
Below are the URL Paths of front-end RESTful API URL patterns and their intended purpose
| URL Path                                  |                    Description                                                                               |
| http://localhost:3000/technicians         | Lists all technicians with first name, last name, and employee ID                                            |
| http://localhost:3000/technicians/new     | Add a new technician with first name, last name, and employee ID                                             |
| http://localhost:3000/appointments        | Lists active appointments with info about the customer, technician, reason, VIP status, VIN, & appt status   |
| http://localhost:3000/appointments/new    | Create a new service appointment given VIN, customer info, appointment date and time, reason, and technician |
| http://localhost:3000/appointments/history| Lists all service appointments ever created with a search bar to filter info by VIN                          |

### Backend URL Paths and use description for Services Microservice
Below are the URL Paths of back-end URL RESTful API URL patterns and their intended purpose
| URL Path                                     |                    Description                                                                               |
| http://localhost:8080/api/technicians/       | Lists all technicians + Can also be used to POST info through a json body                                    |
| http://localhost:8080/api/technicians/<int:pk>/| Retrieves information about a specific technician given their assigned ID in the database                  |
| http://localhost:8080/api/appointments/       | Lists active appointments with info about the customer, technician, reason, VIP status, VIN, & appt status  |
| http://localhost:8080/api/appointments/       | Lists all active appointments + creates a new appointment                                                   |
| http://localhost:8080/api/appointments/<int:pk>/| Retrieves detail information about a specific appointment using a given id/pk                             |
| http://localhost:8080/api/appointments/<int:pk>/cancel/ | Cancels a specific appointment at a given id/pk                                                   |
| http://localhost:8080/api/appointments/finish/ | Marks a specific appointment the "finished" status given id/pk                                             |

## Sales Microservice
### Sales Models 
The models used within the Sales Microservice are:
* AutomobileVO
    * AutomobileVO is a value object model that retrieves database information from the Inventory microservice using a poller. In the Sales microservice, the AutomobileVO is used to update the "sold" property of an automobile in the Inventory database.
* Salesperson 
    * Salesperson is a model for employees that work in sales to sell cars. The salesperson model takes in first name, last name, and employee ID to be created.
* Customer 
    * The customer model is used to determine contact information about a purchaser of a vehicle. The customer model uses first name, last name, address, and phone number as contact information.
* Sale
    * The sale model utilizes foreign keys to retrieve information related to the automobile, the salesperson, and the customer. The sale model also requires the price property to determine how much a vehicle costs. 
### React URL Paths and use description for the Sales Microservice
Below are the URL Paths of front-end RESTful API URL patterns and their intended purpose
| URL Path                                  |                    Description                                                                               |
| http://localhost:3000/customers           | Lists all customers with first name, last name, address, and phone number                                    |
| http://localhost:3000/customers/new       | Add a new customer with first name, last name, address, and phone number                                     |
| http://localhost:3000/salespeople         | Lists all salespeople with first name, last name, and employee ID                                            |
| http://localhost:3000/salespeople/new     | Create a new salesperson with first name, last name, and employee ID                                         |
| http://localhost:3000/sales               | Lists all sales with info of salespeople, customers, automobile VIN, and price of sale                       |
| http://localhost:3000/sales/new           | Create a new sale with dropdowns for an unsold automobile, a salesperson, and a customer. Input the price    |

### Backend URL Paths and use description for the Sales Microservice
Below are the URL Paths of back-end URL RESTful API URL patterns and their intended purpose
| URL Path                                      |                Description                                                                               |
| http://localhost:8090/api/salespeople/        | Lists all salespeople + Can also be used to POST/create info through a json body                         |
| http://localhost:8090/api/salespeople/<int:pk>/| Retrieves information about a specific salesperson given their assigned ID in the database              |
| http://localhost:8090/api/customers/           | Lists all customers and can be used to POST/create info through a json body                             |
| http://localhost:8090/api/customers/<int:pk>/ | Retrieves detail information about a specific customer using a given id/pk                               |
| http://localhost:8090/api/sales/              | Lists all info about sales made. Has all information about automobiles, customers, salespeople, and price|
| http://localhost:8090/api/sales/<int:pk>/     | Retrieves detail information about a specific sales given id/pk                                          |

## Instructions on running the application
### Prior to running the application, you will want to download a few applications/tools:
* VSCode (or a similar IDE/Integrated Development Environment)
* Docker desktop (to create volumes, images, and containers to run the application)
* Insomnia (to test back-end functionality)
* A web-based browser (preferrably Google Chrome) 
* Internet access
* A computer 
### Once those requirements are met:
* Turn on Docker desktop
* Go to https://gitlab.com/Gsvetcos/project-beta then fork and clone the repo
* Navigate into the `project-beta` folder then open VSCode or your preferred IDE
* To run the program, type the following commands in the terminal:
    * `docker volume create beta-data`
    * `docker-compose build`
    * `docker-compose up`
### Additional Information
The server should be running so you will have access to the React links in the front end (the links starting with http://localhost:3000/), as well as the backend links (the links starting with http://localhost:8100/api/ http://localhost:8080/api/ http://localhost:8090/api/)
