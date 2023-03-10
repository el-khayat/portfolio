import TodoApp from '../assets/images/projects/todo-app.png'
import Travel  from '../assets/images/projects/traveltrip.png'
 const data = [
    {
        id : 1 ,
        subTitle: 'Featured Project',
        title: 'Todo App',
        descreption: 'My Todo List app is a simple and user-friendly task management tool built with React, '
        +'     Redux, JavaScript and SASS. It allows users to easily create, view,'
       +' and update their tasks and provides a clear overview'

       +' of what needs to be done. With the use of Redux, the app\'s state is managed efficiently,'
       +'  ensuring that the user experience is smooth and seamless. '
       +' The SASS styling adds a touch of elegance to the design and makes it visually appealing. '
       +' The app is built using modern JavaScript practices, making it lightweight and fast. Overall,'
       +' the app is designed to make task management easy and stress-free,'
       +' allowing users to focus on getting things done.',
       tools: ['React', 'Redux', 'javascript' , 'sass'],
       links: {
        githubLink: "https://github.com/el-khayat/todo-list",
        demoLink: "https://statuesque-cactus-8ebd18.netlify.app",
    },
    image: TodoApp,
    },
    {
        id : 2 ,
        subTitle: 'Featured Project',
        title: 'travel trip',
        descreption: 'It streamlines the search for available travel trip between cities, booking, and ticket purchase. It also simplifies trip organization. The administrator can add, delete, or modify trips.',
       tools: ['HTML', 'CSS', 'JAVASCRIPT' , 'PHP', 'MYSQL'],
       links: {
        githubLink: "https://github.com/el-khayat/agence-voyage",
        demoLink:   "http://travel-agency.infinityfreeapp.com",
    },
    image: Travel,
    }
]
export default  data;