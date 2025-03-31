# Crypto Quote Monorepo

## 🚀 Configuración Inicial

### Prerequisitos

- Node.js (v16 o superior)
- Docker y Docker Compose

### Pasos para la instalación

1. **Configuración del entorno**

   ```bash
   # Renombrar el archivo de variables de entorno
   .env.txt a .env
   ```

2. **Instalación de dependencias**

   ```bash
   npm install
   ```

3. **Levantar servicios con Docker**

   ```bash
   docker-compose up -d
   ```

4. **Configuración de Prisma**

   ```bash
   # Generar el cliente de Prisma
   npx prisma generate

   # Ejecutar las migraciones
   npx prisma migrate deploy
   ```

5. **Iniciar la aplicación**
   ```bash
   npx nx serve crypto-quote-monorepo
   ```

## 🧪 Pruebas

Para ejecutar las pruebas:

```bash
# Pruebas unitarias
nx test --passWithNoTests

# Pruebas e2e
nx e2e --passWithNoTests

# Coverage
nx test --coverage --passWithNoTests
```

## 🤖 Uso de Inteligencia Artificial

Este proyecto ha utilizado las siguientes herramientas de IA:

### GitHub Copilot

- **Uso principal**: Autocompletado de código y generación de tests
- **Beneficios obtenidos**:
  - Aceleración en la escritura de código repetitivo
  - Sugerencias inteligentes para pruebas unitarias
  - Ayuda en la documentación del código

Todo el código generado por IA ha sido revisado y entendido completamente por el equipo de desarrollo, asegurando que cumple con los estándares de calidad y las mejores prácticas.

## 📚 Documentación de Nx

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/nest?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/sa8SJbZXxA)

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve crypto-quote-monorepo
```

To create a production bundle:

```sh
npx nx build crypto-quote-monorepo
```

To see all available targets to run for a project, run:

```sh
npx nx show project crypto-quote-monorepo
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/nest:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/node:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/nest?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
