# Women in Computing @ UCSD Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, clone the repository (or do `git pull` to get the latest changes).

This project uses Node v22.14.0. To check your Node version, run `node -v`. If you have another version installed, you can use `nvm` to switch to the correct Node version. To install nvm and get the right version of Node, you can follow this [guide](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/).

To switch to Node v22.14.0 after installing it using `nvm`, run
```bash
nvm use v22.14.0
```

Then, install the dependencies for the website using
```bash
npm install
```

## Development

To see changes you make locally, run
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Anything that is pushed to the `main` branch will be deployed onto `ucsdwic.github.io`. Before pushing to `main`, make sure the project builds properly by running the following command and making sure there are no errors.
```bash
npm run build
```
## Updating Board Members, Projects, and Sponsors
Board members are automatically updated when you update [/public/data/board_members.csv](/public/data/board_members.csv). Add their picture into [public/images/members](public/images/members). In the `image` section of CSV file, provide the path to their picture. Omit the `public` part of the path because the code assumes that all images and files are stored in the `public`folder.

To update the previous members section, update [public/data/previous_members.csv](public/data/previous_members.csv). Make sure to put the board members of the more recent years above the earlier years so the year order shows up properly on the website (e.g. put the 2025-2026 board above the 2024-2025 board in the CSV).

Similarly, you can add projects to the projects section by updating [public/data/projects.csv](public/data/projects.csv). This is the same for sponsors and BPC sponsors.

## Updating BPC Information

You can update BPC information [here](src/app/programs/page.tsx).

## Contact

Create a GitHub issue or contact Jenny (jznnylam@gmail dot com) if you have any questions!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
