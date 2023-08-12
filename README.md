# gfinity-technical-test

The following document provides an insightful glimpse into my thought process and approach while tackling the technical test.

## Thinking Process

### Setup

- Created a Nuxt application using yarn.
- Linked the local project to a GitHub repository.
- Explored project files to understand Vue basics.

### Data Fetching

- Started with data fetching after setting up the project.
- Integrated Sanity for data retrieval.
- Used a [\_type == "fifaCard"][0] request to fetch a FIFA card's data.
- Pasted the fetched data into a JSON file for reference.
- Created TypeScript interfaces to define required data structures.
- Tested data fetching for all cards.
- Implemented a card route with a slug parameter and tested it.
- Developed a basic list with links to individual card pages.

### Layout

- Implemented a basic layout featuring the NavBar.
- Followed a mobile-first approach for simplicity.

### Card Page

- Focused on the card page as it's simpler than the list with sorting.
- Fetched data using a route slug and learned about passing props.
- Created a backlink to the main page.
- Opted for a mobile-first approach.
- Styled the mobile design and progressed to desktop styling.
- Consulted Figma for sizes and colors.
- Planned to create a custom Tailwind config in a real-world scenario.
- Ensured design responsiveness across various screen sizes.

### Main Page

- Skipped the mobile first approach due to similar table layout.
- Initiated data fetching and displayed unstyled content.
- Divided the list into multiple components for readability.
- Implemented and styled each component.

### List Sorting

- Started with a simple counter component to grasp Vue and state management.
- Split sorting into handling label clicks and actual sorting.

#### Label Clicks

- Tested click events with console.log() to verify functionality.
- Managed sort state on each label click with specific rules:
- - Change to clicked label ASC if different from current sort label.
- - Change to clicked label DESC if same as current sort label.
- - Revert to default sorting (Name, asc) if clicked on same label with DESC sorting.
- Updated label icons based on current sort.

#### Sorting FIFA Cards

- Managed the FIFA cards array in a state for real-time sorting updates.
- Addressed four sorting cases: string property, average score, statistic, work rate.
- Developed sorting functions and sub-functions for code reuse.

### Testing

- Identified components/functions for testing.
- Strived for thoroughness within given time constraints.
- Tried to be as exhaustive as possible without having multiple tests that covers the same case.

### Final Tweaks

- Scrutinized design file for discrepancies.
- Observed custom scrollbar in card list and implemented accordingly.

## Note:

Throughout the development process, I employed Tailwind CSS's default color palette, which closely aligned with the original design colors. In a real-world scenario, I would update Tailwind's configuration to precisely match the provided design's color scheme.
Also, to avoid taking too much time with mocking datasets, I prioritized the test coverage on the smaller components/functions.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
