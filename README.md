<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/njabulomajozi/beyond-frame">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Beyond Frame</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]]()

This web application, built using ReactJS and TypeScript, allows users to search for movies in an open API movie database. The app displays ten random movies on the home screen and includes a search bar for users to search for movies. Users can search for movies based on titles or keywords, and the search results are displayed in a list with movie posters and titles. When a movie is selected, a detailed view is shown with the movie's title, description, poster, actors, list of reviews, and keywords.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With
* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Tailwind][Tailwind]][Tailwind-url]
* [![ShadUI][ShadUI]][ShadUI-url]
* [![Lodash][Lodash]][Lodash-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* Node.js (v14.x or higher)
* npm (v6.x or higher)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/njabulomajozi/beyond-frame.git
   ```
2. Navigate to the project directory
    ```sh
   cd beyond-frame
   ```
3. Install ackages
   ```sh
   yarn
   ```
4. Start the development server
   ```sh
   yarn dev
   ```
5. Open your browser and navigate to ```http://localhost:3000``` to view the application

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

* On the home screen, you will see a list of 10 random movies.
* Use the search bar at the top of the screen to search for movies by title or keyword.
* Click on a movie to view its detailed information, including title, description, poster, actors, list of reviews, and keywords.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap
- MVP
  - Home Screen:
    - [x] Display 10 random movies on the home screen.
    - [x] Include a search bar at the top of the screen for users to search for movies.
  - Search Functionality:
    - [x] Implement search functionality that allows users to search for movies based on title or keywords.
    - [x] Display search results in a list with movie posters and titles.
  - Movie Detail Screen:
    - [x] Create a movie detail screen that shows detailed information about a selected movie.
    - [x] Display the movie's title, description, poster, actors, list of reviews, and keywords.
  - Browser Compatibility:
    - [ ] Ensure that the app runs smoothly on all major browsers (Chrome, Edge)
  - Business Logic Separation Development:
    - [ ] Develop a network business logic SDK in TypeScript that encapsulates the logic for fetching movie data from the API.
    - [ ] The SDK should be designed to be reusable in other React.js project and integrate seamlessly with a state manager solution.
    - [ ] Include functions for fetching random movies, searching for movies, and retrieving movie details.
  - State Manager Solution:
    - [ ] Integrate a state manager solution such as Redux or MobX to manage the application's state.
    - [ ] Use the state manager to manage global state, including movie data, search results, and selected movie details.
- Improvements
  - [ ] Cache results
- 2nd Version
  - [ ] Implement pagination for search results.
  - [ ] Add filters to the search functionality to narrow down results by genre, release year, etc.
  - [ ] Improve the user interface with more visually appealing components.
  - [ ] Add user authentication and the ability to save favorite movies.
  - [ ] Integrate with a social media platform to share movie recommendations.

See the [open issues](https://github.com/njabulomajozi/beyond-frame/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Njabulo - [LINKEDIN](https://www.linkedin.com/in/njabulomajozi) - hi@njabulomajozi.com

Project Link: [https://github.com/njabulomajozi/beyond-frame](https://github.com/njabulomajozi/beyond-frame)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/njabulomajozi/beyond-frame.svg?style=for-the-badge
[contributors-url]: https://github.com/njabulomajozi/beyond-frame/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/njabulomajozi/beyond-frame.svg?style=for-the-badge
[forks-url]: https://github.com/njabulomajozi/beyond-frame/network/members
[stars-shield]: https://img.shields.io/github/stars/njabulomajozi/beyond-frame.svg?style=for-the-badge
[stars-url]: https://github.com/njabulomajozi/beyond-frame/stargazers
[issues-shield]: https://img.shields.io/github/issues/njabulomajozi/beyond-frame.svg?style=for-the-badge
[issues-url]: https://github.com/njabulomajozi/beyond-frame/issues
[license-shield]: https://img.shields.io/github/license/njabulomajozi/beyond-frame.svg?style=for-the-badge
[license-url]: https://github.com/njabulomajozi/beyond-frame/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/njabulomajozi
[product-screenshot]: images/screenshot.png

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.pn
[TypeScript-url]: https://www.typescriptlang.org/
[Tailwind]: https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.pn
[Tailwind-url]: https://reactjs.org/
[ShadUI]: https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.pn
[ShadUI-url]: https://reactjs.org/
[Lodash]: https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.pn
[Lodash-url]: https://reactjs.org/
