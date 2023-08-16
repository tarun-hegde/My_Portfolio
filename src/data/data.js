import Sevak from '../assets/projects/Sevak.jpg'
import Formify from '../assets/projects/FORMIFY.png'
import Edge from '../assets/projects/edge.jpg'
import co from '../assets/projects/club.png'
import ta from '../assets/projects/favicon.png'
import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMailchimp
} from "react-icons/si";
export const data=[
    {
        id:1,
        name:"Sevak",
        image:Sevak,
        github:"https://github.com/Sevak-Official/Sevak",
        text:"Sevak is a one stop application for the patients to find the best doctors for their problems in a locality which they have never been to.",
        stack: [
            {
              id: "1",
              name: "Django",
              icon: SiDjango 
            },
            {
              id: "2",
              name: "Bootstrap",
              icon: SiBootstrap
            },
            {
              id: "3",
              name: "JavaScript",
              icon: SiJavascript
            },
            {
              id: "4",
              name: "HTML ",
              icon: SiHtml5
            },
            {
              id: "5",
              name: "CSS",
              icon: SiCss3

            },
          ],
    },
    {
        id:2,
        name:"Formify",
        image:Formify,
        github:"https://github.com/tarun-hegde/Formify",
        text:"Formify is a Feedback Form Application in which the user receives and sends the email of the feedback given by him/her after submitting it to the organisation.",
        stack: [
            {
              id: "1",
              name: "Django",
              icon: SiDjango

            },
            {
              id: "2",
              name: "Bootstrap",
              icon: SiBootstrap
            },
            {
              id: "3",
              name: "SMTP",
              icon: SiMailchimp
            },
          ],
    },
    {
        id:3,
        name:"ClubApp",
        image:co,
        github:"https://github.com/tarun-hegde/SocialMediaManagement_Clubs",
        text:"ClubApp is a Full-Stack Web Application where student can list down all their College Clubs  tasks/subtasks specifying deadlines.",
        stack: [
            {
              id: "1",
              name: "Django",
              icon: SiDjango
            },
            {
              id: "2",
              name: "Bootstrap",
              icon: SiBootstrap

            },
            {
              id: "3",
              name: "JavaScript",
              icon: SiJavascript
            },
            {
              id: "4",
              name: "HTML ",
              icon: SiHtml5
            },
            {
              id: "5",
              name: "CSS",
              icon: SiCss3
            },
          ],
    },
    {
        id:4,
        name:"Edge",
        image:Edge,
        github:"https://github.com/tarun-hegde/Edge",
        text:"Edge is a platform that would help students to prioritize their daily tasks in a TO-DO List format. It makes use of the POMODORO Technique so that students can increase their productivity and efficiency.",
        stack: [
            {
              id: "1",
              name: "Django",
              icon: SiDjango
            },
            {
              id: "2",
              name: "Bootstrap",
              icon: SiBootstrap
            },
            {
              id: "3",
              name: "JavaScript",
              icon: SiJavascript
            },
            {
              id: "4",
              name: "HTML ",
              icon: SiHtml5
            },
            {
              id: "5",
              name: "CSS",
              icon: SiCss3
            },
          ],
    },
    {
      id:5,
      name:"Portfolio",
      image:ta,
      github:"https://github.com/tarun-hegde/Portfolio",
      text:"My Portfolio Website.",
      stack: [
          {
            id: "1",
            name: "ReactJS",
            icon: SiReact
          },
          {
            id: "2",
            name: "TailwindCss",
            icon: SiTailwindcss
          },
        ],
  },


]