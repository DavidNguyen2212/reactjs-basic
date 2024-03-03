import { useContext } from 'react';
import { AppContext } from '../App';
export const Homepage = (props) => {
    const {username} = useContext(AppContext)   // Cần cái gì chỉ định cái đó trong cặp {}
    return <h1>This is the Homepage of user {username}</h1>
}