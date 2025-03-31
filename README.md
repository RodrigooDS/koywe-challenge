# Crypto Quote Monorepo

## 📌 Índice

- [Crypto Quote Monorepo](#crypto-quote-monorepo)
  - [📌 Índice](#-índice)
  - [🚀 Configuración Inicial](#-configuración-inicial)
    - [Prerrequisitos](#prerrequisitos)
    - [Instalación](#instalación)
  - [📊 Funcionalidades Implementadas](#-funcionalidades-implementadas)
    - [Endpoints Principales](#endpoints-principales)
    - [Sistema de Autenticación](#sistema-de-autenticación)
    - [Integración con Cryptomkt](#integración-con-cryptomkt)
    - [Documentación de la APIs](#documentación-de-la-apis)
  - [🏗️ Arquitectura del Proyecto](#️-arquitectura-del-proyecto)
    - [Estructura](#estructura)
    - [Capas principales](#capas-principales)
    - [Principios aplicados](#principios-aplicados)
  - [🧪 Pruebas](#-pruebas)
  - [🤖 Uso de Inteligencia Artificial](#-uso-de-inteligencia-artificial)
    - [GitHub Copilot](#github-copilot)
  - [📚 Documentación de Nx](#-documentación-de-nx)
    - [Instalar Nx Console](#instalar-nx-console)

---

## 🚀 Configuración Inicial

### Prerrequisitos

- **Node.js** (v16 o superior)
- **Docker** y **Docker Compose**

### Instalación

1. **Configurar el entorno**

   ```bash
   cp .env.example .env
   ```

   Completa las variables en `.env` según tu configuración.

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Levantar PostgreSQL con Docker**

   ```bash
   docker-compose up -d
   ```

4. **Configurar Prisma**

   ```bash
   npx prisma generate
   npx prisma migrate deploy
   ```

5. **Iniciar la aplicación**
   ```bash
   npx nx serve crypto-quote-monorepo
   ```

---

## 📊 Funcionalidades Implementadas

- **API de Cotización de Divisas (Fiat ⇄ Crypto)**
  - [Endpoints Principales](#endpoints-principales)
  - [Sistema de Autenticación](#sistema-de-autenticacion)
  - [Integración con Cryptomkt](#integracion-con-cryptomkt)

### Endpoints Principales

- **Crear una cotización** (`POST /quote`)
- **Consultar una cotización** (`GET /quote/:id`)

### Sistema de Autenticación

- **Registro de usuarios** (`POST /auth/register`)
- **Inicio de sesión** (`POST /auth/login`)
- **Protección con JWT**

### Integración con Cryptomkt

API utilizada: `https://api.exchange.cryptomkt.com/api/3/public/price/rate?from={to}&to={from}`

### Documentación de la APIs

Disponible en Swagger UI:

```
http://localhost:3000/v1/docs
```

---

## 🏗️ Arquitectura del Proyecto

El proyecto está estructurado como un monorepo con **Nx**, siguiendo principios de **Clean Architecture**:

### Estructura

- **Aplicaciones (apps)**: Contiene la aplicación principal y posibles microservicios.
- **Librerías (libs)**: Código compartido entre aplicaciones.

### Capas principales

- **Use Cases**: Lógica de negocio y orquestación.
- **Services**: Integraciones y funcionalidades reutilizables.
- **Repositories**: Persistencia de datos con Prisma.

### Principios aplicados

✅ Clean Architecture  
✅ Dependency Inversion  
✅ Single Responsibility  
✅ Interface Segregation

---

## 🧪 Pruebas

Ejecutar todas las pruebas:

```bash
npm run all:test
```

Incluye:

- ✅ Pruebas unitarias
- ✅ Mocks para proveedores externos

---

## 🤖 Uso de Inteligencia Artificial

### GitHub Copilot

- **Uso principal**: Autocompletado y generación de tests.
- **Aplicación**: Generación de plantillas y pruebas automatizadas.

---

## 📚 Documentación de Nx

### Instalar Nx Console

Extensión recomendada para mejorar el desarrollo en **VSCode** e **IntelliJ**.

[Instalar Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
