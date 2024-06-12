# Enterprise-Level Authentication in a Containerized Environment for Next.js 13

This repository provides a setup for authentication in a modern web application environment. For more detailed explanation and step by step guide of this repository please visit my blog post. 

https://ulasozdemir.com.tr/enterprise-level-authentication-in-a-containerized-environment-for-nextjs-13

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Architecture](#architecture)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Configuration](#configuration)
7. [Usage](#usage)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction
This project demonstrates how to integrate enterprise-level authentication in a containerized Next.js 13 environment. It covers key aspects such as OAuth, JWT, and secure handling of user credentials in a scalable and maintainable way.

## Features
- **Secure Authentication**: Implement OAuth 2.0, JWT, and session management.
- **Containerization**: Use Docker to containerize the application for consistent development and deployment environments.
- **Scalability**: Designed to scale with microservices architecture.
- **Extensibility**: Easily extendable with additional authentication providers and services.

## Architecture
![Architecture Diagram](https://cdn.hashnode.com/res/hashnode/image/upload/v1718016228889/5db69400-6a3e-4cfa-8d6f-00b0d07dc4e3.png?auto=compress,format&format=webp)

The architecture consists of the following components:
- **Next.js 13**: Frontend framework.
- **Authentication Service**: Keycloak
- **MySQL**: Keycloak inteagrated database service.
- **Docker**: Containerization of the application.


## Prerequisites
- Docker and Docker Compose
- Git

## Installation
1. **Clone the repository**
    ```sh
    git clone https://github.com/ozdemirrulass/keycloak-nextjs-mysql-docker.git
    ```
    ```sh
     cd keycloak-nextjs-mysql-docker
    ```   

2. **Build Docker images**
    ```sh
    docker compose -f docker-compose.dev.yml build
    ```



## Configuration
1. **Environment Variables**
   Create a `.env.local` file in the root directory of ``next-app`` and add the necessary environment variables:
    ```env
    NEXT_PUBLIC_KEYCLOAK_REALM=<realm-name>
    NEXT_PUBLIC_KEYCLOAK_CLIENT_ID=<client-name>
    KEYCLOAK_CLIENT_SECRET=<secret-from-keycloak-client>
    NEXTAUTH_SECRET=<create-using-openssl>
    NEXT_LOCAL_KEYCLOAK_URL="http://localhost:8080"
    NEXT_CONTAINER_KEYCLOAK_ENDPOINT="http://keycloak:8080"
    ```

2. **Update Configurations**
   Modify `next.config.mjs` and `docker-compose.dev.yml` according to your setup requirements.

## Usage
1. **Running the application**
    ```sh
    docker compose -f docker-compose.dev.yml up
    ```

2. **Access the application**
   Open your browser and navigate to `http://localhost:3000`


## Contributing
Contributions are welcome! Please fork this repository and submit pull requests.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
