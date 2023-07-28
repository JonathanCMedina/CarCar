# CarCar

Team:

* Gabe Svetcos (@Gsvetcos on GitLab) - Service Microservice
* Jonathan Ceasar Medina(@Jonathan.C.Medina on Gitlab) - Sales Microservice

## Vision of the project
Project Beta (CarCar) is developed to emulate a car dealership website. This project uses three microservices (Inventory, Sales, and Service) with interactivity between each.
Within each microservice, there are functions used to create and retrieve information on the back-end and the front-end. 
available in the inventory, as well as vehicles sold from the inventory. 

This project utilizes RESTful API in all three microservices and is reflected in both the front-end and back-end.
Front-end is presented through a SPA(single-page application) using React. Bootstrap is used for styling and design. Back-end uses Python for its programming language and the Django framework. 

## Instructions on running the application
### Prior to running the application, you will want to download a few applications/tools:
* VSCode (or a similar IDE/Integrated Development Environment)
* Docker desktop (to create volumes, images, and containers to run the application)
* Insomnia (to test back-end functionality)
* A web-based browser (preferrably Google Chrome) 

### Once those requirements are met:
* Turn on Docker desktop
* Go to https://gitlab.com/Gsvetcos/project-beta then fork and clone the repo
* Navigate into the `project-beta` folder then open VSCode or your preferred IDE
* To run the program, type the following commands in the terminal:
    * `docker volume create beta-data`
    * `docker-compose build`
    * `docker-compose up`
