# Messenger

This project is aimed at creating a messaging application with various features including authentication, registration, chat listing, message interface, user settings, and error pages.

A special class, Block, and EventBus have been developed to implement a component-based approach and client-side rendering. The HTTPTransport class is a wrapper around XMLHttpRequest that enables convenient request handling.

# Features

Authentication: Full authentication functionality including registration, login, and logout.
User Information Management: Ability to modify user data, change avatar, and update password.
Chat Functionality: Features for managing user chats including listing user chats, creating new chats, adding users to chats, and removing users from chats.

## Deploy link

[Dark messenger](https://darkmessenger.netlify.app/login)

## Prototypes

- [Log in](https://www.figma.com/file/A3TWZ9IwtPB9CpqfImKDo8/Messenger?type=design&node-id=121-4407&mode=design&t=5hkqfg2oWezh7Xzs-4)
- [Sign up](https://www.figma.com/file/A3TWZ9IwtPB9CpqfImKDo8/Messenger?type=design&node-id=121-4421&mode=design&t=5hkqfg2oWezh7Xzs-11)
- [Chat List and Messaging Interface](https://www.figma.com/file/A3TWZ9IwtPB9CpqfImKDo8/Messenger?type=design&node-id=121-4991&mode=design&t=5hkqfg2oWezh7Xzs-11)
- [User Settings](https://www.figma.com/file/A3TWZ9IwtPB9CpqfImKDo8/Messenger?type=design&node-id=121-5288&mode=design&t=5hkqfg2oWezh7Xzs-11)
- [Change password](https://www.figma.com/file/A3TWZ9IwtPB9CpqfImKDo8/Messenger?type=design&node-id=2112-1437&mode=design&t=5hkqfg2oWezh7Xzs-11)
- [404 Page](https://www.figma.com/file/A3TWZ9IwtPB9CpqfImKDo8/Messenger?type=design&node-id=2095-25&mode=design&t=5hkqfg2oWezh7Xzs-11)
- [5\*\* Page](https://www.figma.com/file/A3TWZ9IwtPB9CpqfImKDo8/Messenger?type=design&node-id=2095-58&mode=design&t=5hkqfg2oWezh7Xzs-11)

Prototype created using Figma.

## Technologies Used

- Typescript
- Handlebars
- Vite
- PostCSS
- Eslint
- Stylelint

## Commands

To start the project:

```bash
npm run start
```

To start the project for develop:

```bash
npm run dev
```

To build the project:

```bash
npm run build
```

To preview the project:

```bash
npm run preview
```

To start the eslint:

```bash
eslint --ext .js,.ts src
```

To fix the eslint error:

```bash
eslint --ext .js,.ts src --fix
```

To start and fix the stylelint error:

```bash
stylelint \"src/**/*.css\" --fix
```
