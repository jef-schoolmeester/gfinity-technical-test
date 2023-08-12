# gfinity-technical-test

The following document provides a glimpse into my thought process and approach while tackling the technical test.

## Development Process

### Setup

- Created a Nuxt application using yarn.
- Linked the local project to a GitHub repository.
- Explored project files to understand Vue basics.

### Data Fetching

Fetching data stands as the initial phase of this project. Data fetching serves as the bedrock upon which components, layouts, and features are constructed. By prioritizing data fetching, I will simplify my future and prevent re-writing functions or components because they don't match the data.

- Started with data fetching after setting up the project.
- Integrated Sanity for data retrieval.
- Used a [\_type == "fifaCard"][0] request to fetch a FIFA card's data.
- Pasted the fetched data into a JSON file for reference.
- Created TypeScript interfaces to define required data structures.
- Tested data fetching for all cards.
- Implemented a card route with a slug parameter and tested it.
- Developed a basic list with links to individual card pages.

### Layout

The early implementation of the layout was driven by its presence on the two pages of the application. Its static nature across pages provided an accessible entry point to grasp Vue's and Nuxt's fundamentals.

- Implemented the layout featuring the NavBar.
- Followed a mobile-first approach for simplicity.

### Card Page

The initial focus on the card page was driven by its static nature, even when utilizing fetched data. This choice enabled a gradual step-by-step learning approach to Vue and Nuxt, ensuring comprehension as complexities unfolded.
I adopted a mobile-first strategy because it usually minimizes code.

- Fetched data using a route slug and learned about passing props.
- Created a backlink to the main page.
- Styled the mobile design and progressed to desktop styling.
- Consulted Figma for sizes and colors.
- Ensured design responsiveness across various screen sizes.

### Main Page

Unlike the card page, the mobile design resembles the desktop layout, making the mobile-first strategy useless. I approached this by starting with a static list, paving the way for subsequent sorting functionality.

- Initiated data fetching and displayed unstyled content.
- Divided the list into multiple components for readability.
- Implemented and styled each component.

### List Sorting

The list sorting feature looked like the most challenging aspect. To simplify the process, I began by grasping state management and event emission by transforming the table labels into dynamic components and saving the sort property and type (ascending or descending).
This foundational step paved the way for implementing the sorting functions and updating the list.

- Started with a simple counter component to grasp Vue and state management.
- Split sorting into handling label clicks and actual sorting.

#### Label Clicks

- Tested click events with console.log() to verify functionality.
- Managed sort state on each label click with specific rules:
- - Change to clicked label ASC if different from the current sort label.
- - Change to clicked label DESC if same as current sort label.
- - Revert to default sorting (Name, asc) if clicked on the same label with DESC sorting.
- Updated label icons based on the current sort.

#### Sorting FIFA Cards

- Managed the FIFA cards array in a state for real-time sorting updates.
- Addressed four sorting cases: string property, average score, statistic, and work rate.
- Developed sorting functions and sub-functions for code reuse.

### Testing

- Identified components/functions for testing.
- Tried to be as exhaustive as possible without having multiple tests that cover the same case.

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