Please feel free to start with http://localhost:3000. You will be met with the main page of CarCar.
### Additional Information
The server should be running so you will have access to the React URLs in the front end (the links starting with http://localhost:3000/), as well as the backend URLs (the links starting with http://localhost:8100/api/ http://localhost:8080/api/ http://localhost:8090/api/). A full list of URLs will be in the API Documentation section.
For testing purposes, please begin by creating a new manufacturer, then a new model, then a new automobile. 
The structure of the API Documentation should guide you step-by-step on what needs to be created before proceeding with either scheduling a service appointment or making a new sale. 

## Diagram
![Gabe and JC's DDD Diagram of Project Beta / CarCar!](images/design-diagram.png "DDD Diagram of Project Beta / CarCar")

## API Documentation
### React/Frontend URL Paths and use description for Inventory Microservice
Below are the URL Paths of front-end RESTful API URL patterns and their intended use
| URL Path                                  |                    Description                                                                                  |
| ----------- | ----------- |
| http://localhost:3000/manufacturers       | Lists all manufacturers with first name, last name, and employee ID                                             |
| http://localhost:3000/manufacturers/new   | Add a new automobile manufacturer with the manufacturer's name                                                  |
| http://localhost:3000/models              | Lists all automobile models with a picture example of the vehicle                                               |
| http://localhost:3000/models/new          | Add a new automobile model, type in the name, add a picture URL (optional) and choose a manufacturer            |
| http://localhost:3000/automobiles         | Lists all automobiles in the inventory with the VIN, color, year, model, manufacturer, and sold status          |
| http://localhost:3000/automobiles/new     | Add a new automobile, type in the VIN,color, year, and select an existing model from the inventory              |

### Backend URL Paths and use description for Inventory Microservice
Below are the URL Paths of back-end URL RESTful API URL patterns and their intended use
| URL Path                                     |                    Description                                                                               |
| ----------- | ----------- |
| http://localhost:8100/api/automobiles/       | Lists all automobiles + Can also be used to POST info through a json body                                    |
| http://localhost:8100/api/automobiles/<str:vin>/| Can retrieve, delete, or update a specific automobile given their VIN                                     |
| http://localhost:8100/api/manufacturers/     | Lists all manufacturers + Can also be used to POST/create a new manufacturer through a JSON body             |
| http://localhost:8100/api/manufacturers/<int:pk>| Used to retrieve, delete, or update a specific manufacturer given their database ID                       |
| http://localhost:8100/api/models/            | Lists all models, can be used to POST/create a new model through a JSON body                                 |
| http://localhost:8100/api/models/<int:pk>/   | Used to retrieve, delete, or update a specific automobile model given their database ID                      |

### React/Frontend URL Paths and use description for Services Microservice
Below are the URL Paths of front-end RESTful API URL patterns and their intended use
| URL Path                                  |                    Description                                                                                  |
| ----------- | ----------- |
| http://localhost:3000/technicians         | Lists all technicians with first name, last name, and employee ID                                               |
| http://localhost:3000/technicians/new     | Add a new technician with first name, last name, and employee ID                                                |
| http://localhost:3000/appointments        | Lists active appointments with info about the customer, technician, reason, VIP status, VIN, & appt status      |
| http://localhost:3000/appointments/new    | Create a new service appointment given VIN, customer info, appointment date and time, reason, and technician    |
| http://localhost:3000/appointments/history| Lists all service appointments ever created with a search bar to filter info by VIN                             |

### Backend URL Paths and use description for Services Microservice
Below are the URL Paths of back-end URL RESTful API URL patterns and their intended use
| URL Path                                     |                    Description                                                                               |
| ----------- | ----------- |
| http://localhost:8080/api/technicians/       | Lists all technicians + Can also be used to POST info through a json body                                    |
| http://localhost:8080/api/technicians/<int:pk>/| Retrieves information about a specific technician given their assigned ID in the database                  |
| http://localhost:8080/api/appointments/      | Lists active appointments with info about the customer, technician, reason, VIP status, VIN, & appt status   |
| http://localhost:8080/api/appointments/      | Lists all active appointments + creates a new appointment                                                    |
| http://localhost:8080/api/appointments/<int:pk>/| Retrieves detail information about a specific appointment using a given id/pk                             |
| http://localhost:8080/api/appointments/<int:pk>/cancel/ | Cancels a specific appointment at a given id/pk                                                   |
| http://localhost:8080/api/appointments/finish/ | Marks a specific appointment the "finished" status given id/pk                                             |

### React/Frontend URL Paths and use description for the Sales Microservice
Below are the URL Paths of front-end RESTful API URL patterns and their intended use
| URL Path                                  |                    Description                                                                                  |
| ----------- | ----------- |
| http://localhost:3000/salespeople         | Lists all salespeople with first name, last name, and employee ID                                               |
| http://localhost:3000/salespeople/new     | Create a new salesperson with first name, last name, and employee ID                                            |
| http://localhost:3000/customers           | Lists all customers with first name, last name, address, and phone number                                       |
| http://localhost:3000/customers/new       | Add a new customer with first name, last name, address, and phone number                                        |
| http://localhost:3000/sales               | Lists all sales with info of salespeople, customers, automobile VIN, and price of sale                          |
| http://localhost:3000/sales/new           | Create a new sale with dropdowns for an unsold automobile, a salesperson, and a customer. Input the price       |

### Backend URL Paths and use description for the Sales Microservice
Below are the URL Paths of back-end URL RESTful API URL patterns and their intended use
| URL Path                                      |                Description                                                                                  |
| ----------- | ----------- |
| http://localhost:8090/api/salespeople/        | Lists all salespeople + Can also be used to POST/create info through a json body                            |
| http://localhost:8090/api/salespeople/<int:pk>/ | Used to delete a specific salesperson given their database ID                                              |
| http://localhost:8090/api/customers/          | Lists all customers and can be used to POST/create info through a json body                                 |
| http://localhost:8090/api/customers/<int:pk>/ | Used to delete a specific customer given its database ID                                                    |
| http://localhost:8090/api/sales/              | Lists all info about sales made. Has all information about automobiles, customers, salespeople, and price   |
| http://localhost:8090/api/sales/<int:pk>/     | Used to delete a specific sale given its database ID.                                                       |

## Value Objects and Models
### Service Microservice Models
The models used within the Service microservice are:
* AutomobileVO
    * AutomobileVO is a value object model that retrieves information from the Inventory microservice using a poller. AutomobileVO is used for determining whether a vehicle that is scheduled for service was sold from the dealership; if so then that vehicle is considered a VIP.
* Technician
    * Technicians are employees within this dealership that work with the vehicles. Technicians have names and employee IDs
* Appointment
    * Appointments are created to keep track of the vehicles that need a service performed. In order to make an appointment, there must be a reason, the date and time that the appointment is scheduled (optional, customers can do walk-ins), the automobile's VIN, and information about the customer. Once an appointment is assigned, it is defaulted to the "created" status. This status can be manually changed when it meets one of the two conditions: the appointment's service is completed (the status changes to "finished") and the appointment is cancelled (status is changed to "cancelled").

### Sales Microservice Models 
The models used within the Sales Microservice are:
* AutomobileVO
    * AutomobileVO is a value object model that retrieves database information from the Inventory microservice using a poller. In the Sales microservice, the AutomobileVO is used to update the "sold" property of an automobile in the Inventory database. To do this, we implemented a "put" method within the submission of a sales form. 
* Salesperson 
    * Salesperson is a model for employees that work in sales to sell cars. The salesperson model takes in first name, last name, and employee ID to be created.
* Customer 
    * The customer model is used to determine contact information about a purchaser of a vehicle. The customer model uses first name, last name, address, and phone number as contact information.
* Sale
    * The sale model utilizes foreign keys to retrieve information related to the automobile, the salesperson, and the customer. The sale model also requires the price property to determine how much a vehicle costs. 


---------------------------------------------------------------------------------------------------------------------------------------------------------------
