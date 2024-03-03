import { ChangeProfile } from "../components/changeProfile"
import { AppContext } from "../App"
import { useContext } from "react"
export const Profile = () => {
    const {username} = useContext(AppContext)
    return (
    <div>
        This is the Profile of user {username}
        <ChangeProfile />
    </div>
    )
}