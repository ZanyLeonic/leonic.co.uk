# leonic.co.uk

Source code for my personal portfolio website.

A live version can be found at https://leonic.co.uk.

## Prerequisites
This project uses [pnpm](https://pnpm.io), which instructions for installing can be found on their site.

## Development
For adding projects or features

1. Install project dependencies using `pnpm i`
2. Run the development server by running `pnpm dev`

### Adding additional projects
This is done by markdown files stored in `src/projects`.

The metadata of the project is stored in the frontmatter of the file, where the 
body of the file is used on the individual project page.

## Building
This site is fully static, so you can host this on any old HTTP server.

1. Install project dependencies using `pnpm i`
2. Run the build command by running `pnpm build`

The output can be found in the `dist` folder.

