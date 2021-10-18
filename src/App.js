import React, {useEffect, useState} from "react"
import './styles/App.css'
import PostList from "./components/PostList"
import PostFilter from "./components/PostFilter"
import axios from "axios"
import Pagination from './components/Pagination'

function App() {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [pagination, setPagination] = useState(0)
    const [selectValue, setSelectValue] = useState('Nothing')

    async function fetchPosts(page, search = '', select) {
        const response = await axios({
            url: 'https://backend-test-task.herokuapp.com/get-dogs',
            method: 'GET',
            headers: {page: page, search_data: search, select}
        })
        setPosts(response.data.dogs)
        setPagination(response.data.counter)
    }

    useEffect(() => {
        fetchPosts(page, search, selectValue)
    }, [])

    useEffect(() => {
        fetchPosts(page, search, selectValue)
    }, [page, search, selectValue])

    return (
        <div className="container">
            <PostFilter filter={search} setFilter={setSearch} select={selectValue} setSelect={setSelectValue}/>
            <PostList posts={posts} />
            <Pagination counter={pagination} setPage={setPage}/>
        </div>
    )
}

export default App;
