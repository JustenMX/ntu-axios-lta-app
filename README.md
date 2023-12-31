## NTU SCTP in Software Engineering

## Module 2.8 Assignment

### Brief

React web application that provides real-time access to traffic camera images from various locations around Singapore. With a user-friendly interface, users can easily view the current traffic conditions and monitor specific areas of interest. The application leverages the latest data and updates from traffic cameras strategically placed across the city to provide accurate and up-to-date visuals.

### Axios

Research and consume public APIs listed at [GovData](https://data.gov.sg/).

### Description

- Study the API collection.
- Draft a simple UI layout and component diagramming (you don't have to submit this).
- Attempt consuming the API with React and Axios.
- Set up a simple GET request, query the API for data and display it on a React app

### Additional Implementations

- manipulate the lats data passed by the API
- convert the timestamp string passed to readable
- CRUD applications in Watch List component

### Currently Working on

- [x] Fix component re-rendering and empty div appearing on page (bug)
- [x] Validation of UX behaviors
- [x] toast alert prompts and replace the current alert prompt implementations
- [ ] When add to WatchList, watchList to call back the API and display the filtered live updates based on the watchlist state updates
- [ ] Traffic Updates to display the exact location in street name - as of now its a link to google map using lats passed in the URL

---

### Credits

[Land Transport Authority - Traffic Images](https://beta.data.gov.sg/datasets/354/view)

<img src="https://d33wubrfki0l68.cloudfront.net/17db5b93c652e8401162c9c49bd337dad3433f74/6780e/images/ogp-logo-spacing.png"  width="20%" height="20%">
<!-- 
<img src="https://www.developer.tech.gov.sg/assets/img/Datagovsg-NewHeaderBanner.png" height="10%"> -->
