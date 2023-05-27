


const mcuTvShows = [
  {
    id: 1,
    title: "Agent Carter",
    release_date: "January 6, 2015",
    last_aired_date: "March 1, 2016",
    number_of_seasons: 2,
    overview: "Agent Carter follows the story of Peggy Carter, an agent of the Strategic Scientific Reserve (SSR), as she balances administrative work and secret missions while trying to navigate post-World War II America.",
    cover_url: "https://example.com/agent-carter-cover.jpg",
    trailer_url: "https://example.com/agent-carter-trailer.mp4",
    directed_by: "Various Directors"
  },
  {
    id: 2,
    title: "Agents of S.H.I.E.L.D.",
    release_date: "September 24, 2013",
    last_aired_date: "August 12, 2020",
    number_of_seasons: 7,
    overview: "Agents of S.H.I.E.L.D. follows the story of a team of S.H.I.E.L.D. agents led by Phil Coulson as they investigate and handle strange cases and threats to humanity.",
    cover_url: "https://example.com/agents-of-shield-cover.jpg",
    trailer_url: "https://example.com/agents-of-shield-trailer.mp4",
    directed_by: "Various Directors"
  },
  {
    id: 3,
    title: "Daredevil",
    release_date: "April 10, 2015",
    last_aired_date: "October 19, 2018",
    number_of_seasons: 3,
    overview: "Daredevil tells the story of Matt Murdock, a blind lawyer by day and a vigilante crime-fighter with heightened senses by night, as he fights against corruption and crime in Hell's Kitchen, New York City.",
    cover_url: "https://example.com/daredevil-cover.jpg",
    trailer_url: "https://example.com/daredevil-trailer.mp4",
    directed_by: "Various Directors"
  },
  {
    id: 4,
    title: "Jessica Jones",
    release_date: "November 20, 2015",
    last_aired_date: "June 14, 2019",
    number_of_seasons: 3,
    overview: "Jessica Jones follows the story of the titular character, a former superhero turned private investigator, as she deals with her own personal demons and takes on cases involving people with extraordinary abilities in New York City.",
    cover_url: "https://example.com/jessica-jones-cover.jpg",
    trailer_url: "https://example.com/jessica-jones-trailer.mp4",
    directed_by: "Various Directors"
  },
  {
    id: 5,
    title: "Luke Cage",
    release_date: "September 30, 2016",
    last_aired_date: "June 22, 2018",
    number_of_seasons: 2,
    overview: "Luke Cage tells the story of Carl Lucas, a former convict with superhuman strength and unbreakable skin, as he fights crime and corruption in Harlem, New York City.",
    cover_url: "https://example.com/luke-cage-cover.jpg",
    trailer_url: "https://example.com/luke-cage-trailer.mp4",
    directed_by: "Various Directors"
  },
  {
    id: 6,
    title: "Iron Fist",
    release_date: "March 17, 2017",
    last_aired_date: "September 7, 2018",
    number_of_seasons: 2,
    overview: "Iron Fist follows the story of Danny Rand, a martial arts expert with the ability to call upon the power of the Iron Fist, as he returns to New York City to reclaim his family's company from corrupt forces.",
    cover_url: "https://example.com/iron-fist-cover.jpg",
    trailer_url: "https://example.com/iron-fist-trailer.mp4",
    directed_by: "Various Directors"
  },
  {
    id: 7,
    title: "The Defenders",
    release_date: "August 18, 2017",
    last_aired_date: "August 18, 2017",
    number_of_seasons: 1,
    overview: "The Defenders brings together Daredevil, Jessica Jones, Luke Cage, and Iron Fist as they join forces to save New York City from a common enemy known as The Hand.",
    cover_url: "https://example.com/the-defenders-cover.jpg",
    trailer_url: "https://example.com/the-defenders-trailer.mp4",
    directed_by: "Various Directors"
  },
  {
    id: 8,
    title: "The Punisher",
    release_date: "November 17, 2017",
    last_aired_date: "January 18, 2019",
    number_of_seasons: 2,
    overview: "The Punisher follows the story of Frank Castle, a former Marine turned vigilante, as he seeks revenge against those responsible for the murder of his family while uncovering a deeper conspiracy.",
    cover_url: "https://example.com/the-punisher-cover.jpg",
    trailer_url: "https://example.com/the-punisher-trailer.mp4",
    directed_by: "Various Directors"
  },
  {
    id: 9,
    title: "Runaways",
    release_date: "November 21, 2017",
    last_aired_date: "December 13, 2019",
    number_of_seasons: 3,
    overview: "Runaways follows a group of teenagers who discover that their parents are part of a criminal organization known as The Pride, and they must band together to stop their parents and save the world.",
    cover_url: "https://example.com/runaways-cover.jpg",
    trailer_url: "https://example.com/runaways-trailer.mp4",
    directed_by: "Various Directors"
  },
  {
    id: 10,
    title: "Cloak & Dagger",
    release_date: "June 7, 2018",
    last_aired_date: "May 30, 2019",
    number_of_seasons: 2,
    overview: "Cloak & Dagger follows the story of Tandy Bowen and Tyrone Johnson, two teenagers from different backgrounds who develop superpowers and form a romantic relationship while dealing with the challenges of their abilities.",
    cover_url: "https://example.com/cloak-and-dagger-cover.jpg",
    trailer_url: "https://example.com/cloak-and-dagger-trailer.mp4",
    directed_by: "Various Directors"
  },
  {
    id: 11,
    title: "WandaVision",
    release_date: "January 15, 2021",
    last_aired_date: "March 5, 2021",
    number_of_seasons: 1,
    overview: "WandaVision follows the story of Wanda Maximoff and Vision, as they live idealized suburban lives that begin to unravel, blending classic sitcoms with the Marvel Cinematic Universe.",
    cover_url: "https://example.com/wandavision-cover.jpg",
    trailer_url: "https://example.com/wandavision-trailer.mp4",
    directed_by: "Various Directors"
  },
  {
    id: 12,
    title: "The Falcon and the Winter Soldier",
    release_date: "March 19, 2021",
    last_aired_date: "April 23, 2021",
    number_of_seasons: 1,
    overview: "The Falcon and the Winter Soldier follows the story of Sam Wilson and Bucky Barnes as they team up in a global adventure that tests their abilities and their patience.",
    cover_url: "https://example.com/falcon-winter-soldier-cover.jpg",
    trailer_url: "https://example.com/falcon-winter-soldier-trailer.mp4",
    directed_by: "Various Directors"
  },
  {
    id: 13,
    title: "Loki",
    release_date: "June 9, 2021",
    last_aired_date: "July 14, 2021",
    number_of_seasons: 1,
    overview: "Loki follows the story of the God of Mischief as he steps out of his brother's shadow and embarks on a journey through time and space.",
    cover_url: "https://example.com/loki-cover.jpg",
    trailer_url: "https://example.com/loki-trailer.mp4",
    directed_by: "Various Directors"
  },
  {
    id: 14,
    title: "Hawkeye",
    release_date: "November 24, 2021",
    last_aired_date: "December 22, 2021",
    number_of_seasons: 1,
    overview: "Hawkeye follows the story of Clint Barton as he passes the mantle of Hawkeye to a young archer named Kate Bishop, and they both embark on an adventure in New York City during the holiday season.",
    cover_url: "https://example.com/hawkeye-cover.jpg",
    trailer_url: "https://example.com/hawkeye-trailer.mp4",
    directed_by: "Various Directors"
  },
  {
    id: 18,
    title: "She-Hulk: Attorney at Law",
    release_date: "2022-09-01",
    last_aired_date: "2022-10-20",
    overview: "Jennifer Walters, a lawyer and cousin of Bruce Banner, gains her own Hulk powers after receiving a blood transfusion from him. Balancing her career as an attorney and her superhero alter ego, She-Hulk defends the rights of both humans and superhumans alike.",
    number_of_seasons: 1,
    cover_url: "https://example.com/she-hulk-cover.jpg",
    trailer_url: "https://example.com/she-hulk-trailer.mp4",
    directed_by: "Creator 2"
  },
  {
    id: 16,
    title: "Moon Knight",
    release_date: "2022-03-30",
    last_aired_date: "2022-05-13",
    overview: "Moon Knight, a vigilante suffering from dissociative identity disorder, struggles with his fractured mind while combating crime in New York City.",
    number_of_seasons: 1,
    cover_url: "https://example.com/moon-knight-cover.jpg",
    trailer_url: "https://example.com/moon-knight-trailer.mp4",
    directed_by: "Director 6"
  },
  {
    id: 17,
    title: "Ms. Marvel",
    release_date: "2022-06-03",
    last_aired_date: "2022-08-12",
    overview: "Kamala Khan, a Pakistani-American teenager with shape-shifting abilities, discovers her powers and becomes the superhero Ms. Marvel, using her abilities to protect her community.",
    number_of_seasons: 1,
    cover_url: "https://example.com/ms-marvel-cover.jpg",
    trailer_url: "https://example.com/ms-marvel-trailer.mp4",
    directed_by: "Director 7"
  },
  {
    id: 18,
    title: "What If...?",
    release_date: "2021-08-11",
    last_aired_date: "2021-10-06",
    overview: "What If...? explores alternate realities in the Marvel Cinematic Universe, featuring different heroes taking on unique roles and facing unexpected challenges. The animated anthology series presents intriguing and imaginative stories that question what could have happened if key events unfolded differently.",
    number_of_seasons: 1,
    cover_url: "https://example.com/what-if-cover.jpg",
    trailer_url: "https://example.com/what-if-trailer.mp4",
    created_by: "Creator 3"
  },
  {
    id: 19,
    title: "Inhumans",
    release_date: "2017-09-01",
    last_aired_date: "2017-11-10",
    overview: "Inhumans follows the story of the Inhuman royal family, led by Black Bolt, as they escape to Hawaii after a military coup on their home planet. Struggling to maintain their identity and protect themselves from outside threats, the Inhumans must navigate the complexities of the human world while also dealing with internal conflicts and power struggles.",
    number_of_seasons: 1,
    cover_url: "https://example.com/inhumans-cover.jpg",
    trailer_url: "https://example.com/inhumans-trailer.mp4",
    created_by: "Creator 4"
  }
];

