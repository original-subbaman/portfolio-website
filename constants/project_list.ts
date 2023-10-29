import { ProjectType } from "@/constants/project_type";
import Project from "@/models/Project";
import { title } from "process";
import { TechType } from "./tech_type";

export const projectList = [
  new Project(
    ProjectType.Android,
    "Trello Clone",
    "https://github.com/original-subbaman/ProjeManag",
    "https://drive.google.com/file/d/1lm8ZfgX3FcFTvSIwiH-YZIGRLS7Vy9UV/view?usp=drive_link",
    "",
    "A Trello Clone created in Android/Kotlin with Firebase backend." +
      "Users can create a board, add tasks, assign tasks, and collaborate with other users.",
    "/board.jpg",
    ["Android", "Kotlin", "Firebase"]
  ),
  new Project(
    ProjectType.Android,
    "Tidings",
    "https://github.com/original-subbaman/Tidings",

    "https://drive.google.com/file/d/1cQ3-vbUZ3V0UxXpHRqaUpU_HNlrWK_p7/view?usp=drive_link",
    "",
    "A news app created using NewsAPI (newsapi.org) implementing clean MVVM architecture." +
      "Retrofit for HTTP requests" +
      "Room for data persistence" +
      "Hilt for Dependency Injection" +
      "Kotlin Coroutines for async programming",
    "/tiding_home.jpg",

    ["Android", "Kotlin"]
  ),
  new Project(
    ProjectType.Web,
    "PMMUSA School Website",
    "https://github.com/original-subbaman/Tidings",
    "",
    "https://pmmusa.in",
    "A school website created for a school in rural West Sikkim using React and Bootstrap.",
    "/pmmusa_website.png",
    [TechType.react, "Javascript", TechType.bootstrap]
  ),
  new Project(
    ProjectType.Flutter,
    "TapTap",
    "https://github.com/original-subbaman/typing_game",
    "https://drive.google.com/file/d/1JO-lAoAvYWod_7Gi8uLdVEro0uA0fbyy/view?usp=share_link",
    "",
    "A school website created for a school in rural West SikkimA typing game where you can check how fast you can type on your phone. Your WPM and Accuracy will be recorded locally. Your best WPM and Accuracy score will be uploaded to a online leaderboard. You can check your rank and how you compare to other people on this leaderboard.",
    "/taptap_home.jpg",
    ["Flutter", "Dart", "Firebase"]
  ),
  new Project(
    ProjectType.Flutter,
    "7 Min Protest App",
    "https://github.com/original-subbaman/7_min_protest_app",
    "https://drive.google.com/file/d/1TT7xiM2OxWRlhwv5vI_HXEcov7Aen1P8/view?usp=share_link",
    "",
    "This app aims to create a civic platform to amplify youth voices. The app aims to livestream protests in hopes of bringing like-minded individuals together by-passing geographical/national boundaries.",
    "/protest_home.jpg",
    ["Flutter", "Dart", "Firebase"]
  ),
];
