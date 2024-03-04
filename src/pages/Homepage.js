import { useQuery } from '@tanstack/react-query'
import Axios from 'axios';
// react query không hẳn là mọi thứ, bạn cần lấy dữ liệu trước cho nó

export const Homepage = (props) => {
    // Bạn không cần tạo thêm state để chứa dữ liệu trả về
    // {queryKey: string array, queryFn: a Promise from fetch/axios.get}
    // Nếu bạn switch tab thì useQuery sẽ tự động refetch data!!

    const { isLoading, error, data, refetch} = useQuery({ //data : catFact để sd bí danh
        queryKey: ['repoData'],
        queryFn: () =>
        //   fetch("https://catfact.ninja/fact").then((res) =>
        //     res.json()
        //   ),
        Axios.get("https://catfact.ninja/fact").then((res) =>
            res.data
        ),
      })
    if (error) {
        return <div>Sorry, there is an error!</div>
    }
    if (isLoading) {
        return <div>PENDING...</div>
    }

    return (<h1>
        This is the Homepage of user <p>{data?.fact}</p> 
        <button onClick={refetch}>Update data</button>
        </h1>
    )
}
