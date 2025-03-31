# Crypto Quote Monorepo

## 🚀 Configuración Inicial

### Prerequisitos

Asegúrate de tener las siguientes herramientas instaladas en tu sistema:

- **Node.js** (v16 o superior)
- **Docker** y **Docker Compose**

### Pasos para la instalación

1. **Configurar el entorno**

   Renombra el archivo de variables de entorno para configurarlo:

   ```bash
   mv .env.txt .env
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
   > - Cambia el JWT_SECRET por una clave segura

2. **Instalar dependencias**

   Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

   ```bash
   npm install
   ```

3. **Levantar PostgreSQL con Docker**

   Utiliza Docker Compose para levantar la base de datos PostgreSQL:

   ```bash
   docker-compose up -d postgres
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

## 🧪 Pruebas

Para ejecutar las pruebas y generar el reporte de cobertura, usa:

```bash
npm run all:test
```

---

## 🤖 Uso de Inteligencia Artificial

Este proyecto ha integrado las siguientes herramientas de Inteligencia Artificial para optimizar el proceso de desarrollo:

### GitHub Copilot

- **Uso principal**: Autocompletado de código y generación de tests.

---

## 📚 Documentación de Nx

---

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

## Agregar nuevos proyectos

Puedes agregar nuevos proyectos a tu espacio de trabajo de manera sencilla utilizando los [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) y sus generadores de código.

Para generar una nueva aplicación, usa:

```bash
npx nx g @nx/nest:app demo
```

Para generar una nueva librería, usa:

```bash
npx nx g @nx/node:lib mylib
```

Consulta la lista de plugins instalados con:

```bash
npx nx list
```

Luego, ejecuta `npx nx list <plugin-name>` para explorar las capacidades específicas de un plugin. También puedes [instalar Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) para explorar plugins y generadores directamente desde tu IDE.

[Más sobre Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Explora el registro de plugins &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

---

## Instalar Nx Console

Nx Console es una extensión para tu editor que mejora tu experiencia de desarrollo. Te permite ejecutar tareas, generar código y mejora la autocompletación de código en tu IDE. Está disponible para **VSCode** e **IntelliJ**.

[Instalar Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

---

## Enlaces útiles

- [Más sobre esta configuración de espacio de trabajo](https://nx.dev/nx-api/nest?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Aprende sobre Nx en CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Publicar paquetes con Nx](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [¿Qué son los Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

Únete a la comunidad de Nx:

- [Discord](https://go.nx.dev/community)
- [Síguenos en X](https://twitter.com/nxdevtools) o [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Canal de YouTube](https://www.youtube.com/@nxdevtools)
- [Nuestro blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
