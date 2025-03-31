# Crypto Quote Monorepo

## 🚀 Configuración Inicial

### Prerrequisitos

Asegúrate de tener las siguientes herramientas instaladas en tu sistema:

- **Node.js** (v16 o superior)
- **Docker** y **Docker Compose**

### Pasos para la instalación

1. **Configurar el entorno**

   Renombra el archivo de variables de entorno para configurarlo:

   ```bash
   cp .env.example .env
   ```

   Después de renombrar el archivo, completa las variables vacías en el archivo .env:

   ```plaintext
   # Database Configuration
   DB_USER=postgres          # Usuario de PostgreSQL
   DB_PASSWORD=postgres      # Contraseña de PostgreSQL
   DB_NAME=crypto_quote      # Nombre de la base de datos
   DB_PORT=5432             # Puerto (ya configurado)
   DB_HOST=localhost        # Host (ya configurado)

   # Prisma Configuration
   DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"

   # JWT Configuration
   JWT_SECRET=your-secret-key    # Cambia esto por tu clave secreta
   ```

   > **Importante**:
   >
   > - Asegúrate de completar DB_USER, DB_PASSWORD, y DB_NAME con tus credenciales de PostgreSQL

2. **Instalar dependencias**

   Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

   ```bash
   npm install
   ```

3. **Levantar PostgreSQL con Docker**

   Utiliza Docker Compose para levantar la base de datos PostgreSQL:

   ```bash
   docker-compose up -d
   ```

4. **Configurar Prisma**

   - Genera el cliente de Prisma:

     ```bash
     npx prisma generate
     ```

   - Ejecuta las migraciones en la base de datos:

     ```bash
     npx prisma migrate deploy
     ```

5. **Iniciar la aplicación**

   Una vez configurado todo, puedes iniciar la aplicación con el siguiente comando:

   ```bash
   npx nx serve crypto-quote-monorepo
   ```

---

## 📊 Funcionalidades implementadas

### API de Cotización de Divisas (Fiat ⇄ Crypto)

Este proyecto implementa una API completa para la conversión entre monedas fiat y criptomonedas con las siguientes características:

#### Endpoints principales

1. **Crear una cotización**

   - **Método y Ruta:** `POST /quote`
   - **Descripción:** Genera una nueva cotización entre monedas
   - **Ejemplo de solicitud:**
     ```json
     {
       "amount": 1000000,
       "from": "ARS",
       "to": "ETH"
     }
     ```

2. **Consultar una cotización**
   - **Método y Ruta:** `GET /quote/:id`
   - **Descripción:** Recupera una cotización existente por su ID

#### Sistema de autenticación

La API implementa un sistema completo de autenticación con JWT:

1. **Registro de usuarios**

   - **Método y Ruta:** `POST /auth/register`

2. **Inicio de sesión**

   - **Método y Ruta:** `POST /auth/login`

3. **Protección de endpoints**
   - Todos los endpoints de cotización están protegidos mediante un Guard de NestJS que valida los tokens JWT
   - Se requiere incluir el token JWT en el encabezado Authorization de las solicitudes

### Integración con proveedor de precios

La API se integra con el proveedor de precios Cryptomkt para obtener tasas de cambio en tiempo real entre diferentes monedas. La integración se realiza mediante solicitudes HTTP a la API de Cryptomkt:

```
https://api.exchange.cryptomkt.com/api/3/public/price/rate?from={to}&to={from}
```

### Documentación de la API

La documentación completa de la API está disponible a través de Swagger UI en:

```
http://localhost:3000/v1/docs
```

Esta documentación incluye todos los endpoints, esquemas de datos, y ejemplos de solicitudes y respuestas.

---

## 🏗️ Arquitectura del proyecto

Este proyecto está estructurado como un monorepo utilizando Nx, lo que permite una organización modular y escalable del código. La arquitectura sigue una clara separación de responsabilidades:

### Estructura del monorepo

- **Aplicaciones (apps)**: Contiene la aplicación principal y potencialmente otras aplicaciones (como servicios microservicios)
- **Librerías (libs)**: Contiene el código compartido entre aplicaciones

### Organización del código por capas

- **Use Cases**: Implementa la lógica de negocio específica para cada funcionalidad

  - Encapsula las reglas y flujos de negocio
  - Orquesta las interacciones entre servicios y repositorios
  - Independiente de la infraestructura subyacente

- **Services**: Proporciona funcionalidades específicas y reutilizables

  - Implementa operaciones comunes y transversales
  - Gestiona integraciones con servicios externos (como Cryptomkt)
  - Ofrece abstracciones para operaciones complejas

- **Repositories**: Maneja el acceso y persistencia de datos
  - Implementa el patrón Repository para abstraer la capa de datos
  - Utiliza Prisma para interactuar con la base de datos PostgreSQL
  - Proporciona métodos para operaciones CRUD sobre las entidades

### Principios arquitectónicos aplicados

- **Clean Architecture**: Separación clara entre la lógica de negocio e infraestructura
- **Dependency Inversion**: Los componentes de alto nivel no dependen de los de bajo nivel
- **Single Responsibility**: Cada módulo tiene una única razón para cambiar
- **Interface Segregation**: Interfaces específicas para cada cliente

Esta arquitectura asegura que el sistema sea:

- **Modular**: Cada componente puede evolucionar independientemente
- **Testeable**: La separación de capas facilita las pruebas unitarias
- **Mantenible**: La organización clara reduce la complejidad del código
- **Escalable**: Nuevas funcionalidades se pueden agregar sin afectar el código existente

---

## 🧪 Pruebas

Para ejecutar las pruebas y generar el reporte de cobertura, usa:

```bash
npm run all:test
```

El proyecto incluye:

- Pruebas unitarias para los casos de uso y servicios
- Pruebas de integración para los endpoints de la API
- Mocks para simular la integración con proveedores externos

---

## 🤖 Uso de Inteligencia Artificial

Este proyecto ha integrado las siguientes herramientas de Inteligencia Artificial para optimizar el proceso de desarrollo:

### GitHub Copilot

- **Uso principal**: Autocompletado de código y generación de tests.
- **Aplicación**: Se utilizó para generar plantillas iniciales de servicios y controladores, así como para ayudar en la implementación de pruebas automatizadas.

---

## 📚 Documentación de Nx

## Tareas y ejecución

Para ejecutar el servidor de desarrollo de tu aplicación:

```bash
npx nx serve crypto-quote-monorepo
```

Para ver todos los objetivos disponibles para un proyecto, usa:

```bash
npx nx show project crypto-quote-monorepo
```

[Más sobre cómo ejecutar tareas en la documentación &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

---

## Instalar Nx Console

Nx Console es una extensión para tu editor que mejora tu experiencia de desarrollo. Te permite ejecutar tareas, generar código y mejora la autocompletación de código en tu IDE. Está disponible para **VSCode** e **IntelliJ**.

[Instalar Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
