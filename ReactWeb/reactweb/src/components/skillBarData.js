import { FaCss3, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { TbCSharp } from 'react-icons/tb';

const items = [
    {
        id: '1',
        icon: <FaHtml5 />,
        skill: 'HTML5',
        percentage: '70%',
    },

    {
        id: '2',
        icon: <FaCss3 />,
        skill: 'CSS3',
        percentage: '70%',
    },

    {
        id: '3',
        icon: <FaReact />,
        skill: 'REACT',
        percentage: '40%',
    },

    {
        id: '4',
        icon: <FaJava />,
        skill: 'JAVA',
        percentage: '40%',
    },

    {
        id: '5',
        icon: <AiOutlineConsoleSql />,
        skill: 'SQL',
        percentage: '50%',
    },

    {
        id: '6',
        icon: <TbCSharp />,
        skill: 'C#',
        percentage: '30%',
    },

];

export default items;